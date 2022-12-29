import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import FullTeam from './components/Announcements/FullTeam';
import Herosection from './components/HeroSection';
function App() {
  return (
    <Router>
      <Herosection/>
      <Routes>
      <Route path='/' exact element={ <Home /> }/>
      <Route path='/Team' element={ <FullTeam /> }/>
      </Routes>
    </Router>
  );
}

export default App;
