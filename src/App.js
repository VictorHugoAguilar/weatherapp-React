import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
// importar componentes
import LocationList from "./components/LocationList";
import { Grid, Col, Row } from "react-flexbox-grid";

import "./App.css";
import ForecastExtended from "./components/ForescastExtended";

const cities = ["Alicante, es", "Mendoza, ar", "Posadas, ar", "Lisboa, por"];

class App extends Component {
    constructor() {
        super();
        this.state = {
            city: "Ciudad nueva"
        };
    }

    handleSelectedLocation = city => {
        console.log("handleSelectionLocation " + city);
        this.setState({
            city:city,
        });
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
                                    <ForecastExtended city={city} />
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
