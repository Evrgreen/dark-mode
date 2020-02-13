import React, { useState } from 'react';
import {Router,Link} from "@reach/router"

import Events from "./Events";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/events">Events</Link>
    
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
