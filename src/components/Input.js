import React from "react";
import "./Input.css";

export const Input = ({ value, handleInputChange }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
