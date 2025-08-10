import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

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
            <Link
              key={idx}
              to={link.path}
              className={location.pathname === link.path ? "active-link" : ""}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/login" className="login-link">
            Login
          </Link>
          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
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
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={location.pathname === link.path ? "active-link" : ""}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="login-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <button className="register-btn">Register</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;