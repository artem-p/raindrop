import React from 'react'
import './Dashboard.css'
import CurrentWeather from './CurrentWeather'
import { metNoApi } from '../api'


function Dashboard() {
  

  return (
    <div className="dashboard">
      <CurrentWeather lat={Math.random() * 90} lon={Math.random() * 180} />
    </div>
    
  )
}

export default Dashboard