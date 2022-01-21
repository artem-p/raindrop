import React from 'react';
import { DateTime } from 'luxon';
import './OwmDailyForecastElement.css';
import OwmWeatherIcon from '../OwmWeatherIcon';


function OwmDailyForecastElement({ time, minTemp, maxTemp, weatherCode }) {
    return (
        <div className="forecast-element">
            <div className="forecast-element_icon">
                <OwmWeatherIcon weatherCode={weatherCode}/>
            </div>

            <div className="forecast-element_time">
                {DateTime.fromSeconds(time).toLocaleString({weekday: 'short'})}
            </div>

            <div className="forecast-element_temperature">{maxTemp}<sup>°</sup> / {minTemp}<sup>°</sup></div>
        </div>
    )
}

export default OwmDailyForecastElement;