import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = ({ sliders }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{
        nextEl: navigationNextRef.current,
        prevEl: navigationPrevRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      modules={[Navigation, Autoplay]}
      loop={true}
      className='mySwiper lg:mt-16'
    >
      {sliders.map((item, index) => (
        <SwiperSlide key={index}>
          <Link to={item.link} className='select-none'>
            <img
              src={item.desktopImg}
              alt={item.alt}
              className='hidden w-full h-full md:block '
            />

            <img
              src={item.mobileImg}
              alt={item.alt}
              className='block w-full h-full md:hidden '
            />
          </Link>
        </SwiperSlide>
      ))}

      <div
        ref={navigationPrevRef}
        className='absolute z-10 p-3 bg-white rounded-full cursor-pointer left-10 top-1/2'
      >
        <GrFormPrevious />
      </div>
      <div
        ref={navigationNextRef}
        className='absolute z-10 p-3 bg-white rounded-full cursor-pointer right-10 top-1/2'
      >
        <GrFormNext />
      </div>
    </Swiper>
  );
};

export default Banner;
