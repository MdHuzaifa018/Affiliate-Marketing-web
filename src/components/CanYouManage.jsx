import React, { useRef, useEffect } from "react";
import "./CanYouManage.css";

const PAIN_POINTS = [
  {
    left: "Buying 17-20rs leads from lead sellers but 80% don't even pick up the phone.",
    right: "WhatsApp gets banned every few weeks – losing all your contacts.",
  },
  {
    left: 'Leads ghost you after first message or give only "no money" objections.',
    right: "Working 10-12 hours daily but making 0-2 sales per month.",
  },
  {
    left: "Tried reels, DMs, webinars - nothing gives consistent results.",
    right: "Mentor disappeared after you paid - no real support system left.",
  },
];

const CanYouManage = ({ onRegisterClick }) => {
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
    <section id="can-you-manage" className="cym-section" ref={ref}>
      <div className="cym__container">
        <h2 className="cym__title reveal">Can you Manage This?</h2>

        <div className="cym__grid reveal">
          {PAIN_POINTS.map((pair, i) => (
            <React.Fragment key={i}>
              <div className="cym-card">
                <div className="cym-card__checkbox" aria-hidden="true"></div>
                <p className="cym-card__text">{pair.left}</p>
              </div>
              <div className="cym-card">
                <div className="cym-card__checkbox" aria-hidden="true"></div>
                <p className="cym-card__text">{pair.right}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        <p className="cym__call-out reveal">
          If you checked even 3 of these boxes, this masterclass was literally built for you
        </p>

        <div className="cym__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default CanYouManage;
