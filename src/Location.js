import React, {useState} from 'react';

import './Location.css';
import { BiCurrentLocation } from 'react-icons/bi';

function Location() {
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);
    const [status, setStatus] = useState(null);

    const getLocation = () => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLon(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }

    return (
        <div className='location'>
            <div className="location-button">
                <BiCurrentLocation onClick={getLocation}/>
            </div>
            
            <div className="location-info">
                <p>{status}</p>

                {lat && <span>{lat}</span>}
                {lon && <span>, {lon}</span>}
                
            </div>
        </div>
    )
}

export default Location
