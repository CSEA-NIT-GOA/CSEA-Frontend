import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import FullTeam from './components/Announcements/FullTeam';
import Newsletter from './components/newsletter/Newsletter';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' exact element={ <Home /> }/>
      <Route path='/Team' element={ <FullTeam /> }/>
      <Route path='/Newsletter' element={<Newsletter/>}/>
      </Routes>
    </Router>
  );
}

export default App;
