import React, { useState, useEffect, FC } from "react";
import Weather from "./components/Weather";
import SearchButton from "./components/SearchButton";
import NextDays from "./components/NextDays";
import Hightlights from "./components/Hightlights";

import axios from "axios";
import "./App.css";

const App: FC = () => {
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();
  const [data, setData] = useState<any>([]);
  const [contryId, setContryId] = useState<number>(3492908);
  const [units, setMetric] = useState<string>("imperial");
  const [sidebar, setSidebar] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [isCLose, setIsCLose] = useState<boolean>(true);

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
      navigator.geolocation.watchPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        setLoading(false);
      });

      await axios(
        `${
          import.meta.env.VITE_APP_REACT_APP_API_URL
        }/weather/?lat=${lat}&lon=${long}&APPID=${
          import.meta.env.VITE_APP_REACT_APP_API_KEY
        }&units=${units}`
      )
        .then((result) => {
          setData(result.data);
          setContryId(result.data.id);
        })

        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, [loading, units]);

  const handleToggle = () => {
    setSidebar(true);
    setIsCLose(true);
  };

  return (
    <>
      <div className="App">
        <div className="sideleft-container">
          <SearchButton
            data={data}
            setData={setData}
            units={units}
            sidebar={sidebar}
            setSidebar={setSidebar}
            setContryId={setContryId}
            setMetric={setMetric}
          />

          <Weather
            data={data}
            units={units}
            setSidebar={setSidebar}
            sidebar={sidebar}
            setMetric={setMetric}
            isCLose={isCLose}
            setIsCLose={setIsCLose}
            diferentWeather={diferentWeather}
          />
        </div>

        <div onClick={handleToggle} className="sideright-container">
          <NextDays units={units} contryId={contryId} diferentWeather={diferentWeather} />
          <Hightlights data={data} units={units} />
          <div className="footer">
            <a
              href="https://github.com/Georgeb779"
              target="_blank"
              rel="noreferrer"
            >
              GeorgeDev
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
