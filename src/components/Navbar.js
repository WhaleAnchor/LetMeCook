import React from "react";
import Logo from "../assets/letmecookicon.png";
import "./Navbar.css";

export function Navbar() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="LetMeCook Icon" className="logoStyle" />
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/recipes">Recipes</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
