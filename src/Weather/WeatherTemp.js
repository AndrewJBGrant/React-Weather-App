import React, { useState } from "react";
import "./WeatherTemp.css"

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState('celsius')
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("farhenheit");
  }

   function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }




  if (unit === "celsius") {
  return (
<div className="WeatherTemp">
  <span className="temperature">
    {Math.round(props.celsius)}</span>
    <span className="unit">˚C | <a href="/" onClick={convertToFahrenheit}>˚F</a></span>
</div>
  );
  } else {
    let farhenheit = (props.celsius * 9/5) + 32;
    return(
<div className="WeatherTemp">
  <span className="temperature">
    {Math.round(farhenheit)}</span>
    <span className="unit"><a href="/" onClick={convertToCelsius}>˚C</a> |˚F</span>
</div>

    );
  }
}
