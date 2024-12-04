// app/new-page/page.js

import Newsletter from "@/components/Newsletter";
import {  Anton } from "next/font/google";

import { gql } from '@apollo/client';
import client from 'apollo-client';

const anton = Anton({ weight: '400', subsets: ["latin"] });

const POSTS_QUERY = gql `
query    {
 page(id: "cG9zdDoyNjY=") {
   aboutuspage{
   mainheadingabout
   secondimage {
       node {
         link
     }
  }
  secondsectionheading_1
  secondsectionheading_2

 secondsectionrightimage{
       node {
         link
     }
  }
    secondsectionimagwithtext_image{
       node {
         link
     }
  }
     secondsectionimagwithtextText
     secondsectionimagwithtextSubtext
     secondsectionimagwithtextButtontext
     secondsectionimagwithtextButtonlink
     thirdsectionimage{
            node {
              link
          }
        }
     forthsectionlefttext
     fourthsectionleftbutton
     fourthsectionleftbuttonlink
     fourthsectionrightheading
     fourthsectionrightdescrition1
     fourthsectionrightdescrition2
     fourthsectionrightdescrition3
     fourthsectionrightdescrition4
}

      aboutussections {
      iconsections {
        logoIcons {
          node {
            link
          }
        }
        icontitle
      }
        videosectionheading
        videosectionbackground{
          node {
            link
          }
        }
        videosectiontitle
        videosectiondescription
        imagewithtextImage1{
          node {
            link
          }
        }
        imagewithtextImage1{
          node {
            link
          }
        }
          imagewithtext1Description1
          imagewithtext1description2
          imagewithtext1description3
          imagewithtext1description4
          imagewithtext1description5
          imagewithtext1Heading
          imagewithtextImage2{
          node {
            link
          }
        }
          imagewithtext2Description1
          imagewithtext2Description2
          imagewithtext2Description3
          imagewithtext2Description4
          imagewithtext2Description5
          imagewithtext2Heading
          reviewsectiontitle1
          reviewsectiondescription1
        tenthsectionleftheading
        tenthsectionrightimage{
          node {
            link
          }
        }
          tenthsectionleftsubheading
          tenthsectionleftbuttontext
          tenthsectionleftbuttonlink
          eleventhsectionheading
          eleventhsectionsubheading
          eleventhsectiondescrition
          eleventhsection2descrition
          eleventhsection2heading
          twelthsectionleftimage{
          node {
            link
          }
        }
          twelthsectionrightimage{
          node {
            link
          }
        }
          twelthsectionrightdescription
          twelthsectionrightdescription2    
          tenthsectionrightcolumns{
                columnsimage {
                  node {
                    link
                  }
                }
                columnstext
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

export default async function NewPage() {

  const data = await fetchData();

console.log(data);
    return (
      
        <main className="md:w-[91%] mx-auto"> 
                    <h1 className="md:w-[65%] md:py-[42px] mt-4 py-[30px] md:text-[58px] text-[25px] leading-[38px]  font-bold  md:leading-[77px] text-center text-black  p-5 mx-auto md:leading-[77px] ">
                    {data.page.aboutuspage.mainheadingabout}</h1>
                  <section className="md:py-[42px]">
                  <img src={data.page.aboutuspage.secondimage?.node?.link} className=" mx-auto" alt="" />
                  </section >

              <div className="container mx-auto max-w-[1480px]">  <section className="md:flex md:gap-20 md:py-[32px] ">
                                <div className="md:w-2/3 ">
                                <h3 className="md:text-[28px] text-center md:text-left text-[18px] text-black leading-[35px] md:leading-[49px] p-[18px]">
                                {data.page.aboutuspage.secondsectionheading_1}
                        <div className="inline-flex  space-x-1 ">
                          <img src="/53.png" className="w-[30px] h-[30px]" />
                          <img src="/54.png" className="w-[30px] h-[30px]" />
                          <img src="/63.png" className="w-[30px] h-[30px]" />
                        </div>
                        {data.page.aboutuspage.secondsectionheading_2}  </h3>

                      <hr />  

                                
                                  <div className="p-7 md:flex gap-15 md:pt-20">
                                    <div className=" md:w-2/5">
                                    <img src={data.page.aboutuspage.secondsectionimagwithtext_image?.node?.link} alt="" />
                                    </div>
                                    <div className=" md:w-3/5 pt-3">
                                      <h4 className="text-[16px] text-left md:text-left  text-black font-normal leading-[23px] text-left">
                                      {data.page.aboutuspage.secondsectionimagwithtextText}   </h4>
                                      <p className="text-[16px] text-left md:text-left  pt-[19px] md:w-[75%] text-black  font-bold leading-[23px] text-left pb-3 md:pb-0">
                                      {data.page.aboutuspage.secondsectionimagwithtextSubtext}  </p>
                                      <a href={data.page.aboutuspage.secondsectionimagwithtextButtontext} className=" flex   mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">{data.page.aboutuspage.secondsectionimagwithtextButtontext} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="md:w-1/3 w-full grid justify-unset  md:justify-end p-5 md:p-10">
                                <img src={data.page.aboutuspage.secondsectionrightimage?.node?.link} alt="" className="w-full md:w-auto" />
                                  </div>
             </section>
             </div>

             <div className="container mx-auto  max-w-[1480px]">
             <section className="md:py-[42px] p-5 md:p-0">
                  <img src={data.page.aboutuspage.thirdsectionimage?.node?.link} alt="" className="mx-auto" />
             </section>
            </div>

            <div className="container mx-auto  max-w-[1480px]">
                 <section className="md:flex md:py-[32px] ">  
                          <div className="md:w-1/2 relative">
                              <div className="md:absolute p-3 md:p-10 md:p-0    bottom-0  text-black font-bold">
                                 <h3 className="  md:w-[57%] text-black font-extrabold md:text-[21px]  text-left md:text-left">
                                 {data.page.aboutuspage.forthsectionlefttext} 
                                </h3>
                                <a href={data.page.aboutuspage.fourthsectionleftbuttonlink} className=" mx-auto md:mx-0 flex  items-center gap-2.5 w-[fit-content] text-center inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300">  {data.page.aboutuspage.fourthsectionleftbutton} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                </div>
                            </div>
                            <div className="md:w-2/3 md:p-10 p-3 pb-0"> 
                                    <h3 className="text-[25px] md:text-[40px] font-extrabold text-black text-left md:text-left md:leading-[58.09px]">{data.page.aboutuspage.fourthsectionrightheading} </h3>
                                    <p className="text-[16px] text-black leading-[22px] pt-5 text-left">
                                    {data.page.aboutuspage.fourthsectionrightdescrition1}
                                    </p>
                                    <h4 className="text-[16px] text-black font-bold leading-[22px] pt-5  text-left md:text-left"> {data.page.aboutuspage.fourthsectionrightdescrition1}</h4>

                                    <h4 className="text-[16px] text-black font-bold leading-[22px] pt-5  text-left md:text-left"> {data.page.aboutuspage.fourthsectionrightdescrition2}</h4>

                                    <h4 className="text-[16px] text-black font-bold leading-[22px] pt-5  text-left md:text-left"> {data.page.aboutuspage.fourthsectionrightdescrition3}</h4>
                            </div>


               </section>
               </div>
               <div className="container mx-auto">
                  <section className=" md:pt-10 py-[32px]">
                                    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                                    <div className="grid grid-cols-2  pt-[29px] md:grid-cols-7 md:justify-center">
                          {data.page.aboutussections.iconsections.map((dataposts, index) => (
                              <div 
                                key={index} // Add a unique key for each child
                                className="grid items-center justify-center border w-[100%] h-[150px] border-[#e3e2e2] p-[18px]"
                              >
                                <img 
                                  src={dataposts.logoIcons?.node?.link} // Access the image URL correctly
                                  className="pb-5 mx-auto object-contain" 
                                  alt={dataposts.icontitle || "Placeholder"} // Use icontitle as alt text
                                />
                                <h3 className="font-bold text-[15px] text-black text-center">
                                  {dataposts.icontitle}
                                </h3>
                              </div>
                            ))}


                            </div>
                            </div>
                       </section>
                       </div>

              <div className="container mx-auto">
                  <section className="md:py-[32px] ">
                        <h1 className="md:text-[40px]  text-[25px] font-bold text-center text-black md:w-[52%] md:p-5 mx-auto leading-[49px]">{ data.page.aboutussections.videosectionheading }</h1>
                        <div className="relative mx-auto table"> 
                            <img src={data.page.aboutussections.videosectionbackground?.node?.link} className="md:p-0 p-5" alt="" />
                            <div className="md:absolute bottom-0 p-5 text-center md:text-left">
                                <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[32%] leading-[65px]">{ data.page.aboutussections.videosectiontitle }</h2>
                                <p className="font-normal text-[16px] mt-4 text-black  md:text-white md:w-[72%]">{ data.page.aboutussections.videosectiondescription } </p>
                                
                            </div>
                            <div className="hidden md:block absolute bottom-5 right-[5%] p-5">
                            <img src='/73.png' className="w-[80%]" />
                            </div>
                        </div>
                  </section>
                  </div>
                  <div className="container mx-auto">
                <section className="md:flex pt-[32px] grid">
                        <div className="md:w-1/2 bg-[#000000] p-2 md:order-1 order-2">
                          <div className="border border-white border-solid p-5 md:p-15"> 
                             <h1 className="text-[30px] md:text-[48px] mb-5 text-left md:text-left leading-[56px] font-bold  text-[#C7EF92] " >{ data.page.aboutussections.imagewithtext1Heading } </h1>
                            <p className="mb-6 text-[16px] text-left md:text-left text-white ">
                            { data.page.aboutussections.imagewithtext1Description1 }
                        </p>
                        <p className="mb-6 font-normal text-[16px] text-left md:text-left text-white "> { data.page.aboutussections.imagewithtext1description2 }
                            </p>
                            <p className="mb-6 font-normal text-[16px] text-left md:text-left  text-white "> { data.page.aboutussections.imagewithtext1description3 }
                            </p>
                            <p className="font-bold text-[16px] text-left md:text-left text-white "> { data.page.aboutussections.imagewithtext1description4 }

                            </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 bg-[#d3d3d3] md:h-auto h-[350px] w-auto   bg-contain bg-no-repeat bg-bottom   " style={{ backgroundImage: `url('${data.page.aboutussections.imagewithtextImage1?.node?.link}')` }}>
                              <div className="border border-white m-[6px] w-[98%] h-[97%] relative "></div>
                        </div>  
                </section>
                </div>
                <div className="container mx-auto">
                  <section className="md:flex pb-[32px]">
                      <div className="md:w-1/2 bg-contain bg-[#d3d3d3] md:h-auto h-[350px] w-auto bg-no-repeat bg-bottom  " style={{ backgroundImage: `url('${data.page.aboutussections.imagewithtextImage2 ?.node?.link}')` }}>
                      <div className="border border-white m-[6px] w-[98%] h-[97%] relative "></div>
                          </div>  
                      <div className="md:w-1/2 bg-[#000000] p-2 ">
                        <div className="border border-white border-solid p-5 md:p-15"> 
                           <h1 className="text-[30px] md:text-[48px] mb-5 text-left md:text-left font-bold leading-[56px] text-[#C7EF92] " >{ data.page.aboutussections.imagewithtext2Heading }</h1>
                          <p className="font-normal text-[16px] mb-6 text-left md:text-left  text-white ">
                          { data.page.aboutussections.imagewithtext2Description1 }  </p>
                      <p className="font-normal text-[16px] mb-6 text-white text-left md:text-left">{ data.page.aboutussections.imagewithtext2Description2 }
                      </p>   </div>
                      </div>
        
              </section>
          </div>
          <div className="container mx-auto">  <section className="mx-auto grid gap-[37px] pt-[100px] pb-[100px] ">
              <img src="76.png" className="mx-auto" />
              <h1 className={`${anton.className} text-[25px] md:text-[48px] font-normal  text-center text-[#000000] leading-[40px] md:leading-[72px] w-[90%] md:w-[80%] mx-auto`}>{ data.page.aboutussections.reviewsectiontitle1 }</h1>
              <h4 className={`${anton.className} text-[18px] md:text-[32px] font-normal  text-center text-[#aed575]`}>{ data.page.aboutussections.reviewsectiondescription1 }</h4>
            </section>
            </div>


            <div className="container mx-auto"> <section className="bg-[#F5F5F5] p-[34px]  md:pt-[0px]">
                    <div className="md:flex">
                      
                              <div className="md:w-[40%]  grid justify-center items-center">
                        <h1 className="text-black text-[25px] md:text-[48px] md:w-[90%] md:text-left text-center  leading-[40px] md:leading-[58px] font-bold">{ data.page.aboutussections.tenthsectionleftheading }</h1>
                    
                    </div>
                    <div className="md:w-[60%] md:pl-10 md:pr-10 md:pt-0 pt-20 relative">
                      <img src={data.page.aboutussections.tenthsectionrightimage?.node?.link} className="mx-auto"  />
                      <div className="md:flex ">
                      {data.page.aboutussections.tenthsectionrightcolumns.map((slide, index) => (
                        <div  className="md:w-1/3 p-10 grid gap-10 " key={index}>
                        <img src={slide.columnsimage?.node?.link} className="mx-auto md:mx-0"  />
                        <h5 className="text-black text-[18px] md:text-left text-center">{slide.columnstext}</h5>
                        </div>
                        ))}
                        
                      </div><img src='/81.png' alt="" className="md:absolute hidden md:block left-[-6%] top-[13%]" />
                    </div>
                    </div>
                    <div className="">
                      <h3 className=" md:mt-[-10%] md:text-left text-center md:w-1/3 text-black font-normal">
                           { data.page.aboutussections.tenthsectionleftsubheading }   </h3>
                                <a href={data.page.aboutussections.tenthsectionleftbuttonlink} className=" flex text-[13px] mx-auto md:mx-0 gap-2.5 w-[fit-content] text-center inline-block mt-4 bg-[#A1CF5F] font-bold text-black md:text-sm p-3  rounded-lg transition duration-300"> { data.page.aboutussections.tenthsectionleftbuttontext }  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M1 13 13 1M4 1h9v9"></path></g></svg></a>
                                </div>     
          </section></div>

          <div className="container mx-auto"><section className="mx-auto grid gap-[37px] md:p-0 p-8 md:pt-[100px] md:pb-[50px] ">
                <h1 className={`text-black md:text-[43px] text-[28px] leading-[40px] md:leading-[58px] mx-auto text-center md:text-left md:w-[40%] font-bold`}>  { data.page.aboutussections.eleventhsectionheading }</h1>
                <h4 className={` text-[16px] font-normal  mx-auto  md:w-[40%] text-[#000000]  text-center md:text-left`}> { data.page.aboutussections.eleventhsectiondescrition }</h4>
                <h4 className="text-black text-[20px]  text-center md:text-left mx-auto  md:w-[40%] font-bold">
                { data.page.aboutussections.eleventhsection2heading }
                </h4 ><h4 className={` text-[16px] font-normal  text-center md:text-left  mx-auto  md:w-[40%] text-[#000000] `}>
                { data.page.aboutussections.eleventhsection2descrition }</h4>
           </section>
           </div>
           <div className="container mx-auto">
          <section className="md:flex w-[80%] mx-auto pb-[100px]">
            <div className="md:w-1/2 ">
            <img src={data.page.aboutussections.twelthsectionleftimage?.node?.link}  alt="" />
            </div>
            <div className="md:w-1/2 grid gap-5">
            <img src={data.page.aboutussections.twelthsectionrightimage?.node?.link} alt=""  className="order-2 md:order-1"/>
            <h4 className={` text-[15px] font-normal  text-center md:text-left  text-[#000000] pt-3 md:pt-0 md:order-2`}>  { data.page.aboutussections.twelthsectionrightdescription }
            </h4>
            <h4 className={` text-[15px] font-normal  text-center md:text-left text-[#000000] md:order-3`}> { data.page.aboutussections.twelthsectionrightdescription2 }
            </h4> </div>
          </section>
          </div>
          <Newsletter />
          {/* <section>
          <div className=" md:flex  mx-auto bg-[#000000] p-5">
                    <div className="md:w-6/12 md:p-30">
                    <strong className={`${anton.className} uppercase md:text-[55px] text-[41px] text-white font-light leading-[50px]`}>
                    Join Our<br /> Community of Culturemakers
                    </strong>
                    <p className="text-white">Be the first to know about Cities <br / > Project Global news, programs, <br /> and impact</p>
                    </div>
                    <div className="md:w-6/12 md:p-15 p-5 md:border-l md:border-[#dbdbdb78]">
                      <p className="text-white  pb-[20px] font-extrabold text-[18px]">Become a Culturemaker <br /><span className="font-normal text-[#A1CF5F]">Join Us Today!</span></p>
                      <form action="#" className="grid gap-[1px]">
                        <input type="text" placeholder="Name" className="bg-transparent border border-[#f6f6f626] p-[10px]" /><br/>
                        <input type="email" placeholder="Email" className="bg-transparent border border-[#f6f6f626] p-[10px]"  />
                        <label className="text-[12px]  pt-2 font-normal  text-left  decoration-slice">Please Confirm</label>
                        <p className="text-[15px]  p-2 font-normal  text-left  decoration-slice"><input type="checkbox" /> I want to subscribe to all CPG emails</p>
                        <button type='submit' className="md:w-[18%] w-[25%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[13px]">Submit</button>
                      </form>
                    </div>

                  </div>
          </section> */}
      </main>
    );
  }
  