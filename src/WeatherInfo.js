import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="City">{props.data.city}</h1>
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
      <div className="main-image">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
      </div>

      <h2>
        <span className="degree">{Math.round(props.data.temperature)}°</span>
        <span className="celcius">c|f</span>
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
