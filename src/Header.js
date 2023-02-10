import React from "react";
import "./Header.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Header() {
return(
  <div className="header-main">
          <h1>Weather App</h1>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#ff8e25"
            size={48}
            animate={true}
          />
            <ReactAnimatedWeather
            icon="SNOW"
            color="#ff8e25"
            size={48}
            animate={true}
          />
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#ff8e25"
            size={48}
            animate={true}
          />
        </div>

);
}
