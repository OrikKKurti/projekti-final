import React, { useState } from "react";
import { data } from "./data";
import './Leagues.css'; 

const Leagues = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredItems); // Add this line to check filteredItems in console

  return (
    <div className="leagues-container">
      <h1>Leagues</h1>
      <input
        type="text"
        placeholder="Search menu..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />

      {filteredItems.map((item) => (
        <div key={item.id} className="league-item">
          <h3>{item.name}</h3>
          <p>{item.countryOrContinent}</p>
          <p>{item.teams}</p>
          <p>Last winner: {item.lastWinner}</p>
          <div>
          <p className="logo">Logo:</p>
          <img src={item.LeagueLogo} alt={item.name} />
          </div>
        </div>
      ))}

      {filteredItems.length === 0 && (
        <p className="no-results">No items found matching your search.</p>
      )}
    </div>
  );
};

export default Leagues;
