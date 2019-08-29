/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";

import { api_weather } from "../../constants/api_url";
import transformWeather from "../services/transformWeather";

// Importamos spinner
import CircularProgress from '@material-ui/core/CircularProgress';


// Class component funcional
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Alicante",
            data: null
        };
    }

    componentDidMount() {
        // console.log("componentDidMount");
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
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
                <div>{data ? <WeatherData data={data} /> : <CircularProgress/>}</div>
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
