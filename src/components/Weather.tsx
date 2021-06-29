import React from "react";

interface ISstate {
  weatherData: {
    name: string;
    weather: any[];
    main: any;
  };
}

interface DiferentWeather {
  Weathercomponet: {
    Clouds: string;
  };
}

const Weather: React.FC<ISstate> = ({ weatherData }) => {



  const clima = weatherData.weather[1];
  console.log(clima);

  

  const diferentWeather: DiferentWeather["Weathercomponet"] = {
    Clouds: "Clear.png",
  };



  let actualWeather = diferentWeather[clima];



  
  return (
    <div>
      {typeof weatherData.name === "undefined"
        ? console.log("Cargado")
        : weatherData.weather.map((el) => (
            <div>
              <p key={el.id}>{el.main}</p>
            </div>
          ))}

      {typeof weatherData.name === "undefined"
        ? console.log("Cargado")
        : weatherData.main.temp}

      <img src={`/icons/${actualWeather}.png`} alt="" />

      {typeof weatherData.name === "undefined"
        ? console.log("Cargado")
        : weatherData.weather.map((el) => <p key={el.id}>{el.main}</p>)}

      <p>{weatherData.name}</p>
    </div>
  );
};

export default Weather;
