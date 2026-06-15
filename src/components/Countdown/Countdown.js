import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Mundial 2026 comienza el 12 de junio de 2026
      const targetDate = new Date('2026-06-12T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <h2>Cuenta Regresiva al Mundial 2026</h2>
      <p className="subtitle">¡Falta poco para el mayor espectáculo del fútbol!</p>
      
      <div className="countdown-container">
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="time-label">Días</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="time-label">Horas</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="time-label">Minutos</div>
        </div>
        <div className="separator">:</div>
        <div className="time-unit">
          <div className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="time-label">Segundos</div>
        </div>
      </div>

      <div className="tournament-info">
        <div className="info-card">
          <h3>📍 Sedes</h3>
          <p>Canadá, México y Estados Unidos</p>
        </div>
        <div className="info-card">
          <h3>🗓️ Fecha</h3>
          <p>12 de junio - 13 de julio de 2026</p>
        </div>
        <div className="info-card">
          <h3>🏆 Participantes</h3>
          <p>32 selecciones</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
