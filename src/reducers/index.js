import { combineReducers } from "redux";
import { cities, 
    getForcastDataFromCities as _getForcastDataFromCities,
    getWeatherCities as _getWeatherCities } from "./cities";
import { city } from "./city";
import { createSelector} from 'reselect';

// combinereducers es una funcion que espera un objeto 
// por parametro y este objeto tiene los nombre de los 
// reducers y nosotros podemos decirle que una parte del 
// store va a se mycity y luego lo igualamos en city

export default combineReducers({
    cities,
    city
});

// creamos los selectores para desacoplar la info de la app
export const getCity = createSelector(state => state.city, city => city);
export const getForcastDataFromCities = createSelector( state => state.cities, getCity, _getForcastDataFromCities);
export const getWeatherCities = createSelector( state => state.cities, _getWeatherCities );