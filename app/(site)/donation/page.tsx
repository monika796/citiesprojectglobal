"use client";
import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import { useState } from 'react';
import Marquee from "react-fast-marquee";

const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default function Book() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };

    return (
        <main className="md:w-[91%] pt-10  mx-auto">
            <h1 className="md:py-[15px] pt-10 py-[10px] md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%]     mx-auto md:leading-[49px] ">Donate Now</h1>
            <h5 className="text-[18px]  text-black md:w-[52%] mx-auto text-center">Your donation will equip Christian leaders to make a lasting impact in their workplaces and communities.</h5>
            <section className=" container mx-auto py-18 ">
            <div className="flex">
                <div className="w-1/2 p-[48px] rounded-[30px] border border-[#dcdcdc] m-[40px]">
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
                  <button className=" mx-auto flex w-[90%] m-5 text-center justify-center mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
        Continue                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
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
                    <div className="w-[70%] mx-auto">
                        
                    <div className="grid items-end justify-end ">
                        <img src="/112.png" />
                    
                    </div>
                        <div className="grid gap-3">
                        <img src="/76.png" />
                        <h3 className={`${anton.className} w-[65%]  text-center md:text-left md:text-[40px] text-[30px] text-black font-light leading-[50px]`}>
                        Upright citizens are good for a city and make it prosper
                            </h3>
                            <p className={`${anton.className} text-[27px] text-[#A1CF5F] font-normal leading-[48.99px] text-left `}>(Prov 11:11a)</p>
                            <hr className="w-[5%] m-0 " />
                            <h5 className="text-[18px] text-black md:w-[55%] mx-auto text-center md:text-left">Your donation will help Christian  leaders in the workplace learn HOW to be the salt and light God  intended. We are helping leaders bless their cities, change their  nations, and spread to everyone a desire to know God.</h5>
                        </div>
                    </div>
                
            </section>
            <section className="container mx-auto">
                <div className="flex p-10">
                    <div className="w-2/3">
                        <img src="/114.jpg" className="w-[80%]" />
                    </div>
                    <div className="relative w-1/3">
                    <img src="/113.png" className="absolute bottom-0 right-0" />
                    <img src="/116.png" className="absolute bottom-[30%] left-[-23%]" />
                    </div>
                </div>
                <div className="">
                    <img src="/115.jpg" className="w-[15%] mx-auto" />
                </div>
            </section>
            <section className="relative  bg-[#A1CF5F] my-20">
            <Marquee className="absolute z-99999 text-white">
            Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Vision       Our Mission & Visi   </Marquee>
            </section>
            <section className="container mx-auto py-5">
            <div className="mx-auto text-[30px] pb-8 text-black  w-[32%] leading-[33px] italic font-bold text-left ">
                
                Awaken, equip and unleash leaders to live as upright citizens of God’s kingdom
                </div>
                <div className="flex">
                    <div className="w-1/3">

                    </div>
                    <div className="w-2/3">
                    <h5 className="text-[18px] text-black md:w-[58%] italic mx-auto text-left">
                We believe that when leaders are awakened, equipped, and unleashed to  live out their God-given design and purpose, everything changes. Lives  are changed. Work is changed. Communities are changed. This is the path  towards cities being renewed and able to flourish as God intended.
                
                <button className="flex w-fit mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[15px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M1 13 13 1M4 1h9v9"></path>
                </g>
              </svg>
                        </button>
                        </h5>
                
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
