import React from 'react'
import "./Tech.css" 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Robot from "../Imgs/biorobots.png"

import Data from "./data.json"; // Assuming Data is an array in this JSON file

const Tech = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280, // md screens and up
                settings: {
                     slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024, // md screens and up
                settings: {
                     slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // sm screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
      };

    return (
        <section className="Tech body-font py-10 relative">
            <div className=' w-full flex flex-col md:flex-row '>
            <img src={Robot} alt="" className='  mx-auto md:mx-2 my-auto md:w-2/5 h-auto' />
            <h1 className='px-4  lg:pl-14 md:w-[60%] text-3xl  md:text-[3.4rem] md:py-20 text-left uppercase font-medium'>Our emerging <p className='text-4xl md:text-[4rem] font-semibold md:my-6'>technologies</p></h1>
            </div>
            <div className="w-[90%] px-5 md:px-10  pb-24 pt-16 md:pt-8 mx-auto">
                <Slider {...settings}>
                {
                    Data.map((item, index) => (
                        <div key={index} className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                            <div className="p-4 w-full mx-auto md:w-auto flex flex-col text-center items-center">
                                <div className="techIcons w-20 h-20 font-medium inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0">
                                    <i className={`${item.icon} w-10 h-10 text-4xl`} aria-hidden="true"></i>
                                </div>
                                <div className="flex-grow mx-auto">
                                    <h2 className=" text-lg title-font font-medium mb-3 text-indigo-100">{item.title}</h2>
                                    <p className="desc text-base text-justify px-2  pb-7 ">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </section>
    )
}

export default Tech;
