import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

const App: FC = () => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.watchPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      {
        typeof long === "undefined" || typeof lat === "undefined"
          ? console.log("Cargado")
          : await axios(
              `${
                import.meta.env.VITE_APP_REACT_APP_API_URL
              }/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${
                import.meta.env.VITE_APP_REACT_APP_API_KEY
              }`
            )
              .then((result) => {
                setData(result.data);
                console.log(result.data);
              })

              .catch((error) => {
                console.error(error);
              });
      }
    };

    fetchData();
  }, [lat, long]);

  return <div className="App">{<Weather weatherData={data} />}</div>;
};

export default App;
