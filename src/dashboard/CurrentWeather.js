import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap';
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
            <Card.Title>Current Conditions</Card.Title>
            <Container fluid>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div className="station-name">
                                    {place}{' '}{stationName}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="weather-icon">
                                    {/* <OwmWeatherIcon weatherCode={weatherCode}/> */}
                                </div>
                            </Col>

                            <Col>
                                <div className="temperature__measured">
                                    {temp}{' '} <sup>°</sup>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="weather-text">
                                    <h6>{weatherText}</h6>
                                </div>
                            </Col>

                            <Col>
                                {/* <Wind wind={wind}/> */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <img src={fair_day} className='weather-icon'></img>
        </Card.Body>
    </Card>
  )
}

export default CurrentWeather