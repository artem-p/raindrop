import React, {useState, useEffect} from 'react';
import './DateTime.css';

function DateTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000);

        return function cleanup() {
            clearInterval(timer);
        }
        
    }, []);


    return (
        <div className="datetime">
            <h1 className="datetime__time">{date.toLocaleTimeString()}</h1>
            <h1 className="datetime__date">{date.toLocaleDateString()}</h1>
        </div>
    )
}

export default DateTime
