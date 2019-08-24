import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

// Componente funcional
const WeatherLocation = () => {
    return (
        <div>
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
