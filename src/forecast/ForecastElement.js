import React from 'react';
import './ForecastElement.css';
import WeatherIcon from '../WeatherIcon';


function ForecastElement({ temp, weatherCode }) {
    return (
        <div className="forecastElement">
            <div className="forecastElement__icon">
                <WeatherIcon weatherCode={weatherCode}/>
            </div>

            <div className="forecastElement__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default ForecastElement
