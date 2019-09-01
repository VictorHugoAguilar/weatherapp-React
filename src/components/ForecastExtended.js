import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { apiKey, metric } from "../constants/api_url";
import transformForecast from "./services/transformForecast";
const url = "https://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = {
            forecastData: null
        };
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }

    updateCity = city => {
        const url_forecast = `${url}?q=${city}&appid=${apiKey}${metric}`;
        fetch(url_forecast)
            .then(data => data.json())
            .then(weather_data => {
                // console.log(weather_data);
                const forescastData = transformForecast(weather_data);
                // console.log(forescastData);
                // debugger;
                this.setState({ forecastData: forescastData });
            })
            .catch(error => console.log(error));
    }

    componentWillUpdate(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    renderProgress = () => {
        return (
            <div>
                <CircularProgress color="secondary" /> Cargando...{" "}
            </div>
        );
    };

    renderForecastItemDays(forecastData) {
        // console.log(forescastData);
        // debugger;
        return forecastData.map(forecast => (
            <ForecastItem
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
            />
        ));
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className="forecastExtendedCont">
                <h3 className="forecast-title">
                    Pronóstico extendido para {city}
                </h3>
                {forecastData
                    ? this.renderForecastItemDays(forecastData)
                    : this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
