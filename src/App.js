import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// importar componentes
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";
// redux
import { createStore } from "redux";

import "./App.css";
import ForecastExtended from "./components/ForecastExtended";

const cities = ["Alicante, es", "Mendoza, ar", "Posadas, ar", "Lisboa, por"];

// creamos el store
const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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
        const action = { type: "setCity", value: city };
        store.dispatch(action);
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

export default App;
