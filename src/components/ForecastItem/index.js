import React from "react";
import WeatherData from "../WeatherLocation/WeatherData";
import PropTypes from "prop-types";

const ForecastItem = ({ weekDay, hour, data }) => {
    return (
        <div className="Item">
            <div>
                {weekDay} Hora:{hour}hs
            </div>
            <div>
                <WeatherData data={data} />
            </div>
        </div>
    );
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastItem;
