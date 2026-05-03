import React, { useRef, useEffect } from "react";
import "./ImpactSection.css";

const ImpactSection = ({ onRegisterClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const results = [
    { label: "KEJAL EARNED", amount: "₹1 LAKH", sub: "IN LESS THAN 30 DAYS" },
    { label: "ONE STRATEGY TOOK HER FROM", amount: "₹30K TO ₹1.7 LAKH", sub: "IN JUST 3 DAYS" },
    { label: "", amount: "₹1.5 LAKH", sub: "IN JUST 30 DAYS" },
    { label: "DR. SAZIA'S TRANSFORMATION", amount: "₹8 LAKHS", sub: "IN 6 MONTHS" },
    { label: "SHE MADE", amount: "₹1.25 LAKH", sub: "IN 30 DAYS" },
    { label: "", amount: "1.5 LAKH", sub: "REVENUE IN JUST 30 DAYS" },
  ];

  return (
    <section id="impact" className="impact-section" ref={ref}>
      <div className="impact__container">
        <div className="impact__label reveal">THE IMPACT</div>
        <h2 className="impact__title reveal">
          <span className="impact--accent">1300+ IDP Affiliates</span>
          <br />Already Transformed Their Business
        </h2>
        <p className="impact__subtitle reveal">
          These are not screenshots from 2020. These are real results from real people using this exact framework right now.
        </p>

        {/* Results Grid */}
        <div className="impact__grid reveal">
          {results.map((r, i) => (
            <div key={i} className="impact-card">
              {r.label && <div className="impact-card__label">{r.label}</div>}
              <div className="impact-card__amount">{r.amount}</div>
              <div className="impact-card__sub">{r.sub}</div>
              <div className="impact-card__badge">MD.AAFRID</div>
            </div>
          ))}
        </div>

        <div className="impact__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>SHOW ME THE SYSTEM</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
