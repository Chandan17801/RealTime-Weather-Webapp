import React, { useEffect, useState } from "react";
import Card from "./components/UIElements/Card";
import LeftSide from "./components/LeftSideData/LeftSide";
import Chart from "./components/LineChart/Chart";
import Details from "./components/Details/Details";

import "./App.css";

function App() {
  const [place, setPlace] = useState("New Delhi");
  const [leftData, setLeftData] = useState({});
  const [rightBottom, setRightBottom] = useState([
    { name: "Humidity", value: "0" },
    { name: "Wind", value: "0" },
    { name: "Gust", value: "0" },
    { name: "Precipitation", value: "0" },
    { name: "UV index", value: "0" },
    { name: "Feels like", value: "0" },
    { name: "Chance of Rain", value: "0" },
    { name: "Pressure", value: "0" },
  ]);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=e4beb9be3beb49629f885425230208&q=${place}&days=1&aqi=yes&alerts=yes`
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error();
        }
        setLeftData({
          name: result.location.name,
          country: result.location.country,
          currtime: result.location.localtime,
          temp_c: result.current.temp_c,
          temp_f: result.current.temp_f,
          condition: result.current.condition,
        });
        setRightBottom([
          { name: "Humidity", value: result.current.humidity + "%" },
          { name: "Wind", value: result.current.wind_mph + "m/h" },
          { name: "Gust", value: result.current.gust_mph + "m/h" },
          { name: "Precipitation", value: result.current.precip_mm + "mm" },
          { name: "UV index", value: result.current.uv },
          { name: "Feels like", value: result.current.feelslike_c + "°C" },
          { name: "Pressure", value: result.current.pressure_mb + "mb" },
          { name: "Chance of Rain", value: result.current.cloud + "%" },
        ]);
        setForecast(result.forecast.forecastday);
      } catch (error) {}
    };
    sendRequest();
  }, [place]);

  const fetchPlace = (p) => {
    setPlace(p);
  };

  return (
    <div className="app">
      <Card className="main-card">
        <LeftSide data={leftData} forecast={forecast} fetchPlace={fetchPlace} />
        <Card className="inner-card">
          <div>
            <div className="centered sub-heading">
              Check out today's weather information (°C)
            </div>
            <div className="chart-box">
              <Chart forecast={forecast} />
            </div>
          </div>
          <Details data={rightBottom} />
        </Card>
      </Card>
    </div>
  );
}

export default App;
