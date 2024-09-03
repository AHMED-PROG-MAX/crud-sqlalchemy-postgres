import React from 'react'
import "./Team.css"
import Team1 from './Team1.jsx'
import Team2 from './Team2.jsx'
import ResearchAssis from './ResearchAssis.jsx'
import ReseachStud from './ReseachStud.jsx'
import { teamData, researchAssistant, researchStud } from './index.js'
import { team2 } from './index.js'

const Team = () => { 
  return (
    <section className="text-gray-600 body-font">
      {/* Heading */}
        <div class="mx-auto ">
          <h1 class="ourTeam text-3xl md:text-5xl text-center font-medium py-8 uppercase text-gray-100">OUR TEAM</h1>
          <div class="flex flex-col items-center md:flex-row w-full  md:w-5/6 mx-auto px-5 py-14 justify-around">

          <h3 class="md:w-[30%] w-full p-2 text-2xl text-center md:text-left font-medium my-2 uppercase border-l-4 border-l-amber-700">
  Meet Our <p class="inline md:block">People</p>
</h3>

            <p class="md:w-[70%] w-full px-2 text-[1rem] my-3 md:my-0">Our team of master’s students at Smart City Lab excels in diverse fields of engineering and technology. We are committed to driving innovation and advancing smart city solutions, with each member contributing unique skills and expertise.</p>
          </div>
        </div>

      <div className="w-full mx-auto flex px-5 py-10 md:flex-row flex-col items-center justify-center md:px-8">
        <div className="w-5/6 md:w-[40%] mx-auto mb-10 md:mb-0">
          <img className="object-cover object-center rounded-lg mx-auto border-[6px] border-gray-300" alt="hero" src="https://smartcitylab.neduet.edu.pk/images/team/dr.khurram-new.jpg" />
        </div>
        <div className="lg:flex-grow w-5/6 md:w-[65%] lg:w-3/4 lg:px-[2rem] md:pl-10 flex flex-col items-center md:items-start md:text-left">
          <h1 className="post text-3xl md:text-2xl lg:text-3xl mb-2 font-medium text-left uppercase">Principal Investigator</h1>
          <h3 className="name text-xl md:text-lg lg:text-xl font-medium text-left  uppercase">Dr. Muhammad Khurram</h3>
          <div className="w-[60%] h-[0.7px]  bg-indigo-900 my-1"></div>
          <h3 className="text-[1rem] md:text-[0.8rem] lg:text-[1rem] mb-2 font-normal text-left uppercase text-neutral-800">Professor CIS Department</h3>
          <p className="mb-6 md:text-[0.8rem] text-justify">Dr. Muhammad Khurram, Principal Investigator at Smart City Lab also serving as Professor at Dept. of Computer and Information Systems Engineering, NED University and Director of Research Center for AI. His main interest is in computer vision, AI, and IoT projects.</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            {/* <button className="inline-flex text-black text-sm bg-gray-200 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded lg:text-lg">Read More</button> */}
            <span class="mt-2 flex w-1/2  sm:mt-0 justify-start">
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
      </div>

      {/*TEam 1 */}
      <div

        className="px-5 pb-10 w-full mx-auto flex justify-center md:justify-around flex-wrap"
      >

        {teamData.map((item, index) => (
          <Team1
            key={index}
            name={item.name}
            post={item.post}
            title={item.title}
            description={item.description}
            img_url={item.img_url}
          />
        ))}
      </div>


      {/*BDM And Research Associates */}
      <div className='pb-14 w-full'>

        <h1 className=' text-4xl text-center my-1 font-medium uppercase text-zinc-900'>BDM And Research Associates</h1>
        <p className="w-[60%] h-[2px] bg-amber-600 mx-auto my-2"></p>
        <div

          className="px-5  mx-auto flex justify-center md:justify-around flex-wrap"
        >
          {team2.map((item, index) => (
            <Team2
              key={index}
              name={item.name}
              post={item.post}
              title={item.title}
              description={item.description}
              img_url={item.img_url}
            />
          ))}
        </div>

      </div>

      {/* Research Assistants */}
      <div className='pb-14 w-full'>

        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-3xl md:text-5xl font-semibold title-font mb-4 text-indigo-900 tracking-widest uppercase">Research Assistants
          </h1>
          <div class="mx-auto w-[50%]  h-[1px] bg-amber-600 my-1 mb-16"></div>

          <div className="flex w-full px-10 py-5 justify-center md:justify-around flex-wrap">
            {researchAssistant.map((item, index) => (
              <ResearchAssis
                key={index}
                name={item.name}
                title={item.title}
                specialization={item.specialization}
                description={item.description}
                img_url={item.img_url}
              />
            ))}

          </div>

        </div>


      </div>

      {/* Research Students */}
      <div className='pb-20 w-full'>
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-3xl  md:text-5xl font-semibold title-font mb-4 text-indigo-900 tracking-widest uppercase">Research Students
          </h1>
          <div class="mx-auto w-[50%]  h-[1px] bg-amber-600 my-1 mb-16"></div>

          <div className="flex w-full px-10 py-5 justify-center md:justify-around flex-wrap">
            {researchStud.map((item, index) => (
              <ReseachStud
                key={index}
                name={item.name}
                title={item.title}
                education={item.education}
                description={item.description}
                imgUrl={item.imgUrl}
              />
            ))}

          </div>

        </div>
      </div>
    </section >
  )
}

export default Team
