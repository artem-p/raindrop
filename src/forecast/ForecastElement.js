import React from 'react';
import './ForecastElement.css';


function ForecastElement({ temp }) {
    return (
        <div className="forecastElement">
            <div className="forecastElement__icon">
                <i className="wi wi-rain"></i>
            </div>

            <div className="forecastElement__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default ForecastElement
