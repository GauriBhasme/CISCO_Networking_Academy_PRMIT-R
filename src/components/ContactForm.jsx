import React, { useState } from "react";
import "../styles/ContactForm.css";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate your API call here
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header">
        <Send size={20} className="contact-form-icon" />
        <h2>Send us a Message</h2>
      </div>
      <p className="contact-form-subtext">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Full Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>
          Email Address <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>
          Message <span className="required">*</span>
        </label>
        <textarea
          name="message"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="send-btn">
          <Send size={18} />
          Send Message
        </button>
        <p className="required-text">* Required fields</p>
      </form>
    </div>
  );
};

export default ContactForm;
