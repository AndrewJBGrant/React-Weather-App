import React from "react";

export default function FormatDate(props) {
  //console.log(props.date);
  // JavaScript has knoweldge of time but not days
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
