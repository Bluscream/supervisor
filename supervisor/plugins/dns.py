"""Home Assistant dns plugin.

Code: https://github.com/home-assistant/plugin-dns
"""

import asyncio
from contextlib import suppress
import errno
from ipaddress import IPv4Address
import logging
from pathlib import Path

import attr
from awesomeversion import AwesomeVersion
import jinja2
import voluptuous as vol

from ..bus import EventListener
from ..const import ATTR_SERVERS, DNS_SUFFIX, BusEvent, LogLevel
from ..coresys import CoreSys
from ..dbus.const import MulticastProtocolEnabled
from ..docker.const import ContainerState
from ..docker.dns import DockerDNS
from ..docker.monitor import DockerContainerStateEvent
from ..docker.stats import DockerStats
from ..exceptions import (
    ConfigurationFileError,
    CoreDNSError,
    CoreDNSJobError,
    CoreDNSUpdateError,
    DockerError,
    PluginError,
)
from ..jobs.const import JobExecutionLimit
from ..jobs.decorator import Job
from ..resolution.const import ContextType, IssueType, SuggestionType, UnhealthyReason
from ..utils.json import write_json_file
from ..utils.sentry import async_capture_exception
from ..validate import dns_url
from .base import PluginBase
from .const import (
    ATTR_FALLBACK,
    FILE_HASSIO_DNS,
    PLUGIN_UPDATE_CONDITIONS,
    WATCHDOG_THROTTLE_MAX_CALLS,
    WATCHDOG_THROTTLE_PERIOD,
)
from .validate import SCHEMA_DNS_CONFIG

_LOGGER: logging.Logger = logging.getLogger(__name__)

# pylint: disable=no-member
HOSTS_TMPL: Path = Path(__file__).parents[1].joinpath("data/hosts.tmpl")
RESOLV_TMPL: Path = Path(__file__).parents[1].joinpath("data/resolv.tmpl")
# pylint: enable=no-member
HOST_RESOLV: Path = Path("/etc/resolv.conf")


@attr.s
class HostEntry:
    """Single entry in hosts."""

    ip_address: IPv4Address = attr.ib()
    names: list[str] = attr.ib()


