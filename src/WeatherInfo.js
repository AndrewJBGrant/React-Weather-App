import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <strong> {props.data.city} </strong>
      <p>
        <FormatDate date={props.data.date} />
      </p>
        <p>{props.data.description}</p>
      {/* <em>{Math.round(props.data.temperature)}˚C</em> */}

        <WeatherIcon code={props.data.icon} />
        <WeatherTemp celsius={props.data.temperature} />
      <p>Humidity: {props.data.humidity}%</p>
      <p>Wind: {props.data.wind}km/h</p>
    </div>
  );
}
