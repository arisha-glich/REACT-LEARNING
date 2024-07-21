import React, { useState, useEffect } from 'react';

export function TimerComponent() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => {
       //clearInterval(intervalId); // starts from the previous state
       console.log('clear')
    };
  }, []);

  return <div>Time: {time}s</div>;
}
