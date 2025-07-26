import React, { useState } from "react";
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
