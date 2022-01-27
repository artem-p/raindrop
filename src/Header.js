import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import './Header.css';
import Location from './Location';

// todo MatGeocoder has bunch of dependencies like mui
import MatGeocoder from 'react-mui-mapbox-geocoder'



function Header({handleLocation, status, lat, lon, name}) {
    const MAPBOX_TOKEN = "pk.eyJ1IjoiYXJ0ZW1wdWdhY2hldiIsImEiOiJja3l1NWJwZ3owM2IxMnd0NDUydDZqazUyIn0.b1G2XUsJEhO49s7vTH2q1Q";
    const [date, setDate] = useState(new DateTime.local());
 
    useEffect(() => {
        const timer = setInterval(()=>setDate(DateTime.local()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
        
    }, []);


    return (
        <div className="header-container">
            <div className="location-container">
                <Location handleLocation={handleLocation} status={status} lat={lat} lon={lon} name={name}/>
            </div>

            <div className="search-box">
                <MatGeocoder
                    inputPlaceholder="Search Address"
                    accessToken={MAPBOX_TOKEN}
                    onSelect={() => {}}
                    showLoader={true}
                    />
            </div>
            <div className="datetime">
                <h1 className="datetime__time">{date.toLocaleString(DateTime.TIME_SIMPLE)}</h1>
                <h1 className="datetime__date">{date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h1>
            </div>
        </div>
    )
}

export default Header
