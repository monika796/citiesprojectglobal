import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import VideoPlayer from "@/components/Bookvideosection";
import  Partner from "@/components/partner";
import { gql } from '@apollo/client';
import client from 'apollo-client';


const anton = Anton({ weight: '400', subsets: ["latin"] }); 
const POSTS_QUERY= gql `query MyQuery2 {
  page(id: "cG9zdDo0MzM=") {
     bookPageFeilds {
      bookFifthReviewSectionDescription
      bookFifthReviewSectionHeading
      bookFirstSectionMainHeading
      bookFourthSectionFirstColumnText
      bookSeventhSectionButtonOneLink
      bookSeventhSectionButtonTwoLink
      bookSeventhSectionButtonOneText
      bookSeventhSectionButtonTwoText
      bookSeventhSectionDescription1
      bookSeventhSectionDescription2
      bookSeventhSectionDescription3
      bookSeventhSectionDescription4
      bookSeventhSectionMainHeading
      bookSixthSectionVideoDescription
      bookSixthSectionVideoHeading
      bookSixthSectionVideoLink
      bookSixthSectionVideoMainHeading
      bookThirdSectionRightButtonOne
      bookThirdSectionRightButtonTwo
      bookThirdSectionRightButtonTwoLink
      bookThirdSectionRightDescription
      bookThirdSectionRightHeading
      bookThirdSectionRightButtonOneLink {
        url
      }
      bookThirdSectionLeftImage {
        node {
          link
        }
      }
     
      bookSecondSectionImage {
        node {
          link
        }
      }
      bookFourthSectionThirdColumnImage {
        node {
          link
        }
      }
      bookFourthSectionSecondColumnImage {
        node {
          link
        }
      }
      bookFourthSectionFourthColumnImage {
        node {
          link
        }
      }
        bookNinthSectionMainLeftHeading
      bookNinthSectionMainRightDescription
      bookNinthSectionRightFirstColumnText
      bookNinthSectionRightSecondColumnButtonLink
      bookNinthSectionRightSecondColumnText
      bookNinthSectionRightImage {
        node {
          link
        }
      }
      bookNinthSectionLeftImage {
        node {
          link
        }
      }
      bookEigthSectionMainHeading
      bookEigthSectionMainLeftDescription
      bookEigthSectionMainRightDescription1
      bookEigthSectionMainRightDescription2
      bookNinthSectionRightSecondColumnButtonText
      bookEigthSectionMainLeftImage {
        node {
          link
        }
      }
      bookEigthSectionMainRightImage {
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
  console.log(data);
    return (
        <main className="container mx-auto max-w-[1480px]">
            <h1 className="md:py-[42px] py-[30px] md:text-[64px] text-[25px] font-bold text-center text-black md:max-w-[1178px] p-5 mx-auto md:leading-[77.45px] ">
           {data.page.bookPageFeilds.bookFirstSectionMainHeading}</h1>
                  <section className="md:py-[42px] md:p-0 p-3">
                  <Image  src={data.page.bookPageFeilds.bookSecondSectionImage?.node?.link} className=" mx-auto" alt="" / width="200" height="200" />
                  </section >
                  <div className="container mx-auto">
                    <div className="md:flex">
                        <div className="md:w-5/12 border-r">
                            <Image  src={data.page.bookPageFeilds.bookThirdSectionLeftImage?.node?.link} className="w-[50%] md:w-[70%] mx-auto" / width="200" height="200" />
                        </div>
                        <div className="md:w-7/12 py-20 pl-10">
                        <h2 className="font-bold text-gray-800 text-center md:text-left text-3xl md:text-[48px] text-[25px] leading-tight mb-4"> {data.page.bookPageFeilds.bookThirdSectionRightHeading}</h2>
                        <p className="text-gray-500 text-[18px] md:text-lg text-center  md:text-left md:text-xl leading-relaxed mb-6">{data.page.bookPageFeilds.bookThirdSectionRightDescription}</p>
                        <div className="md:flex gap-5">
                            <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                            {data.page.bookPageFeilds.bookThirdSectionRightButtonOne}
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button>
                                    <br className="hidden md:block" />
                                    <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                    {data.page.bookPageFeilds.bookThirdSectionRightButtonTwo}
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button>
                          </div>
                        </div>
                    </div>
                  </div>


                  <div className="container mx-auto md:py-15">
                  <div className="md:flex">
                    
                        <div className="md:w-2/5 bg-[#000000] p-20 grid justify-center items-center">
                        <h2 className="font-bold text-white  md:w-[85%] text-center md:text-left md:text-[24px] text-[24px] leading-tight mb-4"> {data.page.bookPageFeilds.bookFourthSectionFirstColumnText}</h2>
                        </div>
                        <div className="md:w-1/5 md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image  src={data.page.bookPageFeilds.bookFourthSectionSecondColumnImage?.node?.link} alt='' / width="200" height="200" />
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image  src={data.page.bookPageFeilds.bookFourthSectionThirdColumnImage?.node?.link} alt='' / width="200" height="200" />
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image  src={data.page.bookPageFeilds.bookFourthSectionFourthColumnImage?.node?.link} alt='' / width="200" height="200" />
                        </div>
                    </div>
                    </div>

                    <div className="container mx-auto "> 
                       <section className="mx-auto grid gap-[37px] pt-[50px] md:pt-[100px] md:pb-[100px] ">
              <Image  src="/76.png" className="mx-auto" / width="200" height="200" />
              <h1 className={`${anton.className} text-[48px] font-normal  text-center text-[#000000] leading-[72.26px] w-[90%] md:max-w-[1,108px] mx-auto`}>
              {data.page.bookPageFeilds.bookFifthReviewSectionHeading}</h1>
              <h4 className={`${anton.className} text-[20px] font-normal  text-center text-[#aed575]`}>
              {data.page.bookPageFeilds.bookFifthReviewSectionDescription}
                </h4>
            </section>
            </div>

            {/* <div className="container mx-auto">
                  <section className="md:py-[32px] ">
                        <h1 className="md:text-[38px]  text-[25px] font-bold text-center text-black md:w-[52%] p-5 mx-auto md:leading-[49px]">What is cities project global</h1>
                        <div className="relative mx-auto table"> 
                            <Image  src="/92.png" alt="" / width="200" height="200" />
                            <div className="md:absolute bottom-3 p-10 text-center md:text-left">
                                <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">About <br /> the Book </h2>
                                <p className="font-normal text-[15px]  text-black  md:text-white md:w-[72%]"> For decades now, I have witnessed the near non-existence of the practical intersection between faith and work. </p>
                                
                            </div>
                            <div className="hidden md:block absolute bottom-5 right-[12%] p-5">
                            <Image  src='/73.png' className="w-[80%]" / width="200" height="200" />
                            </div>
                            <div className=" absolute w-[95px] top-0 right-0 md:w-auto  md:top-5 md:right-[3%] p-5">
                            <Image  src='/91.png' className="w-[80%]" / width="200" height="200" />
                            </div>
                        </div>
                  </section>
                  </div> */}
                  < VideoPlayer />

                  <div className="container mx-auto md:py-15">
                    <h2 className="font-bold text-black md:text-left text-center  md:max-w-[800px] md:text-[48px] text-[25px] leading-tight mb-4">{data.page.bookPageFeilds.bookSeventhSectionMainHeading}</h2>
                   <div className="md:flex">
                    <div className="md:w-1/2  ">
                    <div className="md:flex gap-5 ">
                            <a href={data.page.bookPageFeilds.bookSeventhSectionButtonOneLink}><button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                            {data.page.bookPageFeilds.bookSeventhSectionButtonOneText}
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button></a>
                                    <br className="hidden md:block" />
                                    <a href={data.page.bookPageFeilds.bookSeventhSectionButtonTwoLink}>  <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                    {data.page.bookPageFeilds.bookSeventhSectionButtonTwoText}
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button></a>
                          </div>
                    </div>
                    <div className="md:w-1/2 p-3 md:pr-[140px]">
                            <p className="font-normal text-[16px]  text-center md:text-left text-black pt-2 pb-3">
                            {data.page.bookPageFeilds.bookSeventhSectionDescription1} </p>
                            <p  className="font-normal text-[16px]  text-center md:text-left text-black  pb-3 ">
                            {data.page.bookPageFeilds.bookSeventhSectionDescription2}</p>
                            <p  className="font-normal text-[16px]  text-center md:text-left text-black pb-3">
                            {data.page.bookPageFeilds.bookSeventhSectionDescription3}  
                                                    </p>
                            <h5 className=" text-[16px]  text-center md:text-left text-black font-bold pb-3">
                            {data.page.bookPageFeilds.bookSeventhSectionDescription4}</h5>
                    </div>  
                   </div>
                    </div>
                <div className="container mx-auto md:py-15">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-2 relative">
                        <h2 className="font-bold text-black text-center md:text-left   text-[48px] leading-tight mb-4"> {data.page.bookPageFeilds.bookEigthSectionMainHeading}</h2>
                        <p className="font-normal  text-center md:text-left text-[16px]  text-black pb-3"> {data.page.bookPageFeilds.bookEigthSectionMainLeftDescription}</p>
                        <Image  src={data.page.bookPageFeilds.bookEigthSectionMainLeftImage?.node?.link} className="md:absolute md:mx-0 mx-auto bottom-[29%] right-3 " alt='' / width="200" height="200" />
                        </div>
                        <div className="md:w-1/2 p-2">
                        <Image  src={data.page.bookPageFeilds.bookEigthSectionMainRightImage?.node?.link} className="md:p-0 p-9" alt='' / width="200" height="200" />
                        <p className="font-normal  text-center md:text-left text-[14px] pt-3 text-black pb-3">
                        {data.page.bookPageFeilds.bookEigthSectionMainLeftDescription}</p><p className="font-normal  text-center md:text-left text-[14px]  text-black pb-3">        
                        {data.page.bookPageFeilds.bookEigthSectionMainLeftDescription}</p>
                        </div>
                    </div>
                 </div>

 
                 <div className="container mx-auto py-15 md:p-0 p-3">
                    <div className="md:flex ">
                        <div className="md:w-1/2 p-2 relative">
                        <h2 className="font-bold text-black text-center md:text-left  md:w-[75%] md:text-[33px] text-[28px] leading-tight mb-4">
                          {data.page.bookPageFeilds.bookNinthSectionMainLeftHeading}
                          </h2>
                        
                        </div>
                        <div className="md:w-1/2 p-2">
                          <p className="font-normal text-[14px] text-center md:text-left  md:w-[48%] float-left  text-black pb-3">        
                          {data.page.bookPageFeilds.bookNinthSectionMainRightDescription}
                          </p>
                        </div>
                    </div>
                    <div className="md:flex md:mt-[90px] gap-6">
                        <div className="">
                        <Image  src={data.page.bookPageFeilds.bookNinthSectionLeftImage?.node?.link} alt=""/ width="200" height="200" />
                        </div>
                        <div className=" relative">
                            <div className="md:flex md:absolute top-[-20%] md:w-[95%] right-0">
                                <div className="md:w-1/2 h-[232px] grid items-center p-6 bg-[#B8EA81]" >
                                <p className="text-[#000000] text-center md:text-left  text-[14px]">{data.page.bookPageFeilds.bookNinthSectionRightFirstColumnText}</p>
                                </div>
                                <div className="md:w-1/2 h-[232px] grid items-center  p-6 bg-[#000000]">
                               <div> <p className="text-white  text-center md:text-left text-[14px]">{data.page.bookPageFeilds.bookNinthSectionRightSecondColumnText}</p>
                               <a href={data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonLink}> <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                {data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonText}
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button>
                                            </a>
                                            </div>
                                </div>
                            </div>
                        <Image  src={data.page.bookPageFeilds.bookNinthSectionRightImage?.node?.link} alt=""/ width="200" height="200" />
                        </div>
                    </div>
                 </div>

                 
                 <Partner />

                 <Newsletter />
        </main>
    );
}