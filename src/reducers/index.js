import { combineReducers } from "redux";
import { cities, getForcastDataFromCities as _getForcastDataFromCities } from "./cities";
import { city } from "./city";

// combinereducers es una funcion que espera un objeto 
// por parametro y este objeto tiene los nombre de los 
// reducers y nosotros podemos decirle que una parte del 
// store va a se mycity y luego lo igualamos en city

export default combineReducers({
    cities,
    city
});

// creamos los selectores para desacoplar la info de la app
export const getCity = state => state.city;
export const getForcastDataFromCities = state => (_getForcastDataFromCities(state.cities, getCity(state)));
