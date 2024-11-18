"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";


const sliderData = [
  {
    id: "1",
    imgSrc: "/46.png",
    date: "5 Sep 2024",
    title: "Receiving and Reflecting God’s Inherent Love for Us",
    linkText: "Learn More",
  },
  {
    id: "2",
    imgSrc: "/46.png",
    date: "5 Sep 2024",
    title: "Healing the Trauma of Homelessness Through Affordable Housing",
    linkText: "Learn More",
  },
  {
    id: "3",
    imgSrc: "/47.png",
    date: "5 Sep 2024",
    title: "In the Midst of War, Love Comes Through Action",
    linkText: "Learn More",
  },
  {
    id: "5",
    imgSrc: "/46.png",
    date: "5 Sep 2024",
    title: "Healing the Trauma of Homelessness Through Affordable Housing",
    linkText: "Learn More",
  },
  {
    id: "4",
    imgSrc: "/47.png",
    date: "5 Sep 2024",
    title: "In the Midst of War, Love Comes Through Action",
    linkText: "Learn More",
  },
];

const CustomSlider = () => {
  return (
    <div className="container mx-auto block md:hidden">
      <section className="w-[94%] mx-auto">
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
          {/* Swiper Carousel */}
          <div className="swiper custom-carousel mb-20 pb-22.5">
            <Swiper
                modules={[Autoplay , Pagination ] }
              loop={true} // Enable infinite loop
              centeredSlides={true}
              spaceBetween={30}
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
              {sliderData.map((slide) => (
                <SwiperSlide key={slide.id} className="swiper-slide-custom">
                  <div className="relative grid place-items-center p-9 rounded-lg shadow-solid-9">
                    <img
                      src={slide.imgSrc}
                      className="object-contain w-full rounded-lg"
                      alt={slide.title}
                    />
                    <p className="absolute top-11  left-10 text-white bg-black px-2 py-0 rounded-full text-sm">
                      {slide.date}
                    </p>
                    <h2 className="text-center px-3 py-3 text-black font-semibold text-base">
                      {slide.title}
                    </h2>
                    <a
                      href="#"
                      className="flex gap-2 items-center text-black font-extrabold text-center justify-center"
                    >
                      {slide.linkText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M1 13L13 1M4 1h9v9"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        .swiper-slide-custom {
          transition: transform 0.3s ease;
        }
        .swiper-slide-active {
          transform: scale(1.1); /* Make the center slide 10% larger */
        }
        .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.9); /* Make other slides slightly smaller */
        }
          span.swiper-pagination-bullet.swiper-pagination-bullet-active {
            width: 49px;
            border-radius: 0;
            background: #   ;
        }

        span.swiper-pagination-bullet{
            width: 49px;
            border-radius: 0;
        }
           
      `}</style>
    </div>
  );
};

export default CustomSlider;
