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
        className="mySwiper "
      >
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/grand-vitara-features-intelligent-electric-hybrid">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/1-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1+copy.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute text-lg -mt-16 text-white px-4">
              <div className="text-xl">
                <p>HILL HOLD ASSIST</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/grand-vitara-allgrip">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/2-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute text-lg -mt-16 text-white px-4">
              <div className="text-xl">
                <p>HILL DESCENT CONTROL</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/grand-vitara-5-speed-manual-transmission-price">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/3-Jimmy-811x629-1.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute text-lg -mt-16 text-white px-4">
              <div className="text-xl md-20">
                <p>BRAKE LSD</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="relative cursor-pointer">
            <Link to="/grand-vitara-on-road-price-in-hyderabad">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/4-811x629-AR_AB_BP_JIMNY_6_AIRBAG_SHOT_03_04.webp"
                alt=""
              />
            </Link>
            <figcaption className="absolute text-lg -mt-16 text-white px-4">
              <div className="text-xl">
                <p>6 AIR BAGS</p>
              </div>
              {/* <div className='text-xs'>
                <p>Rules with a Powerful Persona</p>
              </div> */}
            </figcaption>
          </figure>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MobileCarousel;
