import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from 'prop-types';


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

WheatherExtraInfo.propTypes = {
    huminity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtraInfo;
