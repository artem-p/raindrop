import React from 'react'
import './Wind.css';
import './icons/css/weather-icons.min.css';
import './icons/css/weather-icons-wind.min.css';

function Wind({dir, speed}) {


    return (
        <div className='wind'>
            <div className="wind__icon">
                <i className={`wi wi-wind from-${dir}-deg`}></i>
            </div>

            <div className="wind__speed">
                {speed?.toFixed(0)} м/с
            </div>
        </div>
    )
}

export default Wind
