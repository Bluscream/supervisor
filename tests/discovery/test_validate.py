"""Test discovery schema validation and migration."""

from supervisor.discovery.validate import SCHEMA_DISCOVERY


def test_schema_discovery_migration():
    """Test that old 'addon' key is migrated to 'app' in discovery config."""
    result = SCHEMA_DISCOVERY(
        [
            {
                "uuid": "a" * 32,
                "addon": "core_mosquitto",
                "service": "mqtt",
                "config": {"host": "localhost"},
            }
        ]
    )
    assert len(result) == 1
    assert result[0]["app"] == "core_mosquitto"
    assert "addon" not in result[0]


def test_schema_discovery_app_unchanged():
    """Test that new 'app' key in discovery config passes through unchanged."""
    result = SCHEMA_DISCOVERY(
        [
            {
                "uuid": "b" * 32,
                "app": "core_mosquitto",
                "service": "mqtt",
                "config": {"host": "localhost"},
            }
        ]
    )
    assert len(result) == 1
    assert result[0]["app"] == "core_mosquitto"
