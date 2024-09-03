import React from 'react'
import "./Vision.css"
const Vision = () => {
    return (
        <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center md:justify-around">
            <div class="p-4 w-5/6  md:w-[30%] flex flex-col items-start border border-gray-500 rounded-lg">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">Vision</h2>
                <h5  class="text-gray-600 text-lg  font-medium mb-3">INNOVATORS</h5>
                <p class="leading-relaxed text-base md:text-sm text-gray-600">To lead the world through groundbreaking innovations by conducting research, making discoveries, and creating cutting-edge technologies that enhance the quality of life and drive global progress.</p>
               
              </div>
            </div>
            <div class="p-4 w-5/6  md:w-[30%] flex flex-col items-start border border-gray-500 rounded-lg">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">Mission</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600">"The mission of Smart City Lab is to create innovative environment to achieve
                                      sustainability and growth, doing research in the field of technology to make better
                                      quality of life and bridging between academia and industry through joint ventures".</p>
               
              </div>
            </div>
            <div class="p-4 w-5/6  md:w-[30%] flex flex-col items-start border border-gray-500 rounded-lg">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-3xl title-font font-medium mb-3">Goal</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600">The goal of Smart City Lab, NCAI, is to offer state-of-the-art resources to researchers working on Smart City technologies. The lab serves as a national hub for academia and industry, focusing on integrating AI-driven smart technologies into daily life and transforming theoretical knowledge into practical applications.</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Vision
