import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="submit"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Pretoria</h1>
      <ul>
        <li>Tuesday, 10:55</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/116.png"
            alt="sunny day"
          />
          <span className="temperature">32</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation 0%</li>
            <li> Humidity 15%</li>
            <li> Wind 9 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
