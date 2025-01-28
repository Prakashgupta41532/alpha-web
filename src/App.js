import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Screens/LandingScreens/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashBoardHome } from "./Dashboard/DashboardHome/DashBoardHome";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoardHome />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
