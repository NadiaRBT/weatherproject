import React from "react";
import "./weather.css";

export default function Weather(){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter your City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="submit" className="btn btn-primary" />
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
          <img src="" />
          32 °C
        </div>
        <div>
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