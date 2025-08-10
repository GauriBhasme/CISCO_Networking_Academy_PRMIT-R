import React from "react";
import "../styles/Hero.css"; // Assuming you have a CSS file for styling
import { Network, ArrowRight, Mouse } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-icon">
            <Network size={40} />
          </div>
          <h1>
            Cisco NetAcad <br /> <span>@ Campus</span>
          </h1>
          <p className="hero-description">
            Join our vibrant tech community! Free workshops, hackathons, and certification events across networking, cybersecurity, AI, web development, IoT, and more.
          </p>
          <p className="hero-subtext">
            <strong>100% Free</strong> • Open to All Students • Industry Exposure • Skill Building
          </p>
          <button className="hero-btn">
            Join Free Now <ArrowRight size={18} />
          </button>
        </div>
        <div className="scroll-indicator">
          <Mouse size={28} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
