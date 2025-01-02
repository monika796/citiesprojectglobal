import React from 'react'
import Image from 'next/image'
import vantage from '/public/vantage-logo.png';
import starts from '/public/starts.png';
import { gql } from "@apollo/client";
import client from 'apollo-client';
import Link from "next/link";
import ReviewFirstSlider from '@/components/vantagereviewslider/Firstslider';
import ReviewSecondSlider from '@/components/vantagereviewslider/Secondslider';
import { Anton } from "next/font/google";
import Newsletter from '@/components/Newsletter';
import parse from "html-react-parser";


const anton = Anton({ weight: '400', subsets: ["latin"] });
const POSTS_QUERY = gql `
query MyQuery2 {
  page(id: "cG9zdDo5MzE=") {
    vantageForm {
      fieldGroupName
      vantageFormMainHeading
      vantageFormSecondSectionSecondColumnDescription
      vantageFormSecondSectionSecondColumnHeading
      vantageFormSecondSectionSecondColumnPrice
    }
    vintagePageFeild {
      vintageEightSection {
        vintageEightSectionBackgroundImage {
          node {
            link
          }
        }
        vintageEightSectionDescription
        vintageEightSectionMainHeading
        vintageEightSectionMainHeading2
      }
      vintageFifthSection {
        vintageFifthSectionLeftImage {
          node {
            link
          }
        }
        vintageFifthSectionMainDescription
        vintageFifthSectionMainHeading
        vintageFifthSectionRightImage {
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
        vintageFourthSectionLeftImage {
          node {
            link
          }
        }
        vintageFourthSectionRightImage {
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
      vintageNinthSection {
        vintageNinthSectionLeftSectionImage {
          node {
            link
          }
        }
        vintageNinthSectionRightSectionDescription
        vintageNinthSectionRightSectionMainHeading
        vintageNinthSectionRightSectionRowFirstImage {
          node {
            link
          }
        }
        vintageNinthSectionRightSectionRowSecondDescription
        vintageNinthSectionRightSectionRowSecondHeading
      }
      vintageReviewSlider {
        vintageReviewSliderFirstReviewRow {
          vintageReviewSliderFirstUserImage {
          node {
            link
          }
        }
          vintageReviewSliderReviewFirstReview
          vintageReviewSliderReviewFirstUserName
          vintageReviewSliderReviewFirstUserStatus
        }
        vintageReviewSliderMainDescription
        vintageReviewSliderMainHeading
        vintageReviewSliderSecondReviewRow {
          vintageReviewSliderReviewSecondReview
          vintageReviewSliderReviewSecondUserImage {
          node {
            link
          }
        }
          vintageReviewSliderReviewSecondUserName
          vintageReviewSliderReviewSecondUserStatus
        }
      }
      vintageSecondSection {
        vintageSecondSectionBackgroundImage {
          node {
            link
          }
        }
        vintageSecondSectionLeftText
        vintageSecondSectionRightCardButtonLink
        vintageSecondSectionRightCardButtonText
        vintageSecondSectionRightCardDescription
        vintageSecondSectionRightCardHeading
        vintageSecondSectionRightCardHeading2
        vintageSecondSectionRightCardPrice
      }
      vintageSeventhSection {
        vintageSeventhSectionFirstColumnImage {
          node {
            link
          }
        }
        vintageSeventhSectionLastRowContent {
          vintageSeventhSectionLastRowMainHeading
          vintageSeventhSectionLastRowContentGroups {
            vintageSeventhSectionLastRowContentFirstColumnDescription
            vintageSeventhSectionLastRowContentFirstColumnHeading
            vintageSeventhSectionLastRowContentSecondColumnSession1
            vintageSeventhSectionLastRowContentSecondColumnSession2
            vintageSeventhSectionLastRowContentSecondColumnSession3
          }
        }
        vintageSeventhSectionMainHeading
        vintageSeventhSectionSecondColumnBlackBoxButtonLink
        vintageSeventhSectionSecondColumnBlackBoxButtonText
        vintageSeventhSectionSecondColumnBlackBoxDescription
        vintageSeventhSectionSecondColumnBlackBoxHeading
        vintageSeventhSectionSecondColumnDescription
        vintageSeventhSectionThirdColumnImage {
          node {
            link
          }
        }
      }
      vintageTenthSection {
        vintageTenthSectionFirstColumnImage {
          node {
            link
          }
        }
        vintageTenthSectionFourthColumnImage {
          node {
            link
          }
        }
        vintageTenthSectionSecondColumnMainDescription
        vintageTenthSectionSecondColumnMainHeading
        vintageTenthSectionSecondColumnMainPrice
        vintageTenthSectionThirdColumnButtonLink
        vintageTenthSectionThirdColumnButtonText
        vintageTenthSectionThirdColumnText
      }
      vintageThirdSection {
        vintageThirdSectionMainDescription
        vintageThirdSectionMainHeading
        vintageThirdSectionRowFirstImage {
          node {
            link
          }
        }
        vintageThirdSectionRowSecondDescription
        vintageThirdSectionRowSecondHeading
        vintageThirdSectionRowSecondImage {
          node {
            link
          }
        }
        vintageThirdSectionRowThirdImage {
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
    <div className='container mx-auto'>
      <div className="main-heading py-10  mx-auto max-w-[1480px]">
        <div className="flex items-end justify-between md:flex-nowrap flex-wrap gap-5">
          <h2 className="m-0 text-[32px] leading-[77.45px]  md:text-[64px] max-w-[844px]  text-black font-bold"> 
         {vantage.vintageMainHeading}  </h2>
          <div className='max-w-[386px]'>
            <Image src={vantage.vintageMainRightImage?.node?.link} width="250" height="105" alt='' className='mb-3'></Image>
            <p>   {vantage.vintageMainDescriptionRight} </p>
          </div>
        </div>
      </div>

      <section className='mx-auto max-w-[1480px] p-10 flex flex-wrap relative md:flex-nowrap justify-between items-end mt-10'   
       >
            <Image
                                          src={vantage.vintageSecondSection.vintageSecondSectionBackgroundImage?.node?.link || '/default-image.jpg'} // Fallback image
                                          layout="fill"
                                          objectFit="cover"
                                          className='z-0'
                                          alt={ 'Default title'} // Provide a fallback title
                                        />
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

     <section className=' mx-auto max-w-[1480px] mt-25'>
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

     <section className='mx-auto max-w-[1480px] mt-30'>
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

      <section className=" mt-30 mx-8 md:mx-0">
      <h2 className="md:w-[62%] w-full mx-auto text-center text-black md:text-[48px] text-[25px] font-bold leading-[30px] md:leading-[58px] mb-5">
      {vantage.vintageReviewSlider.vintageReviewSliderMainHeading}</h2>
      <h2 className="md:w-[35%] w-full mx-auto text-center text-black text-[16px] pb-10  leading-[30px]">
      {vantage.vintageReviewSlider.vintageReviewSliderMainDescription}
      </h2>
      <div className="my-5 bg-white  ">
         <div className=" ">
            
            <ReviewFirstSlider />
         </div>
      </div>
      {/* second row */}
      <div className="my-5 bg-white ">
         <div className="111 ">
               <ReviewSecondSlider />
         </div>
      </div>
   </section>

   <section className='mx-auto max-w-[1480px] py-15'>
          <h2 className='m-0 text-[30px] leading-[54px]  md:w-[37%] md:text-[40px] text-black font-bold'>
           {vantage.vintageSeventhSection.vintageSeventhSectionMainHeading}
            </h2>

          <div className='flex py-10'>
                <div className='w-1/3 relative' >
                  <Image src={vantage.vintageSeventhSection.vintageSeventhSectionFirstColumnImage?.node?.link} alt='' layout='fill'  className='object-cover' />
                </div>
                  <div className='w-2/3   ' >
                    <div className='flex '>
                      
                    <div className='w-1/2 px-13  grid gap-20' >
                    <h2 className='text-[#000000] text-[18px]'>
                       {vantage.vintageSeventhSection.vintageSeventhSectionSecondColumnDescription}
                       </h2>
                    <div className="bg-[#000000] pt-7 pb-7 md:w-[72%] relative grid gap-15 w-full px-5 rounded-lg ">
                    <div className=''>
                    <h2 className="text-white font-bold   text-[24px] ">
                    {vantage.vintageSeventhSection.vintageSeventhSectionSecondColumnBlackBoxHeading} 
                   </h2>
                    <p className="text-white pt-6  text-[16px] ">
                    {vantage.vintageSeventhSection.vintageSeventhSectionSecondColumnBlackBoxDescription}</p>
                    </div>
                    <Link href={vantage.vintageSeventhSection.vintageSeventhSectionSecondColumnBlackBoxButtonLink}>
                       <button className="bg-[#A1CF5F] flex gap-2 items-center hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded">
                       {vantage.vintageSeventhSection.vintageSeventhSectionSecondColumnBlackBoxButtonText} 
                       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                    </button>
                      </Link>
                        </div>
                    </div>
                  <div className='w-1/2 relative'>
                  <Image src={vantage.vintageSeventhSection.vintageSeventhSectionThirdColumnImage?.node?.link} alt=''  className='object-cover' layout='fill' />
                  </div>

                </div>
                  <div className=' p-13 '>
                     <h2 className='text-left font-bold text-[20px] text-[#000000]'>Contents</h2>
                         
                         
                     {vantage.vintageSeventhSection.vintageSeventhSectionLastRowContent.vintageSeventhSectionLastRowContentGroups.map((module, index) => (
                              <div key={index} className={`flex py-5  ${index === 0  ? "" : " border-t border-grey"}`}>
                                {/* Left Section */}
                                <div className="w-1/2 grid">
                                  <h2 className="text-[#000000] font-semibold">{module.vintageSeventhSectionLastRowContentFirstColumnHeading}</h2>
                                  <p className="text-[#000000]">{module.vintageSeventhSectionLastRowContentFirstColumnDescription}</p>
                                </div>
                                {/* Right Section */}
                                <div className="w-1/2 relative">
                                <p className='text-[#000000] '>  {module.vintageSeventhSectionLastRowContentSecondColumnSession1}</p>
                                  <p className='text-[#000000]'>  {module.vintageSeventhSectionLastRowContentSecondColumnSession2}</p>
                                  <p className='text-[#000000]'>  {module.vintageSeventhSectionLastRowContentSecondColumnSession3}   </p> 
                                  { index != 2 && (
                                    <hr className="border-[#A1CF5F] border-t-4 w-[16%] absolute bottom-[-22px]" />
                                              )}
                                  
                                
                                </div>
                              </div>
                            ))}
                                                
                         
                          {/* <div className='flex border-t py-5 border-grey'>
                          <div className='w-1/2 grid '>
                          <h2 className='text-[#000000] font-semibold'>
                          Module One:
                          </h2>
                          <p className='text-[#000000]'>
                          A Different View Of Our Roles</p>
                          </div>
                          <div className='w-1/2  relative'>
                            <p className='text-[#000000] '>Session 1:   Our role with others</p>
                            <p className='text-[#000000]'>  Session 2:   Our own roles</p>
                            <p className='text-[#000000]'>  Session 3:   Our roles together</p> 
                            <hr className="border-[#A1CF5F] border-t-4 w-[16%]  absolute bottom-[-22px]" />
                          </div>
                          </div>
                          
                         
                          <div className='flex border-t py-5 border-grey'>
                          <div className='w-1/2 grid '>
                          <h2 className='text-[#000000] font-semibold'>
                          Module One:
                          </h2>
                          <p className='text-[#000000]'>
                          A Different View Of Our Roles</p>
                          </div>
                          <div className='w-1/2  '>
                            <p className='text-[#000000] '>Session 1:   Our role with others</p>
                            <p className='text-[#000000]'>  Session 2:   Our own roles</p>
                            <p className='text-[#000000]'>  Session 3:   Our roles together</p> 
                        
                          </div>
                          </div> */}

                    <div className='p-30'></div>
                  </div>
                </div>
          </div>
   </section>

   <section className=' mx-auto  relative md:mt-[-280px] z-0 p-70 h-[1580px]'>
    <Image src={vantage.vintageEightSection.vintageEightSectionBackgroundImage?.node?.link} className='object-cover object-left' style={{ transform: 'scaleX(-1)' }}  layout='fill' alt='' />
    <div className='absolute z-999 p-20 bottom-20 grid gap-4 right-20 w-[50%]'>
       <div className=''> <h2 className='text-3xl font-bold text-white'>
       {vantage.vintageEightSection.vintageEightSectionMainHeading} 
      </h2>
        <h2 className='text-3xl font-bold text-white'>
        {vantage.vintageEightSection.vintageEightSectionMainHeading2} 
      </h2>
      </div>
      <div className='grid gap-4'>
      <div className='text-white text-[15px]'>
       {parse(vantage.vintageEightSection.vintageEightSectionDescription || '')}
      </div>
      </div>
    </div>
   </section>
       <section className='mx-auto max-w-[1480px]'>
              <div className='px-40'>
                     <div className='flex p-10'>
                  
                     <div className='w-2/5 relative'>
                     <Image src={vantage.vintageNinthSection.vintageNinthSectionLeftSectionImage?.node?.link} alt='' className='absolute bottom-[10%] p-[10px] w-[500px] h-[480px] object-cover' width={1000} height={1000} />
                      </div>
                    
                    <div className='w-3/5 '>  
                     <div className=' p-15  grid gap-3 bg-[#F8F8F8]'>
                     <h2 className='text-[40px] leading-[50px] w-[80%] font-bold text-[#000000]'>
                     
                      {vantage.vintageNinthSection.vintageNinthSectionRightSectionMainHeading} 
                      </h2>
                      <div className='text-black text-[15px]'> 
                      {parse(vantage.vintageNinthSection.vintageNinthSectionRightSectionDescription || '')}    </div>
                   
                    </div> 
                    <div className='flex mt-2 gap-2'>
                      <div className='w-1/3 rounded'>
                      <Image src={vantage.vintageNinthSection.vintageNinthSectionRightSectionRowFirstImage?.node?.link} alt='' className='' width={1000} height={1000} />
                      </div>
                      <div className=' w-2/3 rounded '>
                        <div className='bg-[#D8FFA1] flex p-6  h-auto w-[70%] gap-[29px] flex h-auto'>
                          <h2 className=' w-4/12 text-[40px] leading-[50px] w-[80%] font-bold text-[#000000]'>
                          {vantage.vintageNinthSection.vintageNinthSectionRightSectionRowSecondHeading}</h2>
                        <p className=' w-8/12 text-black text-[15px] font-bold'>
                        {vantage.vintageNinthSection.vintageNinthSectionRightSectionRowSecondDescription}</p>
                        </div>
                      </div>
                    </div>
                    </div>

                    </div>

              </div >
       </section>



       <section className='py-15'>
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4  border-[10px] border-[#000000]">
            <div className='relative'>
              <Image layout='fill' src={vantage.vintageTenthSection.vintageTenthSectionFirstColumnImage?.node?.link}
               className="object-top object-cover object-right xl:h-[363px]" alt="Vantage Image 1" />
            </div>
            <div className="middle-content bg-[#263519] p-4 xl:p-8">
                <h2 className={`${anton.className} font-anton text-[#A1CF5F] md:mb-0 mb-5 text-[32px] md:text-[30px] xl:text-[60px] font-medium leading-[50px] xl:leading-[97.3px]`}>
                {vantage.vintageTenthSection.vintageTenthSectionSecondColumnMainPrice} </h2>
                <h3 className="font-anton text-[28px] text-white"> 
                {vantage.vintageTenthSection.vintageTenthSectionSecondColumnMainHeading}</h3>
                <p className="text-white text-[13px] w-[70%] leading-[17px] mt-3"> 
                {vantage.vintageTenthSection.vintageTenthSectionSecondColumnMainDescription}</p>
               
            </div>
            <div className="middle-content bg-[#F5F0D6]  p-4 xl:p-8">
                  <div className='p-15'></div>
                {/* <h2 className='text-[#000000] text-[13px] mt-3 font-bold'> Note:</h2> */}
                <div className="text-[#000000] text-[12px] "> 
                {parse(vantage.vintageTenthSection.vintageTenthSectionThirdColumnText || '')}
                  </div>
                  <Link href={vantage.vintageTenthSection.vintageTenthSectionThirdColumnButtonLink}>
                    <button className="mt-3 border border-[#000000] bg-[#A1CF5F] flex gap-2 items-center hover:bg-green-600 text-black text-[16px] font-bold py-2 px-4 rounded">
                    {vantage.vintageTenthSection.vintageTenthSectionThirdColumnButtonText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                  </button></Link>
                
            </div>
            <div className='relative'>
              
              <Image  layout='fill' src={vantage.vintageTenthSection.vintageTenthSectionFourthColumnImage?.node?.link}  className="object-cover object-center xl:h-[363px]" alt="Vantage Image 2" />
              </div>
          </div>
      </section>
        
             <div className='mx-auto max-w-[1380px]'>  <Newsletter /> </div>
    </div>
  )
}

export default page
