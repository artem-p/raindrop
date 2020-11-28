import { useState, useEffect } from 'react';
import './App.css';
import './DateTime';
import DateAndTime from './DateTime';
import WeatherState from './WeatherState';
import Wind from './Wind.js';
import api from './api';
import requests from './requests';


function App() {
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    async function fetchCurrentWeather() {
      const request = await api.get(requests.fetchCurrentWeather);
      setCurrentWeather(request.data);
    }

    fetchCurrentWeather();
  }, [])

  console.log(currentWeather);

  return (
    <div className="app">
      <div className="datetime-container">
        <DateAndTime />
      </div>

      <WeatherState />
      <Wind />
    </div>
  );
}

export default App;
