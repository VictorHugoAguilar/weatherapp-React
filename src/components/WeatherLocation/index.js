/* eslint-disable no-unused-vars */
import React, { Component } from "react";

import Location from "./Location";
import WeatherData from "./WeatherData";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";

import PropTypes from "prop-types";

import "./styles.css";

import transformWeather from "../services/transformWeather";

// Importamos spinner
import CircularProgress from "@material-ui/core/CircularProgress";

// Class component funcional
class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };
    }

    componentDidMount() {
        // console.log("componentDidMount");
        this.handleUpdateClick();
    }

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

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <div>
                    <Location city={city} />
                </div>
                <div>
                    {data ? <WeatherData data={data} /> : <CircularProgress />}
                </div>
            </div>
        );
    }
}

WeatherLocation.propsType = {
    city: PropTypes.string.isRequired
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
