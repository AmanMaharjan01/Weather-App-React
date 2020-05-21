import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const location = "kathmandu";
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=834532ec082ecebe1d9543e77d0c7d47`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      {!loading && !error ? (
        <div className="wrapper">
          <form>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            country={weather.country}
            city={weather.city}
          />
        </div>
      ) : loading ? (
        <div>
          <h4>Loading</h4>
        </div>
      ) : !loading && error ? (
        <div>
          <h2>404!, Place not Found</h2>
          <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null}
      {/* <WeatherCard temp={-5} condition="Mist" country="NP" city="ktm" />
      <WeatherCard temp={38} condition="Clear" country="ES" city="madrid" />  */}
    </div>
  );
}

export default App;
