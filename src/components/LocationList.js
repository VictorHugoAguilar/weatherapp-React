import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import "./styles.css";

const LocationList = ({ cities, onSelectedLocation }) => {
    // pasaremos la ciudad que viene del array a la funcion y esta nos devolvera la ciudad
    // y el indice de la ciudad
    // Utilizamos map para recorrer el array en cada iteneracion pasamos una city del array
    // a la funcion que setea la ciudad en el componente

    const hanldeWeatherLocationClick = city => {
        //console.log(city);
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponents = cities =>
        cities.map((city, index) => (
            <WeatherLocation
                city={city}
                key={index}
                onWeatherLocationClick={() => hanldeWeatherLocationClick(city)}
            />
        ));

    return <div className="locationList">{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
};
export default LocationList;
