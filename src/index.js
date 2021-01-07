import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./Weather.css";

function App() {
  return (
    <div className="App">
      <Weather />
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
