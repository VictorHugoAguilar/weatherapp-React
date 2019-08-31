import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";

// pasaremos la ciudad que viene del array a la funcion y esta nos devolvera la ciudad
// y el indice de la ciudad
const setCityAndIndex = (city, index) => <WeatherLocation city={city} key={index} />;

// Utilizamos map para recorrer el array en cada iteneracion pasamos una city del array 
// a la funcion que setea la ciudad en el componente 
const strToComponents = cities => cities.map(setCityAndIndex);

const LocationList = ({ cities }) => {
    // console.log(cities)
    return <div>{strToComponents(cities)}</div>;
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired
};
export default LocationList;
