"use client";
import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import { useState } from 'react';

const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default function Book() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    return (
        <main className="md:w-[91%]   mx-auto">
            <h1 className="md:py-[15px] py-[10px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%]     mx-auto md:leading-[49px] ">Donate Now</h1>
            <h5 className="text-[18px] text-black md:w-[52%] mx-auto text-center">Your donation will equip Christian leaders to make a lasting impact in their workplaces and communities.</h5>
            <section className=" container mx-auto py-20">
            <div className="flex">
                <div className="w-1/2">
                <h1 className="text-[76px] text-[#000000] font-normal text-center leading-[51px]">$<span className="!text-[#cccccc]">0</span></h1>
                <h4 className="text-[20px] w-[50%] font-bold leading-[24.2px] text-center m-auto py-5">Empower Communities Your Gift Makes an Impact</h4>
                <div className="w-full max-w-md mx-auto mt-10">
            <div className="mx-auto bg-white border border-solid border-[#e6e6e7] rounded-[5px]">

                {["Section 1", "Section 2", "Section 3"].map((title, index) => (
                    <div key={index} className="mb-2 !text-[#000000] border-b border-solid border-[#e6e6e7]">
                    <button
                        className={`w-full text-left p-4 rounded  ${
                        activeIndex === index ? "" : ""
                        }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {title}
                    </button>
                    <div
                        className={`overflow-hidden  ${
                        activeIndex === index ? "max-h-96 p-4" : "max-h-0"
                        } bg-white`}
                    >
                        <p className="text-[#000000]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    </div>
                ))}
                  <button className=" mx-auto flex w-fit mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M1 13 13 1M4 1h9v9"></path>
                </g>
              </svg>
                        </button>
                </div>
              
                </div>

                {/* accordian end  */}
                
                </div>
                <div className="w-1/2 bg-[url('/109.png')]  bg-contain bg-no-repeat bg-center ">
                {/* <img className="" src='/111.png' /> */}
                </div>  
            </div>
            </section>

            <section className="container mx-auto">
                    <div className="">
                        
                    <div className="grid items-end justify-end">
                        <img src="/112.png" />
                    
                    </div>
                        <div className="">
                        <img src="/76.png" />
                        <h3 className={`${anton.className} w-[41%]  text-center md:text-left md:text-[40px] text-[30px] text-black font-light leading-[50px]`}>
                        Upright citizens are good for a city and make it prosper
                            </h3>
                            <p className={`${anton.className} text-[27px] text-[#A1CF5F] font-normal leading-[48.99px] text-left `}>(Prov 11:11a)</p>
                            <hr className="w-[25%] mx-auto" />
                            <h5 className="text-[18px] text-black md:w-[38%] mx-auto text-center md:text-left">Your donation will help Christian  leaders in the workplace learn HOW to be the salt and light God  intended. We are helping leaders bless their cities, change their  nations, and spread to everyone a desire to know God.</h5>
                        </div>
                    </div>
                
            </section>
            
            
        </main>
    );
}
