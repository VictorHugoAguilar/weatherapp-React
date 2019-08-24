import React from 'react';
import WheatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTempeture';

const WheaterData = () => {
    return (
        <div>
        <WheatherTemperature />
        <WheatherExtraInfo />
        </div>
    );
}
 
export default WheaterData;