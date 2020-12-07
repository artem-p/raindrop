import React from 'react';
import './WeatherIcon.css';
import owmToWi from './owmToWi';


function WeatherIcon( {weatherCode} ) {
    const iconPrefix = "wi wi-";

    let icon = weatherCode ? owmToWi[weatherCode].icon : '';
    
    // if (!(weatherCode > 699 && weatherCode < 800) && !(weatherCode > 899 && weatherCode < 1000)) {
    //     icon = 'day-' + icon;
    // }

    const iconClass = iconPrefix + icon;

    return (
        <div className="weatherIcon">
            <i className={iconClass}></i>
        </div>
    )
}

export default WeatherIcon
