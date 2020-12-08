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
    
    const getForecasts = () => {
      if (forecast && forecast.list && forecast.list.length > 0) {
        const forecasts = forecast.list.slice(0, 7);
        
        return forecasts.map((forecastElement) => {
          return <ForecastElement 
              key={forecastElement.dt}
              time={forecastElement.dt} 
              temp={forecastElement.main.temp} 
              weatherCode={forecastElement?.weather[0]?.id}
            />
        })
      }
    }

    return (
        <div className='forecast'>
          {getForecasts()}
        </div>
    )
}

export default Forecast
