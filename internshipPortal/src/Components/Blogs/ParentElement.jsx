import React, { useState } from 'react';
import projects from './Blog';
import BlogDetail from './BlogDetail';
import blogList from './Blog.json';
import Blog from './Blog';
const ParentElement = () => {
  const [title, setTitle] = useState("");

  return (
    <>

      <section className="text-gray-600 body-font">
        <div className="py-14 mx-auto flex flex-wrap w-full">
          <div className="flex flex-col lg:flex-row justify-around items-center mb-24 py-10 pt-6">
            <hr className="h-20 w-[6px] bg-amber-600 hidden lg:block rounded-lg lg:h-28" />
            <div className="text-center w-full md:pl-8 lg:pl-0 md:text-left md:-ml-0 lg:w-1/3">
              <h2 className="text-2xl md:text-[2.6rem] lg:text-3xl text-indigo-950 font-semibold title-font uppercase">Explore Our</h2>
              <p className="text-2xl md:text-[2.9rem] lg:text-[2.3rem] text-indigo-950 font-bold mt-3 uppercase">Latest Insights</p>
            </div>
            <div className="w-full lg:w-[62%] mt-6 md:-mt-8 lg:mt-0 flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-3/5 md:pl-6 lg:-ml-6 text-center md:text-left">
                <p className="leading-relaxed text-sm md:text-sm">Dive into our blog to discover the latest innovations, trends, and insights in technology and beyond. From smart solutions to groundbreaking research, explore the ideas that are shaping the future.</p>
              </div>
              <div className="flex w-full md:w-1/3 flex-wrap mt-6 md:-mt-16 lg:mt-0 md:-m-2 -m-1 h-fit">
                <div className="flex flex-wrap w-full">
                  <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-32 md:h-full object-center block" src="https://img.freepik.com/free-photo/ai-technology-microchip-background-digital-transformation-concept_53876-124669.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid" />
                  </div>
                  <div className="md:p-2 p-1 w-1/2">
                    <img alt="gallery" className="w-full object-cover h-32 md:h-full object-center block" src="https://img.freepik.com/free-photo/facial-recognition-collage-concept_23-2150038899.jpg?t=st=1724942001~exp=1724945601~hmac=88c85ecabf1a9782afe57066c8bfbb4f07432342b81477fb3c3ab7a6b79db7c3&w=740" />
                  </div>
                  <div className="md:p-2 p-1 w-full">
                    <img alt="gallery" className="w-full h-32 md:h-full object-cover object-center block" src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?t=st=1724942527~exp=1724946127~hmac=671d87335b124d9fdfe1e91df105c836ed77720903e3bde6b6663db79d2266e9&w=740" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog components */}
          {blogList.map((item, index) => (
            <Blog
              key={index}
              title={item.title}
              src={item.imgUrl}
              more={item.learnMore}
              setTitle={setTitle} // Pass setTitle to Blog component
            />
          ))}

        </div>
      </section>
    
      {/* BlogDetail component */}
      <a href={`
      ${title && (
        <BlogDetail selectedTitle={title} />
      )}
      
      `}
      target='blank'>Google</a>
    </>
  );
}

export default ParentElement;
