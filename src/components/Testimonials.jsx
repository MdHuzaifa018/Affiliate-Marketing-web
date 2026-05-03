import React, { useRef, useEffect } from "react";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    name: "Sazia A.",
    role: "Doctor & Housewife",
    earned: "Made ₹8 Lakhs",
    avatar: "SA",
    color: "#c8ff6e",
    text: '"I was struggling to balance my medical practice with IDP business. Aafrid\'s AI system completely changed everything—I now work just 2 hours daily on my business and make more than my medical practice!"',
  },
  {
    name: "Satya R.",
    role: "Housewife",
    earned: "Made ₹6 Lakhs",
    avatar: "SR",
    color: "#00ccff",
    text: '"I had ALL these problems before joining Aafrid\'s masterclass. My husband used to joke that I was running a \'charity business.\' Now I\'m the primary earner in our household!"',
  },
  {
    name: "Kejal",
    role: "Housewife",
    earned: "Made ₹1.5 Lakhs",
    avatar: "KJ",
    color: "#ffd700",
    text: '"As a housewife, I never thought I could do this business successfully. The AI system Aafrid taught completely transformed my approach. The automated funnel saves me 3-4 hours daily, and now I\'m consistently making sales while managing my household duties!"',
  },
];

const Testimonials = ({ onRegisterClick }) => {
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
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="testimonials__container">
        <div className="impact-label reveal">THE IMPACT</div>
        <h2 className="section-title reveal">
          Real People. Real Stories.
          <br />Real Transformations
        </h2>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__footer">
                <div
                  className="testimonial-card__avatar"
                  style={{ background: `${t.color}22`, border: `2px solid ${t.color}44`, color: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">
                    {t.role} · <span style={{ color: t.color }}>{t.earned}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="testimonials__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
