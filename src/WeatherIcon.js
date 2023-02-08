import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function weatherIcon(props) {
  console.log(props.code);
  const codeMap = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAINY",
    "10n": "RAINY",
    "11d": "RAINY",
    "11n": "RAINY",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  }
  return(
    <ReactAnimatedWeather
     icon={codeMap[props.code]}
            color="goldenrod"
            size={64}
            animate={false}
  />
  );
}
