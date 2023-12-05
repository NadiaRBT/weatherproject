import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather  defaultCity = "Pretoria" />
        <footer>
          This project was coded by Nadia Russell-Brett and is{" "}
          <a href="https://github.com/NadiaRBT/weatherproject" target="_blank">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
