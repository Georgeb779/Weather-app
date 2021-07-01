import React, { useState, useEffect, FC } from "react";
import axios from "axios";

interface elemnt {
  units: string;
  contryId: any;
}

const NextDays: FC<elemnt> = ({ units, contryId }) => {
  const [data, setData] = useState<any>([]);
  const [myWeatherState, setMyWeatherState] = useState<string>("01d");

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

  useEffect(() => {
    const fetchData = async () => {
      contryId === undefined
        ? " "
        : await axios(
            `http://api.openweathermap.org/data/2.5/forecast?id=${contryId}&appid=${
              import.meta.env.VITE_APP_REACT_APP_API_KEY
            }&units=${units}`
          )
            .then((result) => {
              setData(result.data);
            })
            .catch((error) => {
              console.error(error);
            });
    };

    fetchData();
  }, [contryId]);

  return (
    <div>
      {data.length <= 0 ? (
        "   "
      ) : (



        
        <ul className="days-main-container">

            
          <li className="days-container">
            <p>{data.list[4].dt_txt.split(" ")[0]} </p>

            <img
              src={`/icons/${
                diferentWeather[data.list[4].weather[0].icon]
              }.png`}
              alt=""
            />
            <div className="temp">
              <p>{data.list[4].main.temp_min}</p>

              <p>{data.list[4].main.temp_max}</p>
            </div>
          </li>







          <li className="days-container">
            <p>{data.list[12].dt_txt.split(" ")[0]} </p>

            <img
              src={`/icons/${
                diferentWeather[data.list[12].weather[0].icon]
              }.png`}
              alt=""
            />
            <div className="temp">
              <p>{data.list[12].main.temp_min}</p>

              <p>{data.list[12].main.temp_max}</p>
            </div>
          </li>
          <li className="days-container">
            <p>{data.list[20].dt_txt.split(" ")[0]} </p>

            <img
              src={`/icons/${
                diferentWeather[data.list[20].weather[0].icon]
              }.png`}
              alt=""
            />
            <div className="temp">
              <p>{data.list[20].main.temp_min}</p>

              <p>{data.list[20].main.temp_max}</p>
            </div>
          </li>
          <li className="days-container">
            <p>{data.list[28].dt_txt.split(" ")[0]} </p>

            <img
              src={`/icons/${
                diferentWeather[data.list[28].weather[0].icon]
              }.png`}
              alt=""
            />
            <div className="temp">
              <p>{data.list[28].main.temp_min}</p>

              <p>{data.list[28].main.temp_max}</p>
            </div>
          </li>
          <li className="days-container">
            <p>{data.list[36].dt_txt.split(" ")[0]} </p>

            <img
              src={`/icons/${
                diferentWeather[data.list[36].weather[0].icon]
              }.png`}
              alt=""
            />
            <div className="temp">
              <p>{data.list[36].main.temp_min}</p>

              <p>{data.list[36].main.temp_max}</p>
            </div>
          </li>



        </ul>
      )}




    </div>
  );
};

export default NextDays;
