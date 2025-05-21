import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // ✅ New line
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID',        // from EmailJS dashboard
      'YOUR_TEMPLATE_ID',       // from EmailJS dashboard
      formData,                 // data to send
      'YOUR_PUBLIC_KEY'         // from EmailJS dashboard
    )
    .then(() => {
      alert('Message sent! Thank you.');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('Email sending error:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title glow-hover">📬 𝐆𝐞𝐭 𝐢𝐧 𝐓𝐨𝐮𝐜𝐡</h2>
        <p className="contact-subtext">Feel free to reach out for collaborations or just a friendly hello 👋</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
