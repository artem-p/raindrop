import React from 'react'
import './icons/css/weather-icons.min.css';
import './CurrentWeather.css';
import WeatherIcon from './WeatherIcon';

function CurrentWeather({ weatherCode, weatherText, temp, feelsLike, isDay }) {
    
    return (
        <div className='weather-card current-weather'>
            {/* <div className="weather__description">
                <div className="weather__icon">
                    <WeatherIcon className="weather__icon" weatherCode={weatherCode} isDay={isDay}/>
                </div>
                <div className="weather__text">{weatherText}</div>
            </div>

            <div className="temperature">
                <div className="temperature__measured">{temp ? (temp - 273.15).toFixed(0) : ""} {' '} °С</div>
                <div className="temperature__feelslike">Feels like {feelsLike ? (feelsLike - 273.15).toFixed(0) : ""}{' '}°С</div>
            </div> */}

                <div className="weather__icon">
                    <WeatherIcon className="weather__icon" weatherCode={weatherCode} isDay={isDay}/>
                </div>

                <div className="temperature__measured">{temp ? (temp - 273.15).toFixed(0) : ""} {' '} °С</div>
                <div className="weather__text">{weatherText}</div>

                <div className="temperature__feelslike">Feels like {feelsLike ? (feelsLike - 273.15).toFixed(0) : ""}{' '}°С</div>
        </div>
    )
}

export default CurrentWeather;
