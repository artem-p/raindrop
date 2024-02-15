import React from 'react'
import { DateTime } from 'luxon';
import Card from 'react-bootstrap/Card';
import YrIcon from '../../weather-icons-yrno/YrIcon';

import './HourlyForecast.css'


function HourlyForecastElement(singleForecast) {
    const time = singleForecast?.start
    const temp = singleForecast?.temperature?.value?.toFixed(0)
    const weatherSymbol = singleForecast?.symbolCode?.next1Hour

    
    return (
        <div className="hourly-forecast-element" key={time}>
            <div className="hourly-forecast-element__icon">
              <YrIcon weatherSymbol={weatherSymbol}/>
            </div>

            <div className="hourly-forecast-element__time">
                {DateTime.fromISO(time).toLocaleString(DateTime.TIME_SIMPLE)}
            </div>

            <div className="hourly-forecast-element__temperature">{temp}<sup>°</sup> </div>
        </div>
    )
}


function HourlyForecastContent({forecast}) {

    if (Array.isArray(forecast)) {
        forecast = forecast.slice(0, 24)
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
    return (
        <Card className='hourly-forecast-card'>
            <Card.Body>
                <Card.Title>
                Forecast for 5 days
                <HourlyForecastContent forecast={forecast?.shortIntervals}/>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
  

export default HourlyForecast