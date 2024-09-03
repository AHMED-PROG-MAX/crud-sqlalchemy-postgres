import React from 'react'
import Map from "../Imgs/Map.png"
import "./Contact.css"
const Contact = () => {
    return (
        <section className=' relative'>
            <div className='w-full h-screen py-5'>
                <img src={Map} alt='WorldMap' className=' text-green-500 opacity-75'>
                </img>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between absolute  top-0 z-10 my-14">
                <div className=' w-full md:w-3/4 mx-auto lg:w-[35%] xl:w-2/5 bg-transparent  flex flex-wrap'>

                    <div class="pl-6 w-full lg:pr-10 lg:py-6 lg:pt-3 mb-6 lg:mb-0 text-indigo-950">
                        <h1 class=" text-5xl title-font font-bold mb-4 uppercase">Get In <p className='inline lg:block lg:text-6xl'> Touch</p></h1>
                        <p class="leading-relaxed mb-4">Feel free to reach out to us. Our team is here to assist you with any inquiries you may have.</p>
                        <nav class=" w-full list-none mx-auto text-gray-800">
                            <span>
                                <li class="flex items-start justify-start mt-3">
                                    <span class="mr-2 h-12 w-12 bg-pink- p-2 pt-0"><i class="ri-map-pin-fill text-xl text-red-700"></i></span>
                                    <a class=" text-sm"> 1st Floor Smart City Lab - HPCC Building NED
                                        University of Engineering and Technology, Main University Road, Block 1, Gulistan-e-Johar,
                                        Karachi(75270)-Sindh</a>
                                </li>
                            </span>
                            <span>
                                <li class="flex items-center justify-start mt-3">
                                    <span class="mr-2 h-12 w-12 bg-pink- p-2"><i class="ri-mail-fill text-xl text-green-800 "></i></span>
                                    <a class=" text-sm"> ncaismartcitylab@gmail.com</a>
                                </li>
                            </span>
                            <span>
                                <li class="flex items-center justify-start mt-3">
                                    <span class="mr-2 h-12 w-12 bg-pink- p-2"><i class="ri-phone-fill text-xl text-amber-600"></i></span>
                                    <a class=" text-sm"> +92-2199261261 (Ext.2682)</a>
                                </li>
                            </span>
                        </nav>
                    </div>


                </div>
                {/* form */}
                <div class="form flex flex-col mx-auto md:w-3/4 lg:w-[60%] xl:w-[48%] lg:mx-3 lg:mr-14 rounded-xl py-5  w-full justify-center items-center  px-8">
<h1 className=' text-2xl text-gray-100 my-2 font-semibold capitalize'>We'd love to hear from you!</h1>
                    {/* <!-- Full Name and Email --> */}
                    <div class="w-full flex flex-col md:flex-row  text-gray-300">
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="full-name" class="leading-7 text-sm ">Fullname</label>
                            <input type="text" id="full-name" name="full-name" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="email" class="leading-7 text-sm ">Email</label>
                            <input type="email" id="email" name="email" placeholder='example@gmail.com' class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>

                    {/* <!-- Phone and Skills --> */}
                    <div class="w-full flex flex-col md:flex-row  text-gray-300">
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="phone" class="leading-7 text-sm ">Phone</label>
                            <input type="number" id="phone" name="phone" placeholder='03XX-XXXX-XXX' class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="skills" class="leading-7 text-sm ">Skills</label>
                            <select id="skills" name="skills" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400  px-3 leading-8 transition-colors duration-200 ease-in-out py-2">
                            <option value="">Your Skills</option>
                                <option value="web">Web Development</option>
                                <option value="app">App Development</option>
                                <option value="ai">Artificial Intelligence</option>
                                <option value="machine_learning">Machine Learning</option>
                                <option value="Ui_Ux">Ui/Ux Designer</option>
                                <option value="Video">Video Editor</option>
                                <option value="writer">Content Writer</option>
                                <option value="data">Data Scientist</option>


                            </select>
                        </div>
                    </div>

                    {/* <!-- Education and Experience --> */}
                    <div class="w-full flex flex-col md:flex-row  text-gray-300">
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="education" class="leading-7 text-sm ">Education</label>
                            <input type="text" id="education" name="education" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative flex-grow w-full md:w-1/2 mx-3 my-2">
                            <label for="experience" class="leading-7 text-sm ">Select Your Experience</label>
                            <select id="experience" name="experience" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400  px-3 leading-8 transition-colors duration-200 ease-in-out py-2">
                                <option value="">Select Experience</option>
                                <option value="0-1">0-1 Years</option>
                                <option value="1-3">1-3 Years</option>
                                <option value="3-5">3-5 Years</option>
                                <option value="5+">5+ Years</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Message --> */}
                    <div class="w-full flex flex-col">
                        <div class="relative mb-4 mx-3 my-2">
                            <textarea id="message" name="message" placeholder='Write something about yourself' class="w-full bg-transparent bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                    </div>
<div className="w-full flex flex-col">
<button class="text-indigo-950 bg-[#cacaca] font-semibold  border-0 py-2 mx-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">Submit</button>

</div>
                </div>




            </div>
        </section>

    )
}

export default Contact
