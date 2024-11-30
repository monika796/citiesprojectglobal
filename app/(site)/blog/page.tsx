import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Newsletter from "@/components/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
title: "Blog Page - Solid SaaS Boilerplate",
description: "This is Blog page for Solid Pro",
// other metadata
};
const BlogPage = async () => {
return (
<>
<main>
   <h1 className="md:py-[42px] mt-4 py-[30px] md:text-[64px] text-[25px] leading-[38px]  font-bold  md:leading-[77px] text-center text-black  p-5 mx-auto md:leading-[77px] ">
      The Intersection <br /> Faith, Work, Cities
   </h1>
   <section className="container mx-auto max-w-[1480px] bg-[#F8F8F8] border rounded-lg mt-10">
      <div className="flex flex-col lg:flex-row    overflow-hidden">
         <div className="flex-shrink-0">
            <img
               src="/comunity-blog.png" // Replace with your image path
               alt="Group of people"
               className="w-full h-64 lg:h-full object-cover"
               />
         </div>
         <div className="p-12 flex flex-col justify-between lg:w-2/3">
            <div className="mb-4 max-w-[543px]">
               <span className="inline-block bg-black text-white text-xs px-3 py-1  rounded-full uppercase font-bold tracking-wider mb-4 uppercase">
               Featured
               </span>
               <h2 className="text-[36px] font-light text-gray-800 leading-[43px] mt-3 mb-9">
                  Building Community Around the Common Good
               </h2>
               <p className="mt-2 text-[20px] text-gray-600 leading-[29px] color-[#414141] mb-10">
                  You don’t have to search the Bible for very long to find passages highlighting the
                  value and importance of community.
               </p>
               <a href="#" className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
            </div>
            <div className="flex justify-end items-center">
               <div className="flex items-end space-x-2">
                  <img
                     src="/blog-image1.png" // Replace with your small image path
                     alt="Nature"
                     className=" object-cover rounded"
                     />
                  <div className="w-[175px] h-[241px] bg-white border rounded-lg flex flex-col justify-end p-5">
                     <p className="text-[64px] font-semibold text-gray-700 mb-5">19</p>
                     <p className="text-[15px] text-gray-500">December 2022</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="mt-40 mb-30">
      <div className=" container mx-auto max-w-[1480px]">
         <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-left">
               <h2 className="text-[48px] font-bold text-gray-900 leading-[58px]">
                  Explore More <br /> Insights and Stories
               </h2>
            </div>
            {/* Right Section: Play Button and Caption */}
            <div className="flex items-center mt-6 lg:mt-0 lg:ml-6">
               {/* Play Button */}
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#A1CF5F" className="bi bi-play-circle-fill me-10" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
               </svg>
               {/* Caption */}
               <div className="ml-4">
                  <h3 className="text-[16px] font-semibold text-black  leading-[23px]">
                     See What’s Happening in Real Time
                  </h3>
                  <hr className="my-4 border" />
                  <p className="text-[16px] text-gray-600">
                     Stay connected with us through <br /> Instagram Reels!
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section>
      <div className="container mx-auto max-w-[1480px]">
         <div className="container mx-auto  py-8">
            {/* Wrapper for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Card 1 */}
               <div className="border rounded-lg shadow-sm p-0 h-[483px]">
               <img
               src="/comunity-blog.png" // Replace with your image path
               alt="Group of people"
               className="w-full h-64 lg:h-full object-cover"
               />
                 
               </div>
               <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">                 
                  <p className="text-sm text-gray-500">Dec 19, 2022</p>
                  <div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                     An Excerpt From Our Small Group Study VantagePoint™
                  </h3>
                  <p className="text-gray-700 mt-2">
                     So much wisdom can be gained through simple shifts in perspective—
                     and what if we told you that while many people see the Bible as a
                     two-part story (fall and redemption)—it actually has four parts?
                  </p>
                  <a href="#" className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
                  </div>

               </div>
              
                {/* Card 1 */}
                <div className="border rounded-lg shadow-sm p-0 h-[483px]">
               <img
               src="/comunity-blog.png" // Replace with your image path
               alt="Group of people"
               className="w-full h-64 lg:h-full object-cover"
               />
                 
               </div>
               <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">                 
                  <p className="text-sm text-gray-500">Dec 19, 2022</p>
                  <div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                     An Excerpt From Our Small Group Study VantagePoint™
                  </h3>
                  <p className="text-gray-700 mt-2">
                     So much wisdom can be gained through simple shifts in perspective—
                     and what if we told you that while many people see the Bible as a
                     two-part story (fall and redemption)—it actually has four parts?
                  </p>
                  <a href="#" className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
                  </div>

               </div>
              
            </div>
         </div>
         <div className="container mx-auto  py-8">
            {/* Wrapper for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Card 1 */}
               <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">                 
                  <p className="text-sm text-gray-500">Dec 19, 2022</p>
                  <div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                     An Excerpt From Our Small Group Study VantagePoint™
                  </h3>
                  <p className="text-gray-700 mt-2">
                     So much wisdom can be gained through simple shifts in perspective—
                     and what if we told you that while many people see the Bible as a
                     two-part story (fall and redemption)—it actually has four parts?
                  </p>
                  <a href="#" className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
                  </div>

               </div>
              
               <div className="border rounded-lg shadow-sm p-0 h-[483px]">
               <img
               src="/comunity-blog.png" // Replace with your image path
               alt="Group of people"
               className="w-full h-64 lg:h-full object-cover"
               />
                 
               </div>
               <div className="border rounded-lg shadow-sm p-6 flex flex-col justify-between h-[483px]">                 
                  <p className="text-sm text-gray-500">Dec 19, 2022</p>
                  <div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-2">
                     An Excerpt From Our Small Group Study VantagePoint™
                  </h3>
                  <p className="text-gray-700 mt-2">
                     So much wisdom can be gained through simple shifts in perspective—
                     and what if we told you that while many people see the Bible as a
                     two-part story (fall and redemption)—it actually has four parts?
                  </p>
                  <a href="#" className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
                  </div>

               </div>
                {/* Card 1 */}
                <div className="border rounded-lg shadow-sm p-0 h-[483px]">
               <img
               src="/comunity-blog.png" // Replace with your image path
               alt="Group of people"
               className="w-full h-64 lg:h-full object-cover"
               />
                 
               </div>
              
              
            </div>
         </div>
      </div>
   </section>
   <Newsletter />
</main>
</>
);
};
export default BlogPage;