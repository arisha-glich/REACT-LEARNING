import { useState, useEffect } from "react";

function useTimer(endDate) {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateLeftTime = () => {
      const now = new Date();
      const end = new Date(endDate);
      const remainingTime = end - now;

      if (remainingTime <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((remainingTime % (1000 * 60)) / 1000),
      };
    };

    const updateTimer = () => {
      setLeftTime(calculateLeftTime());
    };
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
    return () => {
      clearInterval(intervalId);
      //console.log('Interval cleared at:', new Date().toLocaleTimeString());
    };
  }, []);

  return leftTime;
}

export default useTimer;
