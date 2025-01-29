import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/Screens/LandingScreens/Home/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { DashBoardHome } from "./Dashboard/DashboardHome/DashBoardHome";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/dashboard"]; 

  return (
    <div className="App">
      {!hideNavbarOnRoutes.includes(location.pathname) && <Navbar />} 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoardHome />} />
      </Routes>
    </div>
  );
}

export default App;
