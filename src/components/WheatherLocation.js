import React from "react";
import Location from "./Location";
import WheatherData from "./WheatherData";

// Componente funcional
const WheaterLoation = () => {
    return (
        <div>
            <div>
                <Location city={"Alicante"} />
            </div>
            <div>
                <WheatherData />
            </div>
        </div>
    );
};

export default WheaterLoation;
