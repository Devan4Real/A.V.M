import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Branch from './pages/Branch';
import About from './pages/About';
import Contact from './pages/Contact'; // Assuming Contact is a default export

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
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