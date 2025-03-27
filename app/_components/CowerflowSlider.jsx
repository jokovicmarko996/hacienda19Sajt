




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/about/pergola1.png",
  "/about/pergola2.png",
  "/about/pergola3.png",
  "/about/pergola4.png",
  "/about/pergola5.png",
  "/about/pergola6.png",
  "/about/pergola7.png",
];

const CoverflowSlider = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0, // No rotation for simplicity
          stretch: -50, // Pulls the adjacent slides closer to the center
          depth: 100, // Adds depth to the 3D effect
          modifier: 2, // Controls the spacing between slides
          slideShadows: true, // Adds shadows for a 3D effect
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-[300px] !h-[300px]">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoverflowSlider;