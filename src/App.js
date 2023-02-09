import "./App.css";
import WeatherSearch from "./WeatherSearch";
import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="Berlin" />
      </div>
    </div>
  );
}

export default App;
