import React, { useState, useEffect, FC } from "react";
import moment from "moment";

interface elemnt {
  reading: any;
  diferentWeather: string;
  units: string;
}

const DayCard: FC<any> = ({ reading, diferentWeather, units }) => {
  const [myWeatherState, setMyWeatherState] = useState<string>("day_rain");

  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  useEffect(() => {
    const fetchData = async () => {
      setMyWeatherState(diferentWeather[reading.weather[0].icon]);
    };
    fetchData();
  }, [reading]);

  const getSrc = (myWeatherState: any) => {
    const path = `/src/images/${myWeatherState}.png`;
    const modules = import.meta.globEager("/src/images/*.png");
    return modules[path].default;
  };


  return (
    <div className="days-container">
      <h3>{moment(newDate).format("dddd")}</h3>
      <p>{moment(newDate).format("MMMM Do, h:mm a")}</p>

      <img src={getSrc(myWeatherState)} alt="" />

      <div className="temp">
        <p>{reading.weather[0].description}</p>
        <p>
          {Math.round(reading.main.temp)} {units === "metric" ? "ºC " : " ºF"}
        </p>
      </div>
    </div>
  );
};

export default DayCard;
