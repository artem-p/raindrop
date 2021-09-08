import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DateAndTime from './DateTime';
import WeatherState from './WeatherState';
import Wind from './Wind.js';
import api from './api';
import requests from './requests';
import Forecast from './forecast/Forecast';


function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    async function fetchCurrentWeather() {
      const request = await api.get(requests.fetchCurrentWeather);
      setCurrentWeather(request.data);
    }
    
    fetchCurrentWeather();

    const requestInterval = setInterval(fetchCurrentWeather, 60000 * 5);
    
    return () => clearInterval(requestInterval);
  }, [])

  console.log(currentWeather);

  return (
    <div className="app">
      <div className="content">
        <div className="content__top">

          <DateAndTime />
          
          <div className="weather__state">
            <WeatherState 
              weatherCode={currentWeather?.weather ? currentWeather?.weather[0]?.id : null}
              weatherText={currentWeather?.weather ? currentWeather?.weather[0]?.description : ""} 
              temp={currentWeather?.main?.temp}
              feelsLike={currentWeather?.main?.feels_like}
              isDay={currentWeather?.sys?.sunrise <= currentWeather?.dt && currentWeather?.dt < currentWeather?.sys?.sunset}
            />
          </div>

          <Wind dir={currentWeather?.wind?.deg} speed={currentWeather?.wind?.speed}/>
        </div>

        <div className="content__bottom">
          <Forecast />
        </div>
      </div>
    </div>

  );
}

export default App;
