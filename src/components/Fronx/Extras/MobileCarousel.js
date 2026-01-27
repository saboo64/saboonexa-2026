import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Extras/styles.css";
// import Helmet from 'react-helmet';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

const MobileCarousel = () => {
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
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 2,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-10C_Engine.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute px-4 -mt-16 text-lg text-white">
              <div className="text-xl">
                <p>1.0L TURBO BOOSTERJET ENGINE</p>
              </div>
              <div className="text-xs">
                <p>Shaping exhilarating drives.</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-12k_Engine.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute px-4 -mt-16 text-lg text-white">
              <div className="text-xl">
                <p>ADVANCED 1.2L K-SERIES DUAL JET, DUAL VVT ENGINE</p>
              </div>
              <div className="text-xs">
                <p>Forged for new age performance.</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-Smart_Hybird.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute px-4 -mt-16 text-lg text-white">
              <div className="text-xl md-20">
                <p>SMART HYBRID TECHNOLOGY</p>
              </div>
              <div className="text-xs">
                <p>Where smartness and efficiency take shape.</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AGS.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute px-4 -mt-16 text-lg text-white">
              <div className="text-xl">
                <p>6-SPEED AUTOMATIC TRANSMISSION WITH PADDLE SHIFTERS</p>
              </div>
              <div className="text-xs">
                <p>Go through the gears in a new way. </p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AMT.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute px-4 -mt-16 text-lg text-white">
              <div className="text-xl">
                <p>AUTO GEAR SHIFT</p>
              </div>
              <div className="text-xs">
                <p>Shaped for comfort and convenience.</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileCarousel;
