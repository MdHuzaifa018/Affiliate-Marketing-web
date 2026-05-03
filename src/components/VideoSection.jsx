import React, { useRef, useEffect, useState } from "react";
import "./VideoSection.css";

// ─── Add your 6 YouTube video IDs here ───────────────────────────────────────
const VIDEOS = [
  {
    id: "eqeafeHp4nk",
    title: "Kejal Earned ₹1 Lakh in Less Than 30 Days",
    badge: "₹1 LAKH IN 30 DAYS",
  },
  {
    id: "eqeafeHp4nk",
    title: "One Strategy Took Her from ₹30K to ₹1.7 Lakh",
    badge: "₹30K → ₹1.7 LAKH",
  },
  {
    id: "eqeafeHp4nk",
    title: "₹1.5 Lakh in Just 7 Days",
    badge: "₹1.5 LAKH IN 7 DAYS",
  },
  {
    id: "eqeafeHp4nk",
    title: "Dr. Sazia Earned ₹8 Lakhs in 6 Months",
    badge: "₹8 LAKHS IN 6 MONTHS",
  },
  {
    id: "eqeafeHp4nk",
    title: "Satyamarti Verma Made ₹1.25 Lakh in 30 Days",
    badge: "₹1.25 LAKH IN 30 DAYS",
  },
  {
    id: "eqeafeHp4nk",
    title: "1.5 Lakh Revenue in Just 30 Days – Jai Mohan",
    badge: "1.5 LAKH IN 30 DAYS",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const VideoCard = ({ video, index }) => {
  const [playing, setPlaying] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div
      className="vc-card reveal"
      style={{ transitionDelay: `${0.08 * index}s` }}
    >
      {!playing ? (
        <div className="vc-thumb" onClick={() => setPlaying(true)}>
          <img src={thumbUrl} alt={video.title} loading="lazy" />
          <div className="vc-overlay">
            <span className="vc-badge">{video.badge}</span>
            <button className="vc-play" aria-label={`Play: ${video.title}`}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="vc-iframe-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

const VideoSection = ({ onRegisterClick }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("animate-in")
        ),
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="video-section"
      className="video-section"
      ref={sectionRef}
      aria-labelledby="video-title"
    >
      {/* Decorative bg blobs */}
      <div className="vs-blob vs-blob--left" aria-hidden="true" />
      <div className="vs-blob vs-blob--right" aria-hidden="true" />

      <div className="vs-container">
        {/* Header */}
        <div className="vs-header">
          <p className="vs-eyebrow reveal">THE IMPACT</p>
          <h2 id="video-title" className="vs-title reveal">
            1300+ Affiliates <br />
            <span className="vs-title--white">Already Transformed Their Business</span>
          </h2>
          <p className="vs-subtitle reveal">
            These are not screenshots from 2020. These are real results from
            real people using{" "}
            <span className="vs-subtitle--accent">this exact framework</span>{" "}
            right now.
          </p>
        </div>

        {/* Video Grid */}
        <div className="vs-grid">
          {VIDEOS.map((video, i) => (
            <VideoCard key={i} video={video} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="vs-cta reveal">
          <button
            id="video-register-btn"
            className="vs-cta__btn"
            onClick={onRegisterClick}
            aria-label="Show me the system"
          >
            SHOW ME THE SYSTEM
          </button>
          <p className="vs-cta__note">Only 97 Spots Available</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
