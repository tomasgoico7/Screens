import React, { useState } from "react";
import "./../styles/Filter.css";

export const Filter = ({ onChange }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    onChange({ name: e.target.value, type });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onChange({ name, type: e.target.value });
  };

  return (
    <div className="filter-container">
      <div className="filter-form">
        <div className="filter-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Buscar por nombre..."
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label htmlFor="type">Tipo:</label>
          <select
            id="type"
            value={type}
            onChange={handleTypeChange}
            className="filter-select"
          >
            <option value="">Todos</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
          </select>
        </div>
      </div>
    </div>
  );
};
