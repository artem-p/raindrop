import React, {useState, useEffect} from 'react';
import { DateTime } from 'luxon';
import './DateTime.css';


function DateAndTime() {
    const [date, setDate] = useState(new DateTime.local());
 
    useEffect(() => {
        const timer = setInterval(()=>setDate(DateTime.local()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
        
    }, []);


    return (
        <div className="datetime-container">
            <div className="datetime">
                <h1 className="datetime__time">{date.toLocaleString(DateTime.TIME_SIMPLE)}</h1>
                <h1 className="datetime__date">{date.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}</h1>
            </div>
        </div>
    )
}

export default DateAndTime
