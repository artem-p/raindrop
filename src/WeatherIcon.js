import React from 'react';
import './WeatherIcon.css';
import owmToWi from './owmToWi';


function WeatherIcon( {weatherCode, isDay} ) {
    // isDay =  false - night, 1 - true
    let iconPrefix = "wi wi-";

    let icon = '';
    
    if (weatherCode) {
        icon = owmToWi[weatherCode].icon;

        // for some icons use night alternative
        if ([800, 801, 802].includes(weatherCode)) { //clear, few clouds, scattered clouds
            if (!isDay) {
                icon = owmToWi[weatherCode].icon_night;
            }
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
