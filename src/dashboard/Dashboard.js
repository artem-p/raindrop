import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import CurrentWeather from './CurrentWeather'
import Forecast from './forecast/Forecast'
import DailyForecast from './forecast/daily/DailyForecast'

import { yrRequests } from '../api'


function Dashboard() {
  
  const lat= Math.random() * 180 - 90
  const lon = Math.random() * 360 - 180

  // todo fetch forecast here

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
      {/* <DailyForecast forecast={forecast} /> */}
      <Forecast forecast={forecast} />
    </div>
  )
}

export default Dashboard