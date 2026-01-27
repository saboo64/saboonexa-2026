import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ImageViewer from "../../components/XL/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
// import Features from "../../components/XL/Features";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
  // MdOutlineFileDownload,
} from 'react-icons/md';
import Header from '../../components/Header/Header';

import { Tb360View, TbView360 } from 'react-icons/tb';
import { GiBeltBuckles, GiReturnArrow, GiSpeedometer } from 'react-icons/gi';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import AOS from 'aos';
import 'aos/dist/aos.css';
import View360 from '../../components/utils/View360';
import { CarComp } from './Invicto';
import { CarEnq2 } from '../../components/Invicto/CarEnq2';
import { products } from '../../constants';
import Seo from '../../components/SEO/seo';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Define the video source URL based on the browser
const videoSource = isSafari
  ? 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/XL6_safari_01.mov'
  : 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/xl6/XL6.webm';

function XL() {
  useEffect(() => {
    let location = window.location.pathname;
    sessionStorage.setItem('car', location);
  }, []);

  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Seo />
      {/* <Helmet>
        <title>
        Maruti XL6 2025 – The New Benchmark in Style! July Monsoon Offers & Exclusive Deals Starting at ₹11.61 Lakh at Saboo Nexa Hyderabad
        </title>
        <meta
          name="title"
          content="Maruti XL6 2025 – The New Benchmark in Style! July Monsoon Offers & Exclusive Deals Starting at ₹11.61 Lakh at Saboo Nexa Hyderabad"
        />
        <meta
          name="description"
          content="Experience premium style and unmatched comfort with the 2025 Maruti Suzuki XL6. Take advantage of exclusive July Monsoon offers, along with special discounts and deals at Nexa showrooms. Drive home your dream premium MPV today with unbeatable offers this season!"
        />
        <meta
          name="keywords"
          content="2025 Maruti Suzuki XL6 July Monsoon Offers, Nexa XL6 Discounts 2025, XL6 Premium MPV Monsoon Deals, XL6 2025 July Discounts, Maruti Suzuki XL6 July Offers, Nexa XL6 July Monsoon Sale, XL6 Best Offers July 2025, XL6 On-Road Price July 2025, XL6 EMI Offers July 2025, Maruti Suzuki XL6 Finance Offers July 2025, Premium MPV Monsoon Deals 2025, Best Nexa XL6 Deals July 2025, XL6 Special Offers July 2025."
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/the-xl6/" />
        <meta
          property="og:title"
          content=" Maruti XL6 2025 – The New Benchmark in Style! July Monsoon Offers & Exclusive Deals Starting at ₹11.61 Lakh at Saboo Nexa Hyderabad"
        />
        <meta
          property="og:description"
          content="Experience premium style and unmatched comfort with the 2025 Maruti Suzuki XL6. Take advantage of exclusive July Monsoon offers, along with special discounts and deals at Nexa showrooms. Drive home your dream premium MPV today with unbeatable offers this season!"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/the-xl6/"
        />
        <meta
          property="twitter:title"
          content=" Maruti XL6 2025 – The New Benchmark in Style! July Monsoon Offers & Exclusive Deals Starting at ₹11.61 Lakh at Saboo Nexa Hyderabad"
        />
        <meta
          property="twitter:description"
          content="Experience premium style and unmatched comfort with the 2025 Maruti Suzuki XL6. Take advantage of exclusive July Monsoon offers, along with special discounts and deals at Nexa showrooms. Drive home your dream premium MPV today with unbeatable offers this season!"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg"
        />
      </Helmet> */}
      <Header />
      <div className='relative bg-black'>
        <div className='top-0 left-0 w-full h-screen '>
          <video
            className='object-cover w-full h-full '
            preload='metadata'
            loop
            autoPlay
            playsInline
            muted
            poster={require('../../assets/cars/Maruti_Xl6_offers_Price_in_Hyderabad.webp')}
            // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/360/2.webp"
          >
            <source
              src={videoSource}
              type={isSafari ? 'video/quicktime' : 'video/mp4'}
            />
          </video>
          <div className='absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white '>
            <div
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='500'
              className='text-2xl lg:text-4xl'
            >
              THE ALL NEW
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='500'
              className='pb-1 font-serif text-5xl uppercase lg:text-8xl'
            >
              XL6
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='1000'
              className='mb-2 text-2xl uppercase lg:text-5xl lg:mb-4'
            >
              TIME TO INDULGE
            </div>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf'
              target='_blank'
              rel='noreferrer'
              aria-label='XL6 Brochure'
            >
              <button
                data-aos='fade-right'
                data-aos-delay='800'
                data-aos-duration='1000'
                className='px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8'
                aria-label='XL6 Brochure'
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <CarEnq2 title='BOOK YOUR XL6' carName='XL6' />
      <Variant />
      <AllNewXL />
      <Vi360 />
      {/* <ImageViewer /> */}
      <Features />
      <Technology />

      <div className='pt-2 text-white bg-black '>
        <div className='w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          COLOURS
        </div>
      </div>
      <Colors />
      <CNGXL6 />
      <Engine />
      {/* <OnRoadPrice title={'XL6'} /> */}
      {/* <Features /> */}
      <Safety />
      <CarComp details={products[8]} />
      <CarEnq2 title='BOOK YOUR XL6' carName='XL6' />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('11,52,300');
  return (
    <div className=" bg-opacity-25 text-white bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className='container py-20 mx-auto bg-black bg-opacity-10'>
        <div className='grid space-y-3 md:grid-cols-3 md:space-y-0 '>
          <div className='mx-auto space-y-3 md:mx-0'>
            <label className='text-gray-300 uppercase' htmlFor='model'>
              Select car Variant
            </label>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-labelledby='Select Car Variant'
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  sm:text-sm text-black '
            >
              <option value='11,52,300'>1.5 Smart Hybrid MT Zeta</option>
              <option value='12,48,800'>1.5 Smart Hybrid MT Alpha</option>
              <option value='12,97,100'>1.5 Smart Hybrid MT Alpha+</option>
              <option value='13,12,500'>1.5 Smart Hybrid MT Alpha+ (DT)</option>
              <option value='12,43,300'>CNG - MT Zeta </option>
              <option value='12,87,300'>1.5 Smart Hybrid AT Zeta </option>
              <option value='13,83,800'>1.5 Smart Hybrid AT Alpha </option>
              <option value='14,32,100'>1.5 Smart Hybrid AT Alpha+ </option>
              <option value='14,47,500'>1.5 Smart Hybrid AT Alpha+ (DT)</option>
            </select>
          </div>
          <div className='text-center '>
            <p className='text-2xl font-semibold'>₹ {price}*</p>
            <p className='text-xl tracking-wide'>Ex-Showroom Price</p>
            <p className='mt-1 text-lg font-medium uppercase'>Hyderabad</p>
          </div>
          <div className='text-center'>
            <p className='mb-6 text-center '>
              You might have pre-approved loan offers
            </p>
            <Link
              to='/maruti-car-finance'
              className='px-4 py-2 tracking-wide uppercase border border-white rounded shadow'
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Colors = () => {
  const [selectedCar, setSelectedCar] = useState(0);
  const data = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp',
      colorName: 'NEXA Blue (Celestial)',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Metallic-Auburn-Red.webp',
      colorName: 'Oppulent Red',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Brave-Khaki.webp',
      colorName: 'Brave Khaki',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Magma-Grey.webp',
      colorName: 'Grandeur Grey',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Metallic-Premium-Silver.webp',
      colorName: 'Splendid Silver',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Pearl-Arctic-White.webp',
      colorName: 'Arctic White',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/xl6/colors/Pearl-midnight-black.webp',
      colorName: 'Pearl Midnight Black',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_OPPULENT_RED.webp',
      colorName: 'Opulent Red With Midnight Black Roof',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_BRAVE_KHAKI.webp',
      colorName: 'Brave Khaki with Midnight Black Roof',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/DUAL_SPLENDID_SILVER.webp',
      colorName: 'Splendid Silver With Midnight Black Roof',
    },
  ];

  return (
    <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/XL6-Banner.webp)] bg-cover bg-no-repeat pt-6 md:pt-20 lg:pt-28 bg-center'>
      <div className='container mx-auto'>
        <div className='grid pb-10 md:grid-cols-2'>
          <div className='py-8 mx-auto my-auto'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/White_XL6.png'
              alt='Saboo-RKS-Nexa-XL6-Title'
            />
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf'
              className='p-3 bg-black text-gray-200 flex items-center max-w-[200px] justify-center mx-auto mt-6 lg:mt-8'
              target='_blank'
              rel='noreferrer'
              aria-label='XL6 Brochure'
            >
              <MdOutlineFileDownload size={20} />
              &nbsp;Download Brochure
            </a>
          </div>
          <div>
            <img
              src={data[selectedCar].img}
              alt={data[selectedCar].colorName}
            />
            <div className='grid grid-cols-5 gap-4 lg:gap-6 md:grid-cols-10'>
              <div
                onClick={() => setSelectedCar(0)}
                className={` ${
                  selectedCar === 0 &&
                  'border-2 border-white shadow-lg shadow-black '
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#183f66] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(1)}
                className={` ${
                  selectedCar === 1 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#a31326] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(2)}
                className={` ${
                  selectedCar === 2 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#4f3f23] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(3)}
                className={` ${
                  selectedCar === 3 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#545454] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(4)}
                className={` ${
                  selectedCar === 4 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#afb3b8] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(5)}
                className={` ${
                  selectedCar === 5 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#eeeff0] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(6)}
                className={` ${
                  selectedCar === 6 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#171717] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(7)}
                className={` ${
                  selectedCar === 7 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-black overflow-hidden mx-auto`}
              >
                <div className='w-full h-3  bg-[#AC0F0F] border-b border-black'></div>
              </div>
              <div
                onClick={() => setSelectedCar(8)}
                className={` ${
                  selectedCar === 8 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-black overflow-hidden mx-auto`}
              >
                <div className='w-full h-3  bg-[#57490A] border-b border-black'></div>
              </div>
              <div
                onClick={() => setSelectedCar(9)}
                className={` ${
                  selectedCar === 9 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-black overflow-hidden mx-auto`}
              >
                {' '}
                <div className='w-full h-3  bg-[#B6BABD] border-b border-black'></div>
              </div>
            </div>
            <div className='mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-md md:text-base '>
              {data[selectedCar].colorName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AllNewXL = () => {
  return (
    <div className='px-2 py-4 overflow-hidden '>
      <div className='container mx-auto text-center '>
        <div className='w-full pt-8 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          THE ALL-NEW XL6
        </div>

        <div
          className={`relative mb-4 text-center text-md lg:text-lg lg:mb-8 `}
        >
          HIGHLIGHTS
        </div>
      </div>

      <div className='mx-auto lg:container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className='mySwiper2 h-28 '
        >
          <SwiperSlide className=''>
            <div className='relative w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_1.webp'
                alt=' Ventilated Seats'
                className='relative '
              />
              <div className='bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl'>
                Ventilated Seats
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='relative w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1080x420-360-view.webp'
                alt='360 View Camera'
              />
              <div className='bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl'>
                360 View Camera
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='relative w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/141x68-paddle-shifter+webp.webp'
                alt='6-Speed AT with Paddle Shifters'
              />
              <div className='bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl'>
                6-Speed AT with Paddle Shifters
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='relative w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-monitoring-system.webp'
                alt='Tyre Pressure Monitoring System'
              />
              <div className='bottom-0 w-full p-2 text-xl bg-white bg-opacity-50 md:absolute lg:py-4 lg:text-3xl'>
                Tyre Pressure Monitoring System
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Vi360 = () => {
  return (
    <>
      <div className='pt-2 text-center '>
        <div className='w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden'>
          360
          <sup>
            <span className='text-lg'>0</span>
          </sup>{' '}
          View
        </div>
        {/* <div>EXPLORE THE ALL-NEW XL6</div> */}
        <div className='pb-4 lg:hidden'>
          Take A 360-Degree Tour Around THE ALL-NEW XL6 And Get To Know It
          Better
        </div>
      </div>
      <div className='relative'>
        <View360
          path={
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/360'
          }
          count={35}
          format={'webp'}
        />
        <div className='absolute flex-col items-center hidden text-white top-10 left-10 md:flex '>
          <TbView360 className='text-2xl lg:text-5xl animate-pulse' />
          <Tb360View className='text-xl lg:text-4xl' />
        </div>
        <div className='absolute flex-col items-center hidden w-full text-white top-10 lg:flex '>
          <div className='w-full pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
            360
            <sup>
              <span className='text-lg'>0</span>
            </sup>{' '}
            View
          </div>
          <div>
            Take A 360-Degree Tour Around THE ALL-NEW XL6 And Get To Know It
            Better
          </div>
        </div>
        <div className='absolute flex flex-col items-center text-white top-1/2 left-10 lg:left-20 '>
          <GiReturnArrow className='text-2xl rotate-180 lg:text-5xl animate-pulse' />
        </div>
        <div className='absolute flex flex-col items-center text-white top-1/2 right-10 lg:right-20 '>
          <GiReturnArrow className='text-2xl lg:text-5xl animate-pulse' />
        </div>
      </div>
    </>
  );
};

const Features = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='bg-black '>
      <div className='container mx-auto text-center text-white '>
        <div className='w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          FEATURES
        </div>
        <div className='text-center text-md lg:text-lg'>
          The All-New XL6 Is Equipped With Features That Make Your World An
          Indulgent Place.
        </div>
        <div className='py-2 sm:py-5'>
          <div className='pb-6 space-y-4 rounded '>
            {/* <Carousel /> */}

            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              speed={1000}
              // spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className='mySwiper2 h-28'
            >
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-images-Cruise-controllll+webp.webp'
                    alt=' Cruise Control'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Cruise Control</div>
                    <div className='font-light lg:pr-40'>
                      Find yourself more focused and comfortably indulged in the
                      longest of journeys with Cruise Control.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-cup-holder.webp'
                    alt='Ventilated Cup Holders'
                    className='relative '
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>
                      Ventilated Cup Holders
                    </div>
                    <div className='font-light lg:pr-40'>
                      Indulge in a cool beverage with the Ventilated Cup Holders
                      to keep at an optimum temperature.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/UV-cut-glass.webp'
                    alt='UV Cut Glass'
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>UV Cut Glass</div>
                    <div className='font-light lg:pr-40'>
                      Stay safe from harmful UV rays with the specialised UV Cut
                      Glass in the All-New XL6.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/JIMNY/EXTERIOR+AND+INTERIOR+IMAGES/1080x420-smartplay.webp'
                    alt='SmartPlay Pro'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> SmartPlay Pro</div>
                    <div className='font-light lg:pr-40'>
                      Indulge yourself in music, navigate easily and do more
                      throughout your journey, comfortably.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/fog-light.webp'
                    alt=' LED FOG Lamps'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> LED FOG Lamps</div>
                    <div className='font-light lg:pr-40'>
                      Lead the road with LED FOG Lamps that help illuminate your
                      way when there's low visibility.
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-rear-AC-in-second-row.webp'
                    alt='   2nd Row AC '
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> 2nd Row AC</div>
                    <div className='font-light lg:pr-40'>
                      Indulge from a place of comfort. The 2nd Row AC is where
                      you relax and let your head wander.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-cabin-foot-lamp.webp'
                    alt='Footlamp Illumination '
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>
                      Footlamp Illumination
                    </div>
                    <div className='font-light lg:pr-40'>
                      The Footlamp Illumination lights up the cabin and sets an
                      indulgent mood.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-puddle-lamp.webp'
                    alt='Door Courtsey Lamp'
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>Door Courtsey Lamp</div>
                    <div className='font-light lg:pr-40'>
                      Thoughtful touches like the Door Courtesy Lamp welcome you
                      to an indulgent cabin.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/roof-end-spoiler.webp'
                    alt='  Backdoor Spoiler '
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Backdoor Spoiler</div>
                    <div className='font-light lg:pr-40'>
                      Set a powerful statement with Backdoor Spoiler.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-Instrument+cluster+webp.webp'
                    alt='  Instrument Cluster'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Instrument Cluster</div>
                    <div className='font-light lg:pr-40'>
                      The multi-information display assists you with a host of
                      information like real-time driving statistics, range, Tyre
                      Pressure Monitoring System, and more.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/ORVM.webp'
                    alt='  Auto ORVMs'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Auto ORVMs</div>
                    <div className='font-light lg:pr-40'>
                      Electrically adjustable and foldable ORVM for an added
                      touch of convenience.
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_3.webp'
                    alt='Captain Seats'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Captain Seats</div>
                    <div className='font-light lg:pr-40'>
                      Indulge in your comfort zone, find yourself cocooned in
                      the remarkably plush Captain Seats.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='hidden text-white mySwiper-3 md:block'
            >
              {' '}
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-images-Cruise-controllll+webp.webp'
                    alt='   Cruise Control'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Cruise Control</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-cup-holder.webp'
                    alt='Ventilated Cup Holders'
                    className='max-h-24'
                  />
                  <div className='py-2 '>Ventilated Cup Holders</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/UV-cut-glass.webp'
                    alt='UV Cut Glass'
                    className='max-h-24'
                  />
                  <div className='py-2 '>UV Cut Glass</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/JIMNY/EXTERIOR+AND+INTERIOR+IMAGES/1080x420-smartplay.webp'
                    alt=' SmartPlay Pro'
                    className='max-h-24'
                  />
                  <div className='py-2 '> SmartPlay Pro</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/fog-light.webp'
                    alt=' LED FOG Lamps'
                    className='max-h-24'
                  />
                  <div className='py-2 '> LED FOG Lamps</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-rear-AC-in-second-row.webp'
                    alt='   2nd Row AC'
                    className='max-h-24'
                  />
                  <div className='py-2 '> 2nd Row AC</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-cabin-foot-lamp.webp'
                    alt='Footlamp Illumination'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Footlamp Illumination</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-puddle-lamp.webp'
                    alt='Door Courtsey Lamp'
                    className='max-h-24'
                  />
                  <div className='py-2 '>Door Courtsey Lamp</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/roof-end-spoiler.webp'
                    alt='  Backdoor Spoiler'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Backdoor Spoiler</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521-Instrument+cluster+webp.webp'
                    alt='  Instrument Cluster'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Instrument Cluster</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/exterior/ORVM.webp'
                    alt='   Auto ORVMs'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Auto ORVMs</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/interior_3.webp'
                    alt='   Captain Seats'
                    className='max-h-24'
                  />
                  <div className='py-2 '> Captain Seats</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const Engine = () => {
  const styles = `
    .engineSwiper .swiper-slide {
     opacity: 0.2;
     
    }

    .engineSwiper .swiper-slide-active  {
      opacity: 1;
    }
  `;
  return (
    <>
      <style>{styles}</style>
      <div className='py-10 '>
        <div className='container flex flex-col items-center py-3 mx-auto '>
          <div className='w-full pt-4 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
            Engine
          </div>
          <div className='pb-6 text-xl text-center lg:text-2xl'>
            Move Ahead In The World With Great Performance
          </div>

          <div className='flex flex-col flex-wrap mx-auto sm:flex-row lg:container'>
            <div className='relative flex justify-center sm:w-1/3'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Engine.webp'
                alt='XL6 Engine'
                className='h-full'
              />
            </div>
            <div className='container relative h-full mx-auto sm:w-2/3 '>
              <div className='px-1 mb-4'>
                It is time to indulge in the refined driving experience of the
                All-New XL6 by NEXA. A premium MPV from NEXA, the XL6 embodies
                an imposing stance complemented by unbridled innovation and
                powerful performance with a Next-Gen 1.5L K-Series Dual Jet Dual
                VVT Engine. This petrol engine in the XL6 comes with Progressive
                Smart Hybrid Technology which improves fuel efficiency while
                also enhancing drivability.
              </div>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                centeredSlides={true}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  1280: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                }}
                modules={[FreeMode, Navigation, Autoplay]}
                className='hidden h-full sm:block engineSwiper'
              >
                <SwiperSlide className='swiper-slide'>
                  <div className='w-full px-4 cursor-pointer  h-[260px] '>
                    <div className='relative w-full px-10 py-4 text-left'>
                      <div className='pb-2 font-medium'>
                        Powerful Performance That Inspires
                      </div>
                      <div className='text-sm'>
                        The New XL6 by NEXA delivers a refined driving
                        experience with the Next-Gen 1.5L K-Series Engine. This
                        1462 cc Engine in XL6 makes a maximum power of 75.8 kW @
                        6000 rpm and peak torque of 136.8 Nm @ 4400 rpm, all the
                        while delivering indulgent performance.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='w-full px-4 cursor-pointer   h-[260px]'>
                    <div className='relative w-full px-10 py-4 text-left'>
                      <div className='pb-2 font-medium'>
                        Progressive Smart Hybrid Technology
                      </div>
                      <div className='text-sm'>
                        The All-New NEXA XL6 takes innovation to another level
                        with its Progressive Smart Hybrid Technology. It comes
                        with features like Idle Start Stop to reduce fuel
                        consumption and Torque Assist During Acceleration,
                        thereby improving the overall drivability.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='w-full px-4 cursor-pointer   h-[260px]'>
                    <div className='relative w-full px-10 py-4 text-left'>
                      <div className='pb-2 font-medium'>Impressive Mileage</div>
                      <div className='text-sm'>
                        The All-New NEXA XL6 is available with a choice of a
                        5-speed manual and an All-New Advanced 6-Speed Automatic
                        Transmission with Paddle Shifters. Both of these
                        transmissions work seamlessly with The Next Gen 1.5L
                        K-Series Engine in NEXA XL6 by Maruti Suzuki to provide
                        great drivability along with strong mileage figures of
                        20.97* Km/L(MT) and 20.27* Km/L(AT) so that indulgent
                        driving never stops!.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slide'>
                  <div className='w-full px-4 cursor-pointer   h-[260px]'>
                    <div className='relative w-full px-10 py-4 text-left'>
                      <div className='pb-2 font-medium'>
                        Driving Convenience That Indulges
                      </div>
                      <div className='text-sm'>
                        The NEXA XL6 indulges you effortlessly with the new
                        6-Speed Automatic Transmission trim that comes with
                        Steering-Mounted Paddle Shifters for a more engaging
                        driving experience. Indulgent in its stance, the All-New
                        XL6 is for those who seek new experiences. It’s Time to
                        Indulge in an engaging and refined driving experience.
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Technology = () => {
  return (
    <div className='px-2 py-4 overflow-hidden text-black bg-white'>
      <div className='container mx-auto text-center '>
        <div className='w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          TECHNOLOGY
        </div>
        <div className='mb-6 text-center text-md lg:text-lg'>
          Powered By Technologically Advanced Features, The All-New XL6 Is As
          Indulgent As It Gets.
        </div>
      </div>

      <div className='mx-auto lg:container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          loop={true}
          speed={1000}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className='mySwiper2 md:h-28 '
        >
          <SwiperSlide className=''>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1080x420-smart-hybrid.webp'
                alt='PROGRESSIVE NEXT GENERATION SMART HYBRID TECHNOLOGY'
                className='relative '
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  PROGRESSIVE NEXT GENERATION SMART HYBRID TECHNOLOGY
                </div>
                <div className='font-light lg:pr-40'>
                  At the heart of the All-New XL6 lies the Next Generation
                  K-Series 1.5L Engine with the Progressive Smart Hybrid
                  Technology. Its Integrated Starter Generator, paired with a
                  Lithium-ion and a Lead Acid Battery, helps in regenerating
                  braking energy and provides torque assist to the engine during
                  acceleration. So, go out and experience an enhanced drive that
                  is smoother and more indulgent than ever.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1080x420-AGS.webp'
                alt='6-SPEED AT WITH PADDLE SHIFTERS'
                className='relative '
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  6-SPEED AT WITH PADDLE SHIFTERS
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Indulge your senses as you feel the surge of power with the
                  new 6-Speed Automatic Transmission with Paddle Shifters. This
                  state-of-the-art transmission provides powerful acceleration
                  with impressively quick shift times via the gearshift paddles
                  on the steering wheel. It’s a drive that leaves you
                  exhilarated and wanting more.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/JIMNY/EXTERIOR+AND+INTERIOR+IMAGES/1080x420-smartplay.webp'
                alt='SMARTPLAY PRO'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'> SMARTPLAY PRO</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Indulge yourself in music, navigate easily and do more
                  comfortably through your journeys with the new SmartPlay Pro.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1080x420-360-view.webp'
                alt='360 VIEW CAMERA'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'> 360 VIEW CAMERA</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Experience the ease of driving and parking in tight spaces
                  with the intelligent 360 View Camera.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1080x420-suzuki-connect.webp'
                alt='SUZUKI CONNECT'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>SUZUKI CONNECT</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  The All-New XL6 takes your connected car experience to a whole
                  new level as it comes with in-built Suzuki Connect – Advanced
                  Telematics Solution. So, whether you are driving it or away,
                  you’ll always stay connected to your car. Remotely switch on
                  and control the Air-conditioning system, lock and unlock
                  doors, get real-time status of vehicle movement, security and
                  safety alerts and keep up with your vehicle’s health. The Next
                  Gen Suzuki Connect is also compatible with Alexa Skill and
                  your Smartwatch, keeping you in command of your car. Now
                  that’s how you indulge in comfort.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const CNGXL6 = () => {
  return (
    <div className='relative pt-8 overflow-hidden '>
      <div className='w-full pb-3 text-3xl text-center uppercase lg:pt-6 sm:text-4xl md:text-5xl '>
        S-CNG
      </div>
      <div className='container pt-2 pb-4 mx-auto text-xl text-center lg:text-2xl lg:pb-8'>
        The All-New XL6 Is Equipped With Features That Make Your World An
        Indulgent Place.
      </div>

      <div className='relative w-full h-full mx-auto overflow-hidden '>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-mobile.webp'
          alt='XL6 CNG Mobile Banner '
          className='w-full sm:hidden'
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-desktop.webp'
          alt='XL6 CNG Desktop Banner'
          className='hidden w-full sm:block -z-10'
        />
        <Link to='/xl6-cng'>
          <div className='px-10 md:px-16 xl:px-20 py-3 w-min hover:bg-gradient-to-br bg-black text-white rounded- absolute bottom-[15%] left-[12.5%] from-[#36a649] to-[#82b040] hover:border hover:border-gray-300'>
            EXPLORE
          </div>
        </Link>
      </div>
    </div>
  );
};

function Safety() {
  const [index, setIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className='container mx-auto mt-6 text-center '>
        <div className='pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 '>
          SAFETY
        </div>
        <span className='text-md lg:text-lg'>
          Indulges You with care when It comes to your Safety
        </span>
      </div>
      <div className='py-4 text-2xl font-medium text-center lg:text-3xl '></div>
      <div className='container relative flex flex-col items-center justify-center mx-auto '>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/XL6-in-Glance_897X_573.webp'
          alt='XL6 Safety Features'
          className='scale-[0.8] m-28'
        />

        <div className='absolute left-[62%] top-16  lg:flex group hidden  '>
          <div className='flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105'>
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/safety-belt.svg'
              alt=' Seat Belt Pre-Tensioners with force limiters'
              className='scale-[0.6]'
            />
          </div>
          <div className='hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block'>
            <div className='pb-1 font-medium '>
              Seat Belt Pre-Tensioners with force limiters
            </div>
            <div className='font-light '>
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          </div>
        </div>
        <div className='absolute top-[4%] right-[62%] lg:flex group hidden  '>
          <div className='hidden mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block'>
            <div className='pb-1 font-medium '>SUZUKI-TECT BODY</div>
            <div className='font-light '>
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          </div>
          <div className='flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full cursor-pointer hover:scale-105'>
            {/* <GiBeltBuckles className="text-4xl group-hover:text-white " /> */}
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/repair.svg'
              alt=' Seat Belt Pre-Tensioners with force limiters'
              className='scale-[0.8]'
            />
          </div>
        </div>
        <div className='absolute left-[19%] xl:left-[20%] top-[60%]  lg:flex lg:flex-col md:items-start group hidden  '>
          <div className='flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black'>
            <GiSpeedometer className='text-4xl group-hover:text-white' />
          </div>

          <div className='hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block'>
            <div className='pb-1 font-medium '>ABS with EBD</div>

            <div className='hidden text-sm font-light group-hover:block'>
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          </div>
        </div>
        <div className='absolute left-[47%] bottom-24  lg:flex group hidden items-end  '>
          <div className='flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 '>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/airbag.svg'
              className='scale-[0.6]'
              alt=' 6 Air Bags to take the impact before it reaches you.'
            />
          </div>
          <div className='hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block'>
            <div className='pb-1 font-medium '>6 Air Bags</div>

            <div className='hidden font-light group-hover:block'>
              6 Air Bags to take the impact before it reaches you.
            </div>
          </div>
        </div>
        <div className='absolute left-[10%]  bottom-[62.5%]    lg:flex-col md:items-start group hidden lg:flex '>
          <div className='hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-md group-hover:block'>
            <div className='pb-1 font-medium '>ISOFIX child fix anchorages</div>

            <div className='hidden font-light group-hover:block'>
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          </div>
          <div className='flex items-center justify-center w-20 h-20 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black '>
            <MdAirlineSeatReclineExtra className='text-4xl group-hover:text-white' />
          </div>
        </div>
        <div className='absolute left-[78%]  bottom-[62.5%] md:items-start group hidden lg:flex lg:flex-col '>
          <div className='hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block '>
            <div className='pb-1 font-medium '>
              FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT COMPLIANCE,
              SIDE IMPACT COMPLIANCE
            </div>

            <div className='font-light '>
              Successfully tested and in compliance with international safety
              norms
            </div>
          </div>
          <div className='flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 group-hover:bg-black '>
            <GiBeltBuckles className='text-4xl group-hover:text-white' />
          </div>
        </div>

        <div className='absolute left-[77%]  top-[40%]  md:items-start group hidden lg:block '>
          <div className='flex items-center justify-center w-20 h-20 mb-2 duration-500 border border-black rounded-full hover:scale-105 '>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/slideshow/road.svg'
              className='scale-[0.6]'
              alt='Ensuring safety, not only for the occupants, but pedestrians as
              well'
            />
          </div>
          <div className='hidden py-3 mx-3 my-auto w-60 group-hover:backdrop-blur-sm group-hover:block '>
            <div className='pb-1 font-medium '>
              PEDESTRIAN PROTECTION COMPLIANCE
            </div>
            <div className='font-light '>
              Ensuring safety, not only for the occupants, but pedestrians as
              well
            </div>
          </div>
        </div>

        <div className='h-16 absolute border top-36 right-[34%] border-black hidden lg:block'></div>
        <div className='w-48 absolute border top-52 right-[34%]  border-black hidden lg:block'></div>

        <div className='h-48 absolute border bottom-44 right-[50%] border-black hidden lg:block'></div>
        <div className='w-24 xl:w-32 absolute border  left-[22%] hidden lg:block  border-black'></div>
        <div className='h-16 absolute border top-1/2 left-[22%] border-black hidden lg:block'></div>
        <div className='h-16 absolute border top-[15%] left-[35%] border-black hidden lg:block'></div>
        <div className='w-24 lg:w-[12%]  just  absolute border top-[16rem] left-[18%] hidden lg:block  border-black'></div>
        <div className='w-10 lg:w-[10%]  just  absolute border top-[16rem] right-[23%] hidden lg:block  border-black'></div>
        <div className='w-10 lg:w-[10%]  just  absolute border top-[22.5rem] right-[23%] hidden lg:block  border-black'></div>

        <button
          className={`absolute ${
            index === 0 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[45%] `}
          onClick={() => setIndex(0)}
          aria-label='Seat Belt Pre-Tensioners with force limiters'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 1 ? 'bg-black text-white' : 'bg-white animate-pulse'
          }  h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[38%] left-[44%] `}
          onClick={() => setIndex(1)}
          aria-label=' 6 Air Bags to take the impact before it reaches you.'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 2 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%]  `}
          onClick={() => setIndex(2)}
          aria-label=' ABS with EBD'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 3 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[35%] left-[30%] `}
          onClick={() => setIndex(3)}
          aria-label='ISOFIX child fix anchorages'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 4 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[25%] left-[30%] `}
          onClick={() => setIndex(4)}
          aria-label='SUZUKI-TECT BODY'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 5 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center top-[40%] right-[35%] `}
          onClick={() => setIndex(5)}
          aria-label='FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 6 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[48%] right-[20%] `}
          onClick={() => setIndex(6)}
          aria-label='PEDESTRIAN PROTECTION COMPLIANCE'
        >
          +
        </button>
        <div className='absolute lg:hidden bottom-[20%] px-2 backdrop-blur-sm'>
          {index === 0 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>
                Seat Belt Pre-Tensioners with force limiters
              </span>
              <br />
              Pre-tensioners restrain the passengers and Force Limiters prevent
              seatbelt-inflicted injury.
            </div>
          ) : index === 1 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>6 Air Bags</span>
              <br />6 Air Bags to take the impact before it reaches you.
            </div>
          ) : index === 2 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>
                ABS with EBD
              </span>
              <br />
              Anti-lock Braking System prevents the locking up of the wheels
              when the brakes are applied under heavy loads while EBD ensures an
              efficient and effective braking.
            </div>
          ) : index === 3 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>
                ISOFIX child fix anchorages
              </span>
              <br />
              Standardized international child seat fitting system, for that
              perfect drive with your little ones.
            </div>
          ) : index === 4 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>
                SUZUKI-TECT BODY
              </span>
              <br />
              Suzuki’s Total Effective Control Technology (TECT) concept results
              in effective absorption and dispersion of crash energy. The
              effective use of high-tensile steel for major parts makes the body
              light, strong and safe
            </div>
          ) : index === 5 ? (
            <div>
              <span className='font-medium text-md lg:text-lg'>
                FULL FRONTAL IMPACT COMPLIANCE, FRONTAL OFFSET IMPACT
                COMPLIANCE, SIDE IMPACT COMPLIANCE
              </span>
              <br />
              Successfully tested and in compliance with international safety
              norms
            </div>
          ) : (
            index === 6 && (
              <div>
                <span className='font-medium text-md lg:text-lg'>
                  PEDESTRIAN PROTECTION COMPLIANCE
                </span>
                <br />
                Ensuring safety, not only for the occupants, but pedestrians as
                well
              </div>
            )
          )}
        </div>
      </div>
      <div className='container mx-auto text-center '>
        <div className='text-center text-md lg:text-lg'>
          A Safer World For You And Your Loved Ones
        </div>
        <div className='py-2 sm:py-5'>
          <div className='pb-6 space-y-4 rounded '>
            {/* <Carousel /> */}

            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              speed={1000}
              // spaceBetween={2}
              slidesPerView={1}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              className='mySwiper2 h-28'
            >
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_AIRBAG.webp'
                    alt='Quad Airbags (Dual Front + Dual Front Seat Side)'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>
                      Quad Airbags (Dual Front + Dual Front Seat Side)
                    </div>
                    <div className='font-light lg:pr-40'>
                      Providing cutting edge safety and protection to the
                      occupants in the event of a collision.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/Electronic_Stability.webp'
                    alt='   Electronic Stability Program'
                    className='relative '
                  />
                  <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>
                      Electronic Stability Program
                    </div>
                    <div className='font-light lg:pr-40'>
                      As a standard fitment, all variants of the All-New XL6
                      comes equipped with the Electronic Stability Program which
                      helps in improved vehicle control and stability.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_CHILD-SEAT.webp'
                    alt=' ISOFIX Child Seat Anchorages'
                  />
                  <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'>
                      ISOFIX Child Seat Anchorages
                    </div>
                    <div className='font-light lg:pr-40'>
                      The All-New XL6 comes with ISOFIX Child Seat Anchorages as
                      standard, so that children who require a car seat are
                      strapped in securely.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_ABS.webp'
                    alt=' ABS with EBD'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> ABS with EBD</div>
                    <div className='font-light lg:pr-40'>
                      The Anti-Lock Braking (ABS) system on the XL6 prevents the
                      wheels from locking when the brakes are applied with
                      force, and the Electronic Brake Distribution (EBD) works
                      in concert with the ABS to ensure efficient and effective
                      braking.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='relative'>
                <div className='w-full lg:px-20'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_Heartect.webp'
                    alt=' Heartect Platform'
                    className=''
                  />
                  <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
                    <div className='pb-2 font-medium'> Heartect Platform</div>
                    <div className='font-light lg:pr-40'>
                      An innovative new-generation chassis platform that uses
                      Ultra and Advanced High Tensile Steels, to help the
                      vehicle resist deformation with precision.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              // loop={true}
              spaceBetween={10}
              slidesPerView={5}
              // freeMode={true}
              // watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className='hidden mySwiper-3 md:block'
            >
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_AIRBAG.webp'
                    alt='Quad Airbags (Dual Front + Dual Front Seat Side)'
                    className='max-h-28'
                  />
                  <div className='py-2 text-sm'>
                    Quad Airbags (Dual Front + Dual Front Seat Side)
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/Electronic_Stability.webp'
                    alt='   Electronic Stability Program'
                    className='max-h-28'
                  />
                  <div className='py-2 text-sm'>
                    Electronic Stability Program
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_CHILD-SEAT.webp'
                    alt=' ISOFIX Child Seat Anchorages'
                    className='max-h-28'
                  />
                  <div className='py-2 text-sm'>
                    ISOFIX Child Seat Anchorages
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_ABS.webp'
                    alt='  ABS with EBD'
                    className='max-h-28'
                  />
                  <div className='py-2 text-sm'> ABS with EBD</div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='cursor-pointer'>
                <div>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/1170x521_Safety_Heartect.webp'
                    alt='Heartect Platform'
                    className='max-h-28'
                  />
                  <div className='py-2 text-sm'>Heartect Platform</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default XL;
