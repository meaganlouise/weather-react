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
            <input
              type="search"
              placeholder="Enter a city..."
              className="search-city"
              autoFocus="on"
            />

            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
        </div>
        <div className="col-6">
          <li className="List">
            <ul className="date">
              Tuesday <div className="time">11:11</div>
            </ul>
            <ul className="WeatherDescription">Cloudy</ul>
          </li>
        </div>
      </div>
      <div className="main-image">
        <img
          src="https://lh3.googleusercontent.com/qZ3xt91OFgq__y55lKM7h5t5WdRlHCm2v5ZfUCw13ZeiDzkryiVctnm7X3829PdVjQBBZasZjqiCuGrpL0eoixI53LW3yRpTc6-Tbh932-axXNQ_6FOCx4KpSOO3QlZ--nmVKi7j3-Vml2wuU7QV0DEakx7uvph4-Is4fjpTQV4lIGn5uD4HWahINoO8s5WBLSKf17krhHC_YiKJiZFnhMbPnYGMSQpGy8WWuhA0cYZcouMeoKod3CA16bgWkXO6fqCt4ruSEm_ek2HBfv_NjlrYMxLofJH5zGIzss0hQ31vQeq2ihLskgAF31n1ozqtPXU-WkV1HsxHCavhL1QdVrPvnvSqjyQOvPY4zUPPKpiHUeqiZwolUsAmcd8UpFA2pK1WenwjVWJS2iWKcPorl_MTJ15wswklQf9MA0l-Q-4BizbDOsdpoXl5RNyPoKKtYbgOTczMK7XNEzzZcbvouOK1AqDqHwm0tomMB0DfxjYKw0lmfLBR1WDSRdNvqxO5gnxElnsw8PeA2-uE3He9cVrq6sIEpc282wJD9VvkSvwqq6dCFqXh3_-AX9_j4okzMfxjIDu_dbgsSRzsRl6uHXVYPkSbWGLQjpdi-saoF-bz0W33q1-ngLXu7gk8sM7TEeOkFyfNYiVs69pjkTqO_Kmkjndip9sDNVM9TF8fiRVZM02ZlhqeNHgCMrsD=w853-h488-no?authuser=0"
          alt="Mostly Cloudy"
          className="MainIcon"
        />
      </div>

      <h2>
        <span className="degree">40°</span>
        <span className="celcius">c|f</span>
      </h2>
      <div className="ConditionsList">
        <li className="conditions">
          <ul>Precipitation</ul>
          <ul>Humidity</ul>
          <ul>Wind</ul>
        </li>
      </div>

      <footer>
        <a
          href="https://github.com/meaganlouise/weather-react"
          rel="nofollow"
          className="footer"
        >
          Open-source code by Meagan Louise
        </a>
      </footer>
    </div>
  );
}
