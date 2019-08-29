import React from "react";

// importar componentes
import WeatherLocation from "./components/WeatherLocation";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Wheater App (aplicación del clima)</h1>
            <hr />
            <WeatherLocation city="Alicante, es" />
        </div>
    );
}

export default App;
