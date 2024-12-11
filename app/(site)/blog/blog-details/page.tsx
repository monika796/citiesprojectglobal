import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
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
            <a href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook-f"></i> {/* Replace with an SVG or icon component */}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            <i className="fab fa-linkedin-in"></i> {/* Replace with an SVG or icon component */}
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i> {/* Replace with an SVG or icon component */}
            </a>
         </div>
      </div>
   </div>
   <div className="blog-image">
      <Image src="/blod-banner.png" alt="Blog banner" width={200} height={200} />
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
         <Image src="/34.png" alt="Blog content image 1" width={200} height={200} />
         <Image src="/47.png" className="w-full" alt="Blog content image 2" width={200} height={200} />
      </div>
      <p  className="text-[16px] leader-[21px] mb-9">Many news outlets are reporting accounts of neighboring countries rising  to the occasion. In Poland — and elsewhere — citizens are arriving at  the border, offering rides and provisions to those seeking refuge.  Humanitarian organizations are rallying, and Germany and Austria are  offering free train travel to those seeking to reach their countries.</p>
      <h2 className="italic text-[32px] leader-[60px] text-black">The European response has been, by and large, unified, and the actions  of those meeting Ukrainians at the border have embodied a core part of  God’s nature: hesed.</h2>
   </div>
   <div className='container mx-auto hidden md:block'>
      <div className="w-[100%] mx-auto">
         <h2 className="font-inter md:text-[48px] text-[30px] text font-bold leading-[58.09px] p-8 text-black text-left text-center decoration-skip-ink-none">Related Blogs</h2>
         <div className=" md:flex">
            <div className=" md:w-3/12 relative grid place-items-center p-10">
               <Image src="/46.png" className="object-contain" alt="Related post 1" width={200} height={200} />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Receiving and Reflecting God’s <br />Inherent Love for Us</h2>
               <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
            </div>
            <div className=" md:w-6/12 relative grid place-items-center p-10">
               <Image src="/45.png" className="object-contain" alt="Related post 2" width={200} height={200} />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Healing the Trauma of Homelessness Through<br />
                  Affordable Housing
               </h2>
               <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
            </div>
            <div className=" md:w-3/12 relative grid place-items-center p-10">
               <Image src="/47.png" className="object-contain" alt="Related post 3" width={200} height={200} />
               <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
               <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">In the Midst of War, Love Comes <br /> Through Action</h2>
               <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                     <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M1 13 13 1M4 1h9v9"></path>
                     </g>
                  </svg>
               </a>
            </div>
         </div>
         <Image src='/48.png' className="table p-[61px] items-center m-auto" alt="Footer image" width={200} height={200} />
      </div>
   </div>
   {/* 
   <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
         <div className="md:w-1/2 lg:w-[32%]">
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
               <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                  >
                  <div className="relative">
                     <input
                        type="text"
                        placeholder="Search Here..."
                        className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                        />
                     <button
                        className="absolute right-0 top-0 p-5"
                        aria-label="search-icon"
                        >
                        <svg
                           className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                           width="21"
                           height="21"
                           viewBox="0 0 21 21"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                        </svg>
                     </button>
                  </div>
               </form>
            </div>
            <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
               <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
               </h4>
               <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                     <a href="#">Blog</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                     <a href="#">Events</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                     <a href="#">Grids</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                     <a href="#">News</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                     <a href="#">Rounded</a>
                  </li>
               </ul>
            </div>
            <RelatedPost />
         </div>
         <div className="lg:w-2/3">
            <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
               <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                     <Image
                        src={"/images/blog/blog-01.png"}
                        alt="Kobe Steel plant that supplied"
                        fill
                        className="rounded-md object-cover object-center"
                        />
                  </div>
               </div>
               <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Kobe Steel plant that supplied
               </h2>
               <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                     <span className="text-black dark:text-white">Author: </span>{" "}
                     Jhon Doe
                  </li>
                  <li>
                     <span className="text-black dark:text-white">
                     Published On: July 30, 2023
                     </span>{" "}
                  </li>
                  <li>
                     <span className="text-black dark:text-white">
                     Category:
                     </span>
                     Events
                  </li>
               </ul>
               <div className="blog-details">
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                     leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                     vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                     volutpat nulla. Nunc elementum elit viverra, tempus quam
                     non, interdum ipsum.
                  </p>
                  <p>
                     Aenean augue ex, condimentum vel metus vitae, aliquam porta
                     elit. Quisque non metus ac orci mollis posuere. Mauris vel
                     ipsum a diam interdum ultricies sed vitae neque. Nulla
                     porttitor quam vitae pulvinar placerat. Nulla fringilla elit
                     sit amet justo feugiat sodales. Morbi eleifend, enim non
                     eleifend laoreet, odio libero lobortis lectus, non porttitor
                     sem urna sit amet metus. In sollicitudin quam est,
                     pellentesque consectetur felis fermentum vitae.
                  </p>
                  <div className="flex flex-wrap gap-5">
                     <Image
                        src={"/images/blog/blog-01.png"}
                        width={350}
                        height={200}
                        alt="image"
                        />
                     <Image
                        src={"/images/blog/blog-02.png"}
                        width={350}
                        height={200}
                        alt="image"
                        />
                  </div>
                  <h3 className="pt-8">
                     Nunc elementum elit viverra, tempus quam non
                  </h3>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                     leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                     vel turpis in dolor volutpat imperdiet in ut mi. Integer non
                     volutpat nulla. Nunc elementum elit viverra, tempus quam
                     non, interdum ipsum.
                  </p>
               </div>
               <SharePost />
            </div>
         </div>
      </div>
   </div>
   */}
</section>
</>
);
};
export default SingleBlogPage;