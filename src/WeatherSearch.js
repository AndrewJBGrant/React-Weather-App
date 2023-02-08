import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  // useState starts at null because we have no temp yet
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    // loaded now === true because the apiCall has worked and displayWeather has gotten a response
    setLoaded(true);
    setWeather({
      //  set weather from apiCall as Object!!
      name: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    // console.log(response.data.name);
    // console.log(response.data.main.temp);
    // console.log(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(city);
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <strong> {weather.name} </strong>
          <p>Temperature: {Math.round(weather.temperature)}C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind: {weather.wind}km/h</p>
          <img src={weather.icon} alt="LOADING..." />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
