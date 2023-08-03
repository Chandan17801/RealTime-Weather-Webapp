import React from "react";
import DetailBox from "./DetailBox";

import "./Details.css";

function Details(props) {
  return (
    <div className="details">
      <div className="centered sub-heading">More details of todays weather</div>
      <div className="detail-grid">
        {props.data.map((d) => (
          <DetailBox key={d.name} data={d} />
        ))}
      </div>
    </div>
  );
}

export default Details;
