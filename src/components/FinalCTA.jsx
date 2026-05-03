import React, { useRef, useEffect, useState } from "react";
import "./FinalCTA.css";
import { CONFIG } from "../utils/config";

const FinalCTA = ({ onRegisterClick }) => {
  const ref = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 29, seconds: 39 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) return { hours: 0, minutes: 0, seconds: 0 };
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="final-cta" className="finalcta-section" ref={ref}>
      <div className="finalcta__container">
        <h2 className="finalcta__title reveal">
          Your Affiliate Growth Is One<br />Masterclass Away...
        </h2>
        <p className="finalcta__subtitle reveal">
          Stop guessing. Start building a real automated business today.
        </p>

        <div className="finalcta__box reveal">
          <div className="finalcta__event-time">Thursday @ 6:00 PM</div>
          <div className="finalcta__zoom">LIVE ON ZOOM</div>

          <button className="btn-primary-large" onClick={onRegisterClick}>
            REGISTER FOR FREE NOW
          </button>
          <p className="spots-text">Only 97 Spots Available</p>

          <div className="finalcta__countdown" role="timer" aria-live="polite">
            <div className="cd-unit">
              <span className="cd-val">{pad(timeLeft.hours)}</span>
              <span className="cd-lbl">Hours</span>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-unit">
              <span className="cd-val">{pad(timeLeft.minutes)}</span>
              <span className="cd-lbl">Minutes</span>
            </div>
            <div className="cd-sep">:</div>
            <div className="cd-unit">
              <span className="cd-val">{pad(timeLeft.seconds)}</span>
              <span className="cd-lbl">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
