import Header from "../../Header/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import Helmet from "react-helmet";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Extras/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import TabNavigationMT from "../Extras/TabNavigationMT";
import { CarEnq2 } from "../../Invicto/CarEnq2";

const VitaraMT = () => {
  return (
    <>
      <Helmet>
        <title>Nexa Grand Vitara 5 Speed manual Transmissions Price</title>
        <meta
          name="title"
          content="Nexa Grand Vitara 5 Speed manual Transmissions Price"
        />
        <meta
          name="description"
          content="Nexa Grand Vitara 5 Speed Manual Price Starts at 10.45Lac*. Maruti Suzuki Grand Vitara available in transmission options: Manual, Automatic (TC) and Automatic (CVT). For more info, call now 9848898488."
        />
       
      </Helmet>
      <Header col={true} />
      <div className="container pb-16 mx-auto space-y-4 rounded lg:pt-32 pt-28">
        {/* <Carousel /> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          navigation={true}
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
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Front+Sliding+Armrest+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Power+Button+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Rear+AC+Vents+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Boot+Space+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/Projector+Headlamps+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/LED+Tail+Lamps+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/DRLs+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <ManualTransmission />
        <CarEnq2 title="BOOK YOUR GRAND VITARA" carName="Grand Vitara" />
      </div>
    </>
  );
};

function ManualTransmission() {
  return (
    <div className="container pt-16 mx-auto space-y-4">
      <p className="text-4xl font-bold text-center">
        The Grand Vitara with Manual Transmission
      </p>
      <p className="font-bold tracking-wider text-center ">
        Rule with a powerful persona
      </p>
      <p className="h-1 mx-auto bg-black w-60"></p>
      <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
        Get behind the steering wheel and take the power in your hands. Because
        there’s more than one way to exert your dominance and rule every road.
        Super-efficient and power-packed, the Advanced Grand Vitara with Manual
        Transmission makes cruising in the city an exhilarating experience. Feel
        the thrill as you shift the gears and take on the turns with ease.
      </p>
      <br></br>
      <br></br>
      <p className="font-bold tracking-wider text-center ">
        How 5-Speed Manual Transmission Works?
      </p>
      <div className="flex justify-center sm:p-2">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube-nocookie.com/embed/63IME4Vu2DI?rel=0"
          title="Maruti Suzuki| Smart Hybrid Technology"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className="font-bold tracking-wider text-center ">
          Progressive Smart Hybrid Technology
        </h1>

        <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
          The Grand Vitara is engineered for better performance and a refined
          driving experience with the Next Generation 1.5L K Series Engine with
          The Progressive Smart Hybrid Technology. It’s integrated starter
          generator, paired with a Li-ion and Lead Acid Battery, helps in
          regenerating braking energy and provides torque assist to the engine
          during acceleration.
        </p>
      </div>
      <TabNavigationMT />
    </div>
  );
}

export default VitaraMT;
