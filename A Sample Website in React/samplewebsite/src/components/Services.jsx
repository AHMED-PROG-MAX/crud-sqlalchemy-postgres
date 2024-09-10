import React from 'react';
import { FaDesktop, FaPaintBrush, FaCode, FaLightbulb, FaMobileAlt, FaEye } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold mb-10">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Design Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaDesktop className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Branding Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaPaintBrush className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Development Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaCode className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Creative Design Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaLightbulb className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Creative Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Fully Responsive Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaMobileAlt className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Fully Responsive</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Retina Ready Service Card */}
          <div className="bg-white p-6 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <FaEye className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Retina Ready</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
