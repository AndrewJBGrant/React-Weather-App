import React, { createContext, useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
//import Header from "../Header";
import "./WeatherSearch.css";
import WeatherForecast from "./WeatherForecast";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

export default function WeatherSearch(props) {
const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
setTheme((current) => (current === "light" ? "dark" : "light"));
  };




  const [city, setCity] = useState(props.defaultCity);
  // useState starts at null because we have no temp yet
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    // loaded now === true because the apiCall has worked and displayWeather has gotten a response
    setWeather({
      //  set weather from apiCall as Object!!
      ready: true,
      country: response.data.sys.country,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
    //console.log(response.data);
    // console.log(response.data.main.temp);
    // console.log(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(city);
    search();
  }

  function search() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input className="field" type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" className="btn" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
 <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="weather-search" id={theme}>
         <div className="form">
        {form}
        <div className="toggle">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        </div>
        {/* <Header /> */}

        <WeatherInfo data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
      </ThemeContext.Provider>
    );
  } else {
    search();
    return "Loading...";
  }
}
