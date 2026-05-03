import React, { useState, useRef, useEffect } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "Already bahut courses try kar chuka hun. Yeh different kaise hai?",
    a: "I don't teach theory — I give you the exact AI prompts, campaign setups, and automation sequences from my ₹1 Cr+ business. 92% of my successful students had failed with other methods before this.",
  },
  {
    q: "Technical knowledge nahi hai, kya main kar paunga?",
    a: "Haan bilkul! Yeh masterclass beginners ke liye design ki gayi hai. Step-by-step screen recordings ke saath sab kuch cover kiya jaata hai.",
  },
  {
    q: "Kitne time mein results aayenge?",
    a: "Most students apna pehla quality lead same day generate karte hain. Sales usually 7-14 days mein aane lagte hain jab system properly set up ho jaata hai.",
  },
  {
    q: "Budget kitna chahiye?",
    a: "Masterclass bilkul FREE hai. Ad budget ke liye ₹500-1000/day kaafi hai shuruat mein. Aur hum aapko sikhayenge ki apna budget efficiently kaise use karein.",
  },
  {
    q: "Live attend nahi kar sakta, recording milega?",
    a: "Recording sirf live attendees ko milegi. Isliye recommend karenge ki aap live attend karein — Bonuses bhi sirf live attendees ko milenge.",
  },
  {
    q: "Yeh sirf affiliate marketing ke liye hai?",
    a: "Is system ka primary focus Affiliate Marketing hai, lekin yeh strategies kisi bhi high-ticket business ke liye kaam karti hain.",
  },
];

const FAQ = ({ onRegisterClick }) => {
  const [openIndex, setOpenIndex] = useState(0);
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
    <section id="faq" className="faq-section" ref={ref}>
      <div className="faq__container">
        <h2 className="faq__title reveal">Got Questions? Here Are The Answers.</h2>

        <div className="faq__list reveal">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "faq-item--open" : ""}`}>
              <button
                className="faq-item__question"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <span className="faq-item__arrow">{openIndex === i ? "∧" : "›"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-item__answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="faq__cta reveal">
          <button className="btn-primary-large" onClick={onRegisterClick}>REGISTER FOR FREE NOW</button>
          <p className="spots-text">Limited to 97 seats left.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
