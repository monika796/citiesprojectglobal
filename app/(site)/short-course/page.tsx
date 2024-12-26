import Link from "next/link";
import Image from "next/image";
import { Anton } from "next/font/google";
import Partner from "@/components/partner";

const anton = Anton({ weight: '400', subsets: ["latin"] });
const ShortCoursePage = () => {
  return (
    <main className="">
     <div className="main-heading py-10 container mx-auto max-w-[1480px]">
           <div className="flex items-center justify-between flex-wrap">
              <h2 className="m-0 text-[60px] text-black font-bold leading-[60px]"> Enhance Your Skills <br className="hidden md:block" /> 
              with Expert-Led Short Courses </h2>
           
           </div>
      </div>
      <section className="container mx-auto max-w-[1480px]">
        <div className=" relative flex bg-[#EEF0EB]">
          <div className="w-1/3 p-8  relative mx-auto">
              <div className="absolute bottom-10 ">
               <h2 className="text-black w-[70%] text-[20px] leading-[30px]">Join thousands of active users advancing their skills and unlocking new opportunities.</h2>
              <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >Take me Course<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
              </Link>
              </div>
          </div>
          <div className="flex justify-center items-center w-2/3 bg-cover bg-center  "  style={{ backgroundImage: `url('135.png')` }}>
          <div className="relative w-7/12">
          <Image src='/136.png' className=" w-[80%]" height={1000} width={1000} alt=""  />
          <Image src='/137.png' height={1000} width={1000} alt="" className="absolute w-[40%] bottom-[100px] right-[-100px]"/>
          <Image src='/138.png' height={1000} width={1000} alt="" className=" absolute w-[30%] top-0 left-[-100px]"/>
          </div>
          <div className="w-5/12 grid gap-20 ">
          <div className="bg-[#000000] absolute  mr-7 -top-30 p-9">
           <h2 className="text-white  text-[30px] leading-[30px]">Join Our Growing Community of Active Learners</h2>  
          <p className="text-white pt-10  text-[20px] leading-[30px]">Thousands are actively learning and building new skills. Join the community today!</p>  
          <Image src='/134.png' height={1000} width={1000} alt="" className="w-[35%] py-3 " />
          </div>
          </div>
                
          </div>
        </div>
      </section>

      <section className="flex py-20 container mx-auto max-w-[1480px]">
        <div className="w-1/3 p-8 pt-12">
        <h4 className="text-[20px] w-[50%]  font-bold text-black">About Our
        Short Courses</h4>
        </div>
        <div className="w-2/3 p-8 gap-10 grid">
        <h2 className="m-0 text-[40px] text-black font-bold leading-[60px]">
        Our Impact Growing Community and <br className="hidden md:block" /> 
        Expanding Courses
         </h2>

         <div className=" flex">
          <div className="w-1/3 m-3 border-t border-gray-500 p-6">
            <h3 className="m-0 text-[70px] text-black font-bold leading-[60px]">12+</h3>
            <p className="text-[20px] text-black leading-[60px]"> Courses</p>
          </div>
          <div className="w-1/3  m-3 border-t border-gray-500 p-6">
            <h3 className="m-0 text-[70px] text-black font-bold leading-[60px]">25K+</h3>
            <p className="text-[20px] text-black leading-[60px]"> Classes</p>
          </div>
           <div className=" w-1/3  m-3 border-t border-gray-500 p-6">
            <h3 className="m-0 text-[70px] text-black font-bold leading-[60px]">8K+</h3>
            <p className="text-[20px] text-black leading-[60px]"> Members</p>
          </div>
         </div>
          </div>
      </section>

      <section className="bg-black p-20 container mx-auto max-w-[1480px]">
        <div className="" >
      <div className="flex  " >
        <div className="w-1/2 grid gap-10" >
            <Image src='/106.png'  alt="" className="w-[10%]" width={1000} height={1000} />
            <h2 className="m-0 text-[50px] w-[100%] text-white font-bold leading-[60px]"> Explore Inspiring Online Courses </h2>
        </div>
        <div className="w-1/2 mt-20" >
        <h4 className="text-[20px] w-[50%] float-right text-white">Unlock your potential with our carefully curated online courses designed to inspire and empower you.</h4>
        </div>

        </div>

        <div className=" py-20">
          
            <div className="flex">

              <div className=" m-4 rounded bg-white">
                <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                <div className="p-4 grid gap-3">
                  <p className="text-[20px] text-black leading-[20px]"> Community Engagement Essentials</p>
                <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >Take the Course<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
              </Link>
              </div>
              </div>

              <div className=" m-4 rounded bg-white">
                <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                <div className="p-4 grid gap-3">
                  <p className="text-[20px] text-black leading-[20px]"> Community Engagement Essentials</p>
                <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >Take the Course<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
              </Link>
              </div>
              </div>

              <div className=" m-4  rounded bg-white">
                <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                <div className="p-4 grid gap-3">
                  <p className="text-[20px] text-black leading-[20px]"> Community Engagement Essentials</p>
                <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >Take the Course<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
              </Link>
              </div>
              </div>

              <div className=" m-4  rounded bg-white">
                <Image src='/139.png' className="" alt="" height={1000} width={1000} />
                <div className="p-4 grid gap-3">
                  <p className="text-[20px] text-black leading-[20px]"> Community Engagement Essentials</p>
                <Image src='/140.png' className="w-[50%]" alt="" height={1000} width={1000} />
                <h4 className="text-[20px] w-[50%]  font-bold text-black">$24.99</h4>
                <Link
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >Take the Course<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
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


      <section className="py-20 container mx-auto max-w-[1480px]">
      <Image src='/141.png' alt="" className="mx-auto w-[40%]" width={1000} height={1000} />
        <div className=" py-15 w-[70%] mx-auto " >
          <h2 className="w-[50%] text-black text-[40px] font-bold leading-[40px]">Upskill your team with Cities Project Global</h2>
        </div>
          
          <h2 className="w-[43%] mx-auto text-black text-[20px]  leading-[40px]">
          <hr className="border-t-1 border-[#000000] mb-3 w-[15%] " />
            Unlimited access to 27,000+ top CPG courses, anytime, anywhere
            International course collection in 14 languages
            </h2>
            <h2 className="w-[43%] mx-auto text-black text-[20px]  leading-[40px]">
            Top certifications in tech and business</h2>
       
      </section>



      <section className="mx-auto py-30 my-20 container max-w-[1480px]   bg-[#F5F5F5]">
      <Image src='/76.png' alt="" className="mx-auto w-[7%] pb-10" width={1000} height={1000} />
    
          <h2 className={`${anton.className} uppercase mx-auto pb-3 text-center w-[46%] text-black text-[50px] font-bold leading-[60px]`} >God cares not only about redeeming souls but also about restoring his creation . . .</h2>
 
          <h4 className="text-[20px] text-center font-bold text-black"  >Charles colson & nancy pearcey
          </h4>
          <p className="text-center text-black text-[15px]">How then shall we live?</p>
      </section>

      {/*////////////////////////////  */}
     <section className="">
     <h2 className="w-[30%] mx-auto text-center text-black text-[40px] font-bold leading-[50px]">How learners like you are achieving their goals</h2>
     <h2 className="w-[35%] mx-auto text-center text-black text-[17px] pb-10  leading-[30px]">
     100% of survey respondents said they found VantagePoint useful and that they would recommend it to their friends
            </h2>

    <div className="my-5 bg-white flex items-center justify-center ">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
      

        {/* Testimonial 4 */}
        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>


        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>



        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>



        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>

        
        </div> 
        </div>

          {/* second row */}
          <div className="my-5 bg-white flex items-center justify-center ">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
      

        {/* Testimonial 4 */}
        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>


        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>



        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>



        <div className="p-10 bg-[#F5F5F5] text-black rounded-lg shadow-lg">
          <div className="flex mb-4">
            <div className="mr-4">
              <Image src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="Jeanette" width={50} height={50} className="rounded-full border-2 border-[#cec5c5]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#49505A]">Jeanette Harmon</p>
              <p className="text-xs text-[#49505A] opacity-50">Verified Graduate</p>
            </div>
          </div>
          <p className="text-sm text-[#0e0e0e] opacity-70">
            “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
          </p>
        </div>

        
        

        </div> </div> 
      
        </section>
        <Partner />
      {/* //////////////////////////////////////// */}
    </main>
  );
};

export default ShortCoursePage;
