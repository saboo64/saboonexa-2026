import React, { useEffect, useRef, useState } from 'react';
// import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowDown } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLessThan } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import 'swiper/swiper-bundle.min.css';
import Helmet from 'react-helmet';
// import { CarComp } from "./Invicto";
// import TestDrive from "../../components/utils/TestDrive";
import { Customise } from '../../components/Vitara/e-vitara/customize';
// import { MiniBanner } from "../../components/Vitara/e-vitara/mini-banner";
import TabsListVitara from '../../components/Vitara/e-vitara/tabs-list-vitara';
import Video from '../../components/Vitara/e-vitara/video';
import { Options } from '../../components/Vitara/e-vitara/options';
import Header from '../../components/Header/Header';
import { CarEnq2 } from '../../components/Invicto/CarEnq2';
// import { products } from "../../constants";
// import { LuMoveRight } from 'react-icons/lu';
import { Navigation } from 'swiper';
// import { Button } from "@mui/material";
import View360 from '../../components/utils/View360';
import { Tb360View, TbView360 } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';

export const imagineList = [
  {
    name: 'Long Wheelbase',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5df7f7f5-e61a-481c-9b00-09f8e9e85413/as/C1_AR_BP_NEXA_E-VITARA_LONGER-WHEELBASE_03.png?width=2000&id=1',
    desc: 'HEARTECT-e, the pure electric platform offers a long wheelbase, maximises interior space to provide unparalleled legroom and comfort.',
  },
  {
    name: 'Ventilated seats',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_VENTILATED_SEATS_V12-(1).png?width=2000&id=1',
    desc: 'Escape the fatigue of long journeys with ventilated front seats that ensure a constant flow of air.',
  },
  {
    name: '10-Way Power Adjustable Driver’s Seat',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:8fd919f4-a815-449d-ac3a-46257e2641eb/as/C3_AR_AD_NOV_24_NEXA_YY8_E-VITARA_10_WAY_ADJUSTABLE_DRIVER_SEAT_EXTENDED_02.png?width=2000&id=1',
    desc: 'Tailor your perfect driving position according to your own convenience.',
  },
  {
    name: 'Sliding And Reclining Rear Seats',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:661a246a-9c6f-44b8-9ab4-856774c4b9cf/as/C4_AR_PK_E_Vitara_2024_Rear_Seat_Sliding_Reclining_V-2.png?width=2000&id=1',
    desc: 'Crafted for those who seek relaxation, the rear seats of the e VITARA recline up to 20 degrees.',
  },
  {
    name: '40-20-40 Rear Seat',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d43c7890-a50c-4d12-a31d-7a4c9930db53/as/Ar_Vk_BP_Maruti_E-Vitara_402040-Rear-Seats-Lifestyle.png?width=2000&id=1',
    desc: 'Accommodate anything and everything you need with a 40-20-40 rear seat split design.',
  },
  {
    name: 'Flexible Boot Space',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:c0dca10f-d809-44ca-b718-9f169c51c919/as/AR_BP_NEXA_E-VITARAT_BOOT_SHOT_V3-copy-2.png?width=2000&id=1',
    desc: 'In the e VITARA, there’s always room for more when it comes to your adventure gear or the necessary luggage you need for your spontaneous trips.',
  },
];

const imagine = [
  {
    name: 'Pure Electric Platform',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5bc3400e-55cc-4983-ade3-372c64063b29/as/YY8_AssetRework_Template.png?width=2000&id=1',
    desc: 'HEARTECT-e is a ground-up design that blends performance, efficiency, and innovation.',
  },
  {
    name: 'Advanced Aerodynamics',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:c6522fd9-a377-4795-b3c7-bf3ae05f0474/as/AR_AB_EVITARA_AERODYNAMIC_SHOT_OUTDOOR_04-copy-2.png?width=2000&id=1',
    desc: 'Shaped by aerodynamics, the e VITARA’s body ensures a smooth flow of air over the vehicle for improved range.',
  },
  {
    name: 'Driving Performance',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:11f09e75-9770-4314-bbc9-be41b084a157/as/AR_SN_MARUTI_E-VITARA_REGENERATIVE-BOOST_V1-copy.png?width=2000&id=1',
    desc: 'Experience electric performance from the future with the e VITARA.',
  },
];

