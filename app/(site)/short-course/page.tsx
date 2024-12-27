import Link from "next/link";
import Image from "next/image";
import { Anton } from "next/font/google";
import Partner from "@/components/partner";
const anton = Anton({ weight: '400', subsets: ["latin"] });
const ShortCoursePage = () => {
return (
<main className="">
   <div className="main-heading py-10 container mx-auto max-w-[1480px]">
      <div className="flex items-center justify-between flex-wrap my-8 ">
         <h2 className="m-0 text-[32px] md:text-[64px] text-black font-bold md:leading-[60px] leading-[33px]"> Enhance Your Skills <br className="hidden md:block" /> 
            with Expert-Led Short Courses 
         </h2>
      </div>
   </div>
   <section className="container mx-auto max-w-[1480px]">
      <div className=" relative flex flex-wrap md:flex-nowrap bg-[#EEF0EB]">
         <div className="md:w-1/3 w-full p-8  relative mx-auto">
            <div className="md:absolute relative bottom-0 md:bottom-10 ">
               <h2 className="text-black w-full md:w-[70%] md:mb-0 mb-10 text-[20px] leading-[30px]">Join thousands of active users advancing their skills and unlocking new opportunities.</h2>
               <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                  >
               Take me Course
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                  <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                     <path d="M1 13 13 1M4 1h9v9"></path>
                  </g>
               </svg>
               </Link>
            </div>
         </div>
         <div className="flex justify-center flex-wrap md:flex-nowrap items-center w-full md:w-2/3 bg-cover bg-center  "  style={{ backgroundImage: `url('135.png')` }}>
         <div className="relative w-full md:w-7/12">
            <Image src='/136.png' className=" w-[80%]" height={1000} width={1000} alt=""  />
            <Image src='/137.png' height={1000} width={1000} alt="" className="relative md:absolute w-[40%] bottom-[100px] right-[-100px]"/>
            <Image src='/138.png' height={1000} width={1000} alt="" className="relative md:absolute w-[30%] top-0 left-[-100px]"/>
         </div>
         <div className="md:w-5/12 w-full grid gap-10 ">
            <div className="bg-[#000000] relative md:absolute w-full md:w-[373px]  mr-7 -top-30 p-9 rounded-lg border-b-[20px] border-[#A1CF5F]">
               <h2 className="text-white   text-[24px] leading-[29.05px]">Join Our Growing Community of Active Learners</h2>
               <p className="text-white pt-6  text-[16px] leading-[30px]">Thousands are actively learning and building new skills. Join the community today!</p>
               <Image src='/134.png' height={1000} width={1000} alt="" className="w-[35%] py-3 " />
            </div>
         </div>
      </div>
      </div>
   </section>
   <section className="flex flex-wrap md:flex-nowrap py-20 container mx-auto max-w-[1480px]">
      <div className="md:w-1/3 w-full p-8 pt-12">
         <h4 className="text-[20px] w-[50%]  font-bold text-black">About Our
            Short Courses
         </h4>
      </div>
      <div className="md:w-2/3 w-full p-8 gap-10 grid">
         <h2 className="m-0 text-[22px] md:text-[40px] text-black font-bold md:leading-[60px] leading-[30px]">
            Our Impact Growing Community and <br className="hidden md:block" /> 
            Expanding Courses
         </h2>
         <div className=" flex flex-wrap md:flex-nowrap ">
            <div className="md:w-1/3 w-full m-3 border-t border-gray-500 p-3 md:p-6">
               <h3 className="m-0 md:text-[70px] text-[25px] text-black font-bold leading-[60px]">12+</h3>
               <p className="text-[20px] text-black leading-[60px]"> Courses</p>
            </div>
            <div className="md:w-1/3 w-full  m-3 border-t border-gray-500 p-3 md:p-6">
               <h3 className="m-0 md:text-[70px] text-[25px] text-black font-bold leading-[60px]">25K+</h3>
               <p className="text-[20px] text-black leading-[60px]"> Classes</p>
            </div>
            <div className=" md:w-1/3 w-full  m-3 border-t border-gray-500 p-3 md:p-6">
               <h3 className="m-0 md:text-[70px] text-[25px] text-black font-bold leading-[60px]">8K+</h3>
               <p className="text-[20px] text-black leading-[60px]"> Members</p>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-[#121212] md:p-20 p-5 container mx-auto max-w-[1480px]">
      <div className="" >
         <div className="flex flex-wrap md:flex-nowrap" >
            <div className="w-full md:w-1/2 grid gap-10" >
               <Image src='/106.png'  alt="" className="w-[10%]" width={1000} height={1000} />
               <h2 className="m-0 md:text-[50px] text-[20px] w-[100%] text-white font-bold leading-[22px] md:leading-[60px]"> Explore Inspiring Online Courses </h2>
            </div>
            <div className="w-full md:w-1/2 md:mt-20 mt-8" >
               <h4 className="text-[16px] w-full md:w-[50%] float-right text-white">Unlock your potential with our carefully curated online courses designed to inspire and empower you.</h4>
            </div>
         </div>
         <div className=" py-20">
            <div className="flex flex-wrap md:flex-nowrap">
               <div className=" m-4 rounded bg-white">
                  <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                  <div className="p-5 grid gap-3">
                     <p className="text-[20px] text-black font-medium  leading-[24px]"> Community Engagement Essentials</p>
                     <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                     <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                     <Link
                        href="#"
                        className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                        >
                     Take the Course
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                           <path d="M1 13 13 1M4 1h9v9"></path>
                        </g>
                     </svg>
                     </Link>
                  </div>
               </div>
               <div className=" m-4 rounded bg-white">
                  <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                  <div className="p-5 grid gap-3">
                     <p className="text-[20px] text-black font-medium  leading-[24px]"> Community Engagement Essentials</p>
                     <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                     <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                     <Link
                        href="#"
                        className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                        >
                     Take the Course
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                           <path d="M1 13 13 1M4 1h9v9"></path>
                        </g>
                     </svg>
                     </Link>
                  </div>
               </div>
               <div className=" m-4  rounded bg-white">
                  <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                  <div className="p-5 grid gap-3">
                     <p className="text-[20px] text-black font-medium  leading-[24px]"> Community Engagement Essentials</p>
                     <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                     <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                     <Link
                        href="#"
                        className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                        >
                     Take the Course
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                           <path d="M1 13 13 1M4 1h9v9"></path>
                        </g>
                     </svg>
                     </Link>
                  </div>
               </div>
               <div className=" m-4  rounded bg-white">
                  <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                  <div className="p-5 grid gap-3">
                     <p className="text-[20px] text-black font-medium  leading-[24px]"> Community Engagement Essentials</p>
                     <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                     <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                     <Link
                        href="#"
                        className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                        >
                     Take the Course
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                           <path d="M1 13 13 1M4 1h9v9"></path>
                        </g>
                     </svg>
                     </Link>
                  </div>
               </div>
               {/* // */}
            </div>
         </div>
      </div>
   </section>
   <section className="md:py-20 py-0 md:mt-0 mt-10 container mx-auto max-w-[1480px]">
      <Image src='/141.png' alt="" className="mx-auto w-full md:w-[40%]" width={1000} height={1000} />
      <div className=" py-15 md:w-[70%] w-full mx-auto " >
         <h2 className="max-w-[613px] text-black text-[25px] md:text-[48px] font-bold leading-[28px] md:leading-[48px]">Upskill your team with Cities Project Global</h2>
      </div>
      <h2 className="md:w-[43%] w-full mx-auto text-black md:text-[20px] text-[16px]   leading-[40px]">
         <hr className="border-t-1 border-[#000000] mb-3 w-[15%] " />
         Unlimited access to 27,000+ top CPG courses, anytime, anywhere
         International course collection in 14 languages
      </h2>
      <h2 className="md:w-[43%] w-full mx-auto text-black md:text-[20px] text-[16px]  leading-[40px]">
         Top certifications in tech and business
      </h2>
   </section>
   <section className="mx-auto md:py-30 py-10 my-20 container max-w-[1480px]   bg-[#F5F5F5]">
      <Image src='/76.png' alt="" className="mx-auto w-[7%] pb-10" width={1000} height={1000} />
      <h2 className={`${anton.className} uppercase mx-auto pb-3 text-center w-full md:w-[46%] text-black text-[26px] md:text-[50px] font-bold  leading-[40px] md:leading-[60px]`} >God cares not only about redeeming souls but also about restoring his creation . . .</h2>
      <h4 className="text-[20px] text-center font-bold text-black"  >Charles colson & nancy pearcey
      </h4>
      <p className="text-center text-black text-[15px]">How then shall we live?</p>
   </section>
   {/*////////////////////////////  */}
   <section className="mt-30">
      <h2 className="md:w-[30%] w-full mx-auto text-center text-black md:text-[48px] text-[25px] font-bold leading-[30px] md:leading-[58px] mb-5">How learners like you are achieving their goals</h2>
      <h2 className="md:w-[35%] w-full mx-auto text-center text-black text-[16px] pb-10  leading-[30px]">
         100% of survey respondents said they found VantagePoint useful and that they would recommend it to their friends
      </h2>
      <div className="my-5 bg-white flex items-center justify-center ">
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
            {/* Testimonial 4 */}
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
         </div>
      </div>
      {/* second row */}
      <div className="my-5 bg-white flex items-center justify-center ">
         <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
            {/* Testimonial 4 */}
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
            <div className="p-10 bg-[#F5F5F5] text-black rounded-lg">
               <div className="flex mb-4">
                  <div className="mr-4">
                     <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
                  </div>
                  <div>
                     <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">Jeanette Harmon</p>
                     <p className="text-[14px] text-[#000] ">Verified Graduate</p>
                  </div>
               </div>
               <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
               </p>
            </div>
         </div>
      </div>
   </section>
   <Partner />
   {/* //////////////////////////////////////// */}
</main>
);
};
export default ShortCoursePage;