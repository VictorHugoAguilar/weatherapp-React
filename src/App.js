import React from "react";

// importar componentes
import LocationList from "./components/LocationList";

import "./App.css";

const cities=[
    'Alicante, es',
    'Mendoza, ar',
    'Posadas, ar',
    'Ciudad de México, mx'
];

function App() {
    return (
        <div className="App">
            <h1>Wheater App (aplicación del clima)</h1>
            <hr />
            <LocationList cities={cities} />
        </div>
    );
}

export default App;
