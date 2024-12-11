'use client'; // Add this at the top of the file

import { useEffect, useState } from "react";
import { Anton } from "next/font/google";
import { gql } from "@apollo/client";
import client from "@/apollo-client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Define the Anton font
const anton = Anton({ weight: "400", subsets: ["latin"] });

// GraphQL Query
const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo0MjY=") {
      homeExtraBanner {
        homeBannerSecond {
          homeBannerBackgroundImage {
            node {
              link
            }
          }
          homeBannerButtonLink
          homeBannerButtonText
          homeBannerDescription
          homeBannerHeadings
          homeBannerLatestPostImages {
            node {
              link
            }
          }
          homeBannerSubtitle
        }
      }
    }
  }
`;

export default function Contact() {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({ query: POSTS_QUERY });
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Display loading until data is fetched
  if (!data) return <div>Loading...</div>;

  
    console.log(data);
  // Check if homeBannerLatestPostImages is defined and is an array
 

  return (
    <main className=" mx-auto">
      <section className="w-full">
        <div className="container-fluid mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            // autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className="w-full"
          >
            {data.page.homeExtraBanner.homeBannerSecond.map((banner, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative  w-full  bg-cover bg-center newstory-slider  h-[510px] md:h-[850px]"
                  style={{
                    backgroundImage: `url(${banner.homeBannerBackgroundImage?.node?.link})`,
                  }}
                >
                  <div className="container relative max-w-[1480px] mx-auto    h-[510px] md:h-[780px]">
                    <div className="relative w-full md:absolute md:top-[61%]  top-0  md:pt-0 pt-[36rem] left-0 transform -translate-y-1/2 text-white">
                      <span className="uppercase mb-1	inline-block text-[10px] md:text-[14px] bg-[#fff] text-black leading-none	 text-center w-[auto]  mb-[20px]  font-bold	py-1 px-2">
                        {banner.homeBannerSubtitle}
                      </span>
                      <strong
                        className={`${anton.className}  md:w-[39%] block uppercase md:text-[126px] leading-[50px] text-[37px] font-light xl:leading-[130px] md:leading-none`}
                      >
                        {banner.homeBannerHeadings}
                      </strong>
                      <p className="mt-2 md:mb-0 mb-10 md:w-[26%] font-light xl:leading-6 md:leading-none">
                        {banner.homeBannerDescription}
                      </p>
                      <a
                        href={banner.homeBannerButtonLink}
                        className="flex w-fit items-center gap-2.5 inline-block md:mt-4 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                      >
                        {banner.homeBannerButtonText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                          <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M1 13 13 1M4 1h9v9"></path>
                          </g>
                        </svg>
                      </a>
                     
                    </div>
                    <Image  src={banner.homeBannerLatestPostImages?.node?.link} className='container md:absolute right-[29px] bottom-[0%] w-3/12 md:mx-0 mx-auto p-4  self-end ' / width="200" height="200" />
              
                  </div>
                </div>
              </SwiperSlide>
            ))}
            </Swiper>
           
        </div>
      </section>
    </main>
  );
}
