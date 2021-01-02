import logo from "./logo.svg";
import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello</p>
        <Loader
          type="Hearts"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
