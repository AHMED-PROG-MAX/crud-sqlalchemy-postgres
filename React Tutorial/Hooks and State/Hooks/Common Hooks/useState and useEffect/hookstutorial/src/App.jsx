import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  // Effect to run every second (similar to componentDidMount and componentDidUpdate)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return <h1>Timer: {time} seconds</h1>;
}

export default Timer;
