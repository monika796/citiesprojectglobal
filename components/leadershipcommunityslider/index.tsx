
"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { gql } from "@apollo/client";
import client from "apollo-client";
const POSTS_QUERY = gql 
`query MyQuery2 {
  page(id: "cG9zdDo2MDg=") {
    leadershipPageFeilds {
      leadershipWatchOurCommunitySection {
        watchOurCommunitySlider {
          watchOurCommunitySliderAuthor
          watchOurCommunitySliderDesignation
          watchOurCommunitySliderImage {
            node {
              link
            }
          }
        }
      }
}
}
}

      `;
      interface WatchOurCommunitySlider {
        watchOurCommunitySliderAuthor: string;
        watchOurCommunitySliderDesignation: string;
        watchOurCommunitySliderImage?: {
          node?: {
            link: string;
          };
        };
      }

const SwiperSectionLeaderhsip =  () => {
    const [posts, setPosts] = useState<WatchOurCommunitySlider[]>([]);

    // Fetch data with Apollo client
    useEffect(() => {
      async function fetchData() {
        try {
          const { data } = await client.query({
            query: POSTS_QUERY,
          });
          // Limit posts to the first 4
          setPosts(data?.page?.leadershipPageFeilds?.leadershipWatchOurCommunitySection
            ?.watchOurCommunitySlider || []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);
   
 
 return (
    <>
      <section className="max-w-[1480px] mx-auto">
        <div className="w-full h-auto">
        <Swiper
                modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                    type: 'bullets',
                }}
                keyboard={{ enabled: true }}
                mousewheel={{ forceToAxis: true }}
                loop={true}
                cssMode
                // slidesPerView={1}  // Show 4 slides per view by default
                spaceBetween={30}  // Add space between slides
                breakpoints={{
                  1400: {
                    slidesPerView: 3, // 4 slides on large screens
                    },
                    1024: {
                    slidesPerView: 3, // 4 slides on large screens
                    },
                    768: {
                    slidesPerView: 3, // 2 slides on tablets
                    },
                    480: {
                    slidesPerView: 1, // 1 slide on mobile screens
                    },
                }}
                className="w-full h-auto"
                >
            {posts.map((course, index) => (
              <SwiperSlide
                key={index}
                className=" text-lg bg-white"
              >
               <div key={index} className="grid grid-cols-1 md:grid-cols-2">
                <Image src={course.watchOurCommunitySliderImage?.node?.link || ''} className="" width={1000} height={1000} alt='' />
                <div className="bg-[#D9F8DC] grid items-center pl-4">
                  <div>
                  <h2 className='text-[16px] font-bold text-black'>{course.watchOurCommunitySliderAuthor}</h2>
                  <p className='text-[16px] font-medium text-black'>{course.watchOurCommunitySliderDesignation}</p>
                  </div>
                </div>
            </div>
                     
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom CSS for pagination */}
      <style>
        {`
        
          .swiper-pagination {
            bottom: -20px; 
          }

          .swiper-pagination-bullet {
            background: #000; 
            opacity: 0.6;
          }

          .swiper-pagination-bullet-active {
            background: #ff5722;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default SwiperSectionLeaderhsip;
