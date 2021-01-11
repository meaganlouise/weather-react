import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="City">{props.data.city}</h1>
          <div className="WeatherForm">
            <form onSubmit={props.handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-city"
                autoFocus="on"
                onChange={props.handleCityChange}
              />

              <input type="submit" value="Search" className="btn-light" />
            </form>
          </div>
        </div>
        <div className="col-6">
          <li className="List">
            <ul className="date">
              <FormattedDate date={props.data.date} />
            </ul>
            <ul className="text-capitalize">{props.data.description}</ul>
          </li>
        </div>
      </div>
      <div className="MainIcon">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>

      <h2>
        <div className="WeatherTemp">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </h2>
      <div className="ConditionsList">
        <li className="conditions">
          <ul>
            Feels like: {""} {Math.round(props.data.feelsLike)}°c
          </ul>
          <ul>
            Humidity:{""} {props.data.humidity}%{" "}
          </ul>
          <ul>
            Wind:{""} {Math.round(props.data.wind)} mph{" "}
          </ul>
        </li>
      </div>
    </div>
  );
}
