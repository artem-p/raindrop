import React from 'react'
import { DateTime } from 'luxon';
import Card from 'react-bootstrap/Card';
import YrIcon from '../../weather-icons-yrno/YrIcon';

import './HourlyForecast.css'


function HourlyForecastElement(singleForecast) {
    const time = singleForecast?.end
    const maxTemp = singleForecast?.temperature?.max?.toFixed(0)
    const minTemp = singleForecast?.temperature?.min?.toFixed(0)
    const weatherSymbol = singleForecast?.twentyFourHourSymbol

    return (
        <div className="hourly-forecast-element" key={time}>
            <div className="hourly-forecast-element__icon">
              <YrIcon weatherSymbol={weatherSymbol}/>
            </div>

            <div className="hourly-forecast-element__time">
                {DateTime.fromISO(time).toLocaleString({weekday: 'short'})}
            </div>

            <div className="hourly-forecast-element__temperature">{maxTemp}<sup>°</sup> / {minTemp}<sup>°</sup></div>
        </div>
    )
}


function HourlyForecastContent({forecast}) {

    if (Array.isArray(forecast)) {
        forecast = forecast.slice(0, 6)
        return (
            <div className='hourly-forecast'>
                {forecast.map(HourlyForecastElement)}
            </div>
        )
    } else {
        return (
            <div>No data</div>
        )
    }
  
}

function HourlyForecast({forecast}) {
    //  todo real hourly forecast here
    
    return (
        <Card className='hourly-forecast-card'>
            <Card.Body>
                <Card.Title>
                Forecast for 5 days
                <HourlyForecastContent forecast={forecast?.dayIntervals}/>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
  

export default HourlyForecast