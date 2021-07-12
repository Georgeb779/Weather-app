import React, { useState, useEffect, FC } from "react";
import Settings from "./Settings";

import moment from "moment";

interface elemnt {
  main: string;
  id: number;
  description: string;
  icon: string;
  temp: number;
  country: string;
  setMetric: string;
  diferentWeather: string;
}

const Weather: FC<any> = ({
  data,
  units,
  sidebar,
  setSidebar,
  setMetric,
  setIsCLose,
  isCLose,
  diferentWeather,
}) => {
  // states
  const [myWeatherState, setMyWeatherState] = useState<string>("01d");
  const [weatherDescription, setWeatherDescription] =
    useState<string>("Description");
  const [degrees, setDegrees] = useState<number>(0);
  const [country, setCountry] = useState<string>(" ");

  // effects
  useEffect(() => {
    typeof data.weather === "undefined"
      ? " "
      : data.weather.map((el: elemnt) => {
          setMyWeatherState(el.icon);
          setWeatherDescription(el.description);
          setWeatherDescription(el.description);
          setDegrees(el.temp);
          setCountry(data.sys.country);
        });

    typeof data.weather === "undefined" || typeof data.weather === "undefined"
      ? " "
      : setDegrees(data.main.temp);
  });

  let actualWeather = diferentWeather[myWeatherState];

  const getSrc = (actualWeather: any) => {
    const path = `../images/${actualWeather}.png`;
    const modules = import.meta.globEager("../images/*.png");
    return modules[path].default;
  };

  const handleToggle = () => {
    setSidebar(!sidebar);
  };

  const handleToggleSettings = () => {
    setIsCLose(true);
  };

  return (
    <div className="weather-info-container">
      <div className="weather-info-header">
        <span onClick={handleToggle} className="btn-search">
          Search for places
        </span>
        <Settings
          setMetric={setMetric}
          units={units}
          isCLose={isCLose}
          setIsCLose={setIsCLose}
        />
      </div>
      <div onClick={handleToggleSettings} className="weather-info">
        <img src={getSrc(actualWeather)} alt="weather icons" />

        <ul>
          <li className="weather-degrees">
            {Math.floor(degrees)}{" "}
            {units === "metric" ? <p> ºC </p> : <p> ºF</p>}
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
