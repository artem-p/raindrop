import React from 'react';
import './WeatherIcon.css';
import owmToWi from './owmToWi';


function WeatherIcon( {weatherCode, isDay} ) {
    // isDay =  false - night, 1 - true
    let iconPrefix = "wi wi-";
    console.log(isDay);

    let icon = '';
    
    if (weatherCode) {
        if (isDay) {
            icon = owmToWi[weatherCode].icon;
        } else {
            icon = owmToWi[weatherCode].icon_night;
        }
    }


    const iconClass = iconPrefix + icon;

    return (
        <div className="WeatherIcon">
            <i className={iconClass}></i>
        </div>
    )
}

export default WeatherIcon
