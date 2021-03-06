/* eslint-disable no-unused-vars */
import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTempeture";
import "./styles.css";

const WeatherData = ({ data }) => {
    const { temperature, weatherState, humidity, wind } = data;

    return (
        <div className="weatherDataCont">
            <div className="weatherTempConte">
                <WeatherTemperature
                    temperature={temperature}
                    weatherState={weatherState}
                />
            </div>
            <div className="weatherExtraConte">
                <WeatherExtraInfo huminity={humidity} wind={wind} />
            </div>
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};
export default WeatherData;
