import React from "react";

import "./Toggle.css";

function Toggle(props) {
  return (
    <span className="toggle">
      <div>C</div>
      <div className="toggle-border" onClick={props.toggle}>
        <div className={`toggle-ball ${props.data && "active"}`}>⚫</div>
      </div>
      <div>F</div>
    </span>
  );
}

export default Toggle;
