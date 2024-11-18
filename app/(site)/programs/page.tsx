// app/new-page/page.js
import {  Anton } from "next/font/google";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";


const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default function Programs() {
    return (
        <main className="md:w-[91%] mx-auto"> 
                    <h1 className="md:py-[42px] py-[30px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%] p-5 mx-auto md:leading-[49px] ">Unlock Your Purpose
                    Expand Your Impact</h1>
                  <section className="md:py-[42px] relative">
                  <img src="/85.png" className=" mx-auto p-2 md:p-0" alt="" />
                  <div className="md:flex pt-5 ">
                    <div className="md:w-2/5 relative md:p-10 p-3">
                    <div className="md:absolute bottom-[5%]"> <p className="text-[16px] text-[#000000] italic font-normal leading-[24px] text-center md:text-left">Leadership Circle gives life to the idea that ministry can be bourne out in a multitude of manners, helps individuals connect with their purpose and the heart behind that purpose, and provides a framework for challenging brokenness and bringing shalom. </p>
                        <h2 className="pt-[20px] text-[#000000] text-[20px] font-bold leading-[30.62px] text-center md:text-left">Jervis D.</h2>
                        <p className=" pt-[10px] md:w-[57%] text-[#000000] text-[20px] font-normal leading-[30.62px] text-center md:text-left">Executive VP, (Economics Sphere, United States)</p>
                        <img src="/108.png" className=" pt-5 md:m-0 mx-auto" />
                        </div></div>
                    <div className="md:w-3/5 p-10">
                        <h2 className=" text-[#000000] md:text-[29px] text-[20px]  font-normal md:leading-[43px] text-center md:text-left">
                        The  Leadership Circle is a 9-month deep dive into faith, culture, God’s  story of redemption – and your place in it all. Join other leaders and  change-makers on a journey of discovery and transformation, in which you  will clarify your calling and gain tools to bring restoration to your  city.
                        </h2>
                        <h4 className="pt-[20px] text-[#000000] text-[16px] font-bold leading-[23px] md:w-[50%] text-center md:text-left">Join the Leadership Circle: A 9-Month Journey to Discover Your Calling, Strengthen Your Faith, and Bring Restoration to Your City</h4>
                        <a href="#" className=" mx-auto md:mx-0 flex  items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">Apply Now<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                               
                          </div>
                  </div>
                  <div className="md:absolute hidden md:block top-[45%] left-5  pt-50 p-2 bg-[#A1CF5F]">
                    <img src='/84.png' alt="" />
                    <h2 className=" text-center  text-white">Testimonials</h2>
                  </div>
                  </section >

               <section className="container  bg-[#000000] mx-auto">
                <div className="p-6 md:p-13">
                <h1 className="md:text-[40px] text-[35px] md:w-[55%] font-bold text-white text-center md:text-left leading-[38px] md:leading-[58.09px] ">Transformative Programs for Leaders Empowering You to Impact Cities and Communities</h1>
                <div className="md:flex pt-9 gap-10">
                  <div className="md:w-4/12  ">
                    <h4 className="text-[17px] pb-10 md:w-[75%] text-center md:text-left text-white">Our programs empower leaders to make a meaningful impact on cities and communities through deep engagement with faith and purpose.</h4>
                      <img src='106.png'  className=' md:m-0 mx-auto md:p-0 p-5'  alt='' />
                  </div>
                  <div className="md:w-8/12 md:flex gap-5">
                      <div className="bg-white rounded-[5px] w-[100%] mb-3 md:mb-0">
                               
                              <div className="flex px-5 py-5 gap-15">
                              <div className="w-1/4">
                                <img src='/104.png'    alt="" />
                              </div>
                              <div className="w-3/4">
                              <img src='/105.png' className="mx-auto" alt="" />
                              </div>
                              
                              </div>
                              <div className="px-5 py-5">
                              <h5 className="text-[10px] md:text-[15px] text-[#000000] uppercase md:pb-3 font-bold">Flagship Program</h5>
                              <h3 className="text-[20px] md:text-[28px] text-[#000000] md:pb-5 font-bold">Leadership Circle</h3>
                              <button className="  mt-[21px]  md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">Learn More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                  <path d="M1 13 13 1M4 1h9v9"></path>
                                </g>
                              </svg></button>
                              </div>
                      </div>
                      <div className="bg-white rounded-[5px] md:w-[100%]">
                               
                               <div className="flex px-5 py-5 gap-15">
                               <div className="w-1/4">
                                 <img src='/104.png' alt="" />
                               </div>
                               <div className="w-3/4">
                               <img src='/107.png' className="mx-auto" alt="" />
                               </div>
                               
                               </div>
                               <div className="px-5 py-5">
                               <h5 className="text-[10px] md:text-[15px] text-[#000000] uppercase md:pb-3 font-bold">A Small Group Discovery Series</h5>
                               <h3 className="text-[20px] md:text-[28px] text-[#000000] md:pb-5 font-bold">VantagePoint™</h3>
                               <button className=" mt-[21px] md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">Learn More<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                   <path d="M1 13 13 1M4 1h9v9"></path>
                                 </g>
                               </svg></button>
                               </div>
                       </div>
                  </div>
                </div>
                </div>
               </section>
          
        
          <Testimonial />
          <Newsletter />
          
         

         

      </main>
    );
  }
  