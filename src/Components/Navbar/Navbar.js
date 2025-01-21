import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alpha Web</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#tutorials">Tutorials</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#pricing">Contact Us</a></li>
        <li>
          <a href="#signup" className="btn btn-signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
