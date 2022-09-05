import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import DailyForecast from './daily/DailyForecast'

import { yrRequests } from '../../api'


import './Forecast.css'



function Forecast({lat, lon}) {
  //  todo
  //  2 вкладки - обзор и график
  //  обзор как на фореке по дням. Значок и температура мин макс
  //  дни со значками в виде вкладок, по вкладке переход на день подробно?

  //  использовать v0 api https://www.yr.no/api/v0/locations/60.300,30.600/forecast
  //  локация https://www.yr.no/api/v0/locations/suggest?language=en&q=%D0%B2%D0%BE%D0%B5%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE
  const [forecast, setForecast] = useState({});

  async function fetchForecast(lat, lon) {
    const request = await yrRequests.fetchForecast(lat, lon);
    setForecast(request.data);
  }

  useEffect(() => {
    fetchForecast(lat, lon);

    const requestInterval = setInterval(fetchForecast, 60000 * 10, lat, lon);

    return () => clearInterval(requestInterval);
  }, [lat, lon]);

  
  return (
    <Card className='forecast-card'>
        <Card.Body>
            <Card.Title>
              Forecast for 5 days
              <DailyForecast forecast={forecast?.dayIntervals}/>
            </Card.Title>
        </Card.Body>
    </Card>
  )
}

export default Forecast