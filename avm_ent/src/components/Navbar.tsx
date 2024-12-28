import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="hidden md:flex items-center space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => `text-white hover:text-gray-300 ${isActive ? 'underline' : ''}`}
          end
        >
          Home
        </NavLink>

        <NavLink 
          to="/Branch" 
          className={({ isActive }) => `text-white hover:text-gray-300 ${isActive ? 'underline' : ''}`}
        >
          Our Branches
        </NavLink>

        <NavLink 
          to="/About" 
          className={({ isActive }) => `text-white hover:text-gray-300 ${isActive ? 'underline' : ''}`}
        >
          About Us
        </NavLink>

        <NavLink 
          to="/Contact" 
          className={({ isActive }) => `text-white hover:text-gray-300 ${isActive ? 'underline' : ''}`}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;