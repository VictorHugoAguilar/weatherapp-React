import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// importar componentes
import LocationListContainer from "./containers/LocationListContainer";
// importamos el componente de forecastExtended
import ForecastExtendContainer from "./containers/ForecastExtendContainer";

import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";

const cities = ["Alicante, es", "Mendoza, ar", "Posadas, ar", "Lisboa, por"];

class App extends Component {
    render() {
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
                            <LocationListContainer cities={cities} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper elevation={5}>
                                <div className="detail">
                                    <ForecastExtendContainer />
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
