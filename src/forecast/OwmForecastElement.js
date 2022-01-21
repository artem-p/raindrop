import React from 'react';
import { DateTime } from 'luxon';
import './OwmForecastElement.css';
import OwmWeatherIcon from '../OwmWeatherIcon';


function OwmForecastElement({ time, temp, weatherCode }) {
    return (
        <div className="forecast-element">
            <div className="forecast-element_icon">
                <OwmWeatherIcon weatherCode={weatherCode}/>
            </div>

            <div className="forecast-element_time">
                {DateTime.fromSeconds(time).toLocaleString(DateTime.TIME_SIMPLE)}
            </div>

            <div className="forecast-element_temperature">{temp ? (temp - 273.15).toFixed(0) : 0} <sup>°</sup></div>
        </div>
    )
}

export default OwmForecastElement;