import React, {useState, useEffect} from 'react';
// import requests from '../requests';
import api from '../api';
import {Container, Row, Col} from 'react-bootstrap';
import './CurrentWeather.css';
import OwmWeatherIcon from '../weather-icons-owm/OwmWeatherIcon';
import { kelvinToCelcius } from '../common';
import Wind from './Wind';


function CurrentWeather({lat, lon, place}) {
    const [currentWeather, setCurrentWeather] = useState({});

    async function fetchCurrentWeather(lat, lon) {
        // const request = await api.get(requests.fetchCurrentWeather(lat, lon));
        // setCurrentWeather(request.data);
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
        <div className='weather-card owm-current-weather'>
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
                                    <OwmWeatherIcon weatherCode={weatherCode}/>
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
                                <Wind wind={wind}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CurrentWeather;
