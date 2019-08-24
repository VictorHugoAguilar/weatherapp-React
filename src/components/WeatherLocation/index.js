import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css'

// Componente funcional
const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <div>
                <Location city={"Alicante"} />
            </div>
            <div>
                <WeatherData />
            </div>
        </div>
    );
};

export default WeatherLocation;