const exteriorImages = [
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/POLYHEDRAL-MUSCULAR-STANCE.avif',
    alt: 'Polyhyderal Muscular Stance',
    title: 'Polyhyderal Muscular Stance',
  },

  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/FUTURISTIC-FRONT-FASCIA.avif',
    alt: 'Futuristic Front Fascia',
    title: 'Futuristic Front Fascia',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/R18-AERODYNAMIC-ALLOYS-.avif',
    alt: 'R18 Aerodynamic Alloys',
    title: 'R18 Aerodynamic Alloys',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/NEXTR%C3%88-3-POINT-MATRIX-LED-DRLs-.avif',
    alt: 'NEXTrè 3-Point Matrix LED DRLs',
    title: 'NEXTrè 3-Point Matrix LED DRLs',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/NEXTR%C3%88-3-POINT-MATRIX-REAR-LAMPS-.avif',
    alt: 'NEXTrè 3-Point Matrix Rear Lamps',
    title: 'NEXTrè 3-Point Matrix Rear Lamps',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/SCULPTED-3D-APPEARANCE.avif',
    alt: 'Sculpted 3D Appearance',
    title: 'Sculpted 3D Appearance',
  },
];

const interiorImages = [
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/AMBIENT-LIGHTING-WITH-MULTI-COLOUR-ILLUMINATION.avif',
    alt: 'Ambient Lighting With Multi Colour Illumination',
    title: 'Ambient Lighting With Multi Colour Illumination',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/26.avif',
    alt: '26.04 cm Multi Information Display',
    title: '26.04 cm Multi Information Display',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/Twindeck-Floating-Console-with-Shift-by-Wire-_-New.avif',
    alt: 'Twindeck Floating Console With Shift By Wire',
    title: 'Twindeck Floating Console With Shift By Wire',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/DIGITAL-COCKPIT-EXPERIENCE.avif',
    alt: 'Digital Cockpit Experience',
    title: 'Digital Cockpit Experience',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/SUNROOF-WITH-FIXED-GLASS.avif',
    alt: 'Sunroof With Fixed Glass',
    title: 'Sunroof With Fixed Glass',
  },
  {
    src: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/Exterior+images/WIRELESS-CHARGER.avif',
    alt: 'Wireless Charger',
    title: 'Wireless Charger',
  },
];

const image = [
  {
    name: 'High Capacity Battery',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:dd526c4c-3602-415a-8524-df7245b89752/as/AR_BP_NEXA_E-VITARA_E_GRID_BATTERY_03-copy-2.jpg.png?width=2000&id=1',
    desc: 'The e VITARA comes equipped with a High Capacity Battery comprised of 120 lithium-ion based cells with an operating range from -30°C to 60°C.',
  },
  {
    name: 'ADAS Level 2',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f6aace7c-7ce7-42cf-a200-c146a4f2fbff/as/ADAS-Hero-Image.png?width=2000&id=1',
    desc: 'Fitted with advanced sensors, the e VITARA proactively works to keep you and your occupants safe on the road.',
  },
  {
    name: 'Safety Tech',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:2c127b10-c8ee-4656-acfa-e662a14fe275/as/Safety-Others-Hero.png?width=2000&id=1',
    desc: 'The e VITARA ensures peace of mind on every journey with a host of advanced safety features.',
  },
];

