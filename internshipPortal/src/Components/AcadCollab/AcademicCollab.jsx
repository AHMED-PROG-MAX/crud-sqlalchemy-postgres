import React from 'react';
import "./AcademicCollab.css";
import data from "./data.json";

const AcademicCollab = () => {
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl text-center mb-20 text-gray-900">Our Academic Collaboration</h1>
        <div className="flex flex-wrap -m-4 items-center mx-auto">
          {data.map((item, index) => (
            <div key={index} className="lg:w-1/5 md:w-1/4 p-4 w-1/2">
              <a className="block relative h-fit rounded overflow-hidden">
                <img 
                  alt={item.alt} 
                  className="object-cover object-center w-full h-full block" 
                  src={item.src} 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicCollab;
