import { useEffect, useState } from "react";

export const useCount = () => {
  const targetDate = new Date("2025-01-12T23:59:59");
  const [timing, setTiming] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      setTiming(!timing);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const inPts = ["dias", "horas", "mins", "seg"];
   const inPts_ = ["d", "h", "m", "s"];

  
  const timesLeft = Object.keys(timeLeft).reduce((acc, key, index) => {
    acc[inPts[index]] = timeLeft[key];
    return acc;
  }, {});
  
  const timesLeftTip = Object.keys(timeLeft).reduce((acc, key, index) => {
    acc[inPts_[index]] = timeLeft[key];
    return acc;
  }, {});

  return {
    timesLeft,
    timesLeftTip
  };
};
