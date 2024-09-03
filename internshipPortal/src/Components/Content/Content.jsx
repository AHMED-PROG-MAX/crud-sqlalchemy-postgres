import React from 'react'
import "./Content.css"
import Robot from "../Imgs/biorobots.png"
import Circle from "../Imgs/circleBg.png"
import EarthHand from "../Imgs/EarthHand-01.png"

const Content = () => {
    return (
        <>
        {/* top-10 md:top-12 lg:top-40  */}
        <section class="content  body-font overflow-hidden relative  h-fit top-10 md:top-4 lg:top-16 xl:top-12 neon-blue-bg">
            <div class="w-full px-5 py-24 pb-14 mx-auto">
                <div class="w-full mx-auto flex flex-wrap justify-between flex-col md:flex-row">
                    {/* <img alt="ecommerce" class="lg:w-[45%] w-full lg:h-auto h-64 object-cover object-center rounded robot-shadow" src={Robot} /> */}

                    <div class="md:w-[65%] w-full md:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                        <h1 class="text-[2.2rem] md:text-[2.5rem] title-font font-light mb-1">Welcome to
                            <p className=' uppercase font-bold'>Smart City Lab,<span className='font-bold  '> NCAI</span></p> </h1>

                        <p class="text-sm md:text-lg">The centre is designed to become a leading hub of innovation,
                            scientific research, knowledge transfer of the local economy, and training in the area of
                            Artificial Intelligence(AI) and its closely associated fields.</p>
                    </div>

                    <div className='earthImg w-full md:w-[35%] h-auto flex justify-end relative'>
                        <img src={EarthHand} alt="" className='earth md:w-full right-0 -bottom-[10rem]' id='earth' />
                        {/* <img src={RobotHand} alt="" className='w-1/4 absolute right-0 bottom-0' /> */}
                    </div>
                </div>
                <div className=' h-[15rem]'>
                    <img src={Circle} alt="" className=' text-gray-400 relative -z-10 w-3/4 md:w-[57%] bottom-0 md:bottom-[10rem] lg:bottom-[15rem] lg:left-[57px] opacity-70' />
                </div>
            </div>
        </section>
       
        <div class="w-[90%] md:w-full px-5 pb-32 md:-mt-8 mx-auto">
          
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center md:justify-around">
            <button class="cards p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
              <i class="ri-lightbulb-line text-5xl"></i>
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3">Vision</h2>
                <h5  class=" text-lg  font-medium mb-3">INNOVATORS</h5>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">To lead the world through groundbreaking innovations by conducting research, making discoveries, and creating cutting-edge technologies that enhance the quality of life and drive global progress.</p>
               
              </div>
            </button>
            <button class="cards p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
              <i class="ri-rocket-2-line text-5xl"></i>
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3">Mission</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">"The mission of Smart City Lab is to create innovative environment to achieve
                                      sustainability and growth, doing research in the field of technology to make better
                                      quality of life and bridging between academia and industry through joint ventures".</p>
               
              </div>
            </button>
            <button class="cards p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center justify-center rounded-full   mb-5 flex-shrink-0">
               <img src="https://www.vecteezy.com/free-vector/chemistry" className=' w-10 h-10 text-blue-400'/>
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3">Goal</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">The goal of Smart City Lab, NCAI, is to offer state-of-the-art resources to researchers working on Smart City technologies. The lab serves as a national hub for academia and industry, focusing on integrating AI-driven smart technologies into daily life and transforming theoretical knowledge into practical applications.</p>
               
              </div>
            </button>
          </div>
        </div>
     
        </>
        
    )
}

export default Content
