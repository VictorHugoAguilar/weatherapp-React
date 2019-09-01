import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";

class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { city } = this.props;
        return (
            <div className="forecastExtendedCont">
                <span className="forecast-title">
                    Pronóstico extendido para {city}
                </span>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
