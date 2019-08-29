import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from 'prop-types';
import './styles.css'


const WeatherExtraInfo = props => {
    // destructuring
    const { huminity, wind } = props;
    return (
        <div className="weatherExtraCont">
            <div className="extraInfoText">{`Humedad: ${huminity} %` }</div>
            <div className="extraInfoText">{`Vientos: ${wind}`}</div>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    huminity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
