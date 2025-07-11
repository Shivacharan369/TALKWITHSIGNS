import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure this file is correctly linked
import Logo from "./Logo.png"; // Import your logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="TalkWithSigns Logo" className="logo" />
      </div>

      <h1 className="website-title">TalkWithSigns</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </header>
  );
};

export default Header;
