import React from 'react'
import { DateTime } from 'luxon';

import './DailyForecast.css'


function ForecastElement(singleForecast) {
    const time = singleForecast?.start
    const maxTemp = singleForecast?.temperature?.max
    const minTemp = singleForecast?.temperature?.min

    return (
        <div className="forecast-element" key={time}>
            <div className="forecast-element__icon">
                
            </div>

            <div className="forecast-element__time">
                {DateTime.fromISO(time).toLocaleString({weekday: 'short'})}
            </div>

            <div className="forecast-element__temperature">{maxTemp}<sup>°</sup> / {minTemp}<sup>°</sup></div>
        </div>
    )
}


function DailyForecast({forecast}) {
    if (Array.isArray(forecast)) {
        return (
            <div className='forecast'>
                {forecast.map(ForecastElement)}
            </div>
        )
    } else {
        return (
            <div>No data</div>
        )
    }
  
}

export default DailyForecast