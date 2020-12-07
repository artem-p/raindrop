import React from 'react'
import './icons/css/weather-icons.min.css';
import './WeatherState.css';
import WeatherIcon from './WeatherIcon';

function WeatherState({ weatherCode, temp }) {
    
    return (
        <div className='weather'>
            <div className="weather__icon">
                <WeatherIcon className="weather__icon" weatherCode={weatherCode}/>
            </div>
            <div className="weather__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default WeatherState
