// src/App.js or src/layouts/DefaultLayout.js
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
