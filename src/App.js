import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Screens/LandingScreens/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
     {/* <div>Hello world</div> */}
     <HomePage />
    </div>
  );
}

export default App;
