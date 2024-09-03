import React, { useState } from 'react';
import data from "./Webinars.json";

const Webinars = () => {
  const [toggle, setToggle] = useState(null);

  const ToggleBtn = (index) => {
    setToggle(toggle === index ? null : index);
  };

  return (
    <section className="text-gray-500 body-font py-12 ">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10  ">
          {/* Mapping */}
          {data.map((item, index) => (
            <div
              key={index}
              className="w-5/6 lg:w-1/2 mx-auto my-8 mb-8 lg:mb-0  lg:scale-[0.86] transition-all duration-600 transform bg-gray-100 border-2 border-gray-400 rounded-xl 
              hover:cursor-pointer"
            >
              <div className="rounded-t-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  alt="content"
                  className="object-cover object-center h-72 w-full rounded-t-lg"
                  src={item.imgUrl}
                />
              </div>

              <h2 className=" px-5 title-font text-3xl font-semibold uppercase text-indigo-900 my-6 tracking-wider">
                {item.title}
              </h2>
              <div className="flex w-fit  py-1 px-5 justify-start items-center my-2">
                <span className="w-6 h-6 inline-flex justify-start items-center text-[1rem] text-amber-600">
                  <i className="ri-calendar-check-line text-xl"></i>
                </span>
                <h4 className="title-font text-sm font-medium text-amber-600 ml-2">
                  {item.date}
                </h4>
              </div>
              <p className="leading-relaxed text-lg text-justify text-gray-700 px-5">
                {item.description}
                {toggle === index && (
                  <span className=" mt-2 text-gray-600">
                    {item.readmore}
                  </span>
                )}
              </p>
              <button
                className="flex text-lg  mt-4 px-4 py-2 text-indigo-800  hover:bg-indigo-100 border-0 rounded-md focus:outline-none hover:underline hover:underline-offset-4 hover:cursor-pointer transition-colors duration-300"
                onClick={() => ToggleBtn(index)}
              >
                {toggle === index ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Webinars;
