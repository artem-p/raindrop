import React, {useState, useEffect} from 'react';
import './Forecast.css';
import api from './api';
import requests from './requests';

function Forecast() {
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        async function fetchForecast() {
          const request = await api.get(requests.fetchForecast);
          setForecast(request.data);
        }
        
        fetchForecast();
    
        const requestInterval = setInterval(fetchForecast, 60000 * 5);
        
        return () => clearInterval(requestInterval);
      }, [])
    
      console.log(forecast);
    

    return (
        <div className='forecast'>
            
        </div>
    )
}

export default Forecast
