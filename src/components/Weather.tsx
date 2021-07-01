import React, { useState, useEffect, FC } from "react";

// import SearchButton from "./SearchButton";

import moment from "moment";

interface elemnt {
  main: string;
  id: number;
  description: string;
  icon: string;
  temp: number;
  country: string;
}

const Weather: FC<any> = ({ data, units, sidebar, setSidebar }) => {
  // states
  const [myWeatherState, setMyWeatherState] = useState<string>("01d");
  const [weatherDescription, setWeatherDescription] =
    useState<string>("Description");
  const [degrees, setDegrees] = useState<number>(0);
  const [country, setCountry] = useState<string>(" ");

  // effects
  useEffect(() => {
    typeof data.weather === "undefined"
      ? console.log("Cargado")
      : data.weather.map((el: elemnt) => {
          setMyWeatherState(el.icon);
          setWeatherDescription(el.description);
          setWeatherDescription(el.description);
          setDegrees(el.temp);
          setCountry(data.sys.country);
        });

    typeof data.weather === "undefined" || typeof data.weather === "undefined"
      ? console.log("Cargado")
      : setDegrees(data.main.temp);
  });

  const diferentWeather: any = {
    "01d": "day_clear",
    "02d": "day_partial_cloud",
    "03d": "cloudy",
    "04d": "broken_clouds",
    "09d": "rain",
    "10d": "day_rain",
    "11d": "thunder",
    "13d": "snow",
    "50d": "mist",
    "01n": "night_clear",
    "02n": "night_partial_cloud",
    "03n": "night_partial_cloud",
    "04n": "night_partial_cloud",
    "09n": "rain",
    "10n": "night_rain",
    "11n": "thunner",
    "13n": "snow",
    "50n": "mist",
  };

  let actualWeather = diferentWeather[myWeatherState];

  const handleToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="weather-info-container">
      <div className="weather-info-header">
        <span onClick={handleToggle} className="btn-search">
          Search for places
        </span>
      </div>
      <div className="weather-info">
        <img src={`../images/${actualWeather}.png`} alt="weather icons" />

        <ul>
          <li className="weather-degrees">
            {degrees} {units === "metric" ? <p> ºC </p> : <p> ºF</p>}
          </li>
          <li>{weatherDescription}</li>
          <li> {moment().format("LLLL")}</li>
          <li>
            {data.name} {country}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Weather;
