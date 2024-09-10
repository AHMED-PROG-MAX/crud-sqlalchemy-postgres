// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Daniels
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-gray-600">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-600">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-600">Services</a>
          </li>
          <li>
            <a href="#works" className="hover:text-gray-600">Works</a>
          </li>
          <li>
            <a href="#clients" className="hover:text-gray-600">Clients</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-600">Blog</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </li>
        </ul>
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
