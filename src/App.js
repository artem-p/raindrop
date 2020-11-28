import './App.css';
import './DateTime';
import DateAndTime from './DateTime';
import WeatherState from './WeatherState';
import Wind from './Wind.js';

function App() {
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
