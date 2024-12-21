import React, { useState } from 'react';
import logo from './logo.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="head">
      {/* Logo Section */}
      <div className="icon">
        <NavLink to="/"><img src={logo} className="logo-image" alt="Logo" /></NavLink>
      </div>

      {/* Burger Menu */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><NavLink className="link" to="/about" onClick={toggleMenu}>Главная</NavLink></li>
          <li><NavLink className="link" to="/trip" onClick={toggleMenu}>Экскурсия</NavLink></li>
          <li><NavLink className="link" to="/personal" onClick={toggleMenu}>Личный кабинет</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
