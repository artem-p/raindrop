import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import CurrentWeather from './CurrentWeather'
import DailyForecast from './daily-forecast/DailyForecast'
import HourlyForecast from './hourly-forecast/HourlyForecast'

import { yrRequests } from '../api'


function Dashboard() {
  //  использовать v0 api https://www.yr.no/api/v0/locations/60.300,30.600/forecast
  //  локация https://www.yr.no/api/v0/locations/suggest?language=en&q=%D0%B2%D0%BE%D0%B5%D0%B9%D0%BA%D0%BE%D0%B2%D0%BE
  
  //  Прогноз
  //  2 вкладки - обзор и график
  //  обзор как на фореке по дням. Значок и температура мин макс
  //  дни со значками в виде вкладок, по вкладке переход на день подробно?
  

  const lat= Math.random() * 180 - 90
  const lon = Math.random() * 360 - 180

  const [forecast, setForecast] = useState({})

  async function fetchForecast(lat, lon) {
    const request = await yrRequests.fetchForecast(lat, lon);
    setForecast(request.data);
  }

  useEffect(() => {
    fetchForecast(lat, lon);

    const requestInterval = setInterval(fetchForecast, 60000 * 10, lat, lon);

    return () => clearInterval(requestInterval);
  }, []); 


  return (
    <div className="dashboard">
      <CurrentWeather lat={lat} lon={lon} />
      <HourlyForecast forecast={forecast} />
      <DailyForecast forecast={forecast} />
    </div>
  )
}

export default Dashboard