const Suzukiconnect = [
  {
    name: 'Smart Watch Connectivity',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:9c1962c5-5ff0-483a-88ba-bc8fad385453/as/Smartwatch-Connectivity_opt1-1.png?width=2000&id=1',
    desc: 'Get your vehicle charging status and other crucial alerts right on your wrist.',
  },
  {
    name: 'Vehicle Status & Alerts',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:7e19a833-507d-4970-afe2-c51b7be0f468/as/Vehicle-Health_opt-1.png?width=2000&id=1',
    desc: 'Stay updated always.',
  },
  {
    name: 'Suzuki Navigation',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:503a2068-f159-460a-85e8-ab98880ad1ff/as/Suzuki-Navigation-_v1_opt1-1.png?width=2000&id=1',
    desc: 'Find your nearest charging station with the fastest routes.',
  },
  {
    name: 'Schedule Charging',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:411319f8-55ae-42a9-84fa-7f76c9693f2c/as/Schedule-Charging-(2)_opt1.png?width=2000&id=1',
    desc: 'Schedule the e VITARA’s charging with ease as per your own convenience.',
  },
];

const charging = [
  {
    name: 'Home Charger',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:962ca924-5177-478c-8657-7b02b610c18b/as/Shot_03_CMYK.png?width=2000&id=1',
    desc: 'Professional installation tailored to your convenience. Transform your residence into your very own charging station.',
  },
  {
    name: 'Fast Charger',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f98b7caf-2163-4ee3-a42d-69a5abae3bfc/as/Shot_02_CMYK_SL.png?width=2000&id=1',
    desc: 'Our expansive network of fast chargers has been designed for your convenience.',
  },
  {
    name: 'e for me App',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:aa770403-01e8-405c-bee2-33e50fb792fb/as/App.png?width=2000&id=1',
    desc: 'Get real-time navigation to nearby charging stations with availability updates and route optimisation for a stress-free journey.',
  },
  {
    name: 'Service On Wheels',
    img: 'https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:62749b03-f14e-4fcd-b47d-aec21e1c3fc7/as/Service-on-Wheels.png?width=2000&id=1',
    desc: 'Our Service on Wheels provides a reliable support system, even in remote locations, backed by our dedicated call center.',
  },
];

