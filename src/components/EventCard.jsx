import React from "react";
import "../styles/EventCard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai"; // ✅ Correct import
import { MdLocationOn } from "react-icons/md";

const EventCard = ({
  image,
  category,
  title,
  description,
  date,
  time,
  location,
  organizer,
  onRegister,
  onSave,
  onDetails,
}) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />

      <div className="event-content">
        <span className="event-category">{category}</span>
        <h2 className="event-title">{title}</h2>
        <p className="event-description">{description}</p>

        <div className="event-info">
          <div className="event-info-item">
            <FaRegCalendarAlt className="event-icon" />
            <span>{date}</span>
          </div>
          <div className="event-info-item">
            <AiOutlineClockCircle className="event-icon" /> {/* ✅ Correct usage */}
            <span>{time}</span>
          </div>
          <div className="event-info-item">
            <MdLocationOn className="event-icon" />
            <span>{location}</span>
          </div>
        </div>

        <p className="event-organizer">
          Organized by <span>{organizer}</span>
        </p>

        <div className="event-buttons">
          <button className="register-btn" onClick={onRegister}>
            Register
          </button>
          <button className="save-btn" onClick={onSave}>
            Save
          </button>
          <button className="details-btn" onClick={onDetails}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
