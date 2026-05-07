// ============================================================
// GLOBAL CONFIGURATION — Edit these values to customize
// ============================================================

export const CONFIG = {
  // WhatsApp group link — replace with your actual link
   WHATSAPP_GROUP_LINK: import.meta.env.VITE_WHATSAPP_LINK,

  // Video URL — supports YouTube embed or direct MP4
  // For YouTube: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  VIDEO_URL: "https://www.youtube.com/embed/ooUX6sAUwj4",

  // Seats — shown in urgency sections
  TOTAL_SEATS: 97,
  SEATS_LEFT: 97,

  // EmailJS configuration — get these from emailjs.com
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,        // e.g. "abc123XYZ"

  // Brand info
  BRAND_NAME: "Vision Ads",
  MASTERCLASS_NAME: "AI Lead Ads Masterclass",
  MENTOR_NAME: "Mr. Aafrid Chippa",
  TAGLINE: "Generate 50-100 Quality Leads & Sell HTC Packages Daily",
  EVENT_DAY: "Thursday",
  EVENT_TIME: "6:00 PM IST",
  EVENT_PLATFORM: "Live on Zoom",
  DURATION: "3 Hours",
};

export default CONFIG;
