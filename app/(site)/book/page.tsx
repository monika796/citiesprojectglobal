import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";
import VideoPlayer from "@/components/Bookvideosection";
import  Partner from "@/components/partner";
import { gql } from '@apollo/client';
import client from 'apollo-client';
import Image from "next/image";
import Link from "next/link";
import MainComponent from '@/components/LightboxPdf'

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
            <h1 className="md:py-[42px] py-[30px] md:text-[60px] text-[25px] font-bold text-center text-black md:max-w-[1178px] p-5 mx-auto md:leading-[77.45px] ">
           {data.page.bookPageFeilds.bookFirstSectionMainHeading}</h1>
                  <section className="md:py-[42px] md:p-0 p-3">
                    <Image src={data.page.bookPageFeilds.bookSecondSectionImage?.node?.link} className=" mx-auto" alt="" layout="responsive" width={16} height={9} />
                    
                  </section >
                  <div className="container mx-auto  md:max-w-[1280px]">
                    <div className="md:flex">
                        <div className="md:w-5/12 border-r">
                        <Image src={data.page.bookPageFeilds.bookThirdSectionLeftImage?.node?.link} className="w-[50%] md:w-[70%] mx-auto"  alt='' layout="responsive" width={16} height={9} />
                          
                        </div>
                        <div className="md:w-7/12 py-20 md:pl-10 pl-0 ">
                        <h2 className="font-bold text-gray-800 text-center md:text-left text-3xl md:text-[48px] text-[25px] leading-tight mb-4"> {data.page.bookPageFeilds.bookThirdSectionRightHeading}</h2>
                        <p className="text-gray-500 text-[16px] md:text-[18px] md:text-lg text-center  md:text-left md:text-xl leading-relaxed mb-6">{data.page.bookPageFeilds.bookThirdSectionRightDescription}</p>
                        <div className="md:flex gap-5">
                           <Link href={data.page.bookPageFeilds.bookThirdSectionRightButtonOneLink.url}> <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                            {data.page.bookPageFeilds.bookThirdSectionRightButtonOne}
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button></Link>
                                    <br className="hidden md:block" />
                                    <div  className="mx-auto max-w-max mt-[21px] max-w-max md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                    
                            <MainComponent  extraclass=''
                                  buttonText={data.page.bookPageFeilds.bookThirdSectionRightButtonTwo}  // Pass dynamic text as prop
                                  pdfUrl="/SampleChapter.pdf#scrollbar=0"  // Pass the dynamic PDF URL
                                />
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </div>
                          </div>
                        </div>
                    </div>
                  </div>


                  <div className="container mx-auto  md:py-15">
                  <div className="md:flex">
                    
                        <div className="md:w-2/5 bg-[#000000] p-20 grid justify-center items-center">
                        <h2 className="font-bold text-white  md:w-[85%] text-center md:text-left md:text-[24px] text-[24px] leading-tight mb-4"> {data.page.bookPageFeilds.bookFourthSectionFirstColumnText}</h2>
                        </div>
                        <div className="md:w-1/5 md:m-0 m-5 md:mx-5 mx-0 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image src={data.page.bookPageFeilds.bookFourthSectionSecondColumnImage?.node?.link}  alt='' layout="responsive" width={16} height={9}></Image>

                      
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:mx-5 mx-0 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image src={data.page.bookPageFeilds.bookFourthSectionThirdColumnImage?.node?.link} alt='' layout="responsive" width={16} height={9}></Image>

                        
                        </div>
                        <div className="md:w-1/5  md:m-0 m-5 md:mx-5 mx-0 md:p-[46px] grid justify-center items-center border border-black md:h-[250px]">
                        <Image src={data.page.bookPageFeilds.bookFourthSectionFourthColumnImage?.node?.link} alt='' layout="responsive" width={16} height={9}></Image>

                       
                        </div>
                    </div>
                    </div>

                    <div className="container mx-auto mb-10 md:mb-0"> 
                       <section className="mx-auto grid gap-[37px] pt-[50px] md:pt-[100px] md:pb-[100px] ">
              <Image alt="" width={80} height={80}  src="/76.png" className="mx-auto" />
              <h1 className={`${anton.className} md:text-[48px] text-[20px] font-normal  text-center text-[#000000] leading-[32.26px] md:leading-[72.26px] md:w-[75%] md:max-w-[1,108px] mx-auto`}>
              {data.page.bookPageFeilds.bookFifthReviewSectionHeading}</h1>
              <h4 className={`${anton.className} text-[20px] font-normal  text-center text-[#aed575]`}>
              {data.page.bookPageFeilds.bookFifthReviewSectionDescription}
                </h4>
            </section>
            </div>

            
                  < VideoPlayer />

                  <div className="container mx-auto md:py-15">
                    <h2 className="font-bold text-black md:text-left text-center  md:max-w-[800px] md:text-[48px] text-[25px] leading-tight mb-4">{data.page.bookPageFeilds.bookSeventhSectionMainHeading}</h2>
                   <div className="md:flex">
                    <div className="md:w-1/2  ">
                    <div className="md:flex gap-5 ">
                            <Link href={data.page.bookPageFeilds.bookSeventhSectionButtonOneLink}><button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]" >
                            {data.page.bookPageFeilds.bookSeventhSectionButtonOneText}
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                 <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                    </button></Link>
                                    <br className="hidden md:block" />
                                    <div className="mx-auto mt-[21px] max-w-max md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                    
                                    <MainComponent  extraclass=''
                                  buttonText={data.page.bookPageFeilds.bookSeventhSectionButtonTwoText}  // Pass dynamic text as prop
                                  pdfUrl="/SampleChapter.pdf#scrollbar=0"  // Pass the dynamic PDF URL
                                /> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                          </div>
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
                        <h2 className="font-bold text-black text-center md:text-left w-full  md:w-[75%] text-[25px] md:text-[48px] leading-tight mb-4"> {data.page.bookPageFeilds.bookEigthSectionMainHeading}</h2>
                        <p className="font-normal  text-center md:text-left text-[16px]  text-black pb-3"> {data.page.bookPageFeilds.bookEigthSectionMainLeftDescription}</p>
                        <Image src={data.page.bookPageFeilds.bookEigthSectionMainLeftImage?.node?.link} className="md:absolute md:mx-0 mx-0 bottom-[29%] right-3 " alt=''  width={287} height={225}></Image>

                        
                        </div>
                        <div className="md:w-1/2 p-2">
                        <Image src={data.page.bookPageFeilds.bookEigthSectionMainRightImage?.node?.link} className="md:p-0 p-0"  alt='' layout="responsive" width={16} height={9}></Image>

                        
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
                          <p className="font-normal text-[14px] text-center md:text-left  md:w-[48%] float-right  text-black pb-3">        
                          {data.page.bookPageFeilds.bookNinthSectionMainRightDescription}
                          </p>
                        </div>
                    </div>
                    <div className="md:flex md:mt-[90px] gap-6">
                        <div className="">
                        <Image src={data.page.bookPageFeilds.bookNinthSectionLeftImage?.node?.link} alt='' width={436} height={436}></Image>

                     
                        </div>
                        <div className=" relative">
                            <div className="md:flex md:absolute top-[-20%] md:w-[95%] right-0">
                                <div className="md:w-1/2 h-[232px] grid items-center p-6 bg-[#B8EA81]" >
                                <p className="text-[#000000] text-center md:text-left  text-[14px]">{data.page.bookPageFeilds.bookNinthSectionRightFirstColumnText}</p>
                                </div>
                                <div className="md:w-1/2 h-[232px] grid items-center  p-6 bg-[#000000]">
                               <div> <p className="text-white  text-center md:text-left text-[14px]">{data.page.bookPageFeilds.bookNinthSectionRightSecondColumnText}</p>
                               <Link href={data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonLink}> <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 border-[1px] border-solid border-black  flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]" >
                                {data.page.bookPageFeilds.bookNinthSectionRightSecondColumnButtonText}
                                         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                                         <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                            <path d="M1 13 13 1M4 1h9v9"></path></g></svg>
                                            </button>
                                            </Link>
                                            </div>
                                </div>
                            </div>
                            <Image  src={data.page.bookPageFeilds.bookNinthSectionRightImage?.node?.link} alt=''  width={1018} height={436}></Image>

                  
                        </div>
                    </div>
                 </div>

                 
                 <Partner />

                 <Newsletter />
        </main>
    );
}