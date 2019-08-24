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
} from "../constants/weather";

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [WINDY]: "windy",
    [SNOW]: "snow",
    [FOG]: "day-fog"
};

const getWeatherIcon = weaterState => {
    const icon = icons[weaterState];
    if (icon) return <WeatherIcons name={icon} size="2x" />;
    else return <WeatherIcons name={icons[SUN]} size="2x" />;
};

const WheaterTemperature = props => {
    const { temperature, weatherState } = props;

    return (
        <div>
            {getWeatherIcon(weatherState)} <span>{`${temperature} º C`}</span>
        </div>
    );
};

export default WheaterTemperature;
