import emailjs from "@emailjs/browser";
import { CONFIG } from "./config";

/**
 * Sends form data via EmailJS (no backend required).
 * @param {Object} formData - The form fields to send
 * @returns {Promise} - Resolves on success, rejects on error
 */
export const sendEmailJS = async (formData) => {
  const templateParams = {
    from_name: formData.fullName,
    phone: formData.phone,
    email: formData.email,
    experience: formData.experience,
    revenue: formData.revenue,
    challenge: formData.challenge,
    reply_to: formData.email,
  };

  const response = await emailjs.send(
    CONFIG.EMAILJS_SERVICE_ID,
    CONFIG.EMAILJS_TEMPLATE_ID,
    templateParams,
    CONFIG.EMAILJS_PUBLIC_KEY
  );

  return response;
};
