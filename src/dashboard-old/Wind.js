import React from 'react';
import './Wind.css';
import '../weather-icons-owm/css/weather-icons.min.css';
import '../weather-icons-owm/css/weather-icons-wind.min.css';


function Wind({wind}) {
    const speed = wind?.speed ? wind?.speed?.toFixed(0) : 0;
    const dir = wind?.deg ? wind?.deg : 0;

    const iconClass = `wi wi-wind from-${dir}-deg`

    return (
        <div className='wind'>
            <i className={iconClass}></i>{' '}<span>{speed} м/c</span>
        </div>
    )
}

export default Wind;
