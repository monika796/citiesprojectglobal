"use client"; 
import { Metadata } from "next";
import Slider from "react-slick";
import Testimonial from "@/components/Testimonial";
import VideoCarousel from "@/components/videotestemonial";
import Newsletter from "@/components/Newsletter";
import PostSlider from "@/components/PostSlider";
import { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Anton } from "next/font/google";

const anton = Anton({ weight: '400', subsets: ["latin"] });





// export const metadata: Metadata = {
//   title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
//   description: "This is Home for Solid Pro",
//   // other metadata
// };
const POSTS_QUERY = gql `
query    {
 page(id: "cG9zdDoxNg==") {
   title
   link
   bannerHome {
     banner {
       node {
         link
       }
     }
     textBanner
     textBanner2
     textBanner3
     subtitleupper
     buttonText
     subtitle_bottom
   }
    bannerHomesecond{
    heading_second_section
    subtitleText
    firstRightImage{
       node {
         link
       }
     }
    secondRightImage{
       node {
         link
       }
     }
       bannersecondbackground{
       node {
         link
       }
     }
    }

    sectionHomethird{
    firstcolumnimage{
       node {
         link
       }
     }
       firstcolumnheading 
       subtitletextfirst
       buttontxtfirst
       secondcolumnimage{
       node {
         link
       }
     }
       secondcolumnheading
       subtitletextsecond
       buttontxtsecond

       thirdcolumnimage{
       node {
         link
       }
     }
       thirdcolumnheading
       subtitletextthird
       buttontxtthird
     }

     homefourtsection{
      mainheadingfourth
      firstimage{
       node {
         link
       }
     }
      firstsubtitle1
      firstheading
      firstparagraph

      secondimage{
       node {
         link
       }
     }
      secondheading
      secondsubtitle
      secondparagraph

      thirdimage{
       node {
         link
       }
     }
      thirdsubtitle
      thirdheading
      thirdparagraph
      }

      homefifthsection{
      mainheadingfifth
      fifthheadingsimple
      fifthfirstimage{
       node {
         link
       }
     }
      fifthfirstsubtitle
      fifthbuttonone
      textbuttonsecond
      authorimage{
       node {
         link
       }
     }
      authortitle
      authordesignation
      }
      patnerssection{
      mainheading
      firstsubtitlepatner
      imagefirst{
       node {
         link
       }
     }
      image5{
       node {
         link
       }
     }
      image2{
       node {
         link
       }
     }
      image3{
       node {
         link
       }
     }
      image4{
       node {
         link
       }
     }
      image6{
       node {
         link
       }
     }
      image7{
       node {
         link
       }
     }
      image8{
       node {
         link
       }
     }

      textninthbox
      linktextninthbox
      }
      homesixthsection{
        heading
        paragraph
        author  
        designations
        rightimage{
        node {
          link
        }
        }
    } 
   }    
}
`;


