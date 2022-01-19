import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import './Header.css';
import Location from './Location';


function Header({handleLocation, status, lat, lon, name}) {
    const [date, setDate] = useState(new DateTime.local());
 
    useEffect(() => {
        const timer = setInterval(()=>setDate(DateTime.local()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
        
    }, []);


    return (
        <header className="header-container">
            <div className="location-container">
                <Location handleLocation={handleLocation} status={status} lat={lat} lon={lon} name={name}/>
            </div>
            <div className="datetime">
                <h1 className="datetime__time">{date.toLocaleString(DateTime.TIME_SIMPLE)}</h1>
                <h1 className="datetime__date">{date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h1>
            </div>
        </header>
    )
}

export default Header