const EVitara = () => {
  const [open, setOpen] = useState(false);
  // const [exterior, setExterior] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const renderSwiperSlides = (images) =>
    images.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className='relative z-50 overflow-hidden'>
          <img
            src={slide.src}
            alt={slide.alt}
            className='object-cover w-full h-full rounded-lg shadow-lg'
          />
          <div className='absolute bottom-0 left-0 w-full p-4 text-center text-white bg-black bg-opacity-70'>
            <h3 className='text-lg font-bold'>{slide.title}</h3>
            {/* <p className="text-sm text-white">{slide.description}</p> */}
          </div>
        </div>
      </SwiperSlide>
    ));

  return (
    <>
      <Helmet>
        <title>
          2025 Discounts and festive Offers on Maruti Suzuki e-VITARA - Luxury
          and Savings Combined! at RKS Motor
        </title>
        <meta
          name='description'
          //  content="Drive home the luxurious Maruti Suzuki e-VITARA with exciting 2025 Discounts and festive Offers! Avail exclusive finance offers, exchange benefits, and additional savings on this premium SUV. Limited period offers—book yours now!"
        />
        <meta
          name='title'
          // content="2025 Discounts and festive Offers on Maruti Suzuki e-VITARA - Luxury and Savings Combined! at RKS Motor"
        />

        <meta
          name='keywords'
          //  content="Maruti Suzuki e-VITARA  offers, 2025 Discounts and festive Offers e-VITARA , luxury SUV deals, e-VITARA  Nexa offers, Maruti e-VITARA  finance, premium SUV offers ,2025 Discounts and festive Offers."
        />
      </Helmet>

      <Header />
      {/* logo section */}
      <div className='bg-[#18171a]'>
        <div className='flex justify-end logo'>
          <a href='/'>
            <img
              //  src={require('../../assets/others/logo.webp')}
              className='h-10 m-5 mr-24 sm:h-5 md:h-8 lg:h-9 '
              alt='Logo'
            />
          </a>
        </div>
      </div>

      {/* hero image section */}
      <div className='relative '>
        {/* Video Section with Controls */}
        <Video
          contorls
          poster='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/evitara-videoposter.avif'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/saboo%2Bnexa%2Be%2Bvitara%2Bvideo%2Bbanner.mp4'
        />

        <div className='absolute top-[16%] left-10 text-white z-50 space-y-7'>
          <h1
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='500'
            className='!font-light italic text-4xl font-serif capitalize'
          >
            Introducing the electric SUV
          </h1>
          <img
            data-aos='fade-right'
            data-aos-delay='400'
            data-aos-duration='500'
            src={require('../../assets/cars/e-vitara/e-vitara-logo-6.png')}
            alt=''
          />
          <h6
            data-aos='fade-right'
            data-aos-delay='600'
            data-aos-duration='500'
            className='font-serif text-4xl italic'
          >
            Spark Your eMagination
          </h6>
        </div>

        <div className='absolute z-50 text-white top-2/3 left-10 md:right-auto right-10 2xl:top-[500px] '>
          <div className='flex items-center justify-center space-x-5 md:space-x-10'>
            <div className='space-y-3'>
              <p className='md:text-xl '>Pure Electric</p>
              <p className='text-xs uppercase '>Platform</p>
            </div>
            <div className='w-px h-10 bg-white'></div>
            <div className='space-y-3'>
              <p className='md:text-xl'>61 kWh</p>
              <p className='text-xs uppercase '>Battery</p>
            </div>
            <div className='w-px h-10 bg-white'></div>
            <div className='md:space-y-3'>
              <p className='text-xl'>500 km</p>
              <p className='text-xs uppercase '>Range</p>
            </div>
          </div>
        </div>

        {/* <div className="absolute z-10 left-20 md:left-auto right-20 bottom-20 sm:bottom-24 md:top-3/4 lg:top-2/3 ">
          <button
            className="px-7 py-2.5 max-w-screen-md w-full bg-white rounded-tl-2xl rounded-br-2xl hover:text-red-600 flex items-center justify-center sm:px-6 md:px-7 lg:px-8 text-sm md:text-base"
            onClick={() => setOpen(true)}
          >
            <span>Register your interest</span>
            <FiArrowUpRight size={20} className="ml-2" />
          </button>
        </div> */}
      </div>

      <CarEnq2 title='BOOK YOUR e-VITARA' carName='e-VITARA' />

      <div className='flex justify-between py-4 mx-10 bg-white'>
        {/* <div className="font-serif text-2xl">
          <a href="/e-vitara"> e VITARA </a>
        </div> */}
        <div className='space-x-5'>
          {/* <a href="/">Overview</a> */}
          {/* <a href="/">Build Your Own </a> */}
        </div>
      </div>

      <div className='bg-stone-100 '>
        <div className='lg:flex hidden justify-center font-light container mx-auto space-x-10 py-2.5'>
          <p className='flex font-normal'>
            Design
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Comfort
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Performance
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Safety
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Suzuki Connect
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Configure
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Eco-Solutions
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
          <p className='flex'>
            Register Your Interest
            <span className='mt-1'>
              <GoArrowDown />
            </span>
          </p>
        </div>
      </div>

      <div className='bg-black'>
        {/* Heading Section */}
        <div className='p-10 text-center'>
          <h1 className='pt-2 pb-6 text-3xl text-center text-white uppercase lg:pb-8 sm:text-4xl md:text-5xl'>
            HIGHLIGHTS
          </h1>
        </div>

        {/* Button Section */}
        <div className='flex justify-center space-x-5 text-white'>
          <button
            className={`px-4 py-1 border tracking-widest rounded-lg duration-500 ${
              activeTab === 0
                ? 'border-white bg-white text-black'
                : 'border-gray-800 text-gray-500 hover:text-white hover:border-white'
            }`}
            onClick={() => setActiveTab(0)}
            aria-label='Exterior'
          >
            EXTERIOR
          </button>
          <button
            className={`px-4 py-1 border tracking-widest rounded-lg duration-500 ${
              activeTab === 1
                ? 'border-white bg-white text-black'
                : 'border-gray-800 text-gray-500 hover:text-white hover:border-white'
            }`}
            onClick={() => setActiveTab(1)}
            aria-label='Interior'
          >
            INTERIOR
          </button>
        </div>

        {/* Swiper Section for Active Tab */}
        <div className='pb-20 mt-5'>
          <Swiper
            onSwiper={setSwiperInstance}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            effect='fade'
            pagination={{ clickable: true }}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {activeTab === 0
              ? renderSwiperSlides(exteriorImages)
              : renderSwiperSlides(interiorImages)}
            {/* Custom Navigation Buttons */}
            {/* <button
          className="absolute left-0 z-50 flex items-center justify-center w-10 h-10 text-black transform -translate-y-1/2 bg-white rounded-full shadow-lg swiper-button-prev top-1/2 hover:bg-gray-200"
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 text-black transform -translate-y-1/2 bg-white rounded-full shadow-lg swiper-button-next top-1/2 hover:bg-gray-200"
          aria-label="Next Slide"
        >
          ❯
        </button> */}

            {/* Previous Button */}
            <div
              ref={navigationPrevRef}
              className='absolute left-10 top-1/2 !z-10 hover:bg-white hover:text-black text-white border rounded-full p-1 sm:p-5 cursor-pointer'
            >
              <FaLessThan />
            </div>

            {/* Next Button */}
            <div
              ref={navigationNextRef}
              className='absolute top-1/2 right-10 !z-10 hover:bg-white hover:text-black text-white border rounded-full p-1 sm:p-5 cursor-pointer'
            >
              <FaGreaterThan />
            </div>
          </Swiper>
        </div>
      </div>

      {/* <MiniBanner 
        sliders={polySliders}
        poster={
          "https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
        }
        src={require("../../assets/teaserVideoFinal.mp4")}
        title={"Polyhedral"}
        subtitle={"Muscular Stance"}
        desc={"Shaped by aerodynamics. Designed by your imagination."}
      /> */}
      {/* <MiniBanner
        sliders={futureSliders}
        poster={
          "https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
        }
        src={require("../../assets/teaserVideoFinal.mp4")}
        title={"Futuristic &"}
        subtitle={"Spacious Cabin"}
        desc={"Experience interiors that radiate luxury and exclusivity."}
      /> */}
      {/*comfort*/}
      <TabsListVitara
        bgColor={'black'}
        gradient={'bg-gradient-to-r from-black to-transparent'}
        tabsList={imagineList}
        title={'Comfort Like Never Before'}
        caption={'Imagine'}
      />

      {/*performs*/}
      <TabsListVitara
        bgColor={'gray-500'}
        gradient={'bg-gradient-to-r from-gray-500 to-transparent'}
        tabsList={imagine}
        title={'Like A Beast'}
        caption={'Performs'}
      />

      <TabsListVitara
        bgColor={'black'}
        gradient={'bg-gradient-to-r from-black to-transparent'}
        tabsList={image}
        title={'Beyond Imagination'}
        caption={'Safety'}
      />

      <TabsListVitara
        bgColor={'black'}
        gradient={'bg-gradient-to-r from-black to-transparent'}
        tabsList={Suzukiconnect}
        title={'Suzuki Connect'}
        caption={'Next Gen'}
      />

      {/*colors-section*/}
      <Customise />
      <EV360 />
      <TabsListVitara
        bgColor={'black'}
        gradient={'bg-gradient-to-r from-black to-transparent'}
        tabsList={charging}
        title={'e for me'}
        caption={'charging the future with sustainable eco-solution'}
      />

      {/* <CarComp details={products[1]} /> */}
      <div className='bg-[#15151e] p-10'>
        <Options open={open} setOpen={setOpen} />

        {/* More from NEXA Section - Swiper for slider */}
        <div className='p-8 font-serif text-white'>
          <h className='m-4 text-2xl text-center sm:text-3xl md:text-4xl'>
            More from NEXA
          </h>

          {/* Swiper Section */}
          <Swiper
            className='m-11'
            spaceBetween={2}
            slidesPerView='auto'
            breakpoints={{
              320: { slidesPerView: 3 },
              425: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
            }}
            loop={false}
          >
            {[
              { href: '/maruti-invicto-price-in-hyderabad', label: 'Invicto' },
              { href: '/maruti-fronx-price-in-hyderabad', label: 'Fronx' },
              { href: '/maruti-jimny-price-in-hyderabad', label: 'Jimny' },
              {
                href: '/grand-vitara-on-road-price-in-hyderabad',
                label: 'Grand Vitara',
              },
              { href: '/nexa-xl6-on-road-price-in-hyderabad', label: 'XL6' },
              {
                href: '/nexa-ignis-on-road-price-in-hyderabad',
                label: 'Ignis',
              },
              {
                href: '/new-maruti-baleno-price-in-hyderabad',
                label: 'Baleno',
              },
              { href: '/nexa-ciaz-on-road-price-in-hyderabad', label: 'Ciaz' },
            ].map(({ href, label }, index) => (
              <SwiperSlide key={index}>
                <a href={href} className='text-sm md:text-lg lg:text-xl'>
                  {label}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <CarEnq2 title='BOOK YOUR EVitara' carName='e-Vitara' />

      {/* <TestDrive
        open={open}
        setOpen={setOpen}
        title={"Register your interest"}
      /> */}
    </>
  );
};

export default EVitara;

const EV360 = () => {
  return (
    <div
      className='relative bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: "url('https://your-image-url-here.jpg')",
      }}
    >
      <div className='bg-black bg-opacity-50'>
        {/* Small screen title */}
        <div className='text-center'>
          <div className='w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden'>
            360
            <sup>
              <span className='text-lg'>0</span>
            </sup>{' '}
            View
          </div>
          <div className='pb-4 lg:hidden'>
            Take a 360-degree look around the Evitara and get to know it better.
          </div>
        </div>

        {/* View360 Component */}
        <div className='relative w-full max-w-7xl mx-auto px-4 h-[200px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[670px]'>
          {/* Force View360 container height */}
          <div className='flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='w-full h-full'>
              <View360
                path='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/evitara/360'
                count={46}
                format='png'
              />
            </div>
          </div>
          {/* Left/Right Arrows */}
          <div className='absolute left-0 flex flex-col items-center text-black -translate-y-1/2 top-1/2 sm:left-2 md-left-2 lg:left-[0px] 2xl:left-[-100px]  z-10'>
            <GiReturnArrow className='text-3xl rotate-180 lg:text-5xl animate-pulse' />
          </div>

          <div className='absolute right-0 flex flex-col items-center text-black -translate-y-1/2 top-1/2 sm:right-10 md:right-2 lg:right-[0px] 2xl:right-[-100px] '>
            <GiReturnArrow className='text-3xl lg:text-5xl animate-pulse' />
          </div>

          {/* 360 Icons and Text for Desktop */}
          <div className='absolute flex-col items-center hidden w-full text-black lg:flex top-6'>
            <div className='text-4xl font-bold uppercase'>
              360
              <sup>
                <span className='text-lg'>0</span>
              </sup>{' '}
              View
            </div>
            <div className='mt-2 text-lg text-black'>
              Take a 360-degree look around the Evitara and get to know it
              better.
            </div>
          </div>

          {/* Icon Left Top for md+ */}
          <div className='absolute flex-col items-center hidden text-black md:flex top-6 left-6'>
            <TbView360 className='text-3xl lg:text-5xl animate-pulse' />
            <Tb360View className='text-xl lg:text-4xl' />
          </div>
        </div>
      </div>
    </div>
  );
};
