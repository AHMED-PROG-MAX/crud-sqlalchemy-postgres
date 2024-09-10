// src/components/Hero.js
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/pngtree-lakescape-landscape-nature-scenery-hd-image_2950137.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-full text-center relative z-10">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Hello</h1>
          <h2 className="text-2xl md:text-4xl mt-2">I am a Developer</h2>
          <div className="flex justify-center mt-4 space-x-4">
            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
            >
              <FaTwitter className="w-8 h-8" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com"
              className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
            >
              <FaGithub className="w-8 h-8" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com"
              className="transition-transform duration-300 hover:scale-110 hover:text-gray-400"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
