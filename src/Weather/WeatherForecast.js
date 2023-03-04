import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import Axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(false);

  // Using useEffect here when props.coordinates changes (we search for a different city)
  // setLoaded changes to false so it re runs handleResponse function
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  // This response.data only exists within this function!!!
  // Add useState
  function handleResponse(response) {
    //console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  //console.log(forecast[0].temp.max);

  //console.log(props); To check we are passing thr coordinates props from original api call in WeatherSearch
  // Here we take the array forecast (which is a state) and map through it to create a dailyForecast
  // Conditional Rendering
  //console.log(forecast); Returns the repsonse.daily.data showing 8 days worth of forecasts
  // Non dynamic way <WeatherForecastDay data={forecast[0]} /> better to take the dailyForecast array

  function load() {
    let apiKey = "73a00877081bd43422bdee0f3022beb5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    // api call here needs lat and lon to get more sophisticated data, added &units=metric to convert the temp into celsius

    Axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
