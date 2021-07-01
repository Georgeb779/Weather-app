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
  const [units, setMetric] = useState<string>("metric");
  const [sidebar, setSidebar] = useState<boolean>(true);

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
              }&units=${units}`
            )
              .then((result) => {
                setData(result.data);
                setContryId(result.data.id);
              })

              .catch((error) => {
                console.error(error);
              });
      }
    };

    fetchData();
  }, [lat, long]);

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
          />

          <Weather
            data={data}
            units={units}
            setSidebar={setSidebar}
            sidebar={sidebar}
          />
        </div>

        <div className="sideright-container">
          <NextDays units={units} contryId={contryId} />
          <Hightlights data={data} units={units} />
        </div>
      </div>
      <div className="footer">
        <a
          href="https://github.com/Georgeb779"
          target="_blank"
          rel="noreferrer"
        >
          GeorgeDev
        </a>
      </div>
    </>
  );
};

export default App;
