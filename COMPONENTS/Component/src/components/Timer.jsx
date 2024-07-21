import React, { useState, useEffect } from "react";
import useTimer from "../hooks/useTimer";

function Timer({ enddate }) {
 const lefttime= useTimer(enddate)
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
