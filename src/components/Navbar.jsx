import React, { useState, useEffect } from "react";
import "../styles/Navbar.css"; // Assuming you have a CSS file for styling
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = ["Home", "Events", "About", "Contact Us"];
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Cisco NetAcad</h2>
        <span>@ Campus</span>
      </div>

      {/* Desktop Menu */}
      {!isMobile && (
        <div className="navbar-links">
          {navLinks.map((link, idx) => (
            <a href={`#${link.toLowerCase().replace(" ", "-")}`} key={idx}>
              {link}
            </a>
          ))}
          <a href="#login" className="login-link">Login</a>
          <button className="register-btn">Register</button>
        </div>
      )}

      {/* Mobile Menu Icon */}
      {isMobile && (
        <button className="menu-icon" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      )}

      {/* Mobile Sidebar */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="navbar-brand">
              <h2>Cisco NetAcad</h2>
              <span>@ Campus</span>
            </div>
            <button className="close-icon" onClick={() => setIsMenuOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <div className="mobile-menu-links">
            {navLinks.map((link, idx) => (
              <a href={`#${link.toLowerCase().replace(" ", "-")}`} key={idx} onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            ))}
            <a href="#login" className="login-link">Login</a>
            <button className="register-btn">Register</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
