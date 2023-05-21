import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/pages/Home';
import FullTeam from './components/Teams/FullTeam';
import Newsletter from './components/newsletter/Newsletter';
import Navbar from './components/Navbar';
import Herosection from './components/HeroSection';
import PastEvents from './components/event/PastEvents/PastEvents';
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router basename='/CSEA-Frontend'>  
      <Navbar/>
      <Routes>
      <Route path='/' exact element={ <Home /> }/>
      <Route path='/Team' element={ <FullTeam /> }/>
      <Route path='/pastevents' element={<PastEvents /> }/>
      <Route path='/Newsletter' element={<Newsletter title="FINDING THE RIGHT GUITAR FOR YOUR STYLE - 5 TIPS" date="10th October" aboutText="Welcome to the CSEA Newsletter!"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
