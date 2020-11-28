import './App.css';
import './DateTime';
import DateTime from './DateTime';
import WeatherState from './WeatherState';


function App() {
  return (
    <div className="app">
      <div className="datetime-container">
        <DateTime />
      </div>

      <WeatherState />
    </div>
  );
}

export default App;
