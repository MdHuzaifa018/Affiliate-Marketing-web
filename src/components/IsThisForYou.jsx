import React, { useRef, useEffect } from "react";
import "./IsThisForYou.css";

const FOR_YOU = [
  "You are an IDP Affiliate tired of 0 sales.",
  "You're tired of junk leads and ready to learn a real system.",
  "You are ready to invest in your business growth.",
  "You want a predictable way to get leads every day.",
  "You want to build a part-time business that doesn't consume your entire life.",
];

const NOT_FOR_YOU = [
  "You are an IDP Affiliate tired of 0 sales.",
  "You're tired of junk leads and ready to learn a real system.",
  "You are ready to invest in your business growth.",
  "You want a predictable way to get leads every day.",
  "You want to build a part-time business that doesn't consume your entire life.",
];

const IsThisForYou = ({ onRegisterClick }) => {
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
    <section id="is-this-for-you" className="itfy-section" ref={ref}>
      <div className="itfy__container">
        <h2 className="itfy__title reveal">
          Before You Register – Make Sure This Masterclass Is{" "}
          <span className="itfy--accent">Right For You</span>
        </h2>

        <div className="itfy__cards reveal">
          {/* For You */}
          <div className="itfy-card itfy-card--green">
            <div className="itfy-card__header">THIS IS FOR YOU IF</div>
            <div className="itfy-card__image itfy-card__image--success">
              <div className="image-mock image-mock--success">
                <img src="https://go.visionads.in/wp-content/uploads/2026/03/ChatGPT-Image-Mar-26-2026-05_24_42-PM-1-300x200.webp" alt="success" />
              </div>
            </div>
            <ul className="itfy-list">
              {FOR_YOU.map((item, i) => (
                <li key={i} className="itfy-list__item itfy-list__item--green">
                  <span className="itfy-icon itfy-icon--green">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="itfy-card itfy-card--red">
            <div className="itfy-card__header itfy-card__header--red">THIS IS NOT FOR YOU IF:</div>
            <div className="itfy-card__image itfy-card__image--fail">
              <div className="image-mock image-mock--fail">
                <img src="https://go.visionads.in/wp-content/uploads/2026/03/1-1-300x200.webp" alt="" />
              </div>
            </div>
            <ul className="itfy-list">
              {NOT_FOR_YOU.map((item, i) => (
                <li key={i} className="itfy-list__item itfy-list__item--red">
                  <span className="itfy-icon itfy-icon--red">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="itfy__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default IsThisForYou;
