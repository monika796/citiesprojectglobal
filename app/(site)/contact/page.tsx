
import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import  Partner from "@/components/partner";
import { gql, useQuery } from '@apollo/client';
import client from 'apollo-client';
const anton = Anton({ weight: '400', subsets: ["latin"] }); 


const POSTS_QUERY= gql`
query MyQuery2 {
  page(id: "cG9zdDozNjM=") {
    contactpagefeilds {
      firstMainHeadingPart1
      firstRightImage {
        node {
          link
        }
      }
      firstSubheading
      first_main_heading_part_2
      secondContactSectionDescription
      secondContactSectionFormHeading
      secondContactSectionImage {
        node {
          link
        }
      }
      secondContactSectionHeading
      thirdSectionCenterFirstButton
      thirdSectionCenterHeading
      thirdSectionCenterSecondButton
      thirdSectionCenterSubHeading
      thirdSectionCenterUppertext
      thirdSectionLeftImage {
        node {
          link
        }
      }
      thirdSectionRightImage {
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


export default async function contact() {
  

  const data = await fetchData();
    return (
        <main className="md:w-[100%]   mx-auto   ">
            <div className="container mx-auto pt-10 md:pt-20  max-w-[1480px]">
            <section className="md:flex">
                <div className="md:w-2/3 ">
             <h2 className="font-bold text-black md:text-left text-center   md:text-[48px] text-[25px] leading-tight mb-4">Get in Touch<br />
            with Cities Project Global</h2>  
            <p className="font-normal md:text-[18px]  text-[15px] text-center md:text-left  float-left  text-black  p-2 pb-3">
            We're here to support and collaborate. Reach out with your questions, feedback, or partnership inquiries, and we'll get back to you as soon as possible.
            </p>
            </div>
            <div className="md:w-1/3 pb-3 md:pb-0">
            <img src={data.page.contactpagefeilds.firstRightImage?.node?.link} className="w-[81%] mx-auto md:mx-0 p-2 md:p-0" alt=" " />
            </div>
            </section>
            {/* </div>

        <section className="container mx-auto md:mt-[-8%]"> */}
        <div className=" md:flex mx-auto bg-[#F7F7F7] md:mt-[-4%] pt-20 md:pt-40">
                    <div className="md:w-8/12 ">
                    <div className="md:flex items-center">
                    <div className="md:w-1/2 table mx-auto md:block md:mx-0">
                    <img src='/98.png' className=""  alt=" " />
                    </div>
                    <div className="md:w-1/2">
                    <h3 className={`${anton.className} uppercase  text-center md:text-left md:text-[55px] text-[30px] text-[#000000] font-light leading-[50px]`}>
                    Join Our Community of Culturemakers
                    </h3>
                    <p className="text-[#000000]  text-center md:text-left">Be the first to know about Cities Project Global news, programs, and impact</p>
                    
                    </div>
                    </div>
                    </div>
                    <div className="md:w-4/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
                      <p className="text-[#000000] pb-[20px]  text-center md:text-left font-extrabold text-[18px]">Become a Culturemaker Join Us Today!</p>
                      <form action="#" className="grid gap-[1px]">
                        <input type="text" placeholder="Name" className="bg-transparent border border-[#3d3c3c26] p-[10px]" /><br/>
                        <input type="email" placeholder="Email" className="bg-transparent border border-[#3d3c3c26] p-[10px]"  />
                        <label className="text-[20] text-black  pt-8 pb-5 font-normal  text-left  decoration-slice">Please Confirm*</label>
                        <p className="text-[15px]  p-2 font-normal  text-left  decoration-slice"><input type="checkbox" /> I want to subscribe to all CPG emails</p>
                        <button type='submit' className="mx-auto md:mx-0 font-bold md:w-[23%] w-[28%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[15px]">Submit</button>
                      </form>
                    </div>

                  </div>
        </div>
                <section className="container mx-auto md:pb-15 mt-20">
                    <div className="md:flex">
                        <div className="md:w-3/12 relative grid justify-center items-center p-10">
                        <img src={data.page.contactpagefeilds.thirdSectionLeftImage?.node?.link} className="md:absolute bottom-0" alt='' />
                        </div>
                        <div className="md:w-6/12 text-center mx-auto p-5 md:p-20">
                        <h3 className="text-[15px] bg-[#fff] text-black font-bold mx-auto text-center border w-fit px-[14px]  rounded-[20px]">Introducing a New Book</h3>
                        <h2 className="font-bold text-black  mx-auto text-center    md:text-[41px] text-[25px] leading-tight mb-4">Discover Our Latest Release – A Must-Read for Changemakers!</h2> 
                          <p className="text-[#000000]  md:w-[80%] md:text-[20px] mx-auto text-center ">For decades now, I have witnessed the near non-existence of the  practical intersection between faith and work.</p> 
                          <div className="md:flex gap-5 md:pt-10 justify-center items-center "><button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >Buy Now<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></button><br className="hidden md:block" /><button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >Read a Sample Chapter<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></button></div> 

                     </div>
                         
                            <div className="md:w-3/12 grid justify-center relative items-center  p-10">
                            <img src={data.page.contactpagefeilds.thirdSectionRightImage?.node?.link} className="md:absolute top-0 right-0" alt='' />
                            </div>
                    </div>
                </section>

              <Partner />

                <Newsletter />

        </main>
    );
}
