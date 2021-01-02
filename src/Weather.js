import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div className="container">
      <img
        class="hellokittyRain"
        id="icon"
        src="src/images/01d.png"
        alt="hellokittymain"
      />
      <h1>
        <span className="temperature">16</span>°
        <span className="units">
          <a href="/" id="celsius-link">
            c
          </a>
          |<a href="/">f</a>
        </span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Tokyo</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="date">Tuesday</div>
            <h4 className="condition">Cloud</h4>
            <h5 className="windspeed">
              Wind:45<span></span> mph
            </h5>
          </div>
          <div className="row weatherTime"></div>
        </div>
        <div className="row">
          <div className="col">
            <form
              className="search-form"
              style={{ margin: "40px 10px 20px 0px" }}
            >
              <input
                type="text"
                placeholder="  Enter City Here 🌴"
                className="searchBar"
              />
              <input type="submit" value="Search" className="btn btn-light" />
              <button type="button" className="btn btn-success">
                Current
              </button>
            </form>
            <footer>
              <a
                href="https://github.com/meaganlouise/weatherApp"
                target="_blank"
                class="footer"
              >
                Open-source code by Meagan Louise{" "}
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
