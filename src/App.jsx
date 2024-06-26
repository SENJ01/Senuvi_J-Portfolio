import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

import Navbar from './components/Inc/Navbar';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';


function App() {
  return(
    <Router>
    <div>
    <Navbar/>
      <Routes>
      <Route path="/Senuvi_J-Portfolio" element={<Home/>}/>
      <Route path="/about_me" element={<AboutMe/>}/>
      <Route path="/contact" element={<Contact/>}/>
 
      </Routes>
        
    </div>
    </Router>
  );
}

export default App
