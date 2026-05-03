import React, { useEffect, useRef, useState } from "react";
import { CONFIG } from "../utils/config";
import "./Hero.css";

const Hero = ({ onRegisterClick }) => {
  const heroRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 36, seconds: 41 });

  // Countdown timer
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
    const els = heroRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section id="hero" className="hero" ref={heroRef} aria-labelledby="hero-headline">
      <div className="hero__container">
        {/* Badge */}
        <div className="hero__badge reveal">
          ONLY FOR AFFILIATE MARKETERS & BUSINESS OWNERS
        </div>

        {/* Headline */}
        <h1 id="hero-headline" className="hero__headline reveal">
          Generate <span className="headline--accent">50-100 Quality Leads &amp; Sell HTC Packages Daily</span>{" "}
          by using AI Lead to buyer Funnel system.
        </h1>

        {/* Sub-headline */}
        <p className="hero__subheadline reveal">
          Generate 50-100 Quality Leads Daily &amp; Hit ₹1 Lakh/Month Using AI-Powered Lead Ads
        </p>

        {/* Two-column: Video + Event Info */}
        <div className="hero__content-row reveal">
          {/* Video */}
          <div className="hero__video-wrapper">
            <div className="video-label">
              <span className="live-dot"></span> LIVE · Leads Secret Revealed
            </div>
            <iframe
              src={`${CONFIG.VIDEO_URL}?rel=0&modestbranding=1`}
              title="AI Lead Ads Masterclass"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="hero__iframe"
            ></iframe>
            <div className="video-cta-overlay">
              <p className="video-cta-text">JOIN AI LEAD ADS MASTERCLASS NOW</p>
              <button className="video-register-btn" onClick={onRegisterClick}>REGISTER NOW →</button>
            </div>
          </div>

          {/* Event Info */}
          <div className="hero__event-box">
            <div className="event-grid">
              <div className="event-item">
                <span className="event-icon">📅</span>
                <div>
                  <div className="event-label">DATE</div>
                  <div className="event-value">Thursday</div>
                </div>
              </div>
              <div className="event-item">
                <span className="event-icon">🕕</span>
                <div>
                  <div className="event-label">TIME</div>
                  <div className="event-value">6:00 PM IST</div>
                </div>
              </div>
              <div className="event-item">
                <span className="event-icon">⏱</span>
                <div>
                  <div className="event-label">DURATION</div>
                  <div className="event-value">3 Hours</div>
                </div>
              </div>
              <div className="event-item">
                <span className="event-icon">📹</span>
                <div>
                  <div className="event-label">WHERE</div>
                  <div className="event-value event-value--green">Live on Zoom</div>
                </div>
              </div>
            </div>
            <div className="event-footer">
              <span className="event-bonus">Bonuses Worth ₹25,000</span>
              <span className="event-seats">Limited to 97 Seats</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hero__cta reveal">
          <button
            id="hero-register-btn"
            className="btn-primary-large"
            onClick={onRegisterClick}
          >
            REGISTER FOR FREE NOW
          </button>
          <p className="hero__spots-text">Only 97 Spots Available</p>
        </div>

        {/* Countdown */}
        <div className="hero__countdown reveal" role="timer" aria-live="polite">
          <div className="countdown-unit">
            <span className="countdown-value">{pad(timeLeft.hours)}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-sep">:</div>
          <div className="countdown-unit">
            <span className="countdown-value">{pad(timeLeft.minutes)}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-sep">:</div>
          <div className="countdown-unit">
            <span className="countdown-value">{pad(timeLeft.seconds)}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
