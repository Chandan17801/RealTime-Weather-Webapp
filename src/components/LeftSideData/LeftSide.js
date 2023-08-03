import React, { useState } from "react";
import Toggle from "../UIElements/Toggle";
import backArrow from "../../images/backarrow.png";
import searchIcon from "../../images/search.png"
import "./LeftSide.css";

function LeftSide(props) {
  const [on, setOn] = useState(false);
  const [place, setPlace] = useState("");
  const { name, country, currtime, temp_c, temp_f, condition } = props.data;
  let sunrise, sunset, moonrise, moonset, illumination;
  if (props.forecast) {
    sunrise = props.forecast[0].astro.sunrise;
    sunset = props.forecast[0].astro.sunset;
    moonrise = props.forecast[0].astro.moonrise;
    moonset = props.forecast[0].astro.moonset;
    illumination = props.forecast[0].astro.moon_illumination;
  }

  const toggleHandler = () => {
    setOn((prev) => !prev);
  };

  const changeHandler = (event) => {
    setPlace(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.fetchPlace(place);
  };

  return (
    <div className="left-side">
      <form className="form-bar" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="City Name"
          onChange={changeHandler}
        ></input>
        <button type="submit">
          <img src={searchIcon} alt="Search"/>
        </button>
      </form>
      <div className="header">
        <span className="back">
          <img src={backArrow} alt="back" />
        </span>
        <Toggle data={on} toggle={toggleHandler} />
      </div>
      <div className="centered time-date">
        <div className="time">
          {currtime ? currtime.substring(10, currtime.length) : "00:00"}
        </div>
        <div className="date">
          {currtime ? currtime.substring(0, 10) : "0000-00-00"}
        </div>
      </div>
      <div className="centered normal-text">{name}</div>
      <div className="centered normal-text">{country}</div>
      <div className="centered temperature">{on ? temp_f : temp_c}°</div>
      <div className="icon">
        <img
          src={
            condition
              ? condition.icon
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRuWSBLUZtVVpF15zjYaTpEhFok4ofsTFGMuLgEU&s"
          }
          alt="icon"
        />
      </div>
      <div className="centered weather">
        {condition ? condition.text : "Not found"}
      </div>
      <div className="astro">
        <div>Sunrise:</div>
        <div>{sunrise}</div>
        <div>Sunset:</div>
        <div>{sunset}</div>
        <div>Moonrise:</div>
        <div>{moonrise}</div>
        <div>Moonset:</div>
        <div>{moonset}</div>
        <div>Moon Illumination:</div>
        <div>{illumination}</div>
      </div>
    </div>
  );
}

export default LeftSide;
