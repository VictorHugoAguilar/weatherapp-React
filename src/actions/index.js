import { apiKey, metric } from "../constants/api_url";
import transformForecast from "./../components/services/transformForecast";

export const SET_CITY = "SET_CITY",
    SET_FORECAST_DATA = "SET_FORECAST_DATA";

const setCity = payload => ({ type: SET_CITY, payload });

const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${apiKey}${metric}`;

        // activar en el estado un indicador de busqueda
        dispatch(setCity(payload));

        return fetch(url_forecast)
            .then(data => data.json())
            .then(weather_data => {
                // console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                // console.log(forescastData);
                // debugger;

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({ city: payload, forecastData }));
            })
            .catch(error => console.log(error));
    };
};
