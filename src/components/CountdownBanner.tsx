import { useEffect, useState } from 'react';

const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-06-19T23:59:00-03:00'); // Brasília time UTC-3

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white py-2 px-4 text-center font-bold">
      {expired ? (
        <span>⚠️ Oferta encerrada</span>
      ) : (
        <span>
          🔥 Oferta encerra em: {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes} minutos, {timeLeft.seconds} segundos
        </span>
      )}
    </div>
  );
};

export default CountdownBanner;