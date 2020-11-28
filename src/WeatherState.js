import React from 'react'
import './icons/css/weather-icons.min.css';
import './WeatherState.css';

function WeatherState() {
    return (
        <div className='weather'>
            <div className="weather__icon">
                <i class="wi wi-night-sleet"></i>
            </div>

            <div className="weather__temperature">3 °С</div>
        </div>
    )
}

export default WeatherState
