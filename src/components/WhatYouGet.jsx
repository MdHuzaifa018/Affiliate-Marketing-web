import React, { useRef, useEffect } from "react";
import "./WhatYouGet.css";

const FEATURES = [
  {
    icon: "🔒",
    title: "100+ AI Quality Lead Secret",
    desc: "Build an AI Lead gen system so every lead you generate actually wants to buy.",
  },
  {
    icon: "🔒",
    title: "Live AI Ads Blueprint",
    desc: "Create scroll-stopping video ads using AI tools – no editing skills, no expensive software needed.",
  },
  {
    icon: "⚡",
    title: "85% Automated Lead",
    desc: "DFY Funnel system that nurtures, qualifies, and converts leads on autopilot without daily messaging.",
  },
  {
    icon: "💬",
    title: "WhatsApp Protection Protocol",
    desc: "Scale your messaging without getting banned.",
  },
  {
    icon: "👥",
    title: "AI Automation Team",
    desc: "If your part time business become full time then your AI team saves your 80% Time.",
  },
  {
    icon: "📈",
    title: "1L/Monthly Affiliate Roadmap",
    desc: "Proven roadmap to generate consistent sales in your IDP business",
  },
];

const WhatYouGet = ({ onRegisterClick }) => {
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
    <section id="what-you-get" className="wyg-section" ref={ref}>
      <div className="wyg__container">
        <h2 className="wyg__title reveal">
          Here's Exactly What You'll get In This{" "}
          <span className="wyg--accent">90 min AI Masterclass</span>
        </h2>

        {/* Funnel image placeholder */}
        <div className="wyg__funnel reveal">
          <div className="funnel-steps">
            <div className="funnel-step">
              <div className="funnel-step__icon">📘</div>
              <div className="funnel-step__label">Facebook Ads</div>
            </div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-step">
              <div className="funnel-step__icon">📄</div>
              <div className="funnel-step__label">Landing Page</div>
            </div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-step">
              <div className="funnel-step__icon">💬</div>
              <div className="funnel-step__label">WhatsApp Automate</div>
            </div>
            <div className="funnel-arrow">→</div>
            <div className="funnel-step funnel-step--highlight">
              <div className="funnel-step__icon">💰</div>
              <div className="funnel-step__label">Payment Received</div>
              <div className="funnel-step__amount">₹ 10,000 Received</div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="wyg__grid">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="wyg-card reveal"
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="wyg-card__icon">{f.icon}</div>
              <div>
                <h3 className="wyg-card__title">{f.title}</h3>
                <p className="wyg-card__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wyg__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
