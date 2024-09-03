import React from 'react';
import { projects } from "./BlogDetails";
import "./Blog.css"
const BlogDetail = ({ selectedTitle }) => {
  const selectedProject = projects.find((project) => project.title === selectedTitle);

  return (
    <section className="text-gray-600 body-font">
      <div className="w-full px-5 py-24 mx-auto flex flex-wrap">
        {selectedProject ? (
          <>
          <div className=' scroll flex flex-col justify-center items-center w-full -mt-28 mb-20 my-5'>
            <h3 className=' text-xl font-medium text-amber-800'>Scroll Down</h3>
            <span><i class="ri-arrow-down-wide-line  text-4xl text-amber-800 hover:cursor-pointer"></i></span>
          </div>
          <div className="flex flex-wrap justify-between my-4 px-5">
            <div className="w-full lg:w-[57%]">
              <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
                {selectedProject.title}
              </h1>
              <div className="leading-relaxed text-justify pr-3">
                {selectedProject.description}
              </div>
            </div>
            <div className="lg:w-2/5 sm:w-1/3 w-full border rounded-lg overflow-hidden mt-6 sm:mt-0 mx-auto lg:mx-4">
              <img className="object-cover object-center w-full h-full" src={selectedProject.imgUrl} alt="stats" />
            </div>
          </div>
          </>
        ) : (
          <p>No project selected</p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
