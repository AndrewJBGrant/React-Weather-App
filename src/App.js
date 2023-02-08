import './App.css';
import WeatherSearch from './WeatherSearch';
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (

    <div className="App">
      <div className="icons">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="goldenrod"
          size={48}
          animate={true}
        />
        <ReactAnimatedWeather
          icon="PARTLY_CLOUDY_DAY"
          color="goldenrod"
          size={48}
          animate={true}
        />
        <ReactAnimatedWeather
          icon="SNOW"
          color="goldenrod"
          size={48}
          animate={true}
        />
      </div>
     <h1>Weather App</h1>
     <WeatherSearch />
    </div>
  );
}

export default App;
