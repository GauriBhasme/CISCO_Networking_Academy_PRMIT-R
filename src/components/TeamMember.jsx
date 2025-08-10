import React from "react";
import PropTypes from "prop-types";
import "../styles/TeamMember.css"; // Assuming you have a CSS file for styling

/**
 * TeamMember
 * Props:
 *  - image: string (url) for avatar
 *  - name: string
 *  - position: string
 *  - description: string
 *  - size: number (optional) avatar diameter in px (default 120)
 */
const TeamMember = ({
  image,
  name,
  position,
  description,
  size = 120,
}) => {
  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <article className="tm-card" aria-label={`Team member card: ${name}`}>
      <div className="tm-avatar-wrap" style={avatarStyle}>
        <img
          className="tm-avatar"
          src={image || `https://via.placeholder.com/${size}?text=+`}
          alt={name ? `${name} profile` : "Team member avatar"}
          style={avatarStyle}
        />
      </div>

      <div className="tm-body">
        <h3 className="tm-name">{name || "Unnamed"}</h3>
        {position && <p className="tm-position">{position}</p>}
        {description && <p className="tm-desc">{description}</p>}
      </div>
    </article>
  );
};

TeamMember.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  size: PropTypes.number,
};

export default TeamMember;
