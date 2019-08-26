/* eslint-disable no-unused-vars */
import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    WINDY,
    SNOW,
    FOG
} from "../../constants/weather";

const data = {
    temperature: 15,
    weatherState: SNOW,
    humidity: 14,
    wind: "20 m/s"
};
// Componente funcional
const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <div>
                <Location city={"Alicante"} />
            </div>
            <div>
                <WeatherData data={data} />
            </div>
        </div>
    );
};

export default WeatherLocation;