class PluginDns(PluginBase):
    """Home Assistant core object for handle it."""

    def __init__(self, coresys: CoreSys):
        """Initialize hass object."""
        super().__init__(FILE_HASSIO_DNS, SCHEMA_DNS_CONFIG)
        self.slug = "dns"
        self.coresys: CoreSys = coresys
        self.instance: DockerDNS = DockerDNS(coresys)
        self._resolv_template: jinja2.Template | None = None
        self._hosts_template: jinja2.Template | None = None

        self._hosts: list[HostEntry] = []
        self._loop: bool = False
        self._cached_locals: list[str] | None = None

        # Debouncing system for rapid local changes
        self._locals_changed_handle: asyncio.TimerHandle | None = None
        self._restart_after_locals_change_handle: asyncio.Task | None = None
        self._connectivity_check_listener: EventListener | None = None

    @property
    def hosts(self) -> Path:
        """Return Path to corefile."""
        return Path(self.sys_config.path_dns, "hosts")

    @property
    def coredns_config(self) -> Path:
        """Return Path to coredns config file."""
        return Path(self.sys_config.path_dns, "coredns.json")

    @property
    def locals(self) -> list[str]:
        """Return list of local system DNS servers."""
        if self._cached_locals is None:
            self._cached_locals = self._compute_locals()
        return self._cached_locals

    def _compute_locals(self) -> list[str]:
        """Compute list of local system DNS servers."""
        servers: list[str] = []
        for server in [
            f"dns://{server!s}" for server in self.sys_host.network.dns_servers
        ]:
            with suppress(vol.Invalid):
                servers.append(dns_url(server))

        return servers

    async def _on_dns_container_running(self, event: DockerContainerStateEvent) -> None:
        """Handle DNS container state change to running and trigger connectivity check."""
        if event.name == self.instance.name and event.state == ContainerState.RUNNING:
            # Wait before CoreDNS actually becomes available
            await asyncio.sleep(5)

            _LOGGER.debug("CoreDNS started, checking connectivity")
            await self.sys_supervisor.check_connectivity()

    async def _restart_dns_after_locals_change(self) -> None:
        """Restart DNS after a debounced delay for local changes."""
        old_locals = self._cached_locals
        new_locals = self._compute_locals()
        if old_locals == new_locals:
            return

        _LOGGER.debug("DNS locals changed from %s to %s", old_locals, new_locals)
        self._cached_locals = new_locals
        if not await self.instance.is_running():
            return

        await self.restart()
        self._restart_after_locals_change_handle = None

    def _trigger_restart_dns_after_locals_change(self) -> None:
        """Trigger a restart of DNS after local changes."""
        # Cancel existing restart task if any
        if self._restart_after_locals_change_handle:
            self._restart_after_locals_change_handle.cancel()

        self._restart_after_locals_change_handle = self.sys_create_task(
            self._restart_dns_after_locals_change()
        )
        self._locals_changed_handle = None

    def notify_locals_changed(self) -> None:
        """Schedule a debounced DNS restart for local changes."""
        # Cancel existing timer if any
        if self._locals_changed_handle:
            self._locals_changed_handle.cancel()

        # Schedule new timer with 1 second delay
        self._locals_changed_handle = self.sys_call_later(
            1.0, self._trigger_restart_dns_after_locals_change
        )

    @property
    def servers(self) -> list[str]:
        """Return list of DNS servers."""
        return self._data[ATTR_SERVERS]

    @servers.setter
    def servers(self, value: list[str]) -> None:
        """Return list of DNS servers."""
        self._data[ATTR_SERVERS] = value

    @property
    def default_image(self) -> str:
        """Return default image for dns plugin."""
        if self.sys_updater.image_dns:
            return self.sys_updater.image_dns
        return super().default_image

    @property
    def latest_version(self) -> AwesomeVersion | None:
        """Return latest version of CoreDNS."""
        return self.sys_updater.version_dns

    @property
    def mdns(self) -> bool:
        """MDNS hostnames can be resolved."""
        return self.sys_dbus.resolved.multicast_dns in [
            MulticastProtocolEnabled.YES,
            MulticastProtocolEnabled.RESOLVE,
        ]

    @property
    def llmnr(self) -> bool:
        """LLMNR hostnames can be resolved."""
        return self.sys_dbus.resolved.llmnr in [
            MulticastProtocolEnabled.YES,
            MulticastProtocolEnabled.RESOLVE,
        ]

    @property
    def fallback(self) -> bool:
        """Fallback DNS enabled."""
        return self._data[ATTR_FALLBACK]

    @fallback.setter
    def fallback(self, value: bool) -> None:
        """Set fallback DNS enabled."""
        self._data[ATTR_FALLBACK] = value

    @property
    def hosts_template(self) -> jinja2.Template:
        """Get hosts jinja template."""
        if not self._hosts_template:
            raise RuntimeError("Hosts template not set!")
        return self._hosts_template

    @property
    def resolv_template(self) -> jinja2.Template:
        """Get resolv jinja template."""
        if not self._resolv_template:
            raise RuntimeError("Resolv template not set!")
        return self._resolv_template

    async def load(self) -> None:
        """Load DNS setup."""
        # Initialize CoreDNS Template
        try:
            self._resolv_template = jinja2.Template(
                await self.sys_run_in_executor(RESOLV_TMPL.read_text, encoding="utf-8")
            )
        except OSError as err:
            if err.errno == errno.EBADMSG:
                self.sys_resolution.add_unhealthy_reason(
                    UnhealthyReason.OSERROR_BAD_MESSAGE
                )
            _LOGGER.error("Can't read resolve.tmpl: %s", err)

        try:
            self._hosts_template = jinja2.Template(
                await self.sys_run_in_executor(HOSTS_TMPL.read_text, encoding="utf-8")
            )
        except OSError as err:
            if err.errno == errno.EBADMSG:
                self.sys_resolution.add_unhealthy_reason(
                    UnhealthyReason.OSERROR_BAD_MESSAGE
                )
            _LOGGER.error("Can't read hosts.tmpl: %s", err)

        await self._init_hosts()

        # Register Docker event listener for connectivity checks
        if not self._connectivity_check_listener:
            self._connectivity_check_listener = self.sys_bus.register_event(
                BusEvent.DOCKER_CONTAINER_STATE_CHANGE, self._on_dns_container_running
            )

        await super().load()

        # Update supervisor
        # Resolv template should always be set but just in case don't fail load
        if self._resolv_template:
            await self._write_resolv(HOST_RESOLV)

        # Reinitializing aiohttp.ClientSession after DNS setup makes sure that
        # aiodns is using the right DNS servers (see #5857).
        # At this point it should be fairly safe to replace the session since
        # we only use the session synchronously during setup and not thorugh the
        # API which previously caused issues (see #5851).
        await self.coresys.init_websession()

    async def install(self) -> None:
        """Install CoreDNS."""
        await super().install()

        # Init Hosts
        await self.write_hosts()

    @Job(
        name="plugin_dns_update",
        conditions=PLUGIN_UPDATE_CONDITIONS,
        on_condition=CoreDNSJobError,
    )
    async def update(self, version: AwesomeVersion | None = None) -> None:
        """Update CoreDNS plugin."""
        try:
            await super().update(version)
        except (DockerError, PluginError) as err:
            raise CoreDNSUpdateError("CoreDNS update failed", _LOGGER.error) from err

    async def restart(self) -> None:
        """Restart CoreDNS plugin."""
        await self._write_config()
        _LOGGER.info("Restarting CoreDNS plugin")
        try:
            await self.instance.restart()
        except DockerError as err:
            raise CoreDNSError("Can't restart CoreDNS plugin", _LOGGER.error) from err

    async def start(self) -> None:
        """Run CoreDNS."""
        await self._write_config()

        # Start Instance
        _LOGGER.info("Starting CoreDNS plugin")
        try:
            await self.instance.run()
        except DockerError as err:
            raise CoreDNSError("Can't start CoreDNS plugin", _LOGGER.error) from err

    async def stop(self) -> None:
        """Stop CoreDNS."""
        # Cancel any pending locals change timer
        if self._locals_changed_handle:
            self._locals_changed_handle.cancel()
            self._locals_changed_handle = None

        # Wait for any pending restart before stopping
        if self._restart_after_locals_change_handle:
            self._restart_after_locals_change_handle.cancel()
            self._restart_after_locals_change_handle = None

        _LOGGER.info("Stopping CoreDNS plugin")
        try:
            await self.instance.stop()
        except DockerError as err:
            raise CoreDNSError("Can't stop CoreDNS plugin", _LOGGER.error) from err

    async def reset(self) -> None:
        """Reset DNS and hosts."""
        # Reset manually defined DNS
        self.servers.clear()
        self.fallback = True
        await self.save_data()

        # Resets hosts
        with suppress(OSError):
            self.hosts.unlink()
        await self._init_hosts()

        # Reset loop protection
        self._loop = False

        await self.sys_addons.sync_dns()

    async def watchdog_container(self, event: DockerContainerStateEvent) -> None:
        """Check for loop on failure before processing state change event."""
        if event.name == self.instance.name and event.state == ContainerState.FAILED:
            await self.loop_detection()

        return await super().watchdog_container(event)

    @Job(
        name="plugin_dns_restart_after_problem",
        limit=JobExecutionLimit.THROTTLE_RATE_LIMIT,
        throttle_period=WATCHDOG_THROTTLE_PERIOD,
        throttle_max_calls=WATCHDOG_THROTTLE_MAX_CALLS,
        on_condition=CoreDNSJobError,
    )
    async def _restart_after_problem(self, state: ContainerState):
        """Restart unhealthy or failed plugin."""
        return await super()._restart_after_problem(state)

    async def loop_detection(self) -> None:
        """Check if there was a loop found."""
        log = await self.instance.logs()

        # Check the log for loop plugin output
        if b"plugin/loop: Loop" in log:
            _LOGGER.error("Detected a DNS loop in local Network!")
            self._loop = True
            self.sys_resolution.create_issue(
                IssueType.DNS_LOOP,
                ContextType.PLUGIN,
                reference=self.slug,
                suggestions=[SuggestionType.EXECUTE_RESET],
            )
        else:
            self._loop = False

    async def _write_config(self) -> None:
        """Write CoreDNS config."""
        debug: bool = self.sys_config.logging == LogLevel.DEBUG
        dns_servers: list[str] = []
        dns_locals: list[str] = []

        # Prepare DNS serverlist: Prio 1 Manual, Prio 2 Local, Prio 3 Fallback
        if not self._loop:
            dns_servers = self.servers
            dns_locals = self.locals
        else:
            _LOGGER.warning("Ignoring user DNS settings because of loop")

        # Print some usefully debug data
        _LOGGER.debug(
            "config-dns = %s, local-dns = %s , backup-dns = %s / debug: %s",
            dns_servers,
            dns_locals,
            "CloudFlare DoT" if self.fallback else "DISABLED",
            debug,
        )

        # Write config to plugin
        try:
            await self.sys_run_in_executor(
                write_json_file,
                self.coredns_config,
                {
                    "servers": dns_servers,
                    "locals": dns_locals,
                    "fallback": self.fallback,
                    "debug": debug,
                },
            )
        except ConfigurationFileError as err:
            raise CoreDNSError(
                f"Can't update coredns config: {err}", _LOGGER.error
            ) from err

    async def _init_hosts(self) -> None:
        """Import hosts entry."""
        # Generate Default
        await asyncio.gather(
            self.add_host(IPv4Address("127.0.0.1"), ["localhost"], write=False),
            self.add_host(
                self.sys_docker.network.supervisor,
                ["hassio", "supervisor"],
                write=False,
            ),
            self.add_host(
                self.sys_docker.network.gateway,
                ["homeassistant", "home-assistant"],
                write=False,
            ),
            self.add_host(self.sys_docker.network.dns, ["dns"], write=False),
            self.add_host(self.sys_docker.network.observer, ["observer"], write=False),
        )

    async def write_hosts(self) -> None:
        """Write hosts from memory to file."""
        # Generate config file
        data = self.hosts_template.render(entries=self._hosts)

        try:
            await self.sys_run_in_executor(
                self.hosts.write_text, data, encoding="utf-8"
            )
        except OSError as err:
            if err.errno == errno.EBADMSG:
                self.sys_resolution.add_unhealthy_reason(
                    UnhealthyReason.OSERROR_BAD_MESSAGE
                )
            raise CoreDNSError(f"Can't update hosts: {err}", _LOGGER.error) from err

    async def add_host(
        self, ipv4: IPv4Address, names: list[str], write: bool = True
    ) -> None:
        """Add a new host entry."""
        if not ipv4 or ipv4 == IPv4Address("0.0.0.0"):
            return

        hostnames: list[str] = []
        for name in names:
            hostnames.append(name)
            hostnames.append(f"{name}.{DNS_SUFFIX}")

        # Generate host entry
        entry = HostEntry(ipv4, hostnames)
        old = self._search_host(hostnames)

        if old:
            _LOGGER.debug("Update Host entry %s -> %s", ipv4, hostnames)
            self._hosts.remove(old)
        else:
            _LOGGER.debug("Add Host entry %s -> %s", ipv4, hostnames)
        self._hosts.append(entry)

        # Update hosts file
        if write:
            await self.write_hosts()

    async def delete_host(self, host: str, write: bool = True) -> None:
        """Remove a entry from hosts."""
        entry = self._search_host([host])
        if not entry:
            return

        _LOGGER.debug("Removing host entry %s - %s", entry.ip_address, entry.names)
        self._hosts.remove(entry)

        # Update hosts file
        if write:
            await self.write_hosts()

    def _search_host(self, names: list[str]) -> HostEntry | None:
        """Search a host entry."""
        for entry in self._hosts:
            for name in names:
                if name not in entry.names:
                    continue
                return entry
        return None

    async def stats(self) -> DockerStats:
        """Return stats of CoreDNS."""
        try:
            return await self.instance.stats()
        except DockerError as err:
            raise CoreDNSError() from err

    async def repair(self) -> None:
        """Repair CoreDNS plugin."""
        if await self.instance.exists():
            return

        _LOGGER.info("Repairing CoreDNS %s", self.version)
        try:
            await self.instance.install(self.version)
        except DockerError as err:
            _LOGGER.error("Repair of CoreDNS failed")
            await async_capture_exception(err)

    async def _write_resolv(self, resolv_conf: Path) -> None:
        """Update/Write resolv.conf file."""
        nameservers = [str(self.sys_docker.network.dns), "127.0.0.11"]

        # Read resolv config
        data = self.resolv_template.render(servers=nameservers)

        # Write config back to resolv
        try:
            await self.sys_run_in_executor(resolv_conf.write_text, data)
        except OSError as err:
            if err.errno == errno.EBADMSG:
                self.sys_resolution.add_unhealthy_reason(
                    UnhealthyReason.OSERROR_BAD_MESSAGE
                )
            _LOGGER.warning("Can't write/update %s: %s", resolv_conf, err)
            return

        _LOGGER.info("Updated %s", resolv_conf)
