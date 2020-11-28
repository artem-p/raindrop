import './App.css';
import './DateTime';
import DateTime from './DateTime';
import WeatherState from './WeatherState';
import Wind from './Wind.js';

function App() {
  return (
    <div className="app">
      <div className="datetime-container">
        <DateTime />
      </div>

      <WeatherState />
      <Wind />
    </div>
  );
}

export default App;
