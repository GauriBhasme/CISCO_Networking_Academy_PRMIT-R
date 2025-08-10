import React from "react";
import "../styles/ContactInfo.css";
import ContactItem from './ContactItem';
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactData = [
    {
      icon: Mail,
      title: "Email Address",
      value: "info@clubconnect.edu",
      description: "Send us an email anytime",
      link: "mailto:info@clubconnect.edu",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 5pm",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office Location",
      value: "Student Center, Room 205",
      description: "Visit us during office hours",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon-Fri: 8:00 AM - 5:00 PM",
      description: "We're here to help",
    },
  ];

  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p className="contact-subtitle">
        Multiple ways to reach us and get the support you need.
      </p>
      <div className="contact-list">
        {contactData.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
