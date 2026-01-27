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

import TabNavigationIH from "../Extras/TabNavigation";
import { CarEnq2 } from "../../Invicto/CarEnq2";

const VitaraIHE = () => {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Grand Vitara Intelligent Electric Hybrid Price
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Grand Vitara Intelligent Electric Hybrid Price"
        />
        <meta
          name="description"
          content="Maruti Suzuki Nexa Grand Vitara Intelligent Electric Hybrid On Road Price in Hyderabad. Grand Vitara Intelligent Electric Hybrid Price Starts at 17.99Lac*, Comes with Bs6 Petrol Engine, 6 Air Bags. For Best Offers Visit Nearest Saboo Nexa Showroom Today."
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
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ambient+Lighting+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Digital+Instrument+Cluster+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/EV+Mode+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Head+Up+Display+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src ="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/GV_Sunroof_Desktop_Image.webp"
           //  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
              alt=""
             
            />
            
          </SwiperSlide>
         
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Ventilated+Seats+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Wireless+Charger+webp.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/DRLs+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/LED+Tail+Lamps+webp+(1).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/Projector+Headlamps+webp+(2).webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
            src ="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/GV_Grille_Desktop_Image.webp"
           //  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
              alt=""
             
            />
            
          </SwiperSlide> <SwiperSlide>
            <img
            src ="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/GV_Wheel_Desktop_Image.webp"
           //  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/intelligent-hybrid-electric/R17+Dual+Tone+Precision+Cut+Alloy+Wheels+webp+(1).webp"
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
        The Grand Vitara with Intelligent Electric Hybrid
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
      <div className="flex justify-center sm:p-2">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/evDoKmxJJPc?rel=0"
          title="How does Intelligent Electric Hybrid work?"
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
          Intelligent Electric Hybrid System
        </h1>

        <p className="max-w-[900px] text-gray-600 text-center mx-auto font-light text-xl">
          The advanced electric hybrid system from Maruti Suzuki is a full
          hybrid technology that can drive on battery power, alone and operate
          in fuel efficient, zero emissions mode. The Intelligent Electric
          Hybrid can seamlessly switch between pure electric, petrol mode &#38;
          harness the power of both, depending on the driving situation. A
          revolutionary solution that lets you rule the city streets
        </p>
      </div>
      <TabNavigationIH />
    </div>
  );
}

export default VitaraIHE;
