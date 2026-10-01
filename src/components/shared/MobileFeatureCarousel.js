import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const MobileFeatureCarousel = ({ slides }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        navigation={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className='mySwiper'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <figure className='relative cursor-pointer'>
              <Link to={slide.to}>
                <img src={slide.img} alt={slide.alt || ''} />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                <div className={slide.titleClassName || 'text-xl'}>
                  <p>{slide.title}</p>
                </div>
                {slide.subtitle && (
                  <div className='text-xs'>
                    <p>{slide.subtitle}</p>
                  </div>
                )}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MobileFeatureCarousel;
