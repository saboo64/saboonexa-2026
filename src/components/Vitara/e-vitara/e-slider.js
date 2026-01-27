import React, { useEffect, useRef, useState } from "react";
import { LuMoveRight } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


function ESlider ({sliders}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // TODO responsive breakpoints
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        480: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 3,
        },
        1040: {
          slidesPerView: 4,
        },
      }}
      loop
      onSwiper={setSwiperInstance}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      className="relative"
    >
      {sliders?.map((item, i) => (
        <SwiperSlide key={i} className="flex flex-col">
          <img src={item.img} loading="lazy" alt={item.title} />
          <p className="my-5 text-sm font-light text-white text-start">
            {item.title}
          </p>
        </SwiperSlide>
        
      ))}

      {/* Previous Button */}
      <div
        ref={navigationPrevRef}
        className="absolute -bottom-5 right-10 !z-10 text-white text-primary rounded-full p-1 sm:p-5 cursor-pointer"
      >
        <LuMoveRight className="rotate-180" />
      </div>

      {/* Next Button */}
      <div
        ref={navigationNextRef}
        className="absolute -bottom-5 right-0 !z-10 text-white text-primary rounded-full p-1 sm:p-5 cursor-pointer"
      >
        <LuMoveRight />
      </div>
    </Swiper>
  );
}

export default ESlider;
