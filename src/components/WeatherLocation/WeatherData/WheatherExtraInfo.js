import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from 'prop-types';
import './styles.css'


const WheatherExtraInfo = props => {
    // destructuring
    const { huminity, wind } = props;
    return (
        <div className="weatherExtraCont">
            <div className="extraInfoText">{`Humedad: ${huminity} %` }</div>
            <div className="extraInfoText">{`Vientos: ${wind} `}</div>
        </div>
    );
};

WheatherExtraInfo.propTypes = {
    huminity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtraInfo;
