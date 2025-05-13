import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Casestudies from './components/Casestudies/Casestudies';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Casestudies" element={<Casestudies />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App
