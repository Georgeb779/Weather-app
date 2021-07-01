import React, { useState, useEffect, FC } from "react";
import DayCard from "./DayCard";

import axios from "axios";

interface elemnt {
  units: string;
  contryId: any;
}

const NextDays: FC<elemnt> = ({ units, contryId }) => {
  const [data, setData] = useState<any>([]);

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
              const dailyData = result.data.list.filter((reading: any) =>
                reading.dt_txt.includes("12:00:00")
              );
              setData({
                fullData: result.data.list,
                dailyData: dailyData,
              });
            })
            .catch((error) => {
              console.error(error);
            });
    };

    fetchData();
  }, [contryId]);


  const formatDayCards = () => {
    return data.dailyData.map((reading: any, index: any) => (
      <DayCard reading={reading} key={index}  diferentWeather={diferentWeather } units={units}/>
    ));
  };

  return (
    <>
      {data.length <= 0 ? (
        "   "
      ) : (
        <div className="days-main-container">{formatDayCards()}</div>
      )}
    </>
  );
};

export default NextDays;
