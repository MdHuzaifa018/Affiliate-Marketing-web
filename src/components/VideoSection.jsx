import React, { useRef, useEffect } from "react";
import { CONFIG } from "../utils/config";
import "./VideoSection.css";

const VideoSection = ({ onRegisterClick }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("animate-in")),
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isYouTube = CONFIG.VIDEO_URL.includes("youtube.com") || CONFIG.VIDEO_URL.includes("youtu.be");

  return (
    <section id="video-section" className="video-section" ref={sectionRef} aria-labelledby="video-title">
      <div className="video-section__container">
        <div className="section-badge reveal">🎯 FREE Masterclass</div>

        <h2 id="video-title" className="section-title reveal">
          Watch What You'll Learn in This
          <span className="text--accent"> FREE Masterclass</span>
        </h2>

        <p className="section-subtitle reveal">
          Over 12,500 students have already transformed their lives. This could be you.
        </p>

        {/* Video wrapper */}
        <div className="video-wrapper reveal">
          <div className="video-glow" aria-hidden="true"></div>

          {isYouTube ? (
            <iframe
              src={`${CONFIG.VIDEO_URL}?rel=0&modestbranding=1&autoplay=0`}
              title="Affiliate Marketing Masterclass Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-iframe"
            ></iframe>
          ) : (
            <video
              controls
              className="video-iframe"
              poster="/video-thumbnail.jpg"
              preload="metadata"
            >
              <source src={CONFIG.VIDEO_URL} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          )}
        </div>

        {/* CTA under video */}
        <div className="video-section__cta reveal">
          <p className="video-cta__text">
            🔥 Liked what you saw? Register now before seats fill up!
          </p>
          <button
            id="video-register-btn"
            className="btn btn--primary btn--glow"
            onClick={onRegisterClick}
            aria-label="Register for free masterclass"
          >
            🚀 Claim Your FREE Seat Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
