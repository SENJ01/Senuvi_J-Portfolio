import './App.css'
import React from 'react'
import './App.css';
// import Accordion from 'react-bootstrap/Accordion';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

import Navbar from './components/Inc/Navbar';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';



function App() {
  return(
    <Router>
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about_me" element={<AboutMe/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
        
    </div>
    </Router>
  );
}

export default App
