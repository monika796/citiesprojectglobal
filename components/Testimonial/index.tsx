"use client";
import SectionHeader from "../Common/SectionHeader";

// Import Autoplay and Pagination from Swiper
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";

const Testimonial = () => {
  return (
    <>
      <section className="max-w-[1480px] mx-auto bg-[#F5F5F5] h-[600px] flex items-center justify-center mb-20 hover:cursor-[url('https://example.com/cursor.png'),_auto]">
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
          className="animate_top mx-auto mt-15 max-w-c-1235 w-full px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* Slider main container */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
