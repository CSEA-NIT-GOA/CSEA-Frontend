import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import FullTeam from './components/Announcements/FullTeam';
import Herosection from './components/HeroSection';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Herosection/>
      <Routes>
      <Route path='/' exact element={ <Home /> }/>
      <Route path='/Team' element={ <FullTeam /> }/>
      </Routes>
    </Router>
  );
}

export default App;
