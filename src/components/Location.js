import React from "react";

const Location = (props) => {

    // Haciendo destructuring
    const { city } = props;

    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
};

export default Location;
