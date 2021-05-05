import "./App.css";
import Search from "./Search";
import Main from "./Main";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search />
        <Main />

        <div className="repo-link">
          <a
            href="https://github.com/vectorbeat/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Check out my GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
