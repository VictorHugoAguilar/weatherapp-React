import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import CircularProgress from "@material-ui/core/CircularProgress";

/* Refactor a SFC
import { apiKey, metric } from "../constants/api_url";
import transformForecast from "./services/transformForecast";
const url = "https://api.openweathermap.org/data/2.5/forecast";
*/

/* Refactor a SFC
    componentDidMount() {
        //this.updateCity(this.props.city);
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
    };
    
    componentWillUpdate(nextProps) {
        if (nextProps.city !== this.props.city) {
            this.setState({ forecastData: null });
            this.updateCity(nextProps.city);
        }
    }
    */

const renderProgress = () => {
    return (
        <div>
            <CircularProgress color="secondary" /> Cargando...{" "}
        </div>
    );
};

const renderForecastItemDays = forecastData => {
    return forecastData.map(forecast => (
        <ForecastItem
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}
        />
    ));
};

const ForecastExtended = ({ city, forecastData }) => (
    <div className="forecastExtendedCont">
        {forecastData ? (
            <div>
                <h3 className="forecast-title">
                    Pronóstico extendido para {city}
                </h3>
                {renderForecastItemDays(forecastData)}
            </div>
        ) : (
            renderProgress()
        )}
    </div>
);

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};

export default ForecastExtended;
