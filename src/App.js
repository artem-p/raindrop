import { useState, useEffect } from 'react';
import './App.css';
import './DateTime';
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
      <DateAndTime />

      <WeatherState weatherCode={currentWeather?.weather ? currentWeather?.weather[0]?.id : null} temp={currentWeather?.main?.temp}/>

      <Wind dir={currentWeather?.wind?.deg} speed={currentWeather?.wind?.speed}/>

      <Forecast />
    </div>
  );
}

export default App;
