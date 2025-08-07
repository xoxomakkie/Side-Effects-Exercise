import React, { useRef, useEffect, useState } from "react";

const STAR_SIZE = 20;

const Star = ({ id, position, destroyStar }) => {
  const starRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Focus star on first render
  useEffect(() => {
    if (starRef.current) {
      starRef.current.focus();
      setIsFocused(true);
    }
  }, []);

  return (
    <div
      ref={starRef}
      tabIndex="0" // Make focusable
      onClick={() => destroyStar(id)}
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: STAR_SIZE,
        height: STAR_SIZE,
        borderRadius: "50%",
        backgroundColor: "yellow",
        cursor: "pointer",
        boxShadow: isFocused ? "0 0 10px 3px yellow" : "none",
        transition: "box-shadow 0.3s ease",
      }}
      title="Click to destroy star"
    />
  );
};

export default Star;
