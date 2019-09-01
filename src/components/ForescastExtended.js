import React, { Component } from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

class ForecastExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { city } = this.props;
        return (
            <div>
                <h1>
                    <Typography variant="inherit" color="primary">
                        Pronostico extendido para {city}
                    </Typography>
                </h1>
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;
