import React from "react";

function DetailBox(props) {
  const { name, value } = props.data;
  return (
    <div className="detail-box">
      <div className="detail-content">
        <div className="centered">{name}</div>
        <div className="detail-value">{value}</div>
      </div>
    </div>
  );
}

export default DetailBox;
