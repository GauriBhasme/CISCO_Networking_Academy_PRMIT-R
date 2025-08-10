import React from "react";
import "../styles/Location.css";
import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <div className="location-card">
      <h3 className="location-title">Visit Our Campus</h3>
      <p className="location-text">
        Located in the heart of campus, we're easy to find and always welcoming visitors.
      </p>

      <div className="location-box">
        <MapPin size={36} className="location-icon" />
        <h4 className="location-subtitle">Student Center, Room 205</h4>
        <p className="location-address">
          123 University Avenue <br />
          Campus City, State 12345
        </p>
        <a href="#" className="directions-btn">
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default Location;
