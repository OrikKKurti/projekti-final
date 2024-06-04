import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import styles from "./Leagues.css"; 

const Leagues = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 
  const filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.Leagues}>
      <h1>Leagues</h1>
      <input
        type="text"
        placeholder="Search menu..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />


{filteredItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <h3>{item.teams}</h3>
          <p>{item.countryOrContinent}</p>
          <p>Last winner: {item.lastWinner}</p>
          <p className="logoja">Logo: {item.LeagueLogo}</p>
          <Link to={`/item/${item.id}`} className={styles.detailsLink}>
            Details
          </Link>
        </div>
      ))}

      {filteredItems.length === 0 && (
        <p className={styles.noResults}>No items found matching your search.</p>
      )}
    </div>
  );
};

export default Leagues;

