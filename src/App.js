import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <Link to='/raindrop/dashboard'>Dashboard</Link>
          <Link to='/raindrop/map'>Map</Link>
        </nav>
      </header>
      <main>
        <Outlet />
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
