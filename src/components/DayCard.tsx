import React, { useState, useEffect, FC } from "react";
import moment from "moment";

interface elemnt {
  reading: any;
  diferentWeather: string;
  units:string
}

const DayCard: FC<elemnt> = ({ reading, diferentWeather ,units}) => {
  const [myWeatherState, setMyWeatherState] = useState<string>("01d");

  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  useEffect(() => {
    setMyWeatherState(diferentWeather[reading.weather[0].icon]);
  }, [reading]);

  return (
    <div className="days-container">
      <h3>{moment(newDate).format("dddd")}</h3>
      <p>{moment(newDate).format("MMMM Do, h:mm a")}</p>

      <img src={`/src/images/${myWeatherState}.png`} alt="" />
      <div className="temp">
        <p>{reading.weather[0].description}</p>
        <p>{Math.round(reading.main.temp)} {units === "metric" ?  "ºC " : " ºF"}</p>
      </div>
    </div>
  );
};

export default DayCard;
