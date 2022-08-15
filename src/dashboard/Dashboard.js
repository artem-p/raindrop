import React from 'react'
import './Dashboard.css'
import CurrentWeather from './CurrentWeather'
import { metNoApi } from '../api'


function Dashboard() {
  

  return (
    <div class="dashboard">
      <CurrentWeather />
    </div>
    
  )
}

export default Dashboard