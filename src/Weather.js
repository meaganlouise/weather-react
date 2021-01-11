import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl:
        "https://lh3.googleusercontent.com/M4ku99RiIhvhP9nHnPLCwd_5fy6wqHNcP2afBSQce9hxClBVJKaGVMTpJgeb1P4dXhMhPSqXod1KgvhfP8WJr4hHmLuiztT4Uq4gPIwQNeW508FgGSovAnx2CecUqxnQvfDdX6uo177GPVJmdz0kFmBmKjI2TygRIP-G9A3rMWV3pKMfbXlOIWN0B0WW4n9GkXCA3CAYG_n4UBhrzmRUqjg_SD8mdGEOs6COaZGOvZyW9GshVJyRj69sW_G7sMm_QRV1GZcoKDJu3gvgOvcRG4v9Tqu5-RSyUffezPXzsQcrW-To5ziYYrqxRUUNrGuMbEwHyKiUjYGJmgsRckKXXKBPZnnK850ljF47UPRblJ0k75bu8Fzp8GPiKQMU0JhvbdGqM8_8inRhkCJ3CeRFwjNWt4twE2v6mxQgcaj0Ns2ThKRv-apQX79dtLpNyMuet9F6wayz4zKYtJyFTOBXR33EMAffwHTB989WNMmmrHWJeNs8VlPY19CbsdAoCtSTzorp3ECYEnIUSerKdGSvs6-lrOqZDwN8eif5YF9cqWKafCAWi7Gp4CMX2t8RSBX7FCmJFgBAcSoXcWxL695Qx9rAI-zAa7zHjICkm_WOpplglfPTKmZGmGhz_WvEd_jm0q05PDzgFLoTwiWpHxbSmsQTT5NMTceOYIKuASy2t_7-kmgi-fsEVLFgIjX3=w373-h317-no?authuser=0",
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
    });
  }

  function search() {
    const apiKey = "d7a6e9ae202ed10b9845b2800ff1ad9c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherWrap">
        <div className="WeatherForm">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-city"
              autoFocus="on"
              onChange={handleCityChange}
            />

            <input type="submit" value="Search" className="btn-light" />
          </form>
        </div>
        <WeatherInfo data={weatherData} />;
      </div>
    );
  } else {
    search();
    return <Loader type="Circles" color="#00BFFF" height={80} width={80} />;
  }
}
