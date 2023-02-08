import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

export default function WeatherSearch(props) {
  const [city, setCity] = useState("");
  // useState starts at null because we have no temp yet
  const [weather, setWeather] = useState({ready: false});

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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
    console.log(response.data);
    // console.log(response.data.main.temp);
    // console.log(response.data.wind.speed);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //alert(city);
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
      <input type="search" placeholder="enter a city.." onChange={updateCity} />
      <input type="submit" className="btn btn-warning" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
          <strong> {weather.city}  </strong>
          <em>{Math.round(weather.temperature)}˚C</em>
          <img src={weather.icon} alt="LOADING..." />
          <p>{weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Date: <FormatDate date={weather.date} /> </p>
          <p>Wind: {weather.wind}km/h</p>
        </div>
    );
  } else {
    return form;
  }
}
