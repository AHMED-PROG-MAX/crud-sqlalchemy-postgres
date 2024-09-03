import React from 'react'
import Circle from "../Imgs/circleBg.png"
const Products = () => {
  return (
    <section class="body-font text-gray-600 ">
     {/* Heading */}
     <hr className=' w-full bg-amber-700 h-2' />
     <div class="flex flex-col items-center md:flex-row w-full lg:w-5/6 mx-auto px-5 py-14 justify-around">
  <h3 class="md:w-[25%] w-full p-2 text-3xl md:text-2xl text-center md:text-left font-medium my-2 uppercase md:border-l-4 border-l-amber-700">
    Our <p class="inline md:block">Products</p>
  </h3>

  <p class="md:w-[50%] w-full px-2 text-[1rem] my-3 md:my-0">
  Our product range features innovative, high-quality solutions tailored for modern living. Each product reflects our commitment to excellence, offering superior performance and sustainable value.
  </p>
  <div className='md:w-[25%] w-full'>
    <img src="https://img.freepik.com/free-photo/3d-delivery-robot-working_23-2151150167.jpg?t=st=1724676292~exp=1724679892~hmac=002ce4294b5df63e2e571c46a9741d7d9ae66cd66a00788c760b85ebd752f225&w=740" alt="" className=' w-full h-auto' />
  </div>
</div>

      <div class="container mt-20 md:mt-0 lg:w-5/6 my-8 bg-gray-200 rounded-lg mx-auto flex flex-col items-center px-5 py-10 md:flex-row">
        <div class="mb-10 w-5/6 md:mb-0 md:w-[30%]">
          <img class="ml-0 h-[40vh] rounded object-cover object-center md:mx-auto md:h-[60vh]" alt="hero" src="https://smartcitylab.neduet.edu.pk/images/workshops/RVM-.png" />
        </div>

        <div class="flex flex-col px-10 text-justify md:w-[70%] md:items-start md:pl-6 lg:flex-grow">
          <h1 class="title-font mb-4 text-3xl font-semibold text-blue-900 sm:text-4xl">
          Reverse Vending Machine
            <p class="text-2xl font-medium text-amber-700 md:text-3xl">(RVM)</p>
          </h1>
          <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
            <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i class="ri-calendar-check-line  text-xl"></i></span>
            <h4 class="title-font text-sm font-medium text-amber-600">Februrary 2023</h4>
          </div>
          <p class="mb-8 leading-relaxed">A reverse vending machine can increase recycling rates at your workplace, which will lead to better plastic waste management – having a hugely positive impact on the environment. Get ROI on your Green Income through Advertising, Redemption Fees, Customer Data and PET Collected. For more Info, please visit e-bin.rcai.pk</p>
        </div>
      </div>
      <div class="container lg:w-5/6 my-8 bg-gray-200 rounded-lg mx-auto flex flex-col items-center px-5 py-10 md:flex-row">
        <div class="mb-16 flex flex-col px-5 md:pl-16 md:mb-0 md:w-[70%] md:items-start md:pr-10 md:text-left lg:flex-grow">
          <h1 class="title-font mb-4 text-2xl md:text-3xl font-medium uppercase text-indigo-900">Advanced Driver Monitoring System <span class=" text-[1.2rem] md:text-3xl text-amber-700">(ADMS)</span></h1>
          <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
            <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i class="ri-calendar-check-line  text-xl"></i></span>
            <h4 class="title-font text-sm font-medium text-amber-600">Februrary 2023</h4>
          </div>
          <p class="mb-8 text-justify leading-relaxed">We are offering advanced driver monitoring systems, also known as ADMS, to Fleet Management Companies (FMC) and automotive industries which help our customers develop novel business solutions and ensure comfort and safety on the road.</p>
        </div>
        <div class="w-5/6 md:w-[30%]">
          <img class="mx-auto my-auto hidden h-60 rounded object-cover object-center md:mx-0 md:block" alt="hero" src="https://smartcitylab.neduet.edu.pk/images/workshops/ADMS.png" />
        </div>
      </div>
      <div class="container lg:w-5/6 my-8 bg-gray-200 rounded-lg mx-auto flex flex-col items-center px-5 py-10 md:flex-row">
        <div class="mb-10 w-5/6 md:mb-0 md:w-[30%]">
          <img class="ml-0 h-[40vh] rounded object-cover object-center md:mx-auto " alt="hero" src="https://smartcitylab.neduet.edu.pk/images/workshops/IOT%20Devices%20(2).png" />
        </div>

        <div class="flex flex-col px-10 text-justify md:w-[70%] md:items-start md:pl-6 lg:flex-grow">
          <h1 class="text-2xl font-semibold text-indigo-900 md:text-3xl uppercase">
            IOT Devices
            <p class="text-lg font-normal text-gray-700 capitalize">Digitized, real time water and gass flow monitoring solution

            </p>
          </h1>
          <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
            <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i class="ri-calendar-check-line  text-xl"></i></span>
            <h4 class="title-font text-sm font-medium text-amber-600">Februrary 2023</h4>
          </div>
          <p class="mb-8 leading-relaxed">Smart City Lab, brings you reliable, easy to install and remotely accessible telemetry devices, for effective liquid and gass flow monitoring at your facility.</p>
        </div>
      </div>
      <div class="container lg:w-5/6 my-8 bg-gray-200 rounded-lg mx-auto flex flex-col items-center px-5 py-10 md:flex-row">

        <div class="mb-16 flex flex-col px-5 md:pl-16 md:mb-0 md:w-[70%] md:items-start md:pr-10 md:text-left lg:flex-grow">
          <h1 class="text-2xl font-semibold text-indigo-900 md:text-3xl uppercase">
            Soil Probes
            <p class="text-lg font-normal text-gray-700 capitalize">Just the right amount, at the right place, at the right time

            </p>
          </h1>
          <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
            <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i class="ri-calendar-check-line  text-xl"></i></span>
            <h4 class="title-font text-sm font-medium text-amber-600">Februrary 2023</h4>
          </div>
          <p class="mb-8 text-justify leading-relaxed">Our soil probes delivers a deep understanding of the Agri-soil offering real time and precision monitoring at multiple depths.</p>
        </div>
        <div class="w-5/6 md:w-[30%]">
          <img class="mx-auto my-auto hidden h-60 rounded object-cover object-center md:mx-0 md:block" alt="hero" src="https://smartcitylab.neduet.edu.pk/images/workshops/Soil%20probes%20%20(2).png" />
        </div>
      </div>
    </section>

  )
}

export default Products
