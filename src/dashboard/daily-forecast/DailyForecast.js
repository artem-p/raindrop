import React from 'react'
import { DateTime } from 'luxon';
import Card from 'react-bootstrap/Card';
import YrIcon from '../../weather-icons-yrno/YrIcon';

import './DailyForecast.css'


function ForecastElement(singleForecast) {
    const time = singleForecast?.end
    const maxTemp = singleForecast?.temperature?.max?.toFixed(0)
    const minTemp = singleForecast?.temperature?.min?.toFixed(0)
    const weatherSymbol = singleForecast?.twentyFourHourSymbol

    return (
        <div className="forecast-element" key={time}>
            <div className="forecast-element__icon">
              <YrIcon weatherSymbol={weatherSymbol}/>
            </div>

            <div className="forecast-element__time">
                {DateTime.fromISO(time).toLocaleString({weekday: 'short'})}
            </div>

            <div className="forecast-element__temperature">{maxTemp}<sup>°</sup> / {minTemp}<sup>°</sup></div>
        </div>
    )
}


function DailyForecastContent({forecast}) {
    // todo yr forecast instead of owm

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

function DailyForecast({forecast}) {
    //  todo
    //  2 вкладки - обзор и график
    //  обзор как на фореке по дням. Значок и температура мин макс
    //  дни со значками в виде вкладок, по вкладке переход на день подробно?
  
    //  использовать v0 api https://www.yr.no/api/v0/locations/60.300,30.600/forecast
    //  локация https://www.yr.no/api/v0/locations/suggest?language=en&q=%D0%B2%D0%BE%D0%B5%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE
  
    
  
    
    return (
        <Card className='forecast-card'>
            <Card.Body>
                <Card.Title>
                Forecast for 5 days
                <DailyForecastContent forecast={forecast?.dayIntervals}/>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}
  

export default DailyForecast