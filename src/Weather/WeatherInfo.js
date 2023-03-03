import React from "react";
import FormatDate from "../FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="icons">
        <div className="title">
          <strong> {props.data.city} </strong>
          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="big-icon">
          <WeatherIcon code={props.data.icon} size={150} />
        </div>
      </div>

      <div className="text">
        <ul>
          <ol>
            <FormatDate date={props.data.date} />
          </ol>

          <ol>Humidity:{props.data.humidity}%</ol>
          <ol>{props.data.description}</ol>
          <ol>Wind:{props.data.wind}km/h</ol>
        </ul>
      </div>

      {/* <em>{Math.round(props.data.temperature)}˚C</em> */}
    </div>
  );
}
