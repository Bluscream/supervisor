"""Validate services schema."""

import voluptuous as vol

from ..const import ATTR_APP, ATTR_CONFIG, ATTR_DISCOVERY, ATTR_SERVICE, ATTR_UUID
from ..utils.validate import schema_or
from ..validate import migrate_addon_to_app, uuid_match

SCHEMA_DISCOVERY = vol.Schema(
    [
        vol.All(
            # 'addon' field deprecated as of 2026.05, replaced by 'app'
            migrate_addon_to_app,
            vol.Schema(
                {
                    vol.Required(ATTR_UUID): uuid_match,
                    vol.Required(ATTR_APP): str,
                    vol.Required(ATTR_SERVICE): str,
                    vol.Required(ATTR_CONFIG): vol.Maybe(dict),
                },
                extra=vol.REMOVE_EXTRA,
            ),
        )
    ]
)

SCHEMA_DISCOVERY_CONFIG = vol.Schema(
    {vol.Optional(ATTR_DISCOVERY, default=list): schema_or(SCHEMA_DISCOVERY)},
    extra=vol.REMOVE_EXTRA,
)
