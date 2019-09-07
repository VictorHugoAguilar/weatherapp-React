import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions";
import LocationList from "./../components/LocationList";
import { getWeatherCities, getCity } from "./../reducers";

class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, setCity, cities, city } = this.props;
        setWeather(cities);
        setCity(city);
    }

    handleSelectedLocation = city => {
        console.log("handleSelectedLocation");
        this.props.setCity(city);
    };

    render() {
        return (
            <LocationList
                cities={this.props.citiesWeather}
                onSelectedLocation={this.handleSelectedLocation}
            ></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    citiesWeather: PropTypes.array
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToPropsActions
)(LocationListContainer);
