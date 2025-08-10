import React, { useState } from "react";
import "../styles/Filter.css"; // Assuming you have a CSS file for styling
import { FaSearch, FaFilter, FaCalendarAlt } from "react-icons/fa";

const Filter = ({ onSearch, onCategoryChange, onDateChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [date, setDate] = useState("All");

  const categories = [
    "All",
    "Hackathon",
    "Workshops",
    "Cybersecurity",
    "Networking",
    "DSA",
    "AI&ML"
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    if (onCategoryChange) onCategoryChange(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    if (onDateChange) onDateChange(e.target.value);
  };

  return (
    <div className="filter-container">
      {/* Search Bar */}
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Category Dropdown */}
      <div className="dropdown">
        <FaFilter className="dropdown-icon" />
        <select value={category} onChange={handleCategory}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Date Dropdown */}
      <div className="dropdown">
        <FaCalendarAlt className="dropdown-icon" />
        <select value={date} onChange={handleDate}>
          <option value="All">All</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
