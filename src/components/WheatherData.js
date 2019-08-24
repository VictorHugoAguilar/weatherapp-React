/* eslint-disable no-unused-vars */
import React from "react";
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
} from "../constants/weather";

const WheaterData = () => {
    return (
        <div>
            <WheatherTemperature temperature={20} weatherState={' '} />
            <WheatherExtraInfo huminity={80} wind={"10 m/s"} />
        </div>
    );
};

export default WheaterData;
