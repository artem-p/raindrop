import React, {useState} from 'react';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import Owm3hForecast from './forecast/Owm3hForecast';
import OwmDailyForecast from './daily-forecast/OwmDailyForecast';


function Dashboard() {
  const [lat, setLat] = useState(59.9311);
  const [lon, setLon] = useState(30.3609);
  const [locationStatus, setLocationStatus] = useState(null);
  const [place, setPlace] = useState('');

  
  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported by your browser');
    } else {
      setLocationStatus('Locating...');
        
        navigator.geolocation.getCurrentPosition((position) => {
          setLocationStatus(null);
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLat(lat);
          setLon(lon);
        }, () => {
          setLocationStatus('Unable to retrieve your location');
        });
    }
  }

  
  const handleOnClickLocation = () => {
    setPlace('');
    getLocation()
  }

  
  const handleSelectPlace = (searchResult) => {
    setLat(searchResult?.center[1]);
    setLon(searchResult?.center[0]);
    setPlace(searchResult?.text);
  }

  return (
    <div>
        <Header handleLocation={handleOnClickLocation} handleSelectPlace={handleSelectPlace} status={locationStatus} lat={lat} lon={lon} />

        <CurrentWeather lat={lat} lon={lon} place={place}/>

        <Owm3hForecast lat={lat} lon={lon} />

        <OwmDailyForecast lat={lat} lon={lon} />
    </div>
  )
}

export default Dashboard;