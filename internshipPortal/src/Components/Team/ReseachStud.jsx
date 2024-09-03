import React from 'react'

const ReseachStud = ({ name, title, specialization, imgUrl, description }) => {
  return (
    <>
    <div class="p-4 lg:w-1/2 my-2 ">
      <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imgUrl}/>
        <div class="flex-grow sm:pl-8">
          <h2 class="title-font font-medium text-lg text-gray-900">{name}</h2>
          <h3 class="text-gray-500 ">{title}</h3>
          <p class="w-full lg:w-[90%] h-[1px] bg-amber-600 my-1"></p>
          <h3 class="text-gray-500 ">{specialization}</h3>
          <p class="mb-4 lg:text-sm">{description}</p>
          <span class="mt-2 flex w-full md:w-1/2  sm:mt-0 justify-center md:justify-start">
            <a class="p-2  bg-blue-900 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
           
            <a class="ml-3 p-2 bg-blue-800 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="h-4 w-4" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>

  </>
  )
}

export default ReseachStud
