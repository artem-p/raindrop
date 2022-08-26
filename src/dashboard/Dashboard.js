import React from 'react'
import './Dashboard.css'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'


function Dashboard() {
  
  const lat= Math.random() * 180 - 90
  const lon = Math.random() * 360 - 180

  return (
    <div className="dashboard">
      <CurrentWeather lat={lat} lon={lon} />

      <Forecast lat={lat} lon={lon} />
    </div>
  )
}

export default Dashboard