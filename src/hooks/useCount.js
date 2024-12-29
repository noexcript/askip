import { useEffect, useState, useMemo } from "react";

export const useCount = () => {
  // Definindo a data alvo fora do hook para evitar recriações desnecessárias
  const targetDate = useMemo(() => new Date("2025-01-13T23:59:59"), []);

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
  }, [targetDate]); // O intervalo depende apenas da data-alvo

  // Constantes que não mudam
  const inPts = useMemo(() => ["dias", "horas", "mins", "seg"], []);
  const inPts_ = useMemo(() => ["d", "h", "m", "s"], []);

  // Convertendo para os pontos de tempo
  const timesLeft = useMemo(() => {
    return Object.keys(timeLeft).reduce((acc, key, index) => {
      acc[inPts[index]] = timeLeft[key];
      return acc;
    }, {});
  }, [timeLeft, inPts]);

  const timesLeftTip = useMemo(() => {
    return Object.keys(timeLeft).reduce((acc, key, index) => {
      acc[inPts_[index]] = timeLeft[key];
      return acc;
    }, {});
  }, [timeLeft, inPts_]);

  return {
    timesLeft,
    timesLeftTip,
  };
};
