import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// asterisco para indicar que importamos todo lo que esta en actions 
import * as actions from "./../actions";
import LocationList from "./../components/LocationList";
import { getWeatherCities, getCity } from "./../reducers";

class LocationListContainer extends Component {
    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city } = this.props;
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        // console.log("handleSelectedLocation");
        this.props.setSelectedCity(city);
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
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
    citiesWeather: PropTypes.array
};


/* utilizacion de bindActionCreators permite escribir menos codigo, 
tiene el mismo comportamiento que el siguiente código */
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

/*
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});
*/
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToPropsActions
)(LocationListContainer);
