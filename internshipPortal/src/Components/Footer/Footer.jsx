
import React from 'react'
import "./Footer.css"
import Logo from "../Imgs/NCAI Logo-01.png"
const Footer = () => {
  return (
    <footer class="body-font text-gray-600 bg-gray-100 border-[2px] border-t-gray-200 relative  top-36">
      <div class="mx-auto flex w-full flex-col flex-wrap justify-between px-10 py-10 md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div class="mx-auto w-full flex-shrink-0  md:mx-0 md:w-1/4 md:text-left my-auto">
          <a class="title-font flex items-center my-auto mx-auto justify-center font-medium text-gray-900 md:justify-start">
            <img src={Logo} alt="NCAI NEDUET" className=' w-5/6 mx-auto' />
          </a>

        </div>
        <div class="-mb-10 mt-10 flex items-center py-8  mx-auto md:mt-0  md:text-left lg:w-[40%]">
          <div class="w-full md:flex justify-between">

            <nav class=" w-full list-none lg:w-5/6 mx-auto">
              <span>
                <li class="flex items-start justify-start mt-3">
                  <span class="mr-4 h-12 w-12 bg-pink- p-2 pt-0"><i class="ri-map-pin-fill text-3xl text-red-700"></i></span>
                  <a class="text-gray-600 text-[1rem]"> 1st Floor Smart City Lab - HPCC Building NED
                    University of Engineering and Technology, Main University Road, Block 1, Gulistan-e-Johar,
                    Karachi(75270)-Sindh</a>
                </li>
              </span>
              <span>
                <li class="flex items-center justify-start mt-3">
                  <span class="mr-4 h-12 w-12 bg-pink- p-2"><i class="ri-mail-fill text-3xl text-green-800 "></i></span>
                  <a class="text-gray-600 text-[1rem]"> ncaismartcitylab@gmail.com</a>
                </li>
              </span>
              <span>
                <li class="flex items-center justify-start mt-3">
                  <span class="mr-4 h-12 w-12 bg-pink- p-2"><i class="ri-phone-fill text-3xl text-amber-600"></i></span>
                  <a class="text-gray-600 text-[1rem]"> +92-2199261261 (Ext.2682)</a>
                </li>
              </span>
            </nav>

          </div>
        </div>
        <div class=" w-full lg:w-[25%] flex flex-col justify-start  items-center mx-auto ">
          <h2 className=' text-center text-gray-800 text-xl my-10 font-bold uppercase'>Follow Us On</h2>
          <span class="mt-2 flex  sm:ml-auto sm:mt-0 justify-around w-[85%] mx-auto">
            <a class="p-2  bg-blue-900 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 p-2 bg-blue-600 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 p-2 bg-orange-700 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 p-2 bg-blue-800 rounded-lg
            
            
            text-gray-100 hover:cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="h-5 w-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="bg-gray-900">
        <div class="mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p class=" text-sm text-gray-200 text-center w-full ">
            All rights reserved | Smart City Lab,
            NCAI | NEDUET

          </p>

        </div>
      </div>
    </footer>

  )
}

export default Footer
