import React, { useRef, useEffect } from "react";
import "./Features.css";

const FEATURES = [
  {
    icon: "💰",
    title: "Earn Without a Product",
    desc: "Promote other people's products and earn commissions of 30%–80% — no inventory, no shipping, no headaches.",
  },
  {
    icon: "📱",
    title: "Work From Your Phone",
    desc: "Run your entire affiliate business from a smartphone. All you need is internet and the right strategy.",
  },
  {
    icon: "⚡",
    title: "Start Within 24 Hours",
    desc: "Our step-by-step blueprint lets you go from zero to your first commission within 24 hours of joining.",
  },
  {
    icon: "🤖",
    title: "Automation Systems",
    desc: "Set up once, earn forever. Learn how to build automation funnels that generate income while you sleep.",
  },
  {
    icon: "🎓",
    title: "No Experience Needed",
    desc: "Perfect for freshers, homemakers, and side-hustlers. If you can watch YouTube, you can do affiliate marketing.",
  },
  {
    icon: "🌍",
    title: "Sell Globally, Earn in INR",
    desc: "Promote products to customers worldwide and receive your payouts directly to your bank account.",
  },
];

const Features = ({ onRegisterClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section" ref={ref} aria-labelledby="features-title">
      <div className="features-section__container">
        <div className="section-badge reveal">🔥 What You'll Learn</div>
        <h2 id="features-title" className="section-title reveal">
          Everything You Need to Start Earning
          <span className="text--accent"> This Week</span>
        </h2>
        <p className="section-subtitle reveal">
          Proven strategies, live case studies, and hands-on mentorship — all for FREE.
        </p>

        <div className="features__grid">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className="feature-card reveal"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              role="article"
            >
              <div className="feature-card__icon" aria-hidden="true">{feat.icon}</div>
              <h3 className="feature-card__title">{feat.title}</h3>
              <p className="feature-card__desc">{feat.desc}</p>
            </div>
          ))}
        </div>

        <div className="features__cta reveal">
          <button
            id="features-register-btn"
            className="btn btn--primary btn--glow"
            onClick={onRegisterClick}
            aria-label="Register for masterclass"
          >
            🎯 Get Access — It's FREE →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
