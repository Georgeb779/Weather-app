import React, { useState, useEffect, FC } from "react";

interface elemnt {
  data: any;
  units: string;
}

const Hightlights: FC<elemnt> = ({ data, units }) => {
  const [feelsLike, setFeelsLike] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [pressure, setPressure] = useState<number>(0);

  useEffect(() => {
    const setData = async () => {
      data === undefined ? console.log("Cargado") : setWind(data.wind.speed),
        setHumidity(data.main.humidity),
        setPressure(data.main.pressure),
        setFeelsLike(data.main.feels_like);
    };
    setData();
  }, [data]);

  return (
    <>
      <div className="Hightlights-container">
        <h1>Today’s Hightlights</h1>
        <div>
          Feels Like{" "}
          <span>
            {Math.floor(feelsLike)}{" "}
            {units === "metric" ? <p> ºC </p> : <p> ºF</p>}{" "}
          </span>
        </div>
        <div>
          Wind status{" "}
          <span>
            {Math.floor(wind)}{" "}
            {units === "metric" ? (
              <p className="simbol"> Meter/Sec </p>
            ) : (
              <p className="simbol"> Miles/Hour</p>
            )}{" "}
          </span>
        </div>
        <div>
          Humidity{" "}
          <span>
            {humidity} <p>%</p>
          </span>
          <progress id="file" max="100" value={humidity}></progress>
        </div>
        <div>
          Air Pressure <span>{pressure} </span>
        </div>
      </div>
    </>
  );
};

export default Hightlights;
