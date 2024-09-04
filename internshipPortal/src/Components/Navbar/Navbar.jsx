import React, { useState } from 'react';
import "./Navbar.css";
import Logo from "../Imgs/NCAI Logo-01.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  }

  return (
    <header className="body-font  top-0 text-gray-600 relative  ">
      <div className="w-[100%] mx-auto flex flex-col flex-wrap s items-center p-2 md:flex-row">
        <a className="title-font flex items-center justify-center md:justify-around md:mb-0 w-4/5
         md:w-full lg:w-1/4">
          <span className='Logo p-2'><img src={Logo} alt="NCAI" className='w-3/4 h-auto md:w-1/3 lg:w-[60%] md:mx-auto ' /></span>
          <div className="barMenu w-1/5 flex justify-center items-center">
            <button className="hover:cursor-pointer md:hidden my-6" onClick={toggleBtn}>
              <i className="ri-menu-line text-[2rem]"></i>
            </button>
          </div>
        </a>
        {/* <hr className=' h-[0.5px] w-full hidden md:block lg:hidden bg-blue-700 my-1' /> */}
        <nav className={`flex-col md:flex-row flex-wrap items-start md:items-center justify-around text-base md:ml-auto md:mr-auto 
          ${toggle ? "flex" : "hidden"} md:flex w-full lg:w-[70%] mt-4 lg:mt-0`}>
          <div className="dropdown md:border-none border py-1">
            <NavLink to="/" className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0">Home</NavLink>
          </div>
          <div className="dropdown md:border-none border py-1">
            <NavLink className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0">About Us</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/about" className='mt-[0.3rem]'>About Us</NavLink></li>
              <li><NavLink to="/about/projects">Our Projects</NavLink></li>
              <li><NavLink to="/about/blogs">Our Blogs</NavLink></li>
              <li><NavLink to="/about/team" className='rounded-b-lg'>Team</NavLink></li>
            </ul>
          </div>
          <div className="dropdown md:border-none border py-1">
            <NavLink className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0">news and events</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/newsAndEvents/news" className='mt-[0.3rem]'>news</NavLink></li>
              <li><NavLink to="/newsAndEvents/events">Events</NavLink></li>
              <li><NavLink to="/newsAndEvents/visits"  className='rounded-b-lg'>Visits</NavLink></li>

            </ul>
          </div>

          <div className="dropdown md:border-none border py-1">
            <NavLink className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0">We Offer</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/weOffer/products" className='mt-[0.3rem]'>Our Products</NavLink></li>
              <li><NavLink to="/weOffer/services">Our Services</NavLink></li>
              <li className="relative">
                <NavLink className="nav-link hover:cursor-pointer rounded-b-lg" >Competence Development Program</NavLink>
                <ul className="dropdown-menu absolute left-full top-0 hidden group-hover:flex flex-col space-y-1">
                  <li><NavLink to="/weOffer/competence/workshops">Workshop</NavLink></li>
                  <li><NavLink to="/weOffer/competence/courses">Courses</NavLink></li>
                  <li><NavLink to="/weOffer/competence/webinars" className="rounded-b-lg" >Webinars</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="dropdown md:border-none border py-1">
            <NavLink className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0">Achievements</NavLink>
            <ul className="dropdown-menu">
              <li><NavLink to="/" className='mt-[0.3rem]'>Achievement 1</NavLink></li>
              <li><NavLink to="/">Achievement 2</NavLink></li>
              <li><NavLink to="/" className="rounded-b-lg">Achievement 3</NavLink></li>
            </ul>
          </div>
          
          <div className="dropdown md:border-none border py-1">
            <NavLink to="/contact" className="nav-link hover:cursor-pointer text-[1rem] ml-2 md:ml-0" >Contact Us</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
