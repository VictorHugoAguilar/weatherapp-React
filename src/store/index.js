// redux
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// tomaremos la ciudad del combineReducers
import  reducers  from "./../reducers";

const initialState = {
    city: "Alicante, es"
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creamos el store
export const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
