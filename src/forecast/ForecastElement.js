import React from 'react';
import { DateTime } from 'luxon';
import './ForecastElement.css';
import WeatherIcon from '../WeatherIcon';


function ForecastElement({ time, temp, weatherCode }) {
    return (
        <div className="forecastElement">
            <div className="forecastElement__icon">
                <WeatherIcon weatherCode={weatherCode}/>
            </div>

            <div className="forecastElement__time">
                {DateTime.fromSeconds(time).toLocaleString(DateTime.TIME_SIMPLE)}
            </div>

            <div className="forecastElement__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default ForecastElement
