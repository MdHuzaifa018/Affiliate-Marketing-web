import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = ({ onRegisterClick }) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 8, seconds: 46 });

  // Offer countdown (matches reference sticky bar)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 0; seconds = 0; }
        return { minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <nav className="navbar" role="navigation" aria-label="Sticky offer bar">
      <div className="navbar__container">
        <div className="navbar__offer">
          <span className="navbar__free">FREE <s>₹299</s></span>
          <span className="navbar__timer">
            Offer Ends in{" "}
            <span className="navbar__timer-value">{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)} Mins</span>
          </span>
        </div>
        <button
          id="nav-register-btn"
          className="navbar__cta"
          onClick={onRegisterClick}
          aria-label="Register Now"
        >
          Register Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
