import React from "react";

// importar componentes
import WheaterLoation from "./components/WheatherLocation";

import "./App.css";

function App() {
    return (
        <div className="App">
            <h1>Wheater App (aplicación del clima)</h1>
            <hr />
            <WheaterLoation />
        </div>
    );
}

export default App;
