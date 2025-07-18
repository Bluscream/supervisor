"""Init file for Supervisor auth/SSO RESTful API."""

import asyncio
from collections.abc import Awaitable
import logging
from typing import Any, cast

from aiohttp import BasicAuth, web
from aiohttp.hdrs import AUTHORIZATION, CONTENT_TYPE, WWW_AUTHENTICATE
from aiohttp.web import FileField
from aiohttp.web_exceptions import HTTPUnauthorized
from multidict import MultiDictProxy
import voluptuous as vol

from ..addons.addon import Addon
from ..const import ATTR_NAME, ATTR_PASSWORD, ATTR_USERNAME, REQUEST_FROM
from ..coresys import CoreSysAttributes
from ..exceptions import APIForbidden
from .const import (
    ATTR_GROUP_IDS,
    ATTR_IS_ACTIVE,
    ATTR_IS_OWNER,
    ATTR_LOCAL_ONLY,
    ATTR_USERS,
    CONTENT_TYPE_JSON,
    CONTENT_TYPE_URL,
)
from .utils import api_process, api_validate, json_loads

_LOGGER: logging.Logger = logging.getLogger(__name__)

SCHEMA_PASSWORD_RESET = vol.Schema(
    {
        vol.Required(ATTR_USERNAME): str,
        vol.Required(ATTR_PASSWORD): str,
    }
)

REALM_HEADER: dict[str, str] = {
    WWW_AUTHENTICATE: 'Basic realm="Home Assistant Authentication"'
}


class APIAuth(CoreSysAttributes):
    """Handle RESTful API for auth functions."""

    def _process_basic(self, request: web.Request, addon: Addon) -> Awaitable[bool]:
        """Process login request with basic auth.

        Return a coroutine.
        """
        auth = BasicAuth.decode(request.headers[AUTHORIZATION])
        return self.sys_auth.check_login(addon, auth.login, auth.password)

    def _process_dict(
        self,
        request: web.Request,
        addon: Addon,
        data: dict[str, Any] | MultiDictProxy[str | bytes | FileField],
    ) -> Awaitable[bool]:
        """Process login with dict data.

        Return a coroutine.
        """
        username = data.get("username") or data.get("user")
        password = data.get("password")

        # Test that we did receive strings and not something else, raise if so
        try:
            _ = username.encode and password.encode  # type: ignore
        except AttributeError:
            raise HTTPUnauthorized(headers=REALM_HEADER) from None

        return self.sys_auth.check_login(
            addon, cast(str, username), cast(str, password)
        )

    @api_process
    async def auth(self, request: web.Request) -> bool:
        """Process login request."""
        addon = request[REQUEST_FROM]

        if not isinstance(addon, Addon) or not addon.access_auth_api:
            raise APIForbidden("Can't use Home Assistant auth!")

        # BasicAuth
        if AUTHORIZATION in request.headers:
            if not await self._process_basic(request, addon):
                raise HTTPUnauthorized(headers=REALM_HEADER)
            return True

        # Json
        if request.headers.get(CONTENT_TYPE) == CONTENT_TYPE_JSON:
            data = await request.json(loads=json_loads)
            if not await self._process_dict(request, addon, data):
                raise HTTPUnauthorized()
            return True

        # URL encoded
        if request.headers.get(CONTENT_TYPE) == CONTENT_TYPE_URL:
            data = await request.post()
            if not await self._process_dict(request, addon, data):
                raise HTTPUnauthorized()
            return True

        # Advertise Basic authentication by default
        raise HTTPUnauthorized(headers=REALM_HEADER)

    @api_process
    async def reset(self, request: web.Request) -> None:
        """Process reset password request."""
        body: dict[str, str] = await api_validate(SCHEMA_PASSWORD_RESET, request)
        await asyncio.shield(
            self.sys_auth.change_password(body[ATTR_USERNAME], body[ATTR_PASSWORD])
        )

    @api_process
    async def cache(self, request: web.Request) -> None:
        """Process cache reset request."""
        await self.sys_auth.reset_data()

    @api_process
    async def list_users(self, request: web.Request) -> dict[str, list[dict[str, Any]]]:
        """List users on the Home Assistant instance."""
        return {
            ATTR_USERS: [
                {
                    ATTR_USERNAME: user[ATTR_USERNAME],
                    ATTR_NAME: user[ATTR_NAME],
                    ATTR_IS_OWNER: user[ATTR_IS_OWNER],
                    ATTR_IS_ACTIVE: user[ATTR_IS_ACTIVE],
                    ATTR_LOCAL_ONLY: user[ATTR_LOCAL_ONLY],
                    ATTR_GROUP_IDS: user[ATTR_GROUP_IDS],
                }
                for user in await self.sys_auth.list_users()
                if user[ATTR_USERNAME]
            ]
        }
