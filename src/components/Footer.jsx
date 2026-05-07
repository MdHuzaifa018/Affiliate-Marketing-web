import React from "react";
import { CONFIG } from "../utils/config";
import "./Footer.css";

const Footer = ({ onRegisterClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="brand-icon">⚡</span>
            <span className="brand-text">{CONFIG.BRAND_NAME}</span>
          </div>
          <p className="footer__tagline">{CONFIG.TAGLINE}</p>
          <button
            id="footer-register-btn"
            className="footer__cta"
            onClick={onRegisterClick }
            aria-label="Register for free masterclass"
          >
            🚀 Join Free →
          </button>
        </div>

        {/* Links */}
        <div className="footer__links">
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul role="list">
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }); }}>Home</a></li>
              <li><a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById("features")?.scrollIntoView({ behavior: "smooth" }); }}>Benefits</a></li>
              <li><a href="#video-section" onClick={(e) => { e.preventDefault(); document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" }); }}>Webinar</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" }); }}>Success Stories</a></li>
              <li><a href="#urgency" onClick={(e) => { e.preventDefault(); document.getElementById("urgency")?.scrollIntoView({ behavior: "smooth" }); }}>Register</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul role="list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#disclaimer">Earnings Disclaimer</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>
          © {year} <strong>{CONFIG.BRAND_NAME}</strong>. All rights reserved.
        </p>
        <p className="footer__disclaimer">
          ⚠️ Earnings Disclaimer: Results vary. Past performance is not indicative of future results.
          Affiliate marketing requires effort and dedication.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
