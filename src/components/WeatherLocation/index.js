/* eslint-disable no-unused-vars */
import React, { Component } from "react";
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
import { api_weather } from "../../constants/api_url";

import transformWeather from "../services/transformWeather";

const data = {
    temperature: 15,
    weatherState: SNOW,
    humidity: 14,
    wind: "20 m/s"
};

// Class component funcional
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Alicante",
            data: data
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather)
            .then(resolve => {
                return resolve.json();
            })
            .then(data => {
                console.log(data);
                const newWether = transformWeather(data);
                this.setState({
                    data: newWether
                });
            })
            .catch(error => {
                console.log(error);
            });
        console.log("Actualizado");
    };

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <div>
                    <Location city={city} />
                </div>
                <div>
                    <WeatherData data={data} />
                </div>
                <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={this.handleUpdateClick}
                >
                    Actualizar
                </button>
            </div>
        );
    }
}

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
