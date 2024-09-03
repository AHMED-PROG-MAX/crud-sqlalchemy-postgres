import React from 'react';
import Data from "./WorkShopData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WorkShops = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#002556"  , borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, background: "#002556" , borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
            onClick={onClick}
          />
        );
      }
      
    var settings = {
        
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // Adding this setting to ensure buttons are visible
        arrows: true,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className=" body-font pb-24 py-24 mb-10 relative">

            <div className="w-[90%] px-5 md:px-10  pt-16 md:pt-8 mx-auto">
                <Slider {...settings}>
                    {
                        Data.map((item, index) => (
                            <div key={index} className="flex flex-wrap sm:-m-4  -mb-10 -mt-4">
                                <div className="p-4 w-full md:w-2/3 mx-auto flex flex-col text-center items-center">
                                    <div className="font-medium inline-flex  justify-start rounded-full  mb-5 flex-shrink-0">
                                        <img src={item.imgUrl} alt="" className=' border-4 border-blue-900 rounded-lg md:w-[70%] mx-auto' />
                                    </div>
                                    <div className="flex-grow mx-auto text-center">
                                        <h2 className=" text-2xl md:text-3xl title-font font-bold uppercase mb-3 text-gray-950">{item.title}</h2>
                                        <h4 className=" text-xl md:text-2xl title-font font-medium mb-3 text-blue-950">{item.presenter}</h4>
                                        <div className="flex w-fit md:w-1/4 lg:w-1/5 mx-auto px-0 py-1 justify-center items-center my-1">
                                            <span className='w-6 mx-auto h-6 inline-flex justify-center items-center  text-amber-700'><i class="ri-calendar-check-line text-xl"></i></span>
                                            <h4 class="title-font text-sm font-medium text-amber-700">Februrary 2023</h4>
                                        </div>
                                        <p className="desc text-base text-gray-800 text-center px-2 pb-12 ">{item.description}</p>
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

export default WorkShops;
