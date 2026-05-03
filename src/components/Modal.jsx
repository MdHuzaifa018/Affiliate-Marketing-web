import React, { useState, useEffect, useRef } from "react";
import { sendEmailJS } from "../utils/emailjs";
import { CONFIG } from "../utils/config";
import "./Modal.css";

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  experience: "",
  revenue: "",
  challenge: "",
};

const EXPERIENCE_OPTIONS = [
  "No experience — complete beginner",
  "Less than 6 months",
  "6 months – 1 year",
  "1–3 years",
  "3+ years",
];

const REVENUE_OPTIONS = [
  "₹0 — haven't started yet",
  "₹1 – ₹10,000/month",
  "₹10,000 – ₹50,000/month",
  "₹50,000 – ₹1L/month",
  "₹1L+/month",
];

const CHALLENGE_OPTIONS = [
  "Don't know where to start",
  "Can't find profitable niches",
  "Traffic / getting visitors",
  "Converting clicks to sales",
  "Scaling my current income",
  "Technical setup",
];

const Modal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const handleClose = () => {
    if (status === "loading") return;
    setStatus("idle");
    setForm(INITIAL_FORM);
    setErrors({});
    setErrorMsg("");
    onClose();
  };

  // Click outside to close
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // Validate form
  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.phone.trim()) {
      errs.phone = "WhatsApp number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      errs.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Enter a valid email address";
    }
    if (!form.experience) errs.experience = "Please select your experience level";
    if (!form.revenue) errs.revenue = "Please select your monthly revenue";
    if (!form.challenge) errs.challenge = "Please select your biggest challenge";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Scroll to first error
      const firstErrField = Object.keys(errs)[0];
      document.getElementById(`field-${firstErrField}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("loading");
    try {
      await sendEmailJS(form);
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg(
        err?.text ||
        "Something went wrong. Please check your EmailJS credentials or try again."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? "modal-overlay--visible" : ""}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal" ref={modalRef}>
        {/* Close button */}
        <button
          className="modal__close"
          onClick={handleClose}
          aria-label="Close registration form"
          disabled={status === "loading"}
        >
          ✕
        </button>

        {/* ===== SUCCESS STATE ===== */}
        {status === "success" ? (
          <div className="modal__success">
            <div className="success__icon">🎉</div>
            <h2 className="success__title">Registration Successful!</h2>
            <p className="success__text">
              Welcome aboard! You're now registered for the FREE Affiliate Marketing Masterclass.
              Click below to join our exclusive WhatsApp group where you'll get instant access.
            </p>
            <a
              id="whatsapp-join-btn"
              href={CONFIG.WHATSAPP_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
              aria-label="Join WhatsApp Group"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join WhatsApp Group Now →
            </a>
            <button className="success__dismiss" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          /* ===== FORM STATE ===== */
          <>
            <div className="modal__header">
              <div className="modal__badge">🔥 FREE Registration</div>
              <h2 id="modal-title" className="modal__title">
                Claim Your FREE Seat Now
              </h2>
              <p className="modal__subtitle">
                Fill in the form below and we'll send your access details instantly.
              </p>
            </div>

            <form className="modal__form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="form-group" id="field-fullName">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`form-input ${errors.fullName ? "form-input--error" : ""}`}
                  autoComplete="name"
                  aria-required="true"
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                />
                {errors.fullName && (
                  <span id="fullName-error" className="form-error" role="alert">{errors.fullName}</span>
                )}
              </div>

              {/* WhatsApp Number */}
              <div className="form-group" id="field-phone">
                <label htmlFor="phone" className="form-label">
                  WhatsApp Number <span className="required">*</span>
                </label>
                <div className="input-with-prefix">
                  <span className="input-prefix">🇮🇳 +91</span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className={`form-input form-input--prefixed ${errors.phone ? "form-input--error" : ""}`}
                    autoComplete="tel"
                    maxLength={10}
                    aria-required="true"
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </div>
                {errors.phone && (
                  <span id="phone-error" className="form-error" role="alert">{errors.phone}</span>
                )}
              </div>

              {/* Email */}
              <div className="form-group" id="field-email">
                <label htmlFor="email" className="form-label">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`form-input ${errors.email ? "form-input--error" : ""}`}
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                )}
              </div>

              {/* Business Experience */}
              <div className="form-group" id="field-experience">
                <label htmlFor="experience" className="form-label">
                  Business Experience <span className="required">*</span>
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className={`form-select ${errors.experience ? "form-input--error" : ""}`}
                  aria-required="true"
                >
                  <option value="">— Select your experience —</option>
                  {EXPERIENCE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.experience && (
                  <span className="form-error" role="alert">{errors.experience}</span>
                )}
              </div>

              {/* Monthly Revenue */}
              <div className="form-group" id="field-revenue">
                <label htmlFor="revenue" className="form-label">
                  Current Monthly Revenue <span className="required">*</span>
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={form.revenue}
                  onChange={handleChange}
                  className={`form-select ${errors.revenue ? "form-input--error" : ""}`}
                  aria-required="true"
                >
                  <option value="">— Select your current revenue —</option>
                  {REVENUE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.revenue && (
                  <span className="form-error" role="alert">{errors.revenue}</span>
                )}
              </div>

              {/* Biggest Challenge */}
              <div className="form-group" id="field-challenge">
                <label htmlFor="challenge" className="form-label">
                  Biggest Challenge <span className="required">*</span>
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  value={form.challenge}
                  onChange={handleChange}
                  className={`form-select ${errors.challenge ? "form-input--error" : ""}`}
                  aria-required="true"
                >
                  <option value="">— What's holding you back? —</option>
                  {CHALLENGE_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
                {errors.challenge && (
                  <span className="form-error" role="alert">{errors.challenge}</span>
                )}
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="form-alert form-alert--error" role="alert">
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Submit button */}
              <button
                id="form-submit-btn"
                type="submit"
                className="btn btn--primary btn--glow btn--submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="spinner" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  "🚀 Register for FREE →"
                )}
              </button>

              <p className="form-note">
                🔒 Your details are safe. We never share or spam.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
