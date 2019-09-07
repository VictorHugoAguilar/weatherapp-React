import { combineReducers } from "redux";
import { cities } from "./cities";
import { city } from "./city";

// combinereducers es una funcion que espera un objeto 
// por parametro y este objeto tiene los nombre de los 
// reducers y nosotros podemos decirle que una parte del 
// store va a se mycity y luego lo igualamos en city

export default combineReducers({
    cities,
    city
});