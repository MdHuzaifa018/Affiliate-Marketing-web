import React, { useRef, useEffect, useState } from "react";
import { CONFIG } from "../utils/config";
import "./Urgency.css";

const Urgency = ({ onRegisterClick }) => {
  const ref = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 47, seconds: 23 });

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 0; minutes = 0; seconds = 0; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="urgency" className="urgency-section" ref={ref} aria-labelledby="urgency-title">
      <div className="urgency__container">
        {/* Countdown */}
        <div className="urgency__badge reveal">⏰ Registration Closes In</div>

        <div className="countdown reveal" role="timer" aria-live="polite" aria-label="Time remaining for registration">
          <div className="countdown__unit">
            <span className="countdown__value">{pad(timeLeft.hours)}</span>
            <span className="countdown__label">Hours</span>
          </div>
          <div className="countdown__divider">:</div>
          <div className="countdown__unit">
            <span className="countdown__value">{pad(timeLeft.minutes)}</span>
            <span className="countdown__label">Minutes</span>
          </div>
          <div className="countdown__divider">:</div>
          <div className="countdown__unit">
            <span className="countdown__value">{pad(timeLeft.seconds)}</span>
            <span className="countdown__label">Seconds</span>
          </div>
        </div>

        <h2 id="urgency-title" className="urgency__title reveal">
          🔥 Only <span className="highlight">{CONFIG.SEATS_LEFT} Seats</span> Left!
        </h2>
        <p className="urgency__desc reveal">
          This FREE masterclass has <strong>{CONFIG.TOTAL_SEATS} total seats</strong> and{" "}
          <strong>{CONFIG.TOTAL_SEATS - CONFIG.SEATS_LEFT} are already taken</strong>. Once it's full,
          registration closes permanently. Don't miss your chance.
        </p>

        {/* Progress bar */}
        <div className="seats-progress reveal" aria-label={`${CONFIG.TOTAL_SEATS - CONFIG.SEATS_LEFT} of ${CONFIG.TOTAL_SEATS} seats taken`}>
          <div className="seats-progress__bar">
            <div
              className="seats-progress__fill"
              style={{ width: `${((CONFIG.TOTAL_SEATS - CONFIG.SEATS_LEFT) / CONFIG.TOTAL_SEATS) * 100}%` }}
            ></div>
          </div>
          <div className="seats-progress__labels">
            <span>🔥 {CONFIG.TOTAL_SEATS - CONFIG.SEATS_LEFT} seats taken</span>
            <span>⚠️ Only {CONFIG.SEATS_LEFT} left</span>
          </div>
        </div>

        {/* What's included */}
        <div className="urgency__perks reveal">
          {[
            "✅ Live Masterclass Access",
            "✅ Downloadable Resource Kit",
            "✅ Private WhatsApp Community",
            "✅ 30-Day Action Plan",
            "✅ Recorded Sessions",
            "✅ Lifetime Updates",
          ].map((perk) => (
            <div key={perk} className="perk">{perk}</div>
          ))}
        </div>

        <button
          id="urgency-register-btn"
          className="btn btn--primary btn--glow btn--large reveal"
          onClick={onRegisterClick}
          aria-label="Register now before seats are full"
        >
          ⚡ Grab My FREE Seat Now — Before It's Gone!
        </button>

        <p className="urgency__note reveal">🔒 100% Free · No spam · Unsubscribe anytime</p>
      </div>
    </section>
  );
};

export default Urgency;
