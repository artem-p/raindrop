import React, {useState, useEffect} from 'react';
import api from '../api';
import requests from '../requests';
import './Forecast.css';
import ForecastElement from './ForecastElement';


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
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
            <ForecastElement temp={273.15}/>
        </div>
    )
}

export default Forecast
