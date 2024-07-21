import { useState, useEffect } from 'react';

function useTimer(endDate) {
  const [leftTime, setLeftTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateLeftTime = () => {
      const remainingTime = new Date(endDate) - new Date();
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
      setLeftTime(calculateLeftTime());
    };

    updateTimer();

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [endDate]);

  return leftTime;
}

export default useTimer;
