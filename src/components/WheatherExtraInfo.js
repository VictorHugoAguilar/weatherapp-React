import React from "react";

const WheatherExtraInfo = props => {
    // destructuring
    const { huminity, wind } = props;
    return (
        <div>
            <span>{`Humedad: ${huminity} %` }</span><br/>
            <span>{`Viento: ${wind} `}</span>
        </div>
    );
};

export default WheatherExtraInfo;
