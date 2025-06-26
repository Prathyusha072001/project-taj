import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-t from-gray-800 to-amber-900 fixed w-full h-[120px] top-0 z-50 shadow-lg">
      <nav className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/268px-Taj_Hotels_logo.svg.png" 
            alt="Logo" 
            className="h-[80px] mt-2 rounded-full  " 
          />
        </div>

        <button 
          className="text-white text-xl sm:block md:hidden mt-[5%]" 
          onClick={handleMenuToggle} 
          aria-expanded={menuOpen} 
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>

        <ul className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:static top-full left-0 
    bg-black md:bg-transparent w-full md:w-auto 
    text-white text-4xl gap-4 px-6 py-4 md:p-0 z-50 transition-all duration-300 ease-in-out`}>
          <li><NavLink to="/Home" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">Home</NavLink></li>
          <li><NavLink to="/Menu" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">Menu</NavLink></li>
          <li><NavLink to="/Matter" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">AboutUs</NavLink></li>
          <li><NavLink to="/Book" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">Book</NavLink></li>
          <li><NavLink to="/Online" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">Food Orders</NavLink></li>
          <li><NavLink to="/Auth" onClick={handleLinkClick} className="hover:bg-yellow-700 rounded px-2">Login</NavLink></li>
          <li>
            <NavLink 
              to="/Cart" 
              onClick={handleLinkClick} 
              className="hover:bg-yellow-700 rounded px-2"
            >
              🛒(<span>{cartCount}</span>)
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
