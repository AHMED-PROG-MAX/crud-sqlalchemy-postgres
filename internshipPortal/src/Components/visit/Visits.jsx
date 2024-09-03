import React from 'react'

const Visits = ({key,src,desc,title,date}) => {
  return (
  
  <>
   <section class="text-gray-600 body-font bg-gray-200">
 <div key={key} class="bg-gray-200  flex flex-col md:flex-row rounded-lg w-[90%]">
    <div  class="flex lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src={src}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center p-5 lg:py-14 ">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
      </h1>
      <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
                    <span className='w-6 h-6 inline-flex justify-start items-center  text-amber-600'><i className="ri-calendar-check-line text-lg"></i></span>
                    <h4 className="title-font text-[12px] font-medium text-amber-600">{date}</h4>
                  </div>
      <p class="mb-8 text-sm">{desc}</p>
     
    </div>
  </div>
  </section>
  </>



  )
}

export default Visits
