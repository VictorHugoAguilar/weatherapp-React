import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// importar componentes
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";
// importamos el componente de forecastExtended
import ForecastExtended from "./components/ForecastExtended";
// importamos las acciones
import { setCity } from "./actions";
// importamos el connect para conectar nuesta app react con redux
// proporciana la capacidad de conectarse react con el store de redux
import { connect } from "react-redux";

const cities = ["Alicante, es", "Mendoza, ar", "Posadas, ar", "Lisboa, por"];

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: null
        };
    }

    handleSelectedLocation = city => {
        // console.log("handleSelectionLocation " + city);
        this.setState({
            city: city
        });

        this.props.setCity(city);
    };

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        const { city } = this.state;
        return (
            <Fragment>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h5" color="inherit">
                            WeatherApp
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList
                                cities={cities}
                                onSelectedLocation={this.handleSelectedLocation}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper elevation={5}>
                                <div className="detail">
                                    {!city ? (
                                        <Typography
                                            variant="h4"
                                            color="primary"
                                        >
                                            No se ha seleccionado ciudad
                                        </Typography>
                                    ) : (
                                        <ForecastExtended city={city} />
                                    )}
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>
        );
    }
}

App.propTypes = {
    setCity: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

// funcion que recibe dos funciones, y devuelve otra función
const AppConnected = connect(
    null,
    mapDispatchToPropsActions
)(App);

export default AppConnected;
