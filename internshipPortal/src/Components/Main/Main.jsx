import React, {useState} from 'react'
import "./Main.css"
// import bgIMg from "../Imgs/gradient-brain-background_23.jpg"
import vecteezy_robot2 from "../Imgs/vecteezy_robot2.jpg"
import Content from '../Content/Content'
import { NavLink } from 'react-router-dom'
const Main = () => {
    const [isActive, setIsActive] = useState(false);
  const Click = () => {
    <Content/>
  }
  
    const handleToggle = () => {
      setIsActive(!isActive);
    };
    return (
       <>
       {/* w-full mx-auto my-auto relative -z-10 h-auto top-24 md:top-40 lg:top-16 */}
     
        <section class="main body-font overflow-hidden relative z-10 ">
           
            <div className=" w-fit  flex flex-wrap px-3 py-3 md:py-20 md:mx-12 lg:w-4/5">
        <div className="mb-1 md:mb-6 w-full md:m-8  lg:w-fit  lg:py-6 lg:pr-10">
          <h1 className="NCAI capitalize my-3">
            National Center Of
            <p className=' uppercase'>Artificial Intelligence</p> 
          </h1>
          <hr className=' h-[0.5px] w-full my-1' />
          <h3 className="SML  mb-4 md:text-[2rem] uppercase">
            Smart City Lab
          </h3>

          <div className="flex w-full justify-between">
            <NavLink to="/content" className="btn text-sm md:text-lg flex lg:w-1/4 items-center justify-center rounded-lg  px-6 py-1 md:py-3 " onClick={Click}>
              About US
            </NavLink>
          
          </div>

         
            {/* <div className="mt-4 flex items-end space-x-4 transition-opacity duration-500 ease-in-out opacity-100 h-1/3  ">
            <button
              className={`flex rounded border-0 px-6 py-2 text-white focus:outline-none mt-auto ${
                isActive ? 'bg-red-400' : 'bg-indigo-500 hover:bg-indigo-600'
              }`}
              onClick={handleToggle}
            >
              Button
            </button>
            {isActive && (
                <div className="btns">
              <button className="flex rounded border-0 bg-green-500 px-6 py-2 text-white hover:bg-green-600 focus:outline-none">
                Email
              </button>
              <button className="flex rounded border-0 bg-blue-500 px-6 py-2 text-white hover:bg-blue-600 focus:outline-none">
                Messenger
              </button>

                </div>
                 )}
            </div>
          */}
        </div>
      </div>
        </section>
       </>  

    )
}

export default Main
