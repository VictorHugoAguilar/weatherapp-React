/* eslint-disable no-unused-vars */
import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTempeture";
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    WINDY,
    SNOW,
    FOG
} from "../../../constants/weather";
import "./styles.css";

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;

    return (
        <div className="weatherDataCont">
            <WeatherTemperature
                temperature={temperature}
                weatherState={weatherState}
            />
            <WeatherExtraInfo huminity={humidity} wind={wind} />
        </div>
    );
};

export default WeatherData;
