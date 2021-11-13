import React, {useState} from 'react';

import './Location.css';
import { BiCurrentLocation } from 'react-icons/bi';

function Location({handleLocation, status, lat, lon, name}) {
    

    
    return (
        <div className='location'>
            <div className="location-button">
                <BiCurrentLocation onClick={handleLocation}/>
            </div>
            
            <div className="location-info">
                {status && <p>{status}</p>}
                {lat && <span>{lat}</span>}
                {lon && <span>, {lon}</span>}
                {name && <p>{name}</p>}
            </div>
        </div>
    )
}

export default Location
