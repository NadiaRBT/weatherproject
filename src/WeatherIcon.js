import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
  const codeMapping = {
    "01d": { icon: "CLEAR_DAY", color: "#dee2e6" },
    "01n": { icon: "CLEAR_NIGHT", color: "#dee2e6" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#dee2e6" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#dee2e6" },
    "03d": { icon: "PARTLY_CLOUDY_DAY", color: "#dee2e6" },
    "03n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#dee2e6" },
    "04d": { icon: "CLOUDY", color: "#dee2e6" },
    "04n": { icon: "CLOUDY", color: "#dee2e6" },
    "09d": { icon: "RAIN", color: "#dee2e6" },
    "09n": { icon: "RAIN", color: "#dee2e6" },
    "10d": { icon: "RAIN", color: "#dee2e6" },
    "10n": { icon: "RAIN", color: "#dee2e6" },
    "11d": { icon: "RAIN", color: "#dee2e6" },
    "11n": { icon: "RAIN", color: "#dee2e6" },
    "13d": { icon: "SNOW", color: "#dee2e6" },
    "13n": { icon: "SNOW", color: "#dee2e6" },
    "50d": { icon: "FOG", color: "#dee2e6" },
    "50n": { icon: "FOG", color: "#dee2e6" },
  };

  const iconInfo = codeMapping[props.code] || {
    icon: "CLEAR_DAY",
    color: "#ffdd00",
  };

  return (
    <ReactAnimatedWeather
      icon={iconInfo.icon}
      color={iconInfo.color}
      size={props.size}
      animate={true}
    />
  );
}