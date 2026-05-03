import React, { useRef, useEffect } from "react";
import "./Bonuses.css";

const BONUSES = [
  {
    icon: "📚",
    title: "Bonus 1: AI Targeting Prompts",
    desc: "25+ battle-tested prompts to find buyer-intent prospects instantly.",
    worth: "₹299",
  },
  {
    icon: "🎬",
    title: "Bonus 2: My Winning Ad Samples",
    desc: "10+ top-performing video ads with complete breakdowns.",
    worth: "₹299",
  },
  {
    icon: "🎯",
    title: "Bonus 3: AI Video Ad Formula",
    desc: "Psychological templates that make prospects stop scrolling and take action.",
    worth: "₹299",
  },
  {
    icon: "🔑",
    title: "Bonus 4: Inner Circle Access",
    desc: "Lifetime entry to Aafrid's private mastermind community.",
    worth: "₹299",
  },
];

const BONUS5 = {
  icon: "🔧",
  title: "Bonus 5: Lead to buyer Funnel Template",
  desc: "Ready-to-use automated funnel that pre-qualifies leads before they reach you.",
  worth: "₹299",
};

const Bonuses = ({ onRegisterClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="bonuses" className="bonuses-section" ref={ref}>
      <div className="bonuses__container">
        <h2 className="bonuses__title reveal">
          Register Today &amp; Get{" "}
          <span className="bonuses--accent">₹25,000 Worth Of Bonuses</span> — FREE
        </h2>

        <div className="bonuses__grid reveal">
          {BONUSES.map((b) => (
            <div key={b.title} className="bonus-card">
              <div className="bonus-card__icon">{b.icon}</div>
              <div className="bonus-card__content">
                <h3 className="bonus-card__title">{b.title}</h3>
                <p className="bonus-card__desc">{b.desc}</p>
                <span className="bonus-card__worth">Worth: {b.worth}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus 5 centered */}
        <div className="bonuses__center reveal">
          <div className="bonus-card bonus-card--single">
            <div className="bonus-card__icon">{BONUS5.icon}</div>
            <div className="bonus-card__content">
              <h3 className="bonus-card__title">{BONUS5.title}</h3>
              <p className="bonus-card__desc">{BONUS5.desc}</p>
              <span className="bonus-card__worth">Worth: {BONUS5.worth}</span>
            </div>
          </div>
        </div>

        <p className="bonuses__note reveal">
          ALL BONUSES DELIVERED ONLY TO LIVE MASTERCLASS ATTENDEES. REPLAY VIEWERS WILL NOT RECEIVE BONUSES.
        </p>

        <div className="bonuses__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
