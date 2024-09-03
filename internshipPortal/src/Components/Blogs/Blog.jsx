import React from 'react';

const Blog = ({ title, src, more, setTitle }) => {
  return (
    
         
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-blue-800 border p-4 rounded-lg bg-blue-100">
                <span className='bg-white border-2 border-blue-800 p-2 px-3 flex justify-center items-center mr-3 rounded-full'>
                  <i className={`${src} text-3xl font-medium text-blue-900`}></i>
                </span>
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{title}</h2>
                  <a
                    href={more}
                    className="text-indigo-800 inline-flex items-center md:mb-2 lg:mb-0 text-[12px] hover:cursor-pointer hover:text-indigo-950"
                    onClick={() => setTitle(title)} // Set the title when clicked
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
        

       
  );
};

export default Blog;
