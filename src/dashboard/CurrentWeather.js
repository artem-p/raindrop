import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import fair_day from '../weather-icons-metno/svg/fair_day.svg'
import { owmRequests } from '../requests'
import { owmApi } from '../api'

import './CurrentWeather.css'

// todo fetch current weather from owm
// get met no icon by owm code

function CurrentWeather({lat, lon, place}) {
  const [currentWeather, setCurrentWeather] = useState({});

  async function fetchCurrentWeather(lat, lon) {
      const request = await owmApi.get(owmRequests.fetchCurrentWeather(lat, lon));
      setCurrentWeather(request.data);
  }

  useEffect(() => {
      fetchCurrentWeather(lat, lon);

      const requestInterval = setInterval(fetchCurrentWeather, 60000 * 5, lat, lon);
  
      return () => clearInterval(requestInterval);
  }, [lat, lon]);

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