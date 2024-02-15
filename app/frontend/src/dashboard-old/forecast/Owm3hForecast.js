import React, {useState, useEffect} from 'react';
import api from '../../api';
// import requests from '../../requests';
import './Owm3hForecast.css';
import OwmForecastElement from './OwmForecastElement';


function Owm3hForecast({lat, lon}) {
    const [forecast, setForecast] = useState({});

    async function fetchForecast(lat, lon) {
        // const request = await api.get(requests.fetchForecast(lat, lon));
        // setForecast(request.data);
    }


    useEffect(() => {
        fetchForecast(lat, lon);

        const requestInterval = setInterval(fetchForecast, 60000 * 5, lat, lon);
    
        return () => clearInterval(requestInterval);
    }, [lat, lon]);
    
    
    const getForecasts = () => {
        if (forecast && forecast.list && forecast.list.length > 0) {
          const forecasts = forecast.list.slice(0, 8);
          
          return forecasts.map((forecastElement) => {
            return <OwmForecastElement 
                key={forecastElement.dt}
                time={forecastElement.dt} 
                temp={forecastElement.main.temp} 
                weatherCode={forecastElement?.weather[0]?.id}
              />
          })
        }
    }

    
    return (
        <div className='weather-card owm-3h-forecast'>
            <h5 className='header'>Прогноз на 24 ч</h5>
            
            <div className="forecast-elements">
                {getForecasts()}
            </div>
        </div>
    )
}


export default Owm3hForecast;
