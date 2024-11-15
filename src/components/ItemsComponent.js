import React from "react";
import "../App.css";

const ItemsComponent = ({
  birds,
  parachutes,
  fallingStars,
  clouds,
  difficulty,
}) => {
  return (
    <>
      {birds.map((bird) => (
        <div
          key={bird.id}
          className="bird"
          style={{ top: bird.y, left: bird.x }}
        >
          🦅
        </div>
      ))}
      {parachutes.map((parachute) => (
        <div
          key={parachute.id}
          className="parachute"
          style={{ top: parachute.y, left: parachute.x }}
        >
          🪂
        </div>
      ))}
      {fallingStars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{ top: star.y, left: star.x }}
        >
          ⭐
        </div>
      ))}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{ top: cloud.y, left: cloud.x }}
        >
          ☁️
        </div>
      ))}
    </>
  );
};

export default ItemsComponent;