const POSTS_QUERY_SEC = gql `
query {
  posts {
    nodes {
      featuredImage {
        node {
          link
        }
      }
      title
    }
  }
}
`;
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function Home() {



 const {loading, error, data } = useQuery(POSTS_QUERY);


  if (loading) return ;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <main className="mt-[-96px]">

      {/* body start */}

      <section className="w-full">
        <div className="container-fluid mx-auto">
          <div className="relative w-full  bg-[url('/banner.jpg')] bg-cover bg-center  h-[510px] md:h-[909px]">
            {/* <img src="/banner.jpg" alt="banner" className="w-full md:h-[auto] h-[350px]" /> */}
            <div className="container max-w-[1480px] mx-auto relative   h-[510px] md:h-[909px]">


              <div className="relative w-full md:absolute md:top-1/2  top-0  md:pt-0 pt-[36rem] left-8 transform -translate-y-1/2 text-white">
                <span className="uppercase mb-1	inline-block text-[10px] md:text-[14px] bg-[#fff] text-black leading-none	 text-center w-[auto]  mb-[20px]  font-bold	py-1 px-2">{data.page.bannerHome.subtitleupper}</span><br />
                <strong className={`${anton.className} block uppercase md:text-[126px]  leading-[50px] text-[37px] font-light xl:leading-[130px]  md:leading-none`}>
                 {data.page.bannerHome.textBanner}<br className="hidden md:block" />
                 {data.page.bannerHome.textBanner2}< br className="hidden md:block" />
                 {data.page.bannerHome.textBanner3}
                </strong>
                <p className="mt-2 md:mb-0 mb-10 md:w-[26%] font-light xl:leading-6 md:leading-none">
                {data.page.bannerHome.subtitle_bottom} </p>
                <a
                  href="#"
                  className=" flex w-fit  items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black  text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                 {data.page.bannerHome.buttonText}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </a>

              </div> <img src='/49.png' className="hidden md:block absolute right-[17px] md:right-[55px]  md:w-[20%]   bottom-[8px] md:bottom-[53px] w-[40%]" />
            </div>
          </div>
        </div>
      </section>

      <section
  className="w-full bg-cover bg-center"
  style={{ backgroundImage: `url('${data.page.bannerHomesecond.bannersecondbackground?.node?.link}')` }}
>
        <div className="container mx-auto container max-w-[1480px]">
          <div className="flex md:p-[105px] md:pb-[180px] flex-col md:flex-row h-full">
            <div className=" w-full md:w-1/2 p-4 md:p-2 flex flex-col justify-center">
              <h2 className="font-bold text-gray-800 text-3xl md:text-[56px] leading-tight mb-4">
              {data.page.bannerHomesecond.heading_second_section}  
              </h2>
              <p className="max-w-[376px] md:text-[15px] text-black	 leading-tight mb-6 mt-4">
              {data.page.bannerHomesecond.subtitleText} </p>
              <div className="flex flex-col md:flex-row md:mx-0 md:mx-auto">
                <button className="w-full md:w-auto flex items-center gap-2.5 text-black     text-lg  font-extrabold rounded mb-4 md:mb-0 md:mr-4">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="w-full md:w-1/2  bg-cover bg-center " >
              <div className="inner_Sec_div relative">
                <div className='flex flex-col '>

                  <img src={data.page.bannerHomesecond.firstRightImage?.node?.link} className='md:w-4/12 w-[40%] bottom-0  p-4 h-auto absolute md:absolute' />
                  <img src={data.page.bannerHomesecond.secondRightImage?.node?.link} className='w-8/12  p-4  self-end ' />
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <div className="container mx-auto  max-w-[1480px] ">          
             <div className='w-[91%] md:mt-[-130px] mt-[50px] mx-auto flex flex-col md:flex-row border border-black border-solid '>
        <div className=' flex flex-col md:flex-row md:w-6/12 bg-white '>
          <div style={{ backgroundImage: `url('${data.page.sectionHomethird.firstcolumnimage?.node?.link}')` }} className='w-6/12  bg-no-repeat bg-cover w-auto bg-bottom h-[313px] md:w-[256px] md:h-[313px]   border-t border-transparent '>

          </div>
          <div className='md:w-6/12 md:pl-[14px] py-4 gap-0  text-left md:text-left px-4 md:px-0'>
            <h1 className="text-[32px] text-black leading-none mt-3 ">{data.page.sectionHomethird.firstcolumnheading}</h1>
            <h5 className="text-[16px] text-black font-bold mt-2">{data.page.sectionHomethird.subtitletextfirst}</h5>
            <hr className="w-[20px mt-2" />
            <p className="text-[14px] text-black leading-normal my-5">
            {data.page.sectionHomethird.buttontxtfirst}
            </p>
            <p className="text-[14px] text-black leading-normal mb-4">
              <b> Date:</b> November 15, 2024 <br />
              <b>Time:</b> 10:00 AM - 12:00 PM
            </p>
            <button className="container mb-6 md:mb-0 max-w-[109px] flex items-center gap-2.5 justify-center  md:w-1/2 float-left bg-[#A1CF5F] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">Sign up <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z" fill="black" />
            </svg>
            </button>

          </div>
        </div>

        <div className='md:w-6/12 flex flex-col md:flex-row ' >
          <div className='md:w-6/12  md:text-left text-left py-4 px-4 bg-[#224334]'>
            <h3 className="text-[32px] text-white  leading-none mt-3">{data.page.sectionHomethird.secondcolumnheading}</h3>
            <h5 className="text-[16px] text-white font-bold  mt-2">{data.page.sectionHomethird.subtitletextsecond}</h5>
            <hr className="w-[20px] md:mx-0 mx-auto" />
            <div className='flex flex-row md:flex-row md:gap-[10px] gap-[28px] items-center justify-between md:items-end mt-10 md:mt-22'>

            <button className="container max-w-[109px] flex items-center gap-2.5 justify-center  md:w-1/2 float-left bg-[#A1CF5F] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">{data.page.sectionHomethird.buttontxtsecond}<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z" fill="black" />
            </svg>
            </button>
              <img src={data.page.sectionHomethird.secondcolumnimage?.node?.link} alt="" className='object-cover w-[106px] h-[106px]' />
            </div>
          </div>
          <div className='md:w-6/12 py-4 px-4  md:text-left  bg-[#a1cf5f]'>
            <h3 className="text-[32px] text-black   leading-none mt-3">{data.page.sectionHomethird.thirdcolumnheading}</h3>
            <h5 className="text-[16px] text-black font-bold  mt-2">{data.page.sectionHomethird.subtitletextthird}</h5>
            <hr className="w-[20px] md:mx-0 mx-auto" />
            <div className='flex flex-row md:flex-row md:gap-[10px] gap-[28px] items-center  justify-between md:items-end  mt-10 md:mt-22'>

            <button className="container max-w-[109px] flex items-center gap-2.5 justify-center  md:w-1/2 float-left bg-[#FFFFFF] mt-[10px] h-[40px] rounded-[5px] font-bold text-black text-[14px]">{data.page.sectionHomethird.buttontxtthird} <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.40728 11.206L9.8764 3.73689L9.8764 10.2632C9.8764 10.7847 10.3044 11.2127 10.8259 11.2127C10.9498 11.2128 11.0724 11.1885 11.1869 11.1412C11.3013 11.0938 11.4053 11.0244 11.4929 10.9368C11.5805 10.8493 11.6499 10.7453 11.6972 10.6308C11.7446 10.5164 11.7689 10.3937 11.7688 10.2699L11.7688 1.4567C11.7689 1.33285 11.7446 1.21019 11.6972 1.09574C11.6499 0.981295 11.5805 0.877308 11.4929 0.789732C11.4053 0.702157 11.3013 0.632713 11.1869 0.585376C11.0724 0.538039 10.9498 0.513738 10.8259 0.513866L2.01276 0.513865C1.88894 0.513865 1.76634 0.538253 1.65195 0.585635C1.53756 0.633017 1.43362 0.702465 1.34607 0.790016C1.25852 0.877566 1.18907 0.981504 1.14169 1.09589C1.09431 1.21028 1.06992 1.33288 1.06992 1.4567C1.06992 1.58051 1.09431 1.70312 1.14169 1.81751C1.18907 1.9319 1.25852 2.03584 1.34607 2.12339C1.43362 2.21094 1.53756 2.28038 1.65195 2.32777C1.76634 2.37515 1.88894 2.39954 2.01276 2.39954L8.53905 2.39954L1.06992 9.86866C0.702152 10.2364 0.702151 10.8382 1.06992 11.206C1.4377 11.5738 2.03951 11.5738 2.40728 11.206Z" fill="black" />
            </svg>
            </button>              
            <img src={data.page.sectionHomethird.thirdcolumnimage?.node?.link} alt=""  className='object-cover w-[106px] h-[106px]' />
            </div>
          </div>
        </div>
      </div></div>

      <div className="container max-w-[1480px] mx-auto">  <div className="container w-[100%] mx-auto pt-[30px] pt-[30px] md:pt-[100px] md:pb-[100px]">
        <h1 className=" px-5 md:px-0 text-[25px] md:w-[47%] md:mx-auto  md:text-[48px] pb-5 mt-10 md:mt-0 md:pb-15 text-black font-bold leading-[30.09px] md:leading-[46.09px] text-center">
          {/* Confused over your calling?<br className="hidden md:block" />
          Is ministry the only work that 'counts'? */}
{data.page.homefourtsection.mainheadingfourth}

        </h1>
        <div className="pl-[23px] md:pl-[14px] flex items-center p-[23px] ">
          <div className=" md:w-6/12 md:flex md:gap-3 md:items-center md:justify-center">
            <div className=" md:w-6/12 p-2" >
              <img src={data.page.homefourtsection.firstimage?.node?.link} alt="" className='md:h-auto mx-auto w-full md:w-auto md:mx-0 h-[100%]' />
            </div>

            <div className=" md:w-6/12 mt-4 md:mt-0 ">
              <span className="mt-10 md:mt-0 text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0 w-[55%] rounded-[20px] px-3 py-1 font-bold">{data.page.homefourtsection.firstsubtitle1}</span>
              <h5 className="text-[20px] pt-3 text-black  text-left md:text-left font-bold">{data.page.homefourtsection.firstheading}</h5>
              <p className="text-[16px] text-black text-left md:text-left leading-tight mt-3">{data.page.homefourtsection.firstparagraph}</p>
            </div>

          </div>
        </div>


        <div className=" pl-[23px] md:pl-[14px] flex items-center p-[23px] justify-end md:mt-[-80px]">
          <div className="md:w-6/12 grid md:flex  items-center justify-center">
            <div className="md:w-6/12 float-right md:order-1 order-2  mt-4 md:mt-0 ">
              <span className="text-[13px] bg-[#a1cf5f] mx-auto md:mx-0 text-black text-left w-[55%] rounded-[20px] px-3 py-1 font-bold">{data.page.homefourtsection.secondsubtitle}</span>
              <h5 className="text-[20px] pt-3 text-left md:text-left  text-black font-bold">{data.page.homefourtsection.secondheading}</h5>
              <p className="text-[16px] text-left md:text-left text-black leading-normal mt-3 pe-6">{data.page.homefourtsection.secondparagraph}</p>
            </div>
            <div className="md:w-6/12 p-2 md:order-2" >
              <img src={data.page.homefourtsection.secondimage?.node?.link} alt="" className='md:h-auto mx-auto md:mx-0 h-[100%] w-full' />
            </div>
          </div >
        </div>


        <div className="pl-[23px] md:pl-[14px] md:pl-[120px] flex items-center p-[23px]  md:mt-[-70px]">
          <div className="md:w-6/12 md:flex md:items-center md:justify-center grid">

            <div className="md:w-6/12 order-2 md:order-1  mt-4 md:mt-0 mb-10 md:mb-0">
              <span className="text-[13px] bg-[#a1cf5f] text-black text-left mx-auto md:mx-0  w-[55%] rounded-[20px] px-3 py-1 font-bold">{data.page.homefourtsection.thirdsubtitle}</span>
              <h5 className="text-[20px] pt-3  text-black text-left md:text-left font-bold">{data.page.homefourtsection.thirdheading}</h5>
              <p className="text-[16px] text-black text-left md:text-left leading-normal  mt-3 ">{data.page.homefourtsection.thirdparagraph}</p>
            </div>
            <div className="md:w-6/12 p-2 order-1 md:order-2" >
              <img src={data.page.homefourtsection.thirdimage?.node?.link} alt="" className='md:h-auto mx-auto md:mx-0 h-[100%] w-full' />
            </div>
          </div>
        </div>
      </div>
      </div>


      <div className="container mx-auto max-w-[1480px]" >   
          <div className="flex flex-col md:flex-row w-[100%%] mx-auto items-center rounded-[5px]" style={{ backgroundColor: 'rgb(3, 4, 2)' }}>
        <div className="md:w-5/12 w-full p-[40px] md:p-[40px] mt-10 md:mt-0">
          <span className="text-[20px] bg-[#fff]   text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">{data.page.homefifthsection.fifthfirstsubtitle}</span>
          <h5 className="md:text-[48px] text-[26px]  text-[#A1CF5F] md:text-left text-left  pb-[15px] font-bold pt-[20px] md:leading-10 ">{data.page.homefifthsection.mainheadingfifth}</h5>
          <p className="md:text-[48px]  text-[22px] md:text-left text-left text-white md:leading-normal font-bold">
          {data.page.homefifthsection.fifthheadingsimple}</p>
          <img src={data.page.homefifthsection.authorimage?.node?.link} className="md:h-[150px] mx-unset mt-10 md:mt-0 md:mx-0 h-[83px]" />

          <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-5">{data.page.homefifthsection.authortitle}</h5>
          <h5 className="text-[12px] text-white md:text-left text-left font-bold">{data.page.homefifthsection.authordesignation}</h5>
        </div>
        <div className="md:w-7/12  pb-10 md:p-10">
          <img src={data.page.homefifthsection.fifthfirstimage?.node?.link} className="" />
          <div className="md:float-right md:mt-[-50px] mt-5 z-99999 relative" >
            <button className=" mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">{data.page.homefifthsection.fifthbuttonone} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></button><br className="hidden md:block" />
            <button className="mx-auto mt-[21px] md:mx-0 md:mt-4   flex items-center  gap-3 text-black bg-white font-bold p-2 rounded-[5px]">{data.page.homefifthsection.textbuttonsecond} <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></button>
          </div>
        </div>
      </div>
      </div>

      <div className="container mx-auto max-w-[1480px]" > 
         <section className="md:pt-[150px] pt-[50px] border border-x-0 border-y-stroke py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h5 className="md:text-[64px] text-[30px] text-black text-center md:pb-[30px] font-bold pb-2">{data.page.patnerssection.mainheading}</h5>
          <h5 className="text-[15px] text-black text-center">{data.page.patnerssection.firstsubtitlepatner}</h5>
          <div className=" md:hidden grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 md:w-[63%] mx-auto pt-[29px]">
            <img src={data.page.patnerssection.imagefirst?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image2?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image3?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image4?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image5?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <img src={data.page.patnerssection.image6?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image7?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />
            <img src={data.page.patnerssection.image8?.node?.link} className="w-[150px] h-[150px] p-[33px] border border-[#e3e2e2] object-contain mx-auto" />

            <div className=" relative bg-black text-white p-[27px] w-[150px] h-[150px] flex items-center justify-center mx-auto">
              <div className="text-left absolute bottom-[15px] w-[89%]">
                <h5 className="text-[12px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                <h3 className="text-[10px] font-bold">{data.page.patnerssection.linktextninthbox}</h3>
              </div>
            </div>

          </div>

          {/* desktop div start */}
          <div className="hidden md:block py-10 ">
            <div className="flex justify-center mx-auto w-fit mb-3 gap-3 md:w-10/12">
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.imagefirst?.node?.link} className="w-[80px]"  />
              </div>
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33]  ">
              <img  src={data.page.patnerssection.image2?.node?.link}  className="w-[80px]" />
              </div>
              <div className="max-w-[257px] w-[100%] h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.image3?.node?.link}  className="w-[80px]" />
              </div>
              <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img  src={data.page.patnerssection.image4?.node?.link} className="w-[80px]"/>
              </div>
              <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
              <img src={data.page.patnerssection.image5?.node?.link}  className="w-[80px]" />
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto w-fit mb-3 gap-3 md:w-8/12">
            <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image6?.node?.link}  className="w-[80px]"  />
                </div>
                <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image7?.node?.link}  className="w-[80px]"  />
                </div>
                <div className="max-w-[257px] w-[100%]  h-[240px] p-[33px] border border-[#e3e2e2] flex justify-center items-center hover:border-[#A1CF5F33] ">
                <img  src={data.page.patnerssection.image8?.node?.link}  className="w-[80px]"   />
                </div>
             
              <div className="relative bg-black text-white p-[27px] w-[100%] max-w-[257px] h-[240px] flex items-center justify-center hover:border-[#A1CF5F33]  ">
                <div className="text-left absolute bottom-[15px] w-[89%]">
                  <h5 className="text-[20px] font-bold pb-2">{data.page.patnerssection.textninthbox}</h5>
                  <a className="text-[16px] underline" href="#">{data.page.patnerssection.linktextninthbox}</a>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop div end */}
          {/* / */}

          <section className=" md:flex w-[97%] mt-[54px] mx-auto  bg-[#000]">
            <div className=" md:w-4/12 p-5">
              <h2 className={`${anton.className} text-[#A1CF5F] text-[30px] md:text-[48px] uppercase   leading-[50px] md:leading-[72px]`}>{data.page.homesixthsection.heading}</h2>
              <p className="text-white text-[16px] leading-tight pt-5">{data.page.homesixthsection.paragraph}</p>
              <p className="text-white text-[17px] md:text-[20px] font-bold pt-[29px] ">{data.page.homesixthsection.author}</p>
              <p className="text-white text-[16px] pl-0 md:pl-8  ">{data.page.homesixthsection.designations}</p>
            </div>
            <div className=" md:w-8/12   bg-cover bg-center" style={{ backgroundImage: `url('${data.page.homesixthsection.rightimage?.node?.link}')` }}>
            
            </div>

          </section>

        </div>
      </section>
      </div>

      <div className='container mx-auto hidden md:block'>  
            <div className="w-[100%] mx-auto">
        <h2 className="font-inter md:text-[48px] text-[30px] text font-bold leading-[58.09px] p-8 text-black text-left text-center decoration-skip-ink-none">Stories of Transformation</h2>
        <div className=" md:flex">
          <div className=" md:w-3/12 relative grid place-items-center p-10">
            <img src="/46.png" className="object-contain" />
            <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
            <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Receiving and Reflecting God’s <br />Inherent Love for Us</h2>
            <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></a>
          </div>
          <div className=" md:w-6/12 relative grid place-items-center p-10">
            <img src="/45.png" className="object-contain" />
            <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
            <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">Healing the Trauma of Homelessness Through<br />
              Affordable Housing</h2>
            <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></a>
          </div>
          <div className=" md:w-3/12 relative grid place-items-center p-10">
            <img src="/47.png" className="object-contain" />
            <p className="absolute top-13 left-12 text-white z-max bg-black px-2 py-0 rounded-full text-sm">5 Sep 2024</p>
            <h2 className="text-center px-3 py-[11px] text-black font-semibold text-base">In the Midst of War, Love Comes <br /> Through Action</h2>
            <a href="#" className="flex gap-2 items-center text-black font-extrabold text-center justify-center">Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
              <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M1 13 13 1M4 1h9v9"></path>
              </g>
            </svg></a>
          </div>
        </div>
        <img src='/48.png' className="table p-[61px] items-center m-auto" />
      </div>

      </div>
      <PostSlider />
      {/* <section className="bg-white dark:bg-gray-900 bg-[#F5F5F5] w-[90%] mx-auto">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                  <div className="flex mx-auto justify-center"> <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
                        </svg>
                        <svg width="49" height="68" viewBox="0 0 49 68" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.8447 48.4616C35.4569 47.1326 41.1628 43.5686 45.1734 37.4192C50.3845 29.4184 50.2592 18.7133 44.8831 10.7654C39.3686 2.61253 29.441 -1.49366 20.028 0.496619C10.3445 2.54641 2.71904 10.0116 1.09632 19.5795C-0.565964 29.3457 1.7032 38.5301 6.38004 47.0995C12.3959 58.1154 21.9937 64.5557 33.8144 67.9676C34.2102 68.08 34.6983 67.8751 35.1403 67.8156C34.9952 67.3395 34.9754 66.7576 34.6851 66.4072C31.6178 62.7837 29.2233 58.8031 28.3262 54.0886C27.9832 52.2769 27.9964 50.399 27.8381 48.4682L27.8447 48.4616ZM31.5387 65.6269C30.2787 65.1376 29.0056 64.6814 27.7589 64.1524C10.9249 57.0443 0.212414 38.9533 2.37603 21.3053C3.48422 12.2664 10.2785 4.58297 19.1572 2.34143C28.2668 0.033764 37.7327 3.48534 43.1879 11.1092C48.5771 18.6273 48.8542 28.9357 43.8211 36.5927C40.1206 42.2263 34.9292 45.6316 28.2734 46.6895C27.0069 46.8879 26.3869 47.3838 26.4528 48.6864C26.5452 50.4982 26.4528 52.3298 26.7167 54.1084C27.3368 58.2808 29.3421 61.8844 31.5387 65.6203V65.6269Z" fill="#A1CF5F"/>
              </svg></div>

                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">Leadership Circle has affected my understanding of my journey. It didn’t bring a dramatic change because I was already on the road, but it helped me understand the journey that I was on. </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className=" items-center ">
                                <div className="pr-3  text-gray-900 font-extrabold dark:text-white"> Mona D.</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">(Education Sphere, Egypt)</div>
                            </div>
                        </figcaption>
                    </figure>
                  
                </div>
              </section> */}


      <Testimonial />
      <VideoCarousel />

      <Newsletter />
      {/* <div className=" md:flex w-[89%] mx-auto bg-[#000000] p-5">
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
                        <button type='submit' className="mx-auto md:mx-0 md:w-[18%] w-[25%] bg-[#A1CF5F] md:p-[8px] p-[10px] text-black rounded-[7px] text-[13px]">Submit</button>
                      </form>
                    </div>

                  </div> */}
      {/* body end */}

    </main>
  );
}
