import React from 'react'
import Card from 'react-bootstrap/Card'
import fair_day from '../weather-icons-metno/svg/fair_day.svg'

import './CurrentWeather.css'

function CurrentWeather() {
  return (
    <Card>
        <Card.Body>
            <Card.Title>Current Conditions</Card.Title>
            <img src={fair_day} className='weather-icon'></img>
        </Card.Body>
    </Card>
  )
}

export default CurrentWeather