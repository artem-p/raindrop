import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import Owm3hForecast from './forecast/Owm3hForecast';

// import Wind from './Wind.js';
// import Forecast from './forecast/Forecast';
// import DailyForecast from './daily-forecast/DailyForecast';
// import { BiCurrentLocation } from 'react-icons/bi';


function App() {
  const [lat, setLat] = useState(59.9311);
  const [lon, setLon] = useState(30.3609);
  const [locationStatus, setLocationStatus] = useState(null);

  
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
    getLocation()
  }


  
  // async function fetchCurrentWeather(lat, lon) {
  //   const request = await api.get(requests.fetchCurrentWeather(lat, lon));
  //   setCurrentWeather(request.data);
  // }


  // useEffect(() => {
  //   fetchCurrentWeather(lat, lon);

  //   const requestInterval = setInterval(fetchCurrentWeather, 60000 * 5, lat, lon);
    
  //   return () => clearInterval(requestInterval);
  // }, [lat, lon])

  return (
    <div className="app">
      <header>
        <Header handleLocation={handleOnClickLocation} status={locationStatus} lat={lat} lon={lon} />
      </header>
      <main>
        <CurrentWeather lat={lat} lon={lon} />

        <Owm3hForecast lat={lat} lon={lon} />
      </main>
    </div>
  )

  // return (
  //   <div className="app">
  //     <div className="content">
  //       <div className="content__top">

  //         <Header handleLocation={handleOnClickLocation} status={locationStatus} lat={lat} lon={lon} 
  //           name={currentWeather?.name}/>
          
  //         <div className="center">
  //           <div>
  //             <div className="weather__state">
  //               {/* <WeatherState 
  //                 weatherCode={currentWeather?.weather ? currentWeather?.weather[0]?.id : null}
  //                 weatherText={currentWeather?.weather ? currentWeather?.weather[0]?.description : ""} 
  //                 temp={currentWeather?.main?.temp}
  //                 feelsLike={currentWeather?.main?.feels_like}
  //                 isDay={currentWeather?.sys?.sunrise <= currentWeather?.dt && currentWeather?.dt < currentWeather?.sys?.sunset}
  //               /> */}
  //             </div>

  //               {/* <Wind dir={currentWeather?.wind?.deg} speed={currentWeather?.wind?.speed}/> */}
  //           </div>

  //           <div>
  //             <DailyForecast />
  //           </div>
  //         </div>

  //     </div>
  //       <div className="content__bottom">
  //         <Forecast lat={lat} lon={lon}/>
  //       </div>
  //   </div>
  //   </div>
  // );
}

export default App;
