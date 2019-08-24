import React from "react";
import WheatherExtraInfo from "./WheatherExtraInfo";
import WheatherTemperature from "./WheatherTempeture";

const WheaterData = () => {
    return (
        <div>
            <WheatherTemperature temperature={20} weatherState={''}/>
            <WheatherExtraInfo huminity={80} wind={"10 m/s"}/>
        </div>
    );
};

export default WheaterData;
