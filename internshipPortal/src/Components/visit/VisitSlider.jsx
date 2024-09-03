import React from 'react'
import Visits from './Visits'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "./Visit.json"
const VisitSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
      };

  return (
    <section class="text-gray-600 body-font bg-green-300">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Slow-carb next level shoindxgoitch ethical authentic, scenester sriracha forage.</h1>
      <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Button</button>
    </div>
  </div>
  <div className=' w-[92%] mx-auto'>
  <Slider {...settings}>
{Data.map((item,index) => (
    <Visits key={index} src={item.imgUrl} desc={item.description} title ={item.title} date={item.date} />
))}
  </Slider>

  </div>
</section>
    
  )
}

export default VisitSlider
