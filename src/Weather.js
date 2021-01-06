import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="City">New York</h1>
          <form>
            <input type="search" placeholder="Enter a city..." />
          </form>
        </div>
        <div className="col-6">
          <li className="List">
            <ul>Tuesday 14th 11:11</ul>
            <ul>Cloudy</ul>
          </li>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/meaganlouise/weather-react"
          rel="nofollow"
          class="footer"
        >
          Open-source code by Meagan Louise
        </a>
      </footer>
    </div>
  );
}
