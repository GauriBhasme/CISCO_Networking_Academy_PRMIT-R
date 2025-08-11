import React, { useState } from "react";
import "../styles/EventRegistrationForm.css";

const EventRegistrationForm = ({ eventName, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = { ...formData, event: eventName };
    if (onSubmit) {
      onSubmit(submissionData);
    } else {
      console.log("Form Submitted:", submissionData);
    }
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="event-registration-form">
      <h2>Register for {eventName}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message (optional)
          <textarea
            name="message"
            placeholder="Any additional details..."
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default EventRegistrationForm;
