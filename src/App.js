import "./App.css";
import WeatherSearch from "./Weather/WeatherSearch";
// import ReactAnimatedWeather from "react-animated-weather";

function App() {
  return (
    <div className="App">
      <WeatherSearch defaultCity="Berlin" />
    </div>
  );
}

export default App;
