import React, { useState, useEffect, useCallback } from "react";
import Star from "./Star";

const STAR_SIZE = 20;

function getRandomPosition() {
  const x = Math.floor(Math.random() * (window.innerWidth - STAR_SIZE));
  const y = Math.floor(Math.random() * (window.innerHeight - STAR_SIZE));
  return { x, y };
}

const Space = () => {
  const [stars, setStars] = useState([]);

  // Add a new star every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStars((stars) => [
        ...stars,
        {
          id: Date.now() + Math.random(), // unique id
          position: getRandomPosition(),
        },
      ]);
    }, 2500);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Remove star by id
  const destroyStar = useCallback((id) => {
    setStars((stars) => stars.filter((star) => star.id !== id));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {stars.map((star) => (
        <Star key={star.id} id={star.id} position={star.position} destroyStar={destroyStar} />
      ))}
    </div>
  );
};

export default Space;
