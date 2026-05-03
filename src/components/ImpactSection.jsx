import React, { useRef, useEffect, useState } from "react";
import "./ImpactSection.css";

const ImpactSection = ({ onRegisterClick }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("animate-in"),
        ),
      { threshold: 0.1 },
    );

    ref.current
      ?.querySelectorAll(".reveal")
      ?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const results = [
    {
      label: "Sneha EARNED",
      amount: "₹1 LAKH",
      sub: "IN LESS THAN 30 DAYS",
      image: "/img/proof-1.jpeg",
    },
    {
      label: "ONE STRATEGY TOOK HER FROM",
      amount: "₹30K TO ₹1.7 LAKH",
      sub: "IN JUST 3 DAYS",
      image: "/img/proof-2.jpeg",
    },
    {
      label: "",
      amount: "₹1.5 LAKH",
      sub: "IN JUST 30 DAYS",
      image: "/img/proof-3.jpeg",
    },
    {
      label: "DR. SAZIA'S TRANSFORMATION",
      amount: "₹8 LAKHS",
      sub: "IN 6 MONTHS",
      image: "/img/proof-4.jpeg",
    },
    { label: "SHE MADE", amount: "₹1.25 LAKH", sub: "IN 30 DAYS" },
    { label: "", amount: "1.5 LAKH", sub: "REVENUE IN JUST 30 DAYS" },
  ];

  return (
    <section id="impact" className="impact-section" ref={ref}>
      <div className="impact__container">
        <div className="impact__label reveal">THE IMPACT</div>
        <h2 className="impact__title reveal">
          <span className="impact--accent">1300+ Affiliates</span>
          <br />
          Already Transformed Their Business
        </h2>
        <p className="impact__subtitle reveal">
          These are not screenshots from 2020. These are real results from real
          people using this exact framework right now.
        </p>

        <div className="impact__grid">
          {results.map((r, i) => (
            <div key={i} className="impact-card reveal">
              {r.image && (
                <button
                  type="button"
                  className="impact-card__image-btn"
                  onClick={() => setSelectedImage(r.image)}
                  aria-label={`View ${r.label || `Proof ${i + 1}`} full image`}
                >
                  <img
                    className="impact-card__image"
                    src={r.image}
                    alt={r.label || `Proof ${i + 1}`}
                  />
                </button>
              )}
              {r.label && <div className="impact-card__label">{r.label}</div>}
              <div className="impact-card__amount">{r.amount}</div>
              <div className="impact-card__sub">{r.sub}</div>
              <div className="impact-card__badge">Adnan Qureshi</div>
            </div>
          ))}
        </div>

        <div className="impact__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>
            SHOW ME THE SYSTEM
          </button>
          <p className="spots-text">Only 97 Spots Available</p>
        </div>
      </div>

      {selectedImage && (
        <div
          className="impact-image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="impact-image-modal__backdrop" />
          <div
            className="impact-image-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="impact-image-modal__close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              ✕
            </button>
            <img
              className="impact-image-modal__img"
              src={selectedImage}
              alt="Full proof image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ImpactSection;
