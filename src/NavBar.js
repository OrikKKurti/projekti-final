import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div>
      <h1>Basketball Leagues</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/leagues">Leagues</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
