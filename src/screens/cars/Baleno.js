import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFileDownload } from 'react-icons/md';
import Header from '../../components/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CarComp } from './Invicto';
import { CarEnq2 } from '../../components/Invicto/CarEnq2';
import { products } from '../../constants';
import View360 from '../../components/utils/View360';
import { Tb360View, TbView360 } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Seo from '../../components/SEO/seo';
import { vechicle } from '../../constants/seo';
import { BreadcrumbSchema, VehicleSchema } from '../../components/SEO/schema';

import NexaBlueImg from '../../assets/baleno/colors/Nexa_Blue.png';
import ArcticWhiteImg from '../../assets/baleno/colors/Arctic_White.png';
import SplendidSilverImg from '../../assets/baleno/colors/Splendid_Silver.png';
import GrandeurGreyImg from '../../assets/baleno/colors/Grandeur_Grey.png';
import OpulentRedImg from '../../assets/baleno/colors/Opulent_Red.png';
import EnigmaticTealGreenImg from '../../assets/baleno/colors/Enigmatic_Teal_Green.png';
import BluishBlackImg from '../../assets/baleno/colors/Bluish_Black.png';

const baleno360ImagesContext = require.context(
  '../../assets/baleno/360',
  false,
  /\.png$/
);
const baleno360Images = Array.from({ length: 55 }, (_, i) =>
  baleno360ImagesContext(`./Baleno- (${i + 1}).png`)
);

