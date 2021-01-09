import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Wednesday 11:11",
      description: response.data.weather[0].description,
      iconUrl:
        "https://lh3.googleusercontent.com/M4ku99RiIhvhP9nHnPLCwd_5fy6wqHNcP2afBSQce9hxClBVJKaGVMTpJgeb1P4dXhMhPSqXod1KgvhfP8WJr4hHmLuiztT4Uq4gPIwQNeW508FgGSovAnx2CecUqxnQvfDdX6uo177GPVJmdz0kFmBmKjI2TygRIP-G9A3rMWV3pKMfbXlOIWN0B0WW4n9GkXCA3CAYG_n4UBhrzmRUqjg_SD8mdGEOs6COaZGOvZyW9GshVJyRj69sW_G7sMm_QRV1GZcoKDJu3gvgOvcRG4v9Tqu5-RSyUffezPXzsQcrW-To5ziYYrqxRUUNrGuMbEwHyKiUjYGJmgsRckKXXKBPZnnK850ljF47UPRblJ0k75bu8Fzp8GPiKQMU0JhvbdGqM8_8inRhkCJ3CeRFwjNWt4twE2v6mxQgcaj0Ns2ThKRv-apQX79dtLpNyMuet9F6wayz4zKYtJyFTOBXR33EMAffwHTB989WNMmmrHWJeNs8VlPY19CbsdAoCtSTzorp3ECYEnIUSerKdGSvs6-lrOqZDwN8eif5YF9cqWKafCAWi7Gp4CMX2t8RSBX7FCmJFgBAcSoXcWxL695Qx9rAI-zAa7zHjICkm_WOpplglfPTKmZGmGhz_WvEd_jm0q05PDzgFLoTwiWpHxbSmsQTT5NMTceOYIKuASy2t_7-kmgi-fsEVLFgIjX3=w373-h317-no?authuser=0",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1 className="City">{weatherData.city}</h1>
            <form>
              <input
                type="search"
                placeholder="Enter a city..."
                className="search-city"
                autoFocus="on"
              />

              <input type="submit" value="Search" className="btn-light" />
            </form>
          </div>
          <div className="col-6">
            <li className="List">
              <ul className="date">
                Tuesday <div className="time">11:11</div>
              </ul>
              <ul className="WeatherDescription">{weatherData.description}</ul>
            </li>
          </div>
        </div>
        <div className="main-image">
          <img
            src={weatherData.iconUrl}
            alt="Mostly Cloudy"
            className="MainIcon"
          />
        </div>

        <h2>
          <span className="degree">{weatherData.temperature}°</span>
          <span className="celcius">c|f</span>
        </h2>
        <div className="ConditionsList">
          <li className="conditions">
            <ul>Precipitation</ul>
            <ul>Humidity:{weatherData.humidity}</ul>
            <ul>Wind:{weatherData.wind} mph </ul>
          </li>
        </div>
      </div>
    );
  } else {
      const apikey = "d7a6e9ae202ed10b9845b2800ff1ad9c";
      let city = "New York";
      let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric` ;
      axios.get(apiUrl).then(handleResponse);

      return (
          <Loader
      )
      
  }
  
}
