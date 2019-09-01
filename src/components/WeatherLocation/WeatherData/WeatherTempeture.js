import React from "react";
import WeatherIcons from "react-weathericons";
import {
    CLOUD,
    RAIN,
    SUN,
    SNOW,
    THUNDER,
    DRIZZLE
} from "../../../constants/weather";
import PropTypes from "prop-types";
import "./styles.css";

const icons = {
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
    [THUNDER]: "thunderstorm",
    [DRIZZLE]: "showers",
};

const sizeIcon = "4x";

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return (
            <WeatherIcons className="wicon" name={icons[SUN]} size={sizeIcon} />
        );
};

const WeatherTemperature = props => {
    const { temperature, weatherState } = props;

    return (
        <div className="weatherTempCont">
            {getWeatherIcon(weatherState)}
            <div className="tempDisplay">
            <span className="temperature">{`${temperature.toFixed(0)} `}</span>
            <span className="temperatureType">{`º C`}</span>
            </div>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
