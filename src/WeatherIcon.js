import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
  const codeMapping = {
    "01d": { icon: "CLEAR_DAY", color: "#ffdd00" },
    "01n": { icon: "CLEAR_NIGHT", color: "#61a5c2" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "#ffdd00" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#48bfe3" },
    "03d": { icon: "PARTLY_CLOUDY_DAY", color: "#ffdd00" },
    "03n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#48bfe3" },
    "04d": { icon: "CLOUDY", color: "#468faf" },
    "04n": { icon: "CLOUDY", color: "#468faf" },
    "09d": { icon: "RAIN", color: "#89c2d9" },
    "09n": { icon: "RAIN", color: "#89c2d9" },
    "10d": { icon: "RAIN", color: "#89c2d9" },
    "10n": { icon: "RAIN", color: "#89c2d9" },
    "11d": { icon: "RAIN", color: "#89c2d9" },
    "11n": { icon: "RAIN", color: "#89c2d9" },
    "13d": { icon: "SNOW", color: "#e9ecef" },
    "13n": { icon: "SNOW", color: "#e9ecef" },
    "50d": { icon: "FOG", color: "#e9ecef" },
    "50n": { icon: "FOG", color: "#e9ecef" },
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