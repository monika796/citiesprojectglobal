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
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({}); // State to track playing state for each video

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const videoData = data.page.homevideobanner.videoslider.map((videoslider, index) => ({
    id: index + 1,
    videoUrl: videoslider.videolink,
    description: videoslider.videothumbnail,
  }));

  const handlePlayPause = (videoId: number, videoElement: HTMLVideoElement) => {
    if (videoElement) {
      const isCurrentlyPlaying = playingVideos[videoId] || false;
      if (isCurrentlyPlaying) {
        videoElement.pause();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: false })); // Pause the video and update state
      } else {
        videoElement.play();
        setPlayingVideos((prev) => ({ ...prev, [videoId]: true })); // Play the video and update state
      }
    }
  };

  return (
    <div className="container max-w-[1481px] mx-auto">
      <section className="md:flex w-[100%] mx-auto">
        <div className="md:w-4/12 md:p-[65px] p-5 md:pl-0">
          <h2 className="font-inter text-[25px] md:text-[48px] text-black font-bold leading-[35px] md:leading-[58.09px] text-center md:text-left underline-from-font decoration-skip-ink-none">
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
                      <div className="video-container mb-6 relative">
                        <video
                          className="w-full rounded-lg"
                          poster={video.description} 
                          loop
                          ref={(el) => el && (el as HTMLVideoElement).addEventListener('click', () => handlePlayPause(video.id, el))}
                        >
                          <source src={video?.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        {/* Play Button */}
                        {!playingVideos[video.id] && (
                          <button
                            className="absolute inset-0 flex items-center justify-center  text-white text-3xl rounded-full"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the video click event
                              handlePlayPause(video.id, e.currentTarget.previousElementSibling as HTMLVideoElement);
                            }}
                          >
                            <svg  fill="#fff" height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                              <g id="Play">
                                <path d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993zM25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z"/>
                              </g>
                            </svg>
                          </button>
                        )}
                        {/* Pause Button */}
                        {playingVideos[video.id] && (
                          <button
                            className="absolute inset-0 flex items-center justify-center  text-white text-3xl rounded-full"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent the video click event
                              handlePlayPause(video.id, e.currentTarget.previousElementSibling as HTMLVideoElement);
                            }}
                          >
                            <svg fill="#fff" height="50px" width="50px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <g>
                                <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6C218.6,448,224,442.6,224,435.8z"/>
                                <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1C384,69.4,378.6,64,371.8,64z"/>
                              </g>
                            </svg>
                          </button>
                        )}
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
