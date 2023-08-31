import React from "react";
import Logo from "../assets/letmecookicon.png";
import "./Navbar.css"; // Import your CSS file for styling

export function Navbar() {
  const logoStyle = {
    maxWidth: "100px", // Adjust this value as needed
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="LetMeCook Icon" style={logoStyle} />
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
