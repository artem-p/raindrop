import React from 'react'
import { DateTime } from 'luxon';
import YrNoIcon from '../../../weather-icons-yrno/svg/YrNoIcon';

import './DailyForecast.css'


function ForecastElement(singleForecast) {
    const time = singleForecast?.end
    const maxTemp = singleForecast?.temperature?.max?.toFixed(0)
    const minTemp = singleForecast?.temperature?.min?.toFixed(0)

    return (
        <div className="forecast-element" key={time}>
            <div className="forecast-element__icon">
              <YrNoIcon />
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
        forecast = forecast.slice(0, 6)
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