"use client";
import SectionHeader from "../Common/SectionHeader";

// Import necessary Swiper styles and modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// Static video data for the carousel
const videoData = [
  {
    id: "1",
    title: "Video 1",
    videoUrl: "video.mp4",
    description: "/thumb.png",
  },
  {
    id: "2",
    title: "Video 2",
    videoUrl: "video.mp4",
    description: "/51.png",
  },
  {
    id: "3",
    title: "Video 3",
    videoUrl: "/video.mp4",
    description: "/52.png",
  },
  {
    id: "4",
    title: "Video 4",
    videoUrl: "/video.mp4",
    description: "/thumb.png",
  },
  // Add more videos as needed
];

const VideoCarousel = () => {
  return (
    <div className="container mx-auto">
      <section className="md:flex w-[94%] mx-auto">
        <div className="md:w-4/12 md:p-[65px] p-5">
          <h2 className="font-inter text-[30px] md:text-4xl text-black font-bold leading-[42.09px] md:leading-[58.09px] text-center md:text-left underline-from-font decoration-skip-ink-none">
            See What’s Happening in Real Time
          </h2>
          <p className="pr-3 text-gray-900 text-center md:text-left font-extrabold">
            Stay connected with us through Instagram Reels!
          </p>
          <p className="flex gap-2 underline text-center md:text-left md:justify-start justify-center text-black font-extrabold">
            Follow along and be part of the journey!
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
                modules={[Autoplay]}
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
                          controls
                          poster={video.description} // Optional thumbnail image
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
