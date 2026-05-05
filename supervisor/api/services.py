"""Init file for Supervisor network RESTful API."""

from typing import Any

from aiohttp import web

from ..const import (
    ATTR_AVAILABLE,
    ATTR_PROVIDERS,
    ATTR_SERVICES,
    ATTR_SLUG,
    PROVIDE_SERVICE,
    REQUEST_FROM,
)
from ..coresys import CoreSysAttributes
from ..exceptions import APIError, APIForbidden, APINotFound
from ..services.const import ATTR_ADDON, ATTR_APP
from .utils import api_process, api_validate


class APIServices(CoreSysAttributes):
    """Handle RESTful API for services functions."""

    def _extract_service(self, request):
        """Return service, throw an exception if it doesn't exist."""
        service = self.sys_services.get(request.match_info.get("service"))
        if not service:
            raise APINotFound("Service does not exist")

        return service

    @api_process
    async def list_services(self, request: web.Request) -> dict[str, Any]:
        """Show register services."""
        services = []
        for service in self.sys_services.list_services:
            services.append(
                {
                    ATTR_SLUG: service.slug,
                    ATTR_AVAILABLE: service.enabled,
                    ATTR_PROVIDERS: service.providers,
                }
            )

        return {ATTR_SERVICES: services}

    @api_process
    async def set_service(self, request: web.Request) -> None:
        """Write data into a service."""
        service = self._extract_service(request)
        body = await api_validate(service.schema, request)
        app = request[REQUEST_FROM]

        _check_access(request, service.slug)
        await service.set_service_data(app, body)

    @api_process
    async def get_service(self, request: web.Request) -> dict[str, Any]:
        """Read data for a service (v2: uses "app" key)."""
        service = self._extract_service(request)

        # Access
        _check_access(request, service.slug)

        if not service.enabled:
            raise APIError("Service not enabled")
        return dict(service.get_service_data())

    @api_process
    async def get_service_v1(self, request: web.Request) -> dict[str, Any]:
        """Read data for a service (v1: uses "addon" key)."""
        service = self._extract_service(request)

        # Access
        _check_access(request, service.slug)

        if not service.enabled:
            raise APIError("Service not enabled")
        data = dict(service.get_service_data())
        if ATTR_APP in data:
            data[ATTR_ADDON] = data.pop(ATTR_APP)
        return data

    @api_process
    async def del_service(self, request: web.Request) -> None:
        """Delete data into a service."""
        service = self._extract_service(request)
        app = request[REQUEST_FROM]

        # Access
        _check_access(request, service.slug, True)
        await service.del_service_data(app)


def _check_access(request, service, provide=False):
    """Raise error if the rights are wrong."""
    app = request[REQUEST_FROM]
    if not app.services_role.get(service):
        raise APIForbidden(f"No access to {service} service!")

    if provide and app.services_role.get(service) != PROVIDE_SERVICE:
        raise APIForbidden(f"No access to write {service} service!")
