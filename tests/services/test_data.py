"""Test services data."""

from supervisor.services.modules.mqtt import SCHEMA_CONFIG_MQTT
from supervisor.services.modules.mysql import SCHEMA_CONFIG_MYSQL


def test_data_initial(coresys):
    """Test initial data for services."""
    assert coresys.services.data.mqtt == {}
    assert coresys.services.data.mysql == {}


def test_schema_config_mqtt_migration():
    """Test that old 'addon' key is migrated to 'app' in MQTT config."""
    result = SCHEMA_CONFIG_MQTT(
        {"host": "mqtt.local", "port": 1883, "addon": "core_mosquitto"}
    )
    assert result["app"] == "core_mosquitto"
    assert "addon" not in result


def test_schema_config_mqtt_app_unchanged():
    """Test that new 'app' key in MQTT config passes through unchanged."""
    result = SCHEMA_CONFIG_MQTT(
        {"host": "mqtt.local", "port": 1883, "app": "core_mosquitto"}
    )
    assert result["app"] == "core_mosquitto"


def test_schema_config_mysql_migration():
    """Test that old 'addon' key is migrated to 'app' in MySQL config."""
    result = SCHEMA_CONFIG_MYSQL(
        {"host": "db.local", "port": 3306, "addon": "core_mariadb"}
    )
    assert result["app"] == "core_mariadb"
    assert "addon" not in result


def test_schema_config_mysql_app_unchanged():
    """Test that new 'app' key in MySQL config passes through unchanged."""
    result = SCHEMA_CONFIG_MYSQL(
        {"host": "db.local", "port": 3306, "app": "core_mariadb"}
    )
    assert result["app"] == "core_mariadb"
