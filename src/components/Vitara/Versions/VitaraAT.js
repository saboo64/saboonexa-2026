import Header from "../../../components/Header/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import Helmet from "react-helmet";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Extras/styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

// import Carousel from '../Extras/Carousel'; alt=""
import TabNavigationMT from "../Extras/TabNavigationMT";
import { CarEnq2 } from "../../Invicto/CarEnq2";

const VitaraAT = () => {
  return (
    <>
      <Helmet>
        <title>Nexa Grand Vitara 6 Speed Automtic Transmissions Price </title>
        <meta
          name="title"
          content="Nexa Grand Vitara 6 Speed Automtic Transmissions Price "
        />
        <meta
          name="description"
          content="Nexa Grand Vitara 6 Speed Automatic Price Starts at 13.40Lac*. Maruti Suzuki Grand Vitara Comes with Panoramic Sunroof, 6- Air bags, 6-Speed Automatic Transmission. For More Info & Offers Visit Nearest Saboo Nexa Showroom Today or Call Us 9848898488."
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-8+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-7+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-6+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-19+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-15+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src ="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/GV_Wheel_Desktop_Image.webp"
              //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-14+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-13+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/automatic-transmission/GV_811x629-12+webp.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        <IntelligentElectric />
        <CarEnq2 title="BOOK YOUR GRAND VITARA" carName="Grand Vitara" />
      </div>
    </>
  );
};

function IntelligentElectric() {
  return (
    <div className="container pt-16 mx-auto space-y-4">
      <p className="text-4xl font-bold text-center">
        The Grand Vitara with 6-Speed Automatic Transmission
      </p>
      <p className="font-bold tracking-wider text-center ">
        Rule the city streets
      </p>
      <p className="h-1 mx-auto bg-black w-60"></p>
      <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
        A new breed of SUVs has arrived and it’s here to rule every road it
        drives on, efficiently. This is the Advanced Grand Vitara with the
        revolutionary Intelligent Electric Hybrid System.
      </p>
      <br></br>
      <br></br>
      <p className="font-bold tracking-wider text-center ">
        How Intelligent Electric Hybrid Works?
      </p>
      <div className="flex justify-center">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/63IME4Vu2DI?rel=0"
          title="Maruti Suzuki | Smart Hybrid Technology"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 className="font-bold tracking-wider text-center ">
          The Grand Vitara with 6-Speed Automatic Transmission
        </h1>

        <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
          Get in. Drive. Relax. Feel the road fade away as you effortlessly
          cruise and bask in the glory of the majestic views. This is the
          experience of driving the Advanced Grand Vitara with the 6-Speed
          Automatic Transmission. It has steering-mounted Paddle Shifters that
          make every drive more exciting and engaging. Smooth to drive. Fast to
          accelerate. The perfect way to tackle city traffic and to cruise over
          highways.
        </p>
      </div>
      <TabNavigationMT />
    </div>
  );
}

export default VitaraAT;
