/* eslint-disable no-unused-vars */
import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import "./styles.css";
// Importamos spinner
import CircularProgress from "@material-ui/core/CircularProgress";

/* 
import transformWeather from "../services/transformWeather";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";
handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather)
            .then(resolve => {
                return resolve.json();
            })
            .then(data => {
                // console.log(data);
                const newWether = transformWeather(data);
                this.setState({
                    data: newWether
                });
            })
            .catch(error => {
                console.log(error);
            });
        // console.log("Actualizado");
    };


    class WeatherLocation{
        constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };
    }}

    ComponentDidMount() {
        // console.log("componentDidMount");
        this.handleUpdateClick();
    }
*/

// Class component funcional
const WeatherLocation = ({ city, data, onWeatherLocationClick }) => (
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <div>
            <Location city={city} />
        </div>
        <div>{data ? <WeatherData data={data} /> : <CircularProgress />}</div>
    </div>
);

WeatherLocation.propsType = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherLocation;

/* Componente funcional
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

*/
