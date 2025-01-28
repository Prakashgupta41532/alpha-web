import React from "react";
import "./Home.css";
import RightImage from "../../../../assets/NewImg.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };
  
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="homepage-text">
          <h1>Take Ideas to Production in Seconds, Not Sprints</h1>
          <h4>
            Accelerate your digital teams with AI-powered design-to-code, visual
            editing, and enterprise CMS, all in our Visual Development Platform.
          </h4>
          <button className="btn-get-started" onClick={handleGetStarted}>
            Get Started
            <span className="btn-icon">→</span>
          </button>
        </div>
        <div className="homepage-image">
          <img src={RightImage} alt="Production" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
