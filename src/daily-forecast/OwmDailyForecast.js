import React, {useState, useEffect} from 'react';
import api from '../api';
import requests from '../requests';
import './OwmDailyForecast.css';
import OwmDailyForecastElement from './OwmDailyForecastElement';
import { kelvinToCelcius } from '../common';


function OwmDailyForecast({lat, lon}) {
    const [forecast, setForecast] = useState({});

    async function fetchForecast(lat, lon) {
        const request = await api.get(requests.fetchDailyForecast(lat, lon));
        setForecast(request.data);
    }


    useEffect(() => {
        fetchForecast(lat, lon);

        const requestInterval = setInterval(fetchForecast, 60000 * 5, lat, lon);
    
        return () => clearInterval(requestInterval);
    }, [lat, lon]);
    
    
    const getForecasts = () => {
        if (forecast && forecast.daily && forecast.daily.length > 0) {
          const forecasts = forecast.daily.slice(0, 5);
          
          return forecasts.map((forecastElement) => {
            return <OwmDailyForecastElement 
                key={forecastElement.dt}
                time={forecastElement.dt} 
                minTemp={kelvinToCelcius(forecastElement.temp.min)}
                maxTemp={kelvinToCelcius(forecastElement.temp.max)} 
                weatherCode={forecastElement?.weather[0]?.id}
              />
          })
        }
    }

    
    return (
        <div className='weather-card owm-daily-forecast'>
            <h5 className='header'>Прогноз на 5 дней</h5>

            <div className="forecast-elements">
                {getForecasts()}
            </div>
        </div>
    )
}

export default OwmDailyForecast;
