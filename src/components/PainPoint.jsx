import React, { useRef, useEffect } from "react";
import "./PainPoint.css";

const PainPoint = ({ onRegisterClick }) => {
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
    <section id="pain-point" className="pain-section" ref={ref}>
      <div className="pain__container">
        {/* Stressed man image — using a generated placeholder */}
        <div className="pain__image-wrapper reveal">
          <div className="pain__image-placeholder">
            {/* <div className="pain__zero-leads">
              <span className="zero-leads-text">– 0 Leads</span>
              <div className="zero-leads-chart"></div>
            </div> */}
            {/* <div className="pain__man-icon"> */}
              <img src="https://go.visionads.in/wp-content/uploads/2026/03/ChatGPT-Image-Mar-24-2026-05_06_50-PM-1024x683.webp" alt="" />
            {/* </div> */}
          </div>
        </div>

        <h2 className="pain__headline reveal">
          You're Working Harder Than Ever...{" "}
          <span className="pain--accent">But Your Dashboard Still stuck</span>
        </h2>

        <div className="pain__paragraphs reveal">
          <p>
            You spend hours every day posting reels, reaching out to strangers, and fighting with Facebook
            Ads, only to get "Hi" from people who never reply.
          </p>
          <p>
            You wake up to 50 new leads, only to find out 40 of them are fake numbers or people looking for "free money."
          </p>
          <p>
            Your team is demotivated, your lead cost is rising, and you're stuck doing the same manual
            follow-ups that yielded zero results last month.
          </p>
        </div>

        <div className="pain__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>
            SHOW ME THE SYSTEM
          </button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;
