import React, { useEffect, useState } from "react";
import "./AdvityaPopup.css";

export default function AdvityaPopup({ onClose }) {

  // 👉 set your event date here
  const targetDate = new Date("2026-02-27T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {

    const timer = setInterval(() => {

      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });

    }, 1000);

    return () => clearInterval(timer);

  }, [targetDate]);

  return (

    <div className="popup-backdrop" onClick={onClose}>

      <div
        className="speech-wrapper"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="speech-card">

          <img
            src="/AdvityaPopup.jpeg"
            alt="poster"
            className="poster"
          />
          <a href="/register" class="register-sticker">REGISTER NOW</a>


          <div className="coming">
            COMING SOON

            <div className="timer">
              {timeLeft.days} DAYS |
              {" "}
              {timeLeft.hours} HOURS |
              {" "}
              {timeLeft.minutes} MIN |
              {" "}
              {timeLeft.seconds} SEC
            </div>

          </div>

        </div>

        <div className="speech-tail"></div>

      </div>

    </div>

  );
}