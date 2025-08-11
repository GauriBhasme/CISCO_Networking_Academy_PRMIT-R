import React from "react";
import "../styles/SocialHandles.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SocialHandles = () => {
  const socials = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/cisco_prmitr/?hl=en" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];

  return (
    <div className="social-card">
      <h3 className="social-title">Follow Us</h3>
      <p className="social-text">
        Stay connected with us on social media for updates and news.
      </p>
      <div className="social-icons">
        {socials.map((item, idx) => (
          <a key={idx} href={item.link} className="social-icon" aria-label="social link">
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialHandles;
