import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const [windowDimension, setDimension] = useState({
    width: 1750 + "px",
    height: 1500 + "px",
  });
  const detectSize = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);
  return (
    <div className="con">
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
      />
    </div>
  );
};

export default Confetti;
