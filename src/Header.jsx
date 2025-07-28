import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css"; // External CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">Joe2Tech</div>

      {/* Menu Icon for Mobile */}
      {!menuOpen && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>
      )}

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        {menuOpen && (
          <div className="close-menu" onClick={toggleMenu}>
            <FaTimes className="fa-times-icon" />
          </div>
        )}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="">Services</Link>
          </li>
          <li>
            <Link to="">Portfolio</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
