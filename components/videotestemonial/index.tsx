"use client";
import SectionHeader from "../Common/SectionHeader";
import React, { useState, useRef } from "react";
// Import necessary Swiper styles and modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { gql, useQuery } from '@apollo/client';

const POSTS_QUERY = gql`
query {
  page(id: "cG9zdDoxNg==") {
    homevideobanner {
      maintitle
      videosubtitle
      linktext
      videoslider {
        videolink
        videothumbnail
      }
    }
  }
}
`;

const VideoCarousel = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const videoData = data.page.homevideobanner.videoslider.map((videoslider, index) => ({
    id: index + 1,
    videoUrl: videoslider.videolink,
    description: videoslider.videothumbnail,
  }));

  const handleClick = (videoElement: HTMLVideoElement) => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play(); // Play the video if it is paused
      } else {
        videoElement.pause(); // Pause the video if it is playing
      }
    }
  };

  return (
    <div className="container max-w-[1481px] mx-auto">
      <section className="md:flex w-[100%] mx-auto">
        <div className="md:w-4/12 md:p-[65px] p-5 md:pl-0">
          <h2 className="font-inter text-[25px] md:text-[48px]  text-black font-bold leading-[35px] md:leading-[58.09px] text-center md:text-left underline-from-font decoration-skip-ink-none">
            {data.page.homevideobanner.maintitle}
          </h2>
          <p className="py-3 text-[16px] text-gray-900 text-center md:text-left ">
            {data.page.homevideobanner.videosubtitle}
          </p>
          <p className="flex gap-2 text-[16px] underline text-center md:text-left md:justify-start justify-center text-black font-extrabold">
            {data.page.homevideobanner.linktext}
          </p>
        </div>

        <div className="md:w-8/12 p-5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto"
          >
            {/* Video Carousel */}
            <div className="swiper video-carousel mb-20 pb-22.5">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {videoData.map((video) => (
                  <SwiperSlide key={video?.id}>
                    <div className="video-slide bg-white rounded-lg shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
                      <div className="video-container mb-6">
                        <video
                          className="w-full rounded-lg"
                          poster={video.description}
                          onClick={(e) => handleClick(e.currentTarget)} // Pass the clicked video element
                        >
                          <source src={video?.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VideoCarousel;
