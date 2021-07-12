import React, { useState, useEffect, FC } from "react";
import DayCard from "./DayCard";

import axios from "axios";

interface elemnt {
  units: string;
  contryId: any;
  diferentWeather: string;
}

const NextDays: FC<elemnt> = ({ units, contryId, diferentWeather }) => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      contryId === undefined
        ? " "
        : await axios(
            `https://api.openweathermap.org/data/2.5/forecast?id=${contryId}&units=${units}&appid=${
              import.meta.env.VITE_APP_REACT_APP_API_KEY
            }`
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
  }, [contryId, units]);

  const formatDayCards = () => {
    return data.dailyData.map((reading: any, index: any) => (
      <DayCard
        reading={reading}
        key={index}
        diferentWeather={diferentWeather}
        units={units}
      />
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
