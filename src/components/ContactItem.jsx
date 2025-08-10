import React from "react";
import "../styles/ContactItem.css";

const ContactItem = ({ icon: Icon, title, value, description, link }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        <Icon size={24} />
      </div>
      <div className="contact-text">
        <h4>{title}</h4>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <p className="contact-value">{value}</p>
        )}
        <p className="contact-description">{description}</p>
      </div>
    </div>
  );
};

export default ContactItem;
