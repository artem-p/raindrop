import React from 'react'
import './icons/css/weather-icons.min.css';
import './WeatherState.css';

function WeatherState({ temp }) {
    return (
        <div className='weather'>
            <div className="weather__icon">
                <i className="wi wi-night-sleet"></i>
            </div>

            <div className="weather__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default WeatherState
