import React from 'react'
import './Wind.css';
import './icons/css/weather-icons.min.css';
import './icons/css/weather-icons-wind.min.css';

function Wind() {
    return (
        <div className='wind'>
            <div className="wind__icon">
                <i className="wi wi-wind from-293-deg"></i>
            </div>

            <div className="wind__speed">
                1 м/с
            </div>
        </div>
    )
}

export default Wind
