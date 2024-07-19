import React, { useState, useEffect } from "react";

function Timer({ enddate }) {
  const [lefttime, setLefttime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateLeftTime = () => {
      const remainingTime = new Date(enddate) - new Date();
      const leftTime = {
        days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      };
      return leftTime;
    };

    const updateTimer = () => {
      setLefttime(calculateLeftTime());
    };

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);
    console.log(timerInterval);

    return () => clearInterval(timerInterval); //cleanup function ta k previous calculation remove hojayen
  }, []);

  return (
    <div>
      <h2>Remaining Time</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <div>
          <h3>{lefttime.days || "0"}</h3>
          <p>Days</p>
        </div>
        <div>
          <h3>{lefttime.hours || "0"}</h3>
          <p>Hours</p>
        </div>
        <div>
          <h3>{lefttime.minutes || "0"}</h3>
          <p>Minutes</p>
        </div>
        <div>
          <h3>{lefttime.seconds || "0"}</h3>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
