import React from "react";
import "../App.css";

const AirplaneComponent = ({ airplanePosition, setAirplanePosition }) => {
  return (
    <div
      className="airplane"
      style={{ top: airplanePosition.y, left: airplanePosition.x }}
    >
      🛩️
    </div>
  );
};

export default AirplaneComponent;