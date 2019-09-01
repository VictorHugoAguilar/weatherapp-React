import React from "react";
import WeatherData from "../WeatherLocation/WeatherData";
import PropTypes from "prop-types";
import "./styles.css";

const ForecastItem = ({ weekDay, hour, data }) => {
    return (
        <div className="Item">
            <div>
                <h4>{weekDay} - Hora: {hour}hs</h4>
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
