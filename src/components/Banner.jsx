import React from "react";
import "../styles/Banner.css";

const Banner = ({ title, description, buttonText, onButtonClick, backgroundImage }) => {
  const bannerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      {backgroundImage ? (
        <div className="banner-overlay">
          <div className="banner-content">
            <h2 className="banner-title">{title}</h2>
            <p className="banner-description">{description}</p>
            {buttonText && (
              <button className="banner-btn" onClick={onButtonClick}>
                {buttonText}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="banner-content">
          <h2 className="banner-title">{title}</h2>
          <p className="banner-description">{description}</p>
          {buttonText && (
            <button className="banner-btn" onClick={onButtonClick}>
              {buttonText}
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Banner;
