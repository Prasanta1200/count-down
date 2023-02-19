import React, { useState, useEffect } from "react";
//import './App.css';

function CountDown() {
  const [timeCount, setTimeCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let countdownInterval;

    if (timeCount > 0) {
      countdownInterval = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(countdownInterval);
  }, [timeCount]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const inputTime = Math.floor(parseFloat(event.target.value));

      if (!isNaN(inputTime) && inputTime >= 0) {
        setTimeCount(inputTime);
        setCurrentTime(inputTime);
      } else {
        setTimeCount(0);
        setCurrentTime(0);
      }
    }
  };

  return (
    <div className="contener">
      <input type="text" id="timeCount" onKeyDown={handleKeyDown} />
      <div id="current-time">{currentTime}</div>
    </div>
  );
}

export default CountDown;