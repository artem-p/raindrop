import React from 'react';
import './css/weather-icons.min.css';


function OwmWeatherIcon({weatherCode, isNight}) {
    const iconPrefix = "wi wi-owm-";

    let iconClass = '';

    if (weatherCode) {
        let icon = '';

        icon = weatherCode;

        if (isNight) {
            // для некоторых значков используем ночные альтернативы.
            // для большинства достаточно нейтральных, так как в дневных используется солнце, а по факту его может не быть
            if ([800, 801, 802].includes(weatherCode)) { //clear, few clouds, scattered clouds
                icon = '-night-' + weatherCode;
            }
         }

        iconClass = iconPrefix + icon;
    }


    return (
        <div>
            <i className={iconClass}></i>
        </div>
    )
}

export default OwmWeatherIcon;
