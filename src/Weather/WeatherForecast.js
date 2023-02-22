import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  // This response.data only exists within this function!!!
  // Add useState
  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //console.log(forecast[0].temp.max);

  //console.log(props); To check we are passing thr coordinates props from original api call in WeatherSearch

  // Conditional Rendering
  if (loaded) {
    //console.log(forecast); Returns the repsonse.daily.data showing 8 days worth of forecasts
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={50} />
            <div className="forecast-temps">
              <span className="temp-max">{forecast[0].temp.max}°</span>
              <span className="temp-min">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "7059cb165caa3316bff682d263a01b1e";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
