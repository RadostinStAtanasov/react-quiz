import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRamainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING Interval");

    const interval = setInterval(() => {
      setRamainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
