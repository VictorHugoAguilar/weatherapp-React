import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastExtended from "./../components/ForecastExtended";
import { connect } from "react-redux";

class ForecastExtendContainer extends Component {
    render() {

        const {city, forecastData} = this.props;

        return (
            city &&
            <div>
                <ForecastExtended city={city} forecastData={forecastData} />
            </div>
        );
    }
}

ForecastExtendContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};

const mapStateToProps = ({ city, cities }) => ({
    city,
    forecastData: cities[city] && cities[city].forecastData
});

export default connect(
    mapStateToProps,
    null
)(ForecastExtendContainer);
