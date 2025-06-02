// email-helper.js

// Make sure EmailJS is loaded from the CDN BEFORE this script is loaded!

// Only initialize once
if (typeof emailjs !== "undefined" && !emailjs.__inited) {
  emailjs.init("yEYlWETvh08w892PT");
  emailjs.__inited = true;
}

/**
 * Sends an order email using EmailJS.
 * @param {Object} orderData - The data for the email template.
 * @returns {Promise}
 */
export function sendOrderEmail(orderData) {
  // Replace service/template IDs with your actual EmailJS data if different
  return emailjs.send('service_qpk2hk8', 'template_qd12s7x', orderData);
}
