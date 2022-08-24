import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Container, Row, Col } from 'react-bootstrap';
import { WiThermometer, WiUmbrella } from 'react-icons/wi'
import fair_day from '../weather-icons-metno/svg/fair_day.svg'
import { owmRequests } from '../requests'
import { owmApi } from '../api'
import { kelvinToCelcius } from '../common';
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

  
  const stationName = currentWeather?.name ? currentWeather?.name : "Загрузка...";
  const weatherText = currentWeather?.weather ? currentWeather?.weather[0]?.description : "";
  const weatherCode = currentWeather?.weather ? currentWeather?.weather[0]?.id : "";
  const temp = kelvinToCelcius(currentWeather?.main?.temp);
  const feelsLike = kelvinToCelcius(currentWeather?.main?.feels_like);
  const wind = currentWeather?.wind;

  return (
    <Card>
        <Card.Body>
            <Card.Title>Current Conditions: <strong>{weatherText}</strong></Card.Title>
            <div class="current-weather">
              <img src={fair_day} className='weather-icon'></img>


              <div class="temperature">
              <div class="temperature__icon">
                <WiThermometer />
              </div>

                <div class="temperature__measured">
                  {temp}
                </div>

                <div class="temperature__feelslike">
                  {`Feels like ${feelsLike} `} <sup>°</sup>
                </div>
              </div>              

              <div class="precipitation">
                <div class="precipitation__icon">
                  <WiUmbrella />
                </div>

                <div class="precipitation__int">
                  0 мм
                </div>
              </div>


              {/* <Wind wind={wind}/> */}
            </div>
        </Card.Body>
    </Card>
  )
}

export default CurrentWeather