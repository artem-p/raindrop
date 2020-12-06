import React from 'react'
import './icons/css/weather-icons.min.css';
import './WeatherState.css';
import owmToWi from './owmToWi';


function WeatherState({ weatherCode, temp }) {
    const iconPrefix = "wi wi-";

    let icon = weatherCode ? owmToWi[weatherCode].icon : '';
    
    // if (!(weatherCode > 699 && weatherCode < 800) && !(weatherCode > 899 && weatherCode < 1000)) {
    //     icon = 'day-' + icon;
    // }

    const iconClass = iconPrefix + icon;

    return (
        <div className='weather'>
            <div className="weather__icon">
                <i className={iconClass}></i>
            </div>

            <div className="weather__temperature">{temp ? (temp - 273.15).toFixed(0) : 0} °С</div>
        </div>
    )
}

export default WeatherState
