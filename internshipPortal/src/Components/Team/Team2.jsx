import React from 'react'

const Team2 = ({ name, post, title, description, img_url }) => {
  return (
    <>
        <div className="p-4 md:w-1/2 lg:w-1/2 sm:mb-0 mb-6 my-10 ">
          <div className="photos lg:h-1/2 md:h-2/5 md:w-1/2  mt-4 mx-auto rounded-lg  overflow-hidden">
            <img alt="content" className="object-cover object-center  my-auto w-full mx-auto h-full md:transform md:scale-90  border-[6px] border-gray-300 rounded-lg " src={img_url} />
          </div>
          <div className=" flex flex-col justify-center  md:items-center mx-auto lg:transform lg:scale-[0.88] lg:px-10">
          <h2 className="post text-[1.2rem] md:text-2xl font-medium title-font mt-5 uppercase">{post}</h2>
          <h2 className="text-[0.8rem] md:text-xl font-medium title-font text-amber-700 mt-2 uppercase">{name}</h2>
          <div className="name w-[60%] h-[0.7px] bg-blue-800 my-1 uppercase"></div>
          <h2 className="text-[1rem] font-normal text-gray-800">{title}</h2>
          <p className="text-base mt-2 text-justify md:text-center">{description}</p>
          <span class=" flex w-1/2  sm:mt-0 justify-center my-4 mx-auto">
            <a class="p-2  bg-blue-900 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-6 w-6" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
           
            <a class="ml-3 p-2 bg-blue-800 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="h-6 w-6" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
          </div>
        </div>
  
    </>
  )
}

export default Team2
