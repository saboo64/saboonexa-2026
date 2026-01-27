import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ImageViewer from "../../components/CIAZ/ImageViewer";
// import OnRoadPrice from "../../components/utils/OnRoadPrice";
// import Features from "../../components/CIAZ/Features";
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from 'react-icons/md';
import Header from '../../components/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CarComp } from './Invicto';
import { CarEnq2 } from '../../components/Invicto/CarEnq2';
import { products } from '../../constants';
import View360 from '../../components/utils/View360';
import { Tb360View, TbView360 } from 'react-icons/tb';
import { GiBeltBuckles, GiReturnArrow, GiSpeedometer } from 'react-icons/gi';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Seo from '../../components/SEO/seo';
import { vechicle } from '../../constants/seo';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// Define the video source URL based on the browser
const videoSource = isSafari
  ? 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Ciaz_safari.mov'
  : 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/ciaz/Ciaz.webm';

function Ciaz() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Seo {...vechicle.ciaz} />

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
            poster={require('../../assets/cars/Maruti_Ciaz_December_offers.jpg')}
            // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360/2.jpg"
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
              THE
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='400'
              data-aos-duration='500'
              className='pb-1 font-serif text-5xl uppercase lg:text-8xl'
            >
              Ciaz
            </div>
            <div
              data-aos='fade-right'
              data-aos-delay='600'
              data-aos-duration='1000'
              className='mb-2 text-2xl uppercase lg:text-5xl lg:mb-4'
            >
              Created to inspire elegance
            </div>
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ciaz-Broucher.pdf'
              target='_blank'
              rel='noreferrer'
              aria-label='Ciaz Brochure'
            >
              <button
                data-aos='fade-right'
                data-aos-delay='800'
                data-aos-duration='1000'
                className='px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8'
                aria-label='Ciaz Brochure'
              >
                BROCHURE
              </button>
            </a>
          </div>
        </div>
      </div>
      <CarEnq2 title='BOOK YOUR CIAZ' carName='CIAZ' />
      <Variant />
      <Feature />
      <div className='pt-2 text-white bg-black '>
        <div className='w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          COLOURS
        </div>
      </div>

      <Colors />
      <Tech />
      <Ci360 />
      <Safety />
      <CarComp details={products[7]} />

      <CarEnq2 title='BOOK YOUR CIAZ' carName='Ciaz' />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('9,09,000');
  return (
    <div className=" bg-opacity-25 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp')] bg-fixed  bg-black">
      <div className='container py-20 mx-auto bg-black bg-opacity-10'>
        <div className='grid space-y-3 md:grid-cols-3 md:space-y-0'>
          <div className='mx-auto space-y-3 md:mx-0'>
            <label className='text-gray-300 uppercase' htmlFor='model'>
              Select car Variant
            </label>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none '
              aria-labelledby='Select Car Variant'
            >
              <option value='9,09,000'>1.5 Smart Hybrid MT Sigma</option>
              <option value='9,65,000'>1.5 Smart Hybrid MT Delta</option>
              <option value='10,05,500'>1.5 Smart Hybrid MT Zeta</option>
              <option value='10,82,300'>1.5 Smart Hybrid MT Alpha </option>
              <option value='10,97,700'>1.5 Smart Hybrid MT Alpha (DT)</option>
              <option value='10,72,600'>1.5 Smart Hybrid AT Delta </option>
              <option value='11,11,700'>1.5 Smart Hybrid AT Zeta </option>
              <option value='11,88,500'>1.5 Smart Hybrid AT Alpha </option>
              <option value='12,04,000'>1.5 Smart Hybrid AT Alpha (DT) </option>
            </select>
          </div>
          <div className='text-center text-white'>
            <p className='text-2xl font-medium'>₹ {price}*</p>
            <p className='text-xl tracking-wide'>Ex-Showroom Price</p>
            <p className='uppercase '>Hyderabad</p>
          </div>
          <div className='text-center'>
            <p className='mb-6 text-center text-gray-100'>
              You might have pre-approved loan offers
            </p>
            <Link
              to='/maruti-car-finance'
              className='px-4 py-2 tracking-wide text-black uppercase bg-white rounded shadow'
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
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/5.webp',
      colorName: 'NEXA Blue (Celestial)',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/6.webp',
      colorName: 'Pearl Metallic Dignity Brown',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/_7.webp',
      colorName: 'Bluish Black',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/3.webp',
      colorName: 'Grandeur Grey',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/2.webp',
      colorName: 'Splendid Silver',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/4.webp',
      colorName: 'Opulent Red',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/1.webp',
      colorName: 'Pearl Arctic White',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/pearl-metallic-dignity-brown-and_black.webp',
      colorName: 'Pearl Metallic Dignity Brown And Bluish Black',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/opulent-red-and_black.webp',
      colorName: 'Opulent Red And Black',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/ciaz/banner/grandeur-grey-and_black.webp',
      colorName: 'Grandeur Grey And Black',
    },
  ];

  return (
    <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/Saboo-RKS-Nexa-Ciaz-Car-Background.webp)] bg-cover bg-no-repeat pt-6 md:pt-20 lg:pt-28 bg-center'>
      <div className='container mx-auto'>
        <div className='grid pb-10 md:grid-cols-2'>
          <div className='py-8 mx-auto my-auto'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-RKS-Nexa-Ciaz-Title.webp'
              alt='Saboo-RKS-Nexa-Ciaz-Title'
            />
            <a
              href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-Ciaz-Broucher.pdf'
              className='p-3 bg-black text-gray-200 flex items-center max-w-[200px] justify-center mx-auto'
              target='_blank'
              rel='noreferrer'
              aria-label='Ciaz Brochure'
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
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#7E5B4B] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(2)}
                className={` ${
                  selectedCar === 2 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#171717] mx-auto`}
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
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-[#a31326] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(6)}
                className={` ${
                  selectedCar === 6 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-[#eeeff0] mx-auto`}
              ></div>
              <div
                onClick={() => setSelectedCar(7)}
                className={` ${
                  selectedCar === 7 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-black overflow-hidden mx-auto`}
              >
                <div className='w-full h-3  bg-[#7E5C4C] border-b border-black'></div>
              </div>
              <div
                onClick={() => setSelectedCar(8)}
                className={` ${
                  selectedCar === 8 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer shadow-xl shadow-gray-400  bg-black overflow-hidden mx-auto`}
              >
                {' '}
                <div className='w-full h-3  bg-[#AC0F0F] border-b border-black'></div>
              </div>
              <div
                onClick={() => setSelectedCar(9)}
                className={` ${
                  selectedCar === 9 &&
                  'border-2 border-white shadow-lg shadow-black'
                } rounded-full w-6 h-6 border  duration-200 cursor-pointer  shadow-xl shadow-gray-400 bg-black overflow-hidden mx-auto`}
              >
                {' '}
                <div className='w-full h-3  bg-[#545454] border-b border-black'></div>
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

const Tech = () => {
  return (
    <>
      <div className='container mx-auto mt-6 text-center '>
        <div className='pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8'>
          TECHNOLOGY
        </div>
        <div className='pb-4 text-md lg:text-lg'>
          Created To Inspire The Future
        </div>
      </div>
      <div className='container pb-6 mx-auto'>
        <div className='overflow-hidden'>
          <img
            //  src="https://nexaprod4.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/technology/ciaz-technology_changed.webp"
            src='https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/technology/ciaz-technology_changed.webp'
            alt='CIAZ TECHNOLOGY'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
        <div className='grid gap-1 mt-2 mb-4 md:grid-cols-3'>
          <div className='w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none'>
            <div className='pb-2 font-medium'>IDLE STOP START</div>
            <div className='font-light '>
              The engine automatically stops when idle and silently starts when
              the optimal conditions are met in manual and automatic
              transmissions. This helps in increasing fuel efficiency.
            </div>
          </div>
          <div className='w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none'>
            <div className='pb-2 font-medium'>BRAKE ENERGY REGENERATION</div>
            <div className='font-light '>
              Braking charges the special high capacity batteries, which in
              return assist the engine's idle start stop and the torque assist
              functions.
            </div>
          </div>
          <div className='w-full  text-left col-span-1 md:border-x px-4 hover:bg-[#373737b7] text-lg py-4 duration-500 hover:text-white select-none'>
            <div className='pb-2 font-medium'>TORQUE ASSIST FUNCTION</div>
            <div className='font-light '>
              The energy stored in the Lithium-ion battery assists during
              acceleration. This helps the engine in providing optimal
              acceleration and performance.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Ci360 = () => {
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
          Take A 360 Degree Look Around Ciaz And Get To Know It Better
        </div>
      </div>
      <div className='relative'>
        <View360
          path={
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360'
          }
          count={36}
          format={'jpg'}
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

const Feature = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [exterior, setExterior] = useState(false);

  return (
    <div className='py-4 bg-black '>
      <div className='container mx-auto text-center text-white '>
        <div className='w-full pt-8 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          FEATURES
        </div>
        <div className='text-center text-md lg:text-lg'>
          Advanced Features That Make Driving The Ciaz A Breeze
        </div>

        <div className='flex justify-center gap-5 pb-2 mt-4 text-xl'>
          <div className=''>
            <button
              className={`px-4 py-1  border tracking-widest rounded-lg duration-500  ${
                !exterior
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
              className={`px-4 py-1  border tracking-widest rounded-lg duration-500 ${
                exterior
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

        <div className='py-2 sm:py-5'>
          <div className='relative '>
            {exterior ? (
              <div className={``}>
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
                    thumbs={{ swiper: thumbsSwiper2 }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className='mySwiper2 h-28'
                  >
                    <SwiperSlide className=''>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/smart-play.webp?la=en&hash=B1145B7577A101CF7AE76A3B9FB90142'
                          alt='SmartPlay Studio'
                          className='relative '
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            SmartPlay Studio
                          </div>
                          <div className='font-light lg:pr-40'>
                            Play music, navigate around the city and stay
                            connected. Everything is just a touch away with the
                            SmartPlay Studio.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp'
                          alt='CRUISE CONTROL'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>CRUISE CONTROL</div>
                          <div className='font-light lg:pr-40'>
                            Pick any cruising speed over 40 km/h and drive
                            through the highway with unmatched ease.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp'
                          alt='TILT STEERING'
                          className=''
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>TILT STEERING</div>
                          <div className='font-light lg:pr-40'>
                            The steering column features tilt adjustment for
                            your convenience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp'
                          alt='   MULTI-INFORMATION DISPLAY'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            MULTI-INFORMATION DISPLAY
                          </div>
                          <div className='font-light lg:pr-40'>
                            Keep a track of your car's vital information such as
                            fuel consumption, energy flow, trip details, driving
                            range and gear shift indicator (MT).
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/start-stop-button/start-stop-button.webp?'
                          alt=' PUSH START-STOP BUTTON'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            PUSH START-STOP BUTTON
                          </div>
                          <div className='font-light lg:pr-40'>
                            Touch and go with keyless entry and push start
                            button.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/orvm/orvm.webp?la=en&hash=682BF0F18901DE61C24FA83383519F4D'
                          alt=' ORVM'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'> ORVM</div>
                          <div className='font-light lg:pr-40'>
                            Electrically adjustable and foldable ORVM for
                            greater convenience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp'
                          alt=' AUTO AC'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'> AUTO AC</div>
                          <div className='font-light lg:pr-40'>
                            Experience a world of comfort with Auto AC.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp'
                          alt='  REAR AC VENT'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'> REAR AC VENT</div>
                          <div className='font-light lg:pr-40'>
                            Rear AC vent for a cool lounge like experience.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Sunshade.webp'
                          alt=' REAR SUNSHADE'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'> REAR SUNSHADE</div>
                          <div className='font-light lg:pr-40'>
                            Enjoy a comfortable drive, even in summers.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp'
                          alt='  BOOT SPACE'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'> BOOT SPACE</div>
                          <div className='font-light lg:pr-40'>
                            510 L of boot space for added utility.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp'
                          alt='REAR READING LAMPS'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            REAR READING LAMPS
                          </div>
                          <div className='font-light lg:pr-40'>
                            Rear reading lamps for a comfortable read, on the
                            go.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp'
                          alt=' AUTOMATIC TRANSMISSION'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            AUTOMATIC TRANSMISSION
                          </div>
                          <div className='font-light lg:pr-40'>
                            Unwind and enjoy your drive as the New Ciaz with
                            Automatic Transmission moves like a dream, giving
                            you a comfortable drive everywhere.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper2}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    // freeMode={true}
                    // watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='hidden text-white mySwiper-3 md:block'
                  >
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/smart-play.webp?la=en&hash=B1145B7577A101CF7AE76A3B9FB90142'
                          alt=' SmartPlay Studio'
                          className='max-h-24'
                        />
                        <div className='py-2 '>SmartPlay Studio</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Cruse-Control.webp'
                          alt='CRUISE CONTROL'
                          className='max-h-24'
                        />
                        <div className='py-2 '>CRUISE CONTROL</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Tilt-Steering.webp'
                          alt='TILT STEERING'
                          className='max-h-24'
                        />
                        <div className='py-2 '>TILT STEERING</div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Multi-Information-Display.webp'
                          alt='   MULTI-INFORMATION DISPLAY'
                          className='max-h-24'
                        />
                        <div className='py-2 '>MULTI-INFORMATION DISPLAY</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/start-stop-button/start-stop-button.webp?la=en&hash=bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp'
                          alt=' PUSH START-STOP BUTTON'
                          className='max-h-24'
                        />
                        <div className='py-2 '> PUSH START-STOP BUTTON</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/features/orvm/orvm.webp'
                          alt=' ORVM'
                          className='max-h-24'
                        />
                        <div className='py-2 '> ORVM</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Auto-Ac.webp'
                          alt=' AUTO AC'
                          className='max-h-24'
                        />
                        <div className='py-2 '> AUTO AC</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Ac-Vent.webp'
                          alt=' REAR AC VENT'
                          className='max-h-24'
                        />
                        <div className='py-2 '> REAR AC VENT</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Sunshade.webp'
                          alt='  REAR SUNSHADE'
                          className='max-h-24'
                        />
                        <div className='py-2 '> REAR SUNSHADE</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Boot-Space.webp'
                          alt='   BOOT SPACE'
                          className='max-h-24'
                        />
                        <div className='py-2 '> BOOT SPACE</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Rear-Reading-Lamp.webp'
                          alt='REAR READING LAMPS'
                          className='max-h-24'
                        />
                        <div className='py-2 '> REAR READING LAMPS</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/interior/Saboo-Nexa-Ciaz-Interior-Automatic-Transmission.webp'
                          alt=' AUTOMATIC TRANSMISSION'
                          className='max-h-24'
                        />
                        <div className='py-2 '> AUTOMATIC TRANSMISSION</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            ) : (
              <div className={``}>
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
                    {/* <SwiperSlide className="">
                    <div className="w-full lg:px-20">
                      <img
                        src="https://nexaprod5.azureedge.net/-/media/feature/nexawebsitecarbrand/ciaz/design/desktop/key-visual-ciaz1.webp?la=en&hash=D7685302836FC2D9395341117BFE8028"
                        alt="Ciaz Design"
                        className="relative "
                      />
                      <div className="w-full px-4 pt-4 text-left text-white md:absolute bottom-4">
                        <div className="pb-2 font-medium">Design</div>
                        <div className="font-light lg:pr-40">
                        Thoughtfully crafted and exquisitely designed, the Ciaz captures your imagination from the moment you set your eyes on its gorgeous front fascia. And continues to enamour you all the way to the rear. It's a complete charmer that breathes elegance in every move.
                        </div>
                      </div>
                    </div>
                  </SwiperSlide> */}
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp'
                          alt='LED Tail Lamps'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>LED Tail Lamps</div>
                          <div className='font-light lg:pr-40'>
                            Gracefully designed Tail Lamps make heads turn on
                            the streets.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp'
                          alt='LED Projector Auto Headlamps'
                          className=''
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>
                            LED Projector Auto Headlamps
                          </div>
                          <div className='font-light lg:pr-40'>
                            The LED Projector auto headlamps with DRLs captivate
                            at first glance.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp'
                          alt='Exterior Fog Lamp'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>Fog Lamp</div>
                          <div className='font-light lg:pr-40'>
                            enhances visibility in adverse weather conditions
                            like fog, rain, and snow by emitting a low, wide
                            beam of light that reduces glare and illuminates the
                            road immediately in front of the vehicle, improving
                            safety and aesthetics
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp'
                          alt='Alloy Wheels'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>Alloy Wheels</div>
                          <div className='font-light lg:pr-40'>
                            Alloy wheels for the Ciaz are stylish and
                            lightweight, enhancing both its aesthetics and
                            performance.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative'>
                      <div className='w-full lg:px-20'>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp'
                          alt=' Metal Grille'
                        />
                        <div className='w-full px-4 pt-4 text-left text-white md:absolute bottom-4'>
                          <div className='pb-2 font-medium'>Metal Grille</div>
                          <div className='font-light lg:pr-40'>
                            The Metal Grille featured on the Ciaz sedan adds a
                            touch of sophistication to the car's appearance
                            while providing protection and airflow to the
                            engine.
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    // freeMode={true}
                    // watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='hidden text-white mySwiper-3 md:block'
                  >
                    {/* <SwiperSlide className="cursor-pointer">
                    <div>
                      <img
                        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/360/1.jpg"
                        alt="Design"
                        className="max-h-24"
                      />
                      <div className="py-2 ">Design</div>
                    </div>
                  </SwiperSlide> */}
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Back-Lamp.webp'
                          alt='LED Tail Lamps'
                          className='max-h-24'
                        />
                        <div className='py-2 '>LED Tail Lamps</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Led-Projector-Head-Lamps.webp'
                          alt=' LED Projector Auto Headlamps'
                          className='max-h-24'
                        />
                        <div className='py-2 '>
                          LED Projector Auto Headlamps
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Fog-Lamp.webp'
                          alt='Fog Lamp'
                          className='max-h-24'
                        />
                        <div className='py-2 '>Fog Lamp</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Alloy-Wheels.webp'
                          alt='Alloy Wheels'
                          className='max-h-24'
                        />
                        <div className='py-2 '> Alloy Wheels</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className='cursor-pointer'>
                      <div>
                        <img
                          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ciaz/exterior/Saboo-Nexa-Ciaz-Exterior-Metal-Grille.webp'
                          alt=' Metal Grille'
                          className='max-h-24'
                        />
                        <div className='py-2 '>Metal Grille</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function Safety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='container mx-auto mt-6 text-center '>
        <div className='pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-4 '>
          SAFETY
        </div>
        <span className='text-md lg:text-lg'>
          Reassurance of Safety on Every Drive
        </span>
      </div>
      <div className='py-4 text-2xl font-medium text-center lg:text-3xl '></div>
      <div className='container relative flex flex-col items-center justify-center mx-auto -mt-10'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/ciazcar-image+webp.webp'
          alt=' Ciaz Safety Features'
          className='m-28 scale-[0.85]'
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
        <div className='absolute left-[10%]  bottom-[63%]    lg:flex-col md:items-start group hidden lg:flex '>
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
        <div className='absolute left-[78%]  bottom-[63%] md:items-start group hidden lg:flex lg:flex-col '>
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

        <div className='absolute left-[77%]  top-[39%]  md:items-start group hidden lg:block '>
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
          aria-label='6 Air Bags'
        >
          +
        </button>
        <button
          className={`absolute ${
            index === 2 ? 'bg-black text-white' : 'bg-white animate-pulse'
          } h-6 w-6 rounded-full flex justify-center lg:hidden items-center bottom-[50%] left-[25%]  `}
          onClick={() => setIndex(2)}
          aria-label='ABS with EBD'
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
    </>
  );
}

export default Ciaz;
