import React from "react";
// Importamos propType para validar los datos que pasamos por parametros
import PropTypes from 'prop-types';

const Location = (props) => {

    // Haciendo destructuring
    const { city } = props;

    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired
}

export default Location;