function Baleno() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [tabsColors, setTabsColors] = useState(1);
  const [exterior, setExterior] = useState(false);
  return (
    <>
      <Seo {...vechicle.baleno} />
      <BreadcrumbSchema
        items={[{ name: 'Home', path: '/' }, { name: 'Baleno' }]}
      />
      <VehicleSchema
        name='Maruti Suzuki Baleno'
        description={vechicle.baleno.description}
        image={vechicle.baleno.image}
        url={vechicle.baleno.url}
        priceINR='598900'
        fuelType='Petrol/CNG'
        seatingCapacity='5'
        vehicleTransmission='5MT/5AMT'
        vehicleEngine='Adv. K Series Dual Jet / Dual VVT Engine'
      />
      <Header />
      <div className='relative bg-black'>
        <div className='top-0 left-0 w-full h-screen '>
          <img
            src={require('../../assets/cars/banner_final.jpeg')}
            alt='Maruti Suzuki Baleno'
            className='object-cover w-full h-full '
          />
          <div className='absolute bottom-40 lg:bottom-24 left-[3%] lg:left-[5%] text-white '>
            <div
              data-aos='fade-right'
              data-aos-delay='200'
              data-aos-duration='500'
              className='text-2xl lg:text-4xl'
            >
              THE STUNNING NEW
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='500'
              className='pb-1 font-serif text-5xl uppercase lg:text-8xl'
            >
              BALENO
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='1000'
              className='mb-2 text-2xl uppercase lg:text-5xl lg:mb-4'
            >
              DARE TO GO GLAM
            </div>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf'
              target='_blank'
              aria-label='Baleno brochure'
              rel='noreferrer'
            >
              <button
                data-aos='fade-right'
                data-aos-delay='800'
                data-aos-duration='1000'
                className='px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8'
                aria-label='Baleno brochure'
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <CarEnq2 title='BOOK YOUR BALENO' carName='BALENO' />
      <Variant />
      {/* <BalenoFeature /> */}
      <Technology />
      <div className='pt-2 text-white bg-black '>
        <div className='w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          COLOURS
        </div>
      </div>
      <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/Baleno_Banner_Blue.webp)] bg-cover bg-no-repeat bg-center pt-20 overflow-hidden '>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:py-0'>
            <div className='px-8 mx-auto my-auto space-y-5 sm:px-0'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/logobaleno-white-new.webp'
                className='mx-auto'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf'
                className='p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3'
                target='_blank'
                rel='noreferrer'
                aria-label='Baleno brochure'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className='col-span-2'>
              <div className='mx-auto'>
                {/* Nexa Blue */}
                <img
                  src={NexaBlueImg}
                  alt='Saboo-Nexa-Baleno-Colours-Nexa-Blue'
                  className={
                    tabsColors === 1
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Arctic White */}
                <img
                  src={ArcticWhiteImg}
                  alt='Saboo-Nexa-Baleno-Colours-Arctic-White'
                  className={
                    tabsColors === 2
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Splendid Silver */}
                <img
                  src={SplendidSilverImg}
                  alt='Saboo-Nexa-Baleno-Colours-Splendid-Silver'
                  className={
                    tabsColors === 3
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Grandeur Grey */}
                <img
                  src={GrandeurGreyImg}
                  alt='Saboo-Nexa-Baleno-Colours-Grandeur-Grey'
                  className={
                    tabsColors === 4
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Opulent Red */}
                <img
                  src={OpulentRedImg}
                  alt='Saboo-Nexa-Baleno-Colours-Opulent-Red'
                  className={
                    tabsColors === 5
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Enigmatic Teal Green */}
                <img
                  src={EnigmaticTealGreenImg}
                  alt='Saboo-Nexa-Baleno-Colours-Enigmatic-Teal-Green'
                  className={
                    tabsColors === 6
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />

                {/* Bluish Black */}
                <img
                  src={BluishBlackImg}
                  alt='Saboo-Nexa-Baleno-Colours-Bluish-Black'
                  className={
                    tabsColors === 7
                      ? 'h-[260px] sm:h-[320px] lg:h-[480px] mx-auto lg:mt-32 lg:ml-[14%]'
                      : 'hidden'
                  }
                />
              </div>
              <div className='flex items-center justify-center mb-3'>
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#1f3a63] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#1f3a63]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? 'w-6 h-6 bg-[#1f3a63] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#f2f1ec] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#f2f1ec]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? 'w-6 h-6 bg-[#f2f1ec] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#afb3b8] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                  </div>
                  <p
                    className={
                      tabsColors !== 3 ? 'w-6 h-6 bg-[#afb3b8] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#4a4d52] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#4a4d52]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4 ? 'w-6 h-6 bg-[#4a4d52] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#a31326] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#a31326]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5 ? 'w-6 h-6 bg-[#a31326] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(6)}>
                  <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#1c4a44] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#1c4a44]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6 ? 'w-6 h-6 bg-[#1c4a44] mr-2' : 'hidden'
                    }
                  ></p>
                </div>
                <div onClick={() => setTabsColors(7)}>
                  <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#10141c] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='border-t-8 border-[#10141c] arrow-dropdown-selected-car'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 7 ? 'w-6 h-6 bg-[#10141c] mr-2' : 'hidden'
                    }
                  ></p>
                </div>
              </div>
              <p
                className={
                  tabsColors === 1
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Nexa Blue
              </p>
              <p
                className={
                  tabsColors === 2
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Arctic White
              </p>
              <p
                className={
                  tabsColors === 3
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Splendid Silver
              </p>
              <p
                className={
                  tabsColors === 4
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Grandeur Grey
              </p>
              <p
                className={
                  tabsColors === 5
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Opulent Red
              </p>
              <p
                className={
                  tabsColors === 6
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Enigmatic Teal Green
              </p>
              <p
                className={
                  tabsColors === 7
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Bluish Black
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Variant /> */}
      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={'Baleno'} /> */}
      {/* <Features /> */}

      {/* Int & Ext Sliders */}
      <div className='pb-10 bg-black lg:pb-20 '>
        <div className='mx-auto xl:container'>
          <div className='pb-4 text-3xl text-center text-white uppercase sm:text-4xl md:text-5xl lg:pt-8 '>
            Discover Opulence
          </div>
          <div className='flex justify-center gap-5 pb-2 text-xl '>
            <div className=''>
              <button
                className={`px-4 py-1  border tracking-widest rounded-lg duration-500  ${!exterior
                  ? 'border-white bg-white text-black '
                  : 'border-gray-800 text-gray-500 hover:text-white hover:border-white'
                  }`}
                onClick={() => setExterior(false)}
                aria-label='Exterior'
              >
                Exterior
              </button>
            </div>
            <div className=''>
              <button
                className={`px-4 py-1  border tracking-widest rounded-lg duration-500 ${exterior
                  ? 'border-white bg-white text-black'
                  : 'border-gray-800 text-gray-500 hover:text-white hover:border-white'
                  } `}
                onClick={() => setExterior(true)}
                aria-label='Interior'
              >
                Interior
              </button>
            </div>
          </div>
          <div className='relative '>
            <div className={`${exterior ? 'opacity-0' : 'opacity-100'}`}>
              <BalenoExteriorSlider />
            </div>
            <div
              className={`absolute inset-0 ${exterior ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <BalenoInteriorSlider />
            </div>
          </div>
        </div>
      </div>

      <Bi360 />
      <BalenoSafety />
      {/* <div className='pt-2 '>
        <div className='w-full pt-12 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          Design
        </div>
      </div> */}
      {/* <ImageOptions /> */}
      <CarComp details={products[6]} />
      <CarEnq2 title='BOOK YOUR BALENO' carName='Baleno' />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('6,10,000');
  return (
    <div className=" bg-opacity-25  bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className='container py-20 mx-auto bg-black bg-opacity-10 '>
        <div className='grid space-y-3 md:grid-cols-3 md:space-y-0'>
          <div className='mx-auto space-y-3 md:mx-0'>
            <label className='text-gray-300 uppercase' htmlFor='model'>
              Select car Variant
            </label>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm'
              aria-labelledby='model'
            >
              <option value='6,09,900'>Sigma MT </option>
              <option value='6,99,900'>Delta MT</option>
              <option value='7,49,900'>Zeta MT</option>
              <option value='7,92,400'>Delta CNG </option>
              <option value='7,49,900'>Delta AGS </option>
              <option value='8,92,400'>Zeta CNG MT </option>
              <option value='8,49,900'>Zeta AGS</option>
              <option value='9,09,900'>Alpha MT </option>
              <option value='9,49,900'>Alpha (O) MT</option>
              <option value='9,99,900'>Alpha (O) AGS</option>
              <option value='9,59,900'>Alpha AGS</option>

            </select>
          </div>
          <div className='text-center text-gray-200'>
            <p className='text-2xl font-bold'>₹ {price}*</p>
            <p className='text-xl tracking-wide'>Ex-Showroom Price</p>
            <p className='text-xl tracking-wide'>HYDERABAD</p>
          </div>
          <div className='text-center'>
            <p className='mb-6 text-center text-gray-100'>
              You might have pre-approved loan offers
            </p>
            <Link
              to='/maruti-car-finance'
              className='px-4 py-2 tracking-wide uppercase bg-white rounded shadow'
            >
              Check for loan offers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BalenoExteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  `;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const images = [
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/exterior/antena.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/exterior/Chrome_fender_garnish.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/exterior/fog_lamp.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/exterior/next_wavegrill.jpg',

  ];

  return (
    <>
      <style>{styles}</style>
      <div className='select-none '>
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={setSwiper}
          modules={[EffectCoverflow, Autoplay]}
          className='rounded-3xl'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className='overflow-hidden rounded-2xl'>
              <div className='relative'>
                <img
                  src={img}
                  alt='Saboo-Nexa-Baleno-Exterior'
                  className='overflow-hidden rounded-2xl'
                  onClick={() => handleClickSlide(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const BalenoInteriorSlider = () => {
  const [swiper, setSwiper] = useState(null);

  const styles = `
  .swiper {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  `;
  const handleClickSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const images = [
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/Interior/ac_vents.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/Interior/auto_climate)control.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/Interior/seat_upholestry.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/Interior/ventilated_seats.jpg',
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/Interior/wireless_charging2.jpg',
  ];

  return (
    <>
      <style>{styles}</style>
      <div className='select-none'>
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={-30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          onSwiper={setSwiper}
          modules={[EffectCoverflow, Autoplay]}
          className='rounded-3xl'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className='overflow-hidden rounded-2xl'>
              <div className='relative'>
                <img
                  src={img}
                  alt='Saboo-Nexa-Baleno-Interior'
                  className='overflow-hidden rounded-2xl'
                  onClick={() => handleClickSlide(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

// const ImageOptions = () => {
//   return (
//     <div className='container px-2 mx-auto md:px-0'>
//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-exterior-liquid-flow.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Lamp'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//         <div className='py-2 mx-auto my-auto space-y-3 md:p-8'>
//           <p className='text-3xl font-medium '>Enhanced Liquid Flow Design</p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             The New Age Baleno is a sight to behold. Carrying forward the Liquid
//             Flow Aesthetic, it exudes boldness from every curve. Its dynamic
//             stance with strong shoulders and sharp character lines flow with
//             harmony, from front to back. So, no matter if you see it coming, or
//             passing by, you won’t be able to look away.
//           </p>
//         </div>
//       </div>

//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='p-2 mx-auto my-auto space-y-3'>
//           <p className='text-3xl font-medium'>NEXWave Grille</p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             The signature NEXWave Grille is the first thing you see when you
//             look upon the New Age Baleno. And it gets harder to look anywhere
//             else. This artistically crafted grille with accentuated chrome
//             strips gives Baleno a wider look, making it even more intimidating
//             than ever before.
//           </p>
//         </div>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-grille.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Gril'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//       </div>

//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-alloy-wheels.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Alloy-Wheel'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//         <div className='p-2 mx-auto my-auto space-y-3'>
//           <p className='text-3xl font-medium'>
//             16-Inch Precision Cut Alloy Wheels
//           </p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             They are bold. They are sharp. And they drive the style quotient of
//             the New Age Baleno to a whole new level. Even when parked. These new
//             16-Inch Precision Cut Alloy Wheels are crafted to perfection and are
//             made to stand out.
//           </p>
//         </div>
//       </div>

//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='p-2 mx-auto my-auto space-y-3'>
//           <p className='text-3xl font-medium'>Interior Design</p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             The New Age Baleno is more than just good looks. It is comfort
//             reimagined. So, immerse yourself in the state-of-the-art cabin
//             crafted with sleek chrome accentuation with smooth and natural flow
//             lines. Bask in the glory of the Dual-tone Interiors with Piano Black
//             inserts. And relax in the lap of the comfortable seats with deep
//             curves for an indulgent experience like never before.
//           </p>
//         </div>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-interior.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//       </div>
//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-LED-DRLs.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//         <div className='p-2 mx-auto my-auto space-y-3 md:p-8'>
//           <p className='text-3xl font-medium'>
//             NEXTre' LED Rear Combination Lights
//           </p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             The New Age Baleno never ceases to bowl you over with its looks.
//             Even when viewed from behind. The sharp and stylish NEXTre’ LED Rear
//             Combination Lights flow and merge effortlessly with the Liquid Flow
//             Aesthetics of the Baleno, adding more flair to its bold looks.
//           </p>
//         </div>
//       </div>
//       <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
//         <div className='p-2 mx-auto my-auto space-y-3'>
//           <p className='text-3xl font-medium'>
//             LED Projector Headlamps With NEXTre’ LED DRLs
//           </p>
//           <p className='w-20 h-1 bg-black rounded-full '></p>
//           <p>
//             The night is when the New Age Baleno truly comes alive. Driving down
//             the beautiful tarmac, the Projector Headlamps with signature NEXTre’
//             LED DRLs make a bold impression that is hard to forget. These
//             crystal-clear Headlamps and sharp DRLs can brighten up any road. Day
//             or night. Moreover, they can detect the lighting conditions around
//             you and automatically turn on or off.
//           </p>
//         </div>
//         <div className='overflow-hidden cursor-pointer'>
//           <img
//             src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-Rear-lamps.webp'
//             alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
//             className='w-full duration-500 hover:scale-105'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export const BalenoFeature = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-dual-tone-interior.webp?la=en&hash=BFC111D7FBAE24DA77E780E7B6778A30',
      title: 'Dual-Tone Interiors',
      body: 'The Dual-Tone Interiors in the New Age Baleno provide a premium look to its plush and spacious cabin.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-cruise-control.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp',
      title: 'Cruise Control',
      body: 'The Cruise Control system makes all your long journeys comfortable by letting you pick a cruising speed over 40km/hr.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-rear-usb-ctype.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp',
      title: 'Rear USB Type A and Type C Charger',
      body: 'Never run out of charge for your gadgets with the best-in-segment Rear USB Type A and Type C fast charging ports.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-rear-ac-vent.webp?la=en&hash=B832EF083C578B214C42ED80BB399972',
      title: 'Rear AC Vents',
      body: 'The New Age Baleno comes with Rear AC Vents for your convenience. Now, stay comfortable even on the hottest of days.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/feature-1170x521-entre-armrest.webp?la=en&hash=775FDBCD27233D4EED75BAB789E7143A',
      title: 'Center Armrest with Storage',
      body: 'Experience a world of comfort with the thoughtfully designed sliding center armrest.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/tilt-telescopic.webp?la=en&hash=6BB36BD1DA1CBEE291C39B75776FE7BD',
      title: 'Tilt and Telescopic Steering',
      body: 'The New Age Baleno comes with a Tilt and Telescopic steering that lets you adjust the steering as per your convenience for a comfortable driving experience. What’s more, it also gets enhanced steering returnability and enhanced high-speed straight-line stability.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/anti-pinch.webp?la=en&hash=6F8CC8CB9C1A8C667639ED18A221268E',
      title: 'Anti-Pinch Window',
      body: 'For your safety, the New Age Baleno comes with a Driver-Side Anti-Pinch Power Window that retracts, whenever it detects an obstacle.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/boot-space.webp?la=en&hash=C39CA3656B2251AE92D59B91732C389D',
      title: 'Boot Space with 60:40 Rear Split',
      body: '    Make room for excess luggage with rear seat split.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/uv-cut-glasses_new.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp',
      title: 'UV Cut Glass',
      body: 'Stay protected from the harmful UV radiations as the New Age Baleno comes with UV Cut Glass windows.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/bottle-holder.webp?la=en&hash=E7EE655F784B82EAF5BE42E655B1D14F',
      title: 'Bottle Holder',
      body: 'Enjoy extra space to store water bottles and stay hydrated during long journeys.',
    },
  ];
  return (
    <div className='bg-black '>
      <div className='container mx-auto text-center text-white '>
        <div className='w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          FEATURES
        </div>
        <div className='text-center text-md lg:text-lg'>
          Convenience Goes Bold
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className='relative'>
                  <div className='w-full lg:px-20'>
                    <img src={x.img} alt={x.title} className='' />
                    <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                      <div className='pb-2 font-medium'>{x.title}</div>
                      <div className='font-light lg:pr-40'>{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className='cursor-pointer'>
                  <div>
                    <img src={x.img} alt={x.title} className='max-h-24' />
                    <div className='py-2 '>{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

const BalenoSafety = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/safety/nb_desktop_cruise.jpg.jpeg',
      title: 'ADAS Level 2',
      body: 'The New Age Baleno comes equipped with Level 2 Advanced Driver Assistance Systems (ADAS), including Automatic Emergency Braking, Lane Keep Assist, Adaptive Cruise Control and High Beam Assist, helping provide enhanced safety, convenience and confidence while driving.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/safety/nd_desktop_airbags.jpg.jpeg',
      title: '6 Airbags',
      body: 'Comprehensive protection for occupants, thoughtfully engineered to provide greater peace of mind when it matters most.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/safety/Esp_desktop.jpg.jpeg',
      title: 'Electronic Stability Program with Hill Hold Assist',
      body: 'Greater stability when you need it and added control when you’re starting on an incline, for confidence across changing road conditions.',
    },

  ];
  return (
    <div className='bg-black '>
      <div className='container mx-auto text-center text-white '>
        <div className='w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          SAFETY
        </div>
        <div className='text-center text-md lg:text-lg'>Safety Goes Bold</div>
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className='relative'>
                  <div className='w-full lg:px-20'>
                    <img src={x.img} alt={x.title} className='' />
                    <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                      <div className='pb-2 font-medium'>{x.title}</div>
                      <div className='font-light lg:pr-40'>{x.body}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
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
              {data.map((x, index) => (
                <SwiperSlide key={index} className='cursor-pointer'>
                  <div>
                    <img src={x.img} alt={x.title} className='max-h-24' />
                    <div className='py-2 '>{x.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
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
          Intelligence Goes Bold
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
          {/* <SwiperSlide className=""> 
            <div className="w-full ">
              <img
                src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-ags.webp"
                alt="AGS Baleno"
                className="relative "
              />
              <div className="w-full pt-4 text-left ">
                <div className="pb-2 font-medium">AGS</div>
                <div className="font-light lg:pr-40">
                  The New Age Baleno makes your driving experience smooth and
                  seamless with the 5-speed Auto Gear Shift. It makes your
                  drives refreshing, as it allows you to seamlessly choose
                  between automatic and manual transmission.
                </div>
              </div>
            </div>
          </SwiperSlide>*/}
          <SwiperSlide className=''>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/HUD_desktop.jpg.jpeg'
                alt='Head Up Display'
                className='relative '
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>Head Up Display</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  The feel of driving the New Age Baleno is more intuitive and
                  instinctive with the new Head Up Display. Gently rising up in
                  front of you. It’s nothing short of a sensorial thrill. Now
                  you can enjoy driving in the city without taking your eyes off
                  the road. Check turn-by-turn navigation, speed, RPM, AC
                  functions, fuel economy, and warning notifications in colour
                  with multi-display options in your line of sight. You can also
                  adjust the brightness, angle, and view modes of the Head Up
                  Display.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/mid_desktop.jpg.jpeg'
                alt='360 View Camera'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium '> Multi-Information Display</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Driving information and vehicle updates are presented clearly at a glance, keeping you informed without taking your focus away from the road.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/sgssg.jpg.jpeg'
                alt='22.86 CM HD Smartplay Pro+'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  360 View Camera
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  A comprehensive view of your surroundings makes parking, manoeuvring and navigating tighter spaces feel more effortless, helping you drive with greater awareness.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/smartplay_pro_desktop.jpg.jpeg'
                alt='Next Generation Suzuki Connect'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  Smartplay Pro+ Infotainment
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  The SmartPlay Pro+ infotainment system combines navigation, entertainment and smartphone connectivity through a responsive touchscreen with Advanced Voice Assist, wireless Apple CarPlay®, wireless Android Auto™ and immersive Surround Sense powered by ARKAMYS.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/new-baleno-2026/wireless_charging.jpg.jpeg'
                alt='Next Generation Suzuki Connect'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  Wireless Charging Dock With Active Cooling
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Convenient wireless charging keeps compatible smartphones powered throughout every drive, without adding clutter to the cabin.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const Bi360 = () => {
  return (
    <>
      <div className='text-center '>
        <div className='w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden'>
          360
          <sup>
            <span className='text-lg'>0</span>
          </sup>{' '}
          View
        </div>
        {/* <div>EXPLORE THE ALL-NEW XL6</div> */}
        <div className='pb-4 lg:hidden'>
          Take A 360 Degree Look Around The New Age Baleno And Get To Know It
          Better
        </div>
      </div>
      <div className='relative'>
        <View360 images={baleno360Images} />
        <div className='absolute flex-col items-center hidden text-black top-10 left-10 md:flex '>
          <TbView360 className='text-2xl lg:text-5xl animate-pulse' />
          <Tb360View className='text-xl lg:text-4xl' />
        </div>
        <div className='absolute flex-col items-center hidden w-full text-black top-10 lg:flex '>
          <div className='w-full pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
            360
            <sup>
              <span className='text-lg'>0</span>
            </sup>{' '}
            View
          </div>
          <div>
            Take A 360 Degree Look Around The New Age Baleno And Get To Know It
            Better
          </div>
        </div>
        <div className='absolute flex flex-col items-center text-black top-1/2 left-10 lg:left-20 '>
          <GiReturnArrow className='text-2xl rotate-180 lg:text-5xl animate-pulse' />
        </div>
        <div className='absolute flex flex-col items-center text-black top-1/2 right-10 lg:right-20 '>
          <GiReturnArrow className='text-2xl lg:text-5xl animate-pulse' />
        </div>
      </div>
    </>
  );
};

export default Baleno;
