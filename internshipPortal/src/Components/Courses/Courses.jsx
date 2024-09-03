import React, { useState } from 'react';
import CoursesData from "./CoursesData.json";
import Visits from '../visit/Visits';
const Courses = () => {
  const [toggledCard, setToggledCard] = useState(null);

  const handleToggle = (index) => {
    setToggledCard(toggledCard === index ? null : index);
  };

  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 lg:px-8 py-24 md:flex-row flex-col items-center">
        <div className="md:w-1/3  w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="https://img.freepik.com/free-photo/group-analysts-communicating-morning-meeting_74855-4268.jpg?t=st=1724830471~exp=1724834071~hmac=faeba7b8d7bf471ed4d3fbbb92abce1e0f5b3b0b11eb3ffd7fd606ee300020b6&w=740" />
        </div>
        <div className="lg:flex-grow md:w-2/3 lg:w-[60%] md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Courses</h1>
          <p className="mb-8 leading-relaxed">Everything required to kickstart, enhance, and thrive in your tech career, with access to valuable resources, expert insights, and real-world experience.</p>
        </div>
      </div>

      <div className="w-full md:w-[90%] px-5 pt-16 pb-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {CoursesData.map((item, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/3 mx-auto my-3 ">
              <div className="h-full border-[3px] bg-gray-100 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                <img className="h-80 w-full object-cover object-center" src={item.imgUrl} alt="blog" />
                <div className="p-6">
                 
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                  <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
                    <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i className="ri-calendar-check-line text-lg"></i></span>
                    <h4 className="title-font text-[12px] font-medium text-amber-600">February 2023</h4>
                  </div>
                  <span className="text-[0.9rem] mb-3 font-normal">{item.description}</span>
                  {toggledCard === index && (
                    <span className="font-normal text-[1rem] mb-3 inline-flex">{item.readmore}</span>
                  )}
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 text-sm inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer" onClick={() => handleToggle(index)}>
                      {toggledCard === index ? "Show Less" : "Read More"}
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Visits/>
    
    </>
  );
};

export default Courses;
