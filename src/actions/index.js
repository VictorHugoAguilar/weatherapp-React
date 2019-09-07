import { apiKey, metric } from "../constants/api_url";
import transformForecast from "./../components/services/transformForecast";
import transformWeather from "./../components/services/transformWeather";
import getUrlWeatherByCity from "./../components/services/getUrlWeatherByCity";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

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

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            const api_weather = getUrlWeatherByCity(city);
            dispatch(getWeatherCity(city));
            fetch(api_weather)
                .then(resolve => {
                    return resolve.json();
                })
                .then(weather_data => {
                    // console.log(data);
                    const weather = transformWeather(weather_data);
                    dispatch(
                        setWeatherCity({
                            city: city,
                            weather: weather
                        })
                    );
                })
                .catch(error => {
                    console.log(error);
                });
            // console.log("Actualizado");
        });
    };
};
