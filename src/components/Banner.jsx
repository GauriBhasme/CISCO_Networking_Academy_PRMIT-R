import React from "react";
import '../styles/Banner.css'; // Assuming you have a CSS file for styling

const Banner = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <section className="banner">
      <div className="banner-content">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-description">{description}</p>
        {buttonText && (
          <button className="banner-btn" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default Banner;
