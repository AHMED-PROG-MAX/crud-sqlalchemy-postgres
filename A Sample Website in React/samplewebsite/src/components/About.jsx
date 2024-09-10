import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/images.jpeg"
            alt="Profile"
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* About Text Section */}
        <div className="md:w-1/2 md:pl-10 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="mb-6">I am Jerry Daniels, a UX/UI Designer & Web Developer.</p>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Web Design</h4>
              <div className="bg-gray-200 rounded-full h-4"> {/* Increased height */}
                <div className="bg-yellow-500 h-full rounded-full w-4/5 transition-width duration-500"></div> {/* Ensure fill takes full height */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Branding</h4>
              <div className="bg-gray-200 rounded-full h-4"> {/* Increased height */}
                <div className="bg-yellow-500 h-full rounded-full w-3/4 transition-width duration-500"></div> {/* Ensure fill takes full height */}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Development</h4>
              <div className="bg-gray-200 rounded-full h-4"> {/* Increased height */}
                <div className="bg-yellow-500 h-full rounded-full w-2/3 transition-width duration-500"></div> {/* Ensure fill takes full height */}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="bg-yellow-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-yellow-600"
            >
              Download CV
            </a>
            <a
              href="#"
              className="border border-gray-400 text-gray-600 py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
