import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Screens/LandingScreens/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupModal from "./Components/Screens/LandingScreens/Signup/SignUp";
import { useState } from "react";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
