import React, { useState } from "react";
import "./Navbar.css";
import SignupModal from '../Screens/LandingScreens/Signup/SignUp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePress = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    setIsModalOpen(true);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Alpha Web</div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tutorials">Tutorials</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li>
            <button className="btn btn-signup" onClick={handlePress}>
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
