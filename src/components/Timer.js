import { useState, useEffect } from "react";
import "./Timer.css";

export function Timer({ startTimer, resetTimer }) {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    if (startTimer && seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [startTimer, seconds]);

  return (
    <div className="countdown">
      {seconds > 0 ? (
        <span>
          Countdown:
          <span style={{ color: seconds <= 5 ? "red" : "inherit" }}>
            {" "}
            {seconds}s
          </span>
        </span>
      ) : (
        <span id="time-up">Time's up!</span>
      )}
    </div>
  );
}

export default Timer;
