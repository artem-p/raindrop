import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { WiThermometer, WiWind } from 'react-icons/wi'
import { FiUmbrella } from 'react-icons/fi'
import { BiWind } from 'react-icons/bi'
import YrIcon from '../weather-icons-yrno/svg/YrIcon'
import { owmRequests } from '../api'
import { kelvinToCelcius } from '../common';
import WindIcon from './WindIcon'
import './CurrentWeather.css'

// get met no icon by owm code

function CurrentWeather({lat, lon, place}) {
  const [currentWeather, setCurrentWeather] = useState({});

  async function fetchCurrentWeather(lat, lon) {
      const request = await owmRequests.fetchCurrentWeather(lat, lon);
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

  let prec = 0;
  if (currentWeather?.rain) prec = currentWeather?.rain['1h']
  if (currentWeather?.snow) prec = currentWeather?.snow['1h']

  return (
    <Card>
        <Card.Body>
            <Card.Title>Current Conditions: <strong>{weatherText}</strong></Card.Title>
            <div className="current-weather">
              <YrIcon />

              <div className="temperature">
              <div className="temperature__icon">
                <WiThermometer />
              </div>

                <div className="temperature__measured">
                  {temp}
                </div>

                <div className="temperature__feelslike">
                  {`Feels like ${feelsLike} `} <sup>°</sup>
                </div>
              </div>              

              <div className="precipitation">
                <div className="precipitation__icon">
                  <FiUmbrella />
                </div>

                <div className="precipitation__int">
                  {prec.toFixed(1)} mm
                </div>

                <div className="wind">
                  <div className="wind__image"> <BiWind /> </div>
                  <div className="wind__speed"> {wind?.speed?.toFixed(0)} </div>
                  <div className="wind__gust"> ({wind?.gust?.toFixed(0)}) m/s</div>
                  <div className="wind__dir"> <WindIcon wind={wind}/> </div>
                </div>
              </div>

            </div>
        </Card.Body>
    </Card>
  )
}

export default CurrentWeather