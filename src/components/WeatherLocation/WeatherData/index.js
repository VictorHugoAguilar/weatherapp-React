/* eslint-disable no-unused-vars */
import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from 'prop-types';
import WheatherExtraInfo from "./WheatherExtraInfo";
import WheatherTemperature from "./WheatherTempeture";
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    WINDY,
    SNOW,
    FOG
} from "../../../constants/weather";

const WheaterData = () => {
    return (
        <div>
            <WheatherTemperature temperature={23} weatherState={""} />
            <WheatherExtraInfo huminity={80} wind={"10 m/s"} />
        </div>
    );
};



export default WheaterData;
