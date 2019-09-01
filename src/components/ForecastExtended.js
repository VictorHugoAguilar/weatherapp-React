import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { apiKey, metric } from "../constants/api_url";
import transformForecast from "./services/transformForecast";

const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: "normal",
    wind: "normal"
};

const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forecastData: null
        };
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${apiKey}${metric}`;
        fetch(url_forecast)
            .then(data => data.json())
            .then(weather_data => {
                console.log(weather_data);
                const forescastData = transformForecast(weather_data);
                console.log(forescastData);
                this.setState({forescastData: forescastData});
            })
            .catch(error => console.log(error));
    }

    renderProgress = () => {
        return (
            <div>
                <CircularProgress color="secondary" /> Cargando...{" "}
            </div>
        );
    };

    renderForecastItemDays() {
        return (<h1>Render items</h1>)
       /* return days.map((day, index) => (
            <ForecastItem key={index} weekDay={day} hour={10} data={data} />
        )); */
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className="forecastExtendedCont">
                <h3 className="forecast-title">
                    Pronóstico extendido para {city}
                </h3>
                { !forecastData 
                    ? this.renderForecastItemDays()
                    : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
