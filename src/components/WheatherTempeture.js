import React from "react";
import WeatherIcons from "react-weathericons";

const icons = {
    sunny: "day-sunny",
    fog: "day-fog"
};

const getWeatherIcon = weaterState => {
    const icon = icons[weaterState];
    if (icon)
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />;
    
};

const WheaterTemperature = props => {
    const { temperature, weatherState } = props;

    return (
        <div>
            {getWeatherIcon(weatherState)}{' '}
            <span>{`${temperature} º C`}</span>
        </div>
    );
};

export default WheaterTemperature;
