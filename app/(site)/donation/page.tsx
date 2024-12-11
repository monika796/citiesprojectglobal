
import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { gql } from '@apollo/client';
import client from 'apollo-client';
import DonationFaq from "@/components/DonationFaqSecition";

const anton = Anton({ weight: '400', subsets: ["latin"] }); 
const POSTS_QUERY= gql `query MyQuery2 {
  page(id: "cG9zdDo1MTQ=") {
    donatePageFeilds {
      donateFifthSectionDescription
      donateFifthSectionHeading
      donateFifthSectionLink
      donateFirstSectionMainDescription
      donateFirstSectionMainHeading
      donateSecondSectionLeftButtonLink
      donateSecondSectionLeftButtonText
      donateSecondSectionLeftDescription
      donateSecondSectionLeftHeading
      donateThirdSectionDescription
      donateThirdSectionHeading
      donate_fourth_section_scrolltext
      donateThirdSectionSubheading
      donateFifthSectionButtonText
      donateThirdSectionImage {
        node {
          link
        }
      }
      donateSecondSectionRightImage {
        node {
          link
        }
      }
      donateSecondSectionLeftFaqs {
        donateFaqDescription
        donateFaqTitle
        fieldGroupName
      }
      donateFourthSectionThirdImage {
        node {
          link
        }
      }
      donateFourthSectionSecondImage {
        node {
          link
        }
      }
      donateFourthSection {
        node {
          link
        }
      }
    }
  }
}`;
async function fetchData() {
    const { data } = await client.query({
      query: POSTS_QUERY,
    });
    return data;
  }
export default async function Book() {

   
      const data = await fetchData();
      // console.log(data.page.donatePageFeilds.donate_fourth_section_scrolltext);
    return (
        <main className="md:w-[100%] pt-10  mx-auto">
             <section className=" mx-auto max-w-[869px]">
            <h1 className="md:py-[15px] mb-5 pt-10 py-[10px] md:text-[64px] text-[25px] font-bold text-center text-black md:w-[52%]     mx-auto md:leading-[49px] "> {data.page.donatePageFeilds.donateFirstSectionMainHeading}</h1>
            <h5 className="text-[24px] md:text-[18px]  text-black  mx-auto text-center"> {data.page.donatePageFeilds.donateFirstSectionMainDescription}</h5>
            </section>
            <DonationFaq />
            <section className="container mx-auto max-w-[1480px]">
                    <div className="w-full md:w-[70%] mx-auto">
                        
                    <div className="grid items-end justify-end ">
                        <img src={data.page.donatePageFeilds.donateThirdSectionImage?.node?.link} />
                    
                    </div>
                        <div className="grid gap-3">
                        <img src="/76.png" />
                        <h3 className={`${anton.className} w-full md:w-[65%]  text-center md:text-left md:text-[40px] text-[30px] text-black font-light leading-[50px]`}>
                        {data.page.donatePageFeilds.donateThirdSectionHeading}
                            </h3>
                            <p className={`${anton.className} text-[27px] text-[#A1CF5F] font-normal leading-[48.99px] text-left `}> {data.page.donatePageFeilds.donateThirdSectionSubheading}</p>
                            <hr className="w-[5%] m-0 " />
                            <h5 className="text-[18px] text-black md:w-[55%] mx-auto text-center md:text-left"> {data.page.donatePageFeilds.donateThirdSectionDescription}</h5>
                        </div>
                    </div>
                
            </section>
            <section className="container mx-auto max-w-[1480px]">
                <div className="flex p-10">
                    <div className="w-2/3">
                        <img src={data.page.donatePageFeilds.donateFourthSection?.node?.link} className="w-[80%]" />
                    </div>
                    <div className="relative w-1/3">
                    <img src={data.page.donatePageFeilds.donateFourthSectionSecondImage?.node?.link} className="absolute bottom-0 right-0" />
                    <img src="/116.png" className="absolute bottom-[30%] left-[-23%]" />
                    </div>
                </div>
                <div className="">
                    <img src={data.page.donatePageFeilds.donateFourthSectionThirdImage?.node?.link} className="w-[15%] mx-auto" />
                </div>
            </section>
            <section className="relative  bg-[#A1CF5F] my-20">
            <Marquee className="absolute z-99999 text-white">
            {data.page.donatePageFeilds.donate_fourth_section_scrolltext}    </Marquee>
            </section>
            <section className="container mx-auto py-5 max-w-[1480px]">
            <div className="mx-auto text-[30px] pb-8 text-black w-full md:w-[32%] leading-[33px] italic font-bold text-left ">
                
            {data.page.donatePageFeilds.donateFifthSectionHeading}
                </div>
                <div className="flex flex-wrap">
                    <div className="md:w-1/3 w-full">

                    </div>
                    <div className="md:w-2/3 w-full">
                    <h5 className="text-[18px] text-black md:w-[58%] italic mx-auto text-left">
                    {data.page.donatePageFeilds.donateFifthSectionDescription}
                
               <a href={data.page.donatePageFeilds.donateFifthSectionLink   }> <button className="flex w-fit mt-10 md:mt-0 mb-5 items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[15px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300">
               {data.page.donatePageFeilds.donateFifthSectionButtonText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M1 13 13 1M4 1h9v9"></path>
                </g>
              </svg>
                        </button></a>
                        </h5>
                
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    );
}
