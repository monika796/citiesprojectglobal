// app/new-page/page.js
import {  Anton } from "next/font/google";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";

import { gql } from '@apollo/client';
import client from 'apollo-client';

const POSTS_QUERY = gql `
  query {
  page(id: "cG9zdDozMjY=") {
    programpagefeild {
      authorDesignation
      fieldGroupName
      firstSectionMainHeading
      secondSectionImage {
        node {
          link
        }
      }
      secondSectionLeftAuthorName
      secondSectionLeftColumn
      secondSectionRightAuthorName
      secondSectionRightButtonText
      secondSectionRightSubHeading
      thirdSectionLeftText
      thirdSectionMainHeading
      third_section_right_columns {
        button_text_program
        columnheadingProgram
        columnsubtitleProgram
        columnimages_program {
          node {
            link
          }
        }
      }
    }
  }
}

`;
async function fetchData() {
  const { data } = await client.query({
    query: POSTS_QUERY,
  });
  return data;
}
const anton = Anton({ weight: '400', subsets: ["latin"] }); 

export default async function Programs() {

  const data = await fetchData();
  console.log(data);
    return (
        <main className="md:w-[91%] mx-auto"> 
                    <h1 className="md:py-[42px] pt-4 py-[30px] md:text-[64px] text-[25px] font-bold text-center text-black md:w-[52%] p-5 mx-auto md:leading-[77px] ">{data.page.programpagefeild.firstSectionMainHeading}</h1>
                  <section className="md:py-[42px] relative container  max-w-[1480px] mx-auto">
                  <img src="/85.png" className=" mx-auto p-2 md:p-0" alt="" />
                  <div className="md:flex pt-5 ">
                    <div className="md:w-2/5 relative md:p-10 p-3">
                    <div className="md:absolute bottom-[5%]"> <p className="text-[16px] text-[#000000] italic font-normal leading-[24px] text-center md:text-left">{data.page.programpagefeild.secondSectionLeftColumn} </p>
                        <h2 className="pt-[20px] text-[#000000] text-[20px] font-bold leading-[30.62px] text-center md:text-left">{data.page.programpagefeild.secondSectionLeftAuthorName}</h2>
                        <p className=" pt-[10px] md:w-[57%] text-[#000000] text-[20px] font-normal leading-[30.62px] text-center md:text-left">{data.page.programpagefeild.authorDesignation}</p>
                        <img src="/108.png" className=" pt-5 md:m-0 mx-auto" />
                        </div></div>
                    <div className="md:w-3/5 p-10">
                        <h2 className=" text-[#000000] md:text-[32px] text-[20px]  font-normal md:leading-[47px] text-center md:text-left">
                        {data.page.programpagefeild.secondSectionRightAuthorName} </h2>
                        <h4 className="pt-[25px] pb-10 text-[#000000] text-[16px] font-bold leading-[23px] md:w-[50%] text-center md:text-left">{data.page.programpagefeild.secondSectionRightSubHeading}</h4>
                        <a href="#" className=" mx-auto md:mx-0 flex  items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">{data.page.programpagefeild.secondSectionRightButtonText} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                               
                          </div>
                  </div>
                  <div className="md:absolute hidden md:block top-[45%] left-5  pt-50 p-2 bg-[#A1CF5F]">
                    <img src='/84.png' alt="" />
                    <h2 className=" text-center  text-white">Testimonials</h2>
                  </div>
                  </section >

               <section className="container  max-w-[1480px]  bg-[#000000] mx-auto">
                <div className="p-6 md:p-13">
                <h1 className="md:text-[48px] text-[35px] md:w-[60%] font-bold text-white text-center md:text-left leading-[38px] md:leading-[58.09px] ">  {data.page.programpagefeild.thirdSectionMainHeading}</h1>
                <div className="md:flex pt-9 gap-10">
                  <div className="md:w-4/12  ">
                    <h4 className="text-[20px] pb-10 md:w-[75%] text-center md:text-left text-white md:leading-[29.09px] "> {data.page.programpagefeild.thirdSectionLeftText}</h4>
                      <img src='106.png'  className=' md:m-0 mx-auto md:p-0 p-5'  alt='' />
                  </div>
                  <div className="md:w-8/12 md:flex gap-5">

                  {data.page.programpagefeild.third_section_right_columns.map((dataposts, index) => (
                        
                      <div className="bg-white rounded-[5px] w-[100%] mb-3 md:mb-0">
                               
                              <div className="flex px-5 py-5 gap-15">
                              <div className="w-1/4">
                                <img src='/104.png'    alt="" />
                              </div>
                              <div className="w-3/4">
                              <img src={dataposts.columnimages_program?.node?.link} className="mx-auto" alt="" />
                              </div>
                              
                              </div>
                              <div className="px-5 py-5">
                              <h5 className="text-[10px] md:text-[16px] text-[#000000] uppercase md:pb-2 font-bold">{dataposts.columnsubtitleProgram}</h5>
                              <h3 className="text-[20px] md:text-[32px] text-[#000000] md:pb-10 font-bold">{dataposts.columnheadingProgram}</h3>
                              <button className="  mt-[21px]  md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">{dataposts.button_text_program}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                  <path d="M1 13 13 1M4 1h9v9"></path>
                                </g>
                              </svg></button>
                              </div>
                      </div>
                      ))}
                  </div>
                </div>
                </div>
               </section>
          
        
          <Testimonial />
          <Newsletter />
          
         

         

      </main>
    );
  }
  