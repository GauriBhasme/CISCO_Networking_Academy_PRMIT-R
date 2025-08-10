import React from "react";
import "../styles/FeatureCard.css"; // Assuming you have a CSS file for styling
const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon size={28} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
