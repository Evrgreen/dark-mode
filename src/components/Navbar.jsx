import React, { useState } from 'react';
import {Router,Link} from "@reach/router"

import Events from "./Events";
import { useDarkMode } from "../hooks/useDarkMode"


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to="/"><h1>Crypto Tracker</h1></Link>
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
