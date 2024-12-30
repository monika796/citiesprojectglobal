import React from 'react'
import Image from 'next/image'
import vantage from '/public/vantage-logo.png';
import starts from '/public/starts.png';
import { gql } from "@apollo/client";
import client from 'apollo-client';
import Link from "next/link";


const POSTS_QUERY = gql `
query MyQuery2 {
  page(id: "cG9zdDo5MzE=") {
    vintagePageFeild {
      vintageFifthSection {
        vintageFifthSectionLeftImage{
        node {
          link
        }
      }
        vintageFifthSectionMainDescription
        vintageFifthSectionMainHeading
        vintageFifthSectionRightImage{
        node {
          link
        }
      }
      }
      vintageFourthSection {
        vintageFourthSectionButtonLink
        vintageFourthSectionButtonText
        vintageFourthSectionDescription
        vintageFourthSectionHeading
        vintageFourthSectionLeftImage{
        node {
          link
        }
      }
        vintageFourthSectionRightImage{
        node {
          link
        }
      }
      }
      vintageMainDescriptionRight
      vintageMainHeading
      vintageMainRightImage {
        node {
          link
        }
      }
      vintageSecondSection {
        vintageSecondSectionBackgroundImage{
        node {
          link
        }
      }
        vintageSecondSectionLeftText
        vintageSecondSectionRightCardHeading2
        vintageSecondSectionRightCardButtonLink
        vintageSecondSectionRightCardButtonText
        vintageSecondSectionRightCardDescription
        vintageSecondSectionRightCardHeading
        vintageSecondSectionRightCardPrice
      }
      vintageThirdSection {
        vintageThirdSectionMainDescription
        vintageThirdSectionMainHeading
        vintageThirdSectionRowFirstImage{
        node {
          link
        }
      }
        vintageThirdSectionRowSecondDescription
        vintageThirdSectionRowSecondHeading
        vintageThirdSectionRowSecondImage{
        node {
          link
        }
      }
        vintageThirdSectionRowThirdImage{
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
   

const page = async () => {
  const data = await fetchData();
  const vantage =data.page.vintagePageFeild;
  return (
    <div className='container mx-auto max-w-[1480px]'>
      <div className="main-heading py-10">
        <div className="flex items-end justify-between md:flex-nowrap flex-wrap gap-5">
          <h2 className="m-0 text-[32px] leading-[77.45px]  md:text-[64px] max-w-[844px]  text-black font-bold"> 
         {vantage.vintageMainHeading}  </h2>
          <div className='max-w-[386px]'>
            <Image src={vantage.vintageMainRightImage?.node?.link} width="250" height="105" alt='' className='mb-3'></Image>
            <p>   {vantage.vintageMainDescriptionRight} </p>
          </div>
        </div>
      </div>

      <section className='p-10 flex flex-wrap md:flex-nowrap justify-between items-end mt-10'    style={{ backgroundImage: "url('/bg-e.png')" }}>
        <p className='bg-white p-2 text-black font-bold text-[14px] flex gap-3  items-center'>
        {vantage.vintageSecondSection.vintageSecondSectionLeftText} 
                   <Image src={starts} width="95" height="15" alt='' className=''></Image>
        </p>
      <div className="bg-white p-6  rounded-[5px] max-w-[360px]  w-full">
          <h2 className="text-black font-bold text-[24px] mb-2 ">
          {vantage.vintageSecondSection.vintageSecondSectionRightCardHeading} 
          </h2>
          <h2 className="text-black font-bold text-[24px] mb-2"> {vantage.vintageSecondSection.vintageSecondSectionRightCardHeading2} </h2>
          <p className="text-gray-600 mt-3 mb-5 text-[16px]">{vantage.vintageSecondSection.vintageSecondSectionRightCardDescription}</p>
          <h1 className='text-[40px] text-black mb-8 font-bold'>{vantage.vintageSecondSection.vintageSecondSectionRightCardPrice}</h1>
          <div className="">
           <Link href={vantage.vintageSecondSection.vintageSecondSectionRightCardButtonLink}> <button className="bg-[#A1CF5F] hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded">
            {vantage.vintageSecondSection.vintageSecondSectionRightCardButtonText}
            </button></Link>
          </div>
        </div>
      </section>

     <section className='mt-25'>
      <div className='max-w-[768px] mx-auto text-center'>
           <h2 className='text-[48px] leading-[58.09px] font-bold text-black'>
            
            {vantage.vintageThirdSection.vintageThirdSectionMainHeading}</h2>
           <p className='text-[16px] mt-6'>
           {vantage.vintageThirdSection.vintageThirdSectionMainDescription}</p>
      </div>
      <div className="flex justify-center items-center p-10 gap-6 mt-10">
  <div className="relative transform ">
    <Image src={vantage.vintageThirdSection.vintageThirdSectionRowFirstImage?.node?.link} alt="Left Image" className="relative  rounded-lg " width={332} height={449} />
  </div>


  <div className="bg-lime-200 p-6 rounded-lg shadow-lg text-center e-full max-w-[412px] ">
    <Image src={vantage.vintageThirdSection.vintageThirdSectionRowSecondImage?.node?.link} alt="Center Image" className="rounded-lg mb-4" width={400} height={483} />
    <h2 className="text-[24px] font-bold text-black"> {vantage.vintageThirdSection.vintageThirdSectionRowSecondHeading}</h2>
    <p className="text-[16px] text-black max-w-[304px] mx-auto"> {vantage.vintageThirdSection.vintageThirdSectionRowSecondDescription}</p>
  </div>


  <div className="relative transform ">
    <Image src={vantage.vintageThirdSection.vintageThirdSectionRowThirdImage?.node?.link} alt="Left Image" className=" rounded-lg" width={332} height={449} />
  </div>
</div>

     </section>
     <section className='mt-25'>
     <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-20 bg-gray-100">

  <div className="w-full md:w-[25%]">
    <Image src={vantage.vintageFourthSection.vintageFourthSectionLeftImage?.node?.link} alt="Left Image" className="relative top-[-200px]" width={429} height={421}/>
  </div>


  <div className="text-center md:text-center md:w-[50%]">
    <h2 className="text-[48px] text-black font-bold mb-4 mt-10 leading-[58px] max-w-[491px] mx-auto">
    {vantage.vintageFourthSection.vintageFourthSectionHeading}</h2>
    <p className="text-black text-[16px] leading-[22px] mb-6 mt-10">
    {vantage.vintageFourthSection.vintageFourthSectionDescription}
    </p>
    <Link
      href={vantage.vintageFourthSection.vintageFourthSectionButtonLink}
      className="inline-block px-3 py-2 text-[14px] font-bold bg-white text-black border border-black rounded-lg hover:bg-gray-200 transition"
    >
     {vantage.vintageFourthSection.vintageFourthSectionButtonText} →
    </Link>
  </div>

  <div className="w-full md:w-[25%]">
    <Image src={vantage.vintageFourthSection.vintageFourthSectionRightImage?.node?.link} width={1000} height={1000} alt="Right Image" className="" />
  </div>
</div>

     </section>

     <section className='mt-30'>
          <h2 className='text-[48px] font-bold text-black leading-[58px] max-w-[969px]'>
          {vantage.vintageFifthSection.vintageFifthSectionMainHeading}</h2>

          <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
              <div>
                  <div className="flex justify-end mb-40">
                      <p className='max-w-[515px] text-[16px] text-black'>
                        {vantage.vintageFifthSection.vintageFifthSectionMainDescription}

                      </p>
                  </div>
                  <Image src={vantage.vintageFifthSection.vintageFifthSectionLeftImage?.node?.link} alt='' width={341} height={222}  />
              </div>
              <div>
                <Image src={vantage.vintageFifthSection.vintageFifthSectionRightImage?.node?.link} alt='' width={772} height={482} />
              </div>
          </div>
     </section>
  
    </div>
  )
}

export default page
