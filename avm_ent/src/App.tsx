import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StickyNavbar from './components/StickyNavbar';
import Home from './pages/Home';
import Branch from './pages/Branch';
import About from './pages/About';
import Contact from './pages/Contact'; // Assuming Contact is a default export
import './App.css'; // Ensure this import is present

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy text-white">
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Branch" element={<Branch />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;