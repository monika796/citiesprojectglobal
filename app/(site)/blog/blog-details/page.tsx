import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
title: "Blog Details Page - Solid SaaS Boilerplate",
description: "This is Blog details page for Solid Pro",
// other metadata
};
const SingleBlogPage = async () => {
return (
<>
<section className="container mx-auto max-w-[1480px]">
   <div className="mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-center border-b">
      {/* Left Section */}
      <div className="md:w-3/4 flex gap-10 flex-col md:flex-row aligh-start">
         {/* Featured Badge */}
         <div className="mb-2">
            <span className="inline-block bg-black text-white text-xs uppercase py-1 px-3 rounded-xl">
            Featured
            </span>
         </div>
         <div>
            <h1 className="text-3xl md:text-[64px] font-bold text-gray-900 leading-[77.45px]">
               Building Community Around the Common Good
            </h1>
            <p className="text-gray-700 mt-4 text-[24px] max-w-[543px]">
               You don’t have to search the Bible for very long to find passages highlighting the value
               and importance of community.
            </p>
         </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/4 flex flex-col items-end md:items-start mt-6 md:mt-0 pl-20 border-l h-[230px]" >
         {/* Date */}
         <div className="text-center md:text-left">
            <p className="text-[64px] font-bold text-gray-900">19</p>
            <p className="text-sm text-gray-500 mt-5">December 2022</p>
         </div>
         {/* Social Media Links */}
         <div className="flex space-x-4 mt-4">
            <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f"></i> {/* Replace with an SVG or icon component */}
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in"></i> {/* Replace with an SVG or icon component */}
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i> {/* Replace with an SVG or icon component */}
            </Link>
         </div>
      </div>
   </div>
   <div className="blog-image">
      <Image alt="" width={1400} height={1000} className="mx-auto" src="/blod-banner.png" />
   </div> 
   <div className="blog-content max-w-[684px] mx-auto py-15">
      <p  className="text-[16px] leader-[21px] mb-9">Since last year, some of us have been trying to guess at Putin’s  intentions as he has amassed forces on the border. Since last week, many  of us have been checking the news each day as the Russian army advances  on Ukrainian cities, looking for predictions on how it will all end.  The fear of a widespread European or World War has taken up residence in  many of our minds as we question what we should do and how we should  respond.</p>
      <p   className="text-[16px] leader-[21px] mb-9">
         It is true that the future is in God’s hands; none of us  knows what will come in the days ahead. The present also is in God’s  hands — but it is in ours as well. It is right for us to pray for an end  to war and for our leaders to enact justice and make decisions that  bring that possibility closer. But it is also right to take action in  alignment with our hopes and values.
      </p>
      <p   className="text-[16px] leader-[21px] mb-9">
         At the time of writing, over  one million refugees have fled Ukraine, pouring into Poland, Slovakia,  Hungary, Romania, Moldova, and Russia. UNICEF has reported that this may  be Europe’s largest refugee crisis since WWII, and in the near future,  Ukrainian families around the world will likely look to receive their  relatives.
      </p>
      <div className="flex gap-10 items-center py-15">
         <Image alt="" width={800} height={500} src="/34.png" />
         <Image alt="" width={800} height={500}  src="/47.png" className="w-full" />
      </div>
      <p  className="text-[16px] leader-[21px] mb-9">Many news outlets are reporting accounts of neighboring countries rising  to the occasion. In Poland — and elsewhere — citizens are arriving at  the border, offering rides and provisions to those seeking refuge.  Humanitarian organizations are rallying, and Germany and Austria are  offering free train travel to those seeking to reach their countries.</p>
      <h2 className="italic text-[32px] leader-[60px] text-black">The European response has been, by and large, unified, and the actions  of those meeting Ukrainians at the border have embodied a core part of  God’s nature: hesed.</h2>
   </div>
   <div className='container mx-auto hidden md:block'>
      <div className="w-[100%] mx-auto">
         <h2 className="font-inter md:text-[48px] text-[30px] text font-bold leading-[58.09px] p-8 text-black text-left text-center decoration-skip-ink-none">Related Blogs</h2>
         <div className=" md:flex">
            <div className=" md:w-3/12 relative grid place-items-center p-10">
               <Image alt="" width={800} height={500}  src="/46.png" className="object-contain" />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Receiving and Reflecting God’s <br />Inherent Love for Us</h2>
               <Link href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </Link>
            </div>
            <div className=" md:w-6/12 relative grid place-items-center p-10">
               <Image alt="" width={800} height={500}  src="/45.png" className="object-contain" />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Healing the Trauma of Homelessness Through<br />
                  Affordable Housing
               </h2>
               <Link href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </Link>
            </div>
            <div className=" md:w-3/12 relative grid place-items-center p-10">
               <Image alt="" width={800} height={500}  src="/47.png" className="object-contain" />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">In the Midst of War, Love Comes <br /> Through Action</h2>
               <Link href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </Link>
            </div>
         </div>
         <Image alt="" width={800} height={500}  src='/48.png' className="table p-[61px] items-center m-auto" />
      </div>
   </div>
   
</section>
</>
);
};
export default SingleBlogPage;