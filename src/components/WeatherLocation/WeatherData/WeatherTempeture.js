import React from "react";
import WeatherIcons from "react-weathericons";
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    WINDY,
    SNOW,
    FOG
} from "../../../constants/weather";
import PropTypes from "prop-types";
import "./styles.css";

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [WINDY]: "windy",
    [SNOW]: "snow",
    [FOG]: "day-fog"
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
            <span className="temperature">{`${temperature} `}</span>
            <span className="temperatureType">{`º C`}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
