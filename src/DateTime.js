import React, {useState} from 'react';
import './DateTime.css';

function DateTime() {
    const [date, setDate] = useState(new Date());

    return (
        <div className="datetime">
            <h1 className="datetime__time">{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default DateTime
