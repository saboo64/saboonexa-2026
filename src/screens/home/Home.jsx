import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
// import Header from "../../components/Header/Header";
import { useNavigate } from 'react-router-dom';

//confetti
import { Link } from 'react-router-dom';
import { products } from '../../constants';
import { RiStarFill } from 'react-icons/ri';
import { PiSteeringWheelThin } from 'react-icons/pi';

import { BsQuote, BsTrophy } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper';

import EnquiryPopup from '../../components/utils/EnquiryPopup';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Range from './Range';
import ShowRoomPopup from '../../components/utils/ShowRoomPopup';
import TestDrive from '../../components/utils/TestDrive';
import { IoCarSportOutline } from 'react-icons/io5';
import { HiOutlineDownload } from 'react-icons/hi';
import { LuNetwork } from 'react-icons/lu';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import BookAServicePop from '../../components/utils/BookAServicePop';
import { HomePageEnq } from './HomePageEnq';
import Header from '../../components/Header/Header';
import { blogData } from '../../components/Home/BlogPage';
import Seo from '../../components/SEO/seo';
// import Header from "../../components/Header/Header copy";

function Home({ setSelected }) {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  return (
    <div className='relative'>
      <Seo
        title='Saboo Nexa – Best Maruti Suzuki Nexa Dealer in Hyderabad | Luxury Car Showroom with Exclusive August Festive Offers'
        description="Explore the latest Maruti Suzuki Nexa models at Saboo Nexa, Hyderabad's leading luxury car dealership. Enjoy exclusive offers, unbeatable discounts, and exceptional customer service. Drive home your dream Nexa car today with the best deals and premium experience!"
        keywords='Saboo Nexa Hyderabad, Best Maruti Suzuki Nexa Cars in Hyderabad, Premium Cars in Hyderabad, Nexa Showroom Hyderabad, Exclusive Nexa Car Deals, Unbeatable Nexa Offers 2025, Maruti Suzuki Premium Cars, Luxury Cars in Hyderabad, Top Nexa Cars in Hyderabad, Buy Nexa Car in Hyderabad, Best Nexa Car Dealership in Hyderabad, Maruti Nexa On-Road Price Hyderabad, Nexa Car Exchange Offers Hyderabad, Maruti Suzuki Nexa Finance Offers, Trusted Nexa Car Showroom in Hyderabad, Nexa Cars EMI Options Hyderabad.'
        url='https://www.saboonexa.in/'
        image='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg'
      />

      <Header />
      <HomeVideo />
      <div className='bg-white lg:rounded-t-3xl'>
        {/* Enquiry form */}
        <HomePageEnq title='NEXA CAR ENQUIRY' />

        {/* Range of Cars */}
        <Range />

        {/* Navigation button*/}
        <Navigate />

        {/* Offer baneer */}
        <Offer />

        {/* NEXA CARS */}
        <VehicleProducts />

        {/* NEXA SERVICES */}
        <SerFinInsur />

        {/* WHY TO CHOOSE US */}
        <WhyToChooseUs />

        {/* News */}
        <News setSelected={setSelected} />

        {/* Outlets */}
        <Outlets />

        {/* Testimonials */}
        <Testimonials />
      </div>
    </div>
  );
}

export const HomeVideo = () => {
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  // const videoSource = isSafari
  //   ? "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Invicto_safari.mov"
  //   : "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/videos/WEBSITE+mp4.webm";

  return (
    <>
      <div className='relative top-0 left-0 w-full h-[95vh]  sm:h-screen overflow-hidden'>
        {/* <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Nexa_Strong_Hybrid_Saboo_RKS_Motor_ (1).webp")}
          alt="Maruti_Suzuki_Nexa_Strong_Hybrid_Saboo_RKS_Motor"
        
          className="fixed hidden object-cover w-full h-full sm:block -z-10"
        /> */}
        <video
          className={`  object-cover w-full h-full duration-1000 -z-10 sm:block`}
          preload='metadata'
          poster='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/evitara-videoposter.avif'
          // poster={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition.webp")}
          // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Facebook_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Still_Banner.webp"
          loop
          autoPlay
          playsInline
          muted
          disableRemotePlayback
          disablePictureInPicture
        >
          <source
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/saboo%2Bnexa%2Be%2Bvitara%2Bvideo%2Bbanner.mp4'
            type='video/mp4'
          />
        </video>
        <img
          src={require('../../assets/HomePageImages/Maruti_Suzuki_Nexa_Strong_Hybrid_Saboo_RKS_Motor_Mobile.webp')}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp"
          alt='Maruti_Suzuki_Nexa_Strong_Hybrid_Saboo_RKS_Motor_Mobile.webp'
          className='w-full h-full sm:hidden'
        />
        {/* <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile.webp")}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Website_Mobile_Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_October_Offers.webp"
          alt="Maruti_Suzuki_No1_SUV_Maker_Saboo_RKS_Motor_Hyderabad_Dealer_Offers_Service_Invicto_Fronx_Xl6_Jimny_GrandVitara_Ciaz_Ignis_Baleno_Nexa_Car_Black_Edition_Mobile"
          className="w-full h-full sm:hidden"
        /> */}

        <div className={`absolute  -ml-4 right-1/2 duration-500 bottom-10 `}>
          <div className='relative flex items-end justify-center w-8 overflow-hidden border rounded-full h-14 '>
            <div className=''>
              <div className='w-1 h-4 mb-1 bg-white border-2 rounded-full animate-bounce '></div>
            </div>
            <div className='absolute h-9 left-1/2 bottom-4 -ml-[1px]'>
              <div className='w-[1px] h-full mb-1  border-[#ffffff2f] border rounded-full  my-4'></div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-1 ">
            <div className="w-4 h-4 rotate-45 border-b-2 border-r-2 border-gray-500"></div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const Navigate = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [model, setModel] = useState('');
  return (
    <div className='container items-start justify-between hidden px-5 py-2 mx-auto mt-16 mb-10 text-center uppercase border border-black cursor-pointer rounded-xl lg:pt-4 md:px-3 lg:px-0 md:flex shadow-gray-400 xl:max-w-7xl'>
      <div className='w-1/5 py-4 border-r hover:font-medium group'>
        <Link to='/maruti-nexa-showroom-outlets-in-hyderabad'>
          <div className='flex flex-col items-center justify-center gap-2 px-1'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/location.webp'
              alt=''
              className='h-8 lg:h-10'
            />
            <div>Locate a Showroom</div>
          </div>
        </Link>
      </div>

      <div
        className='w-1/5 py-4 border-r hover:font-medium group'
        onClick={() => setOpen3(true)}
      >
        <div className='flex flex-col items-center justify-center gap-2 px-1'>
          <PiSteeringWheelThin className='text-3xl lg:text-4xl ' />
          <div>Book a test drive</div>
        </div>
      </div>
      <div
        className='w-1/5 py-4 border-r hover:font-medium group'
        onClick={() => setOpen2(true)}
      >
        <div className='flex flex-col items-center justify-center gap-2 px-1'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/showroom.webp'
            alt=''
            className='h-8 lg:h-10'
          />
          <div className=''> Book a showroom visit</div>
        </div>
      </div>

      <div
        className='w-1/5 py-4 border-r hover:font-medium group'
        onClick={() => setOpen(true)}
      >
        <div className='flex flex-col items-center justify-center gap-2 px-1'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/mechanical.webp'
            alt=''
            className='h-8 lg:h-10'
          />
          <div>Book a service</div>
        </div>
      </div>
      <div className='w-1/5 py-4 hover:font-medium group'>
        <Link to='/maruti-car-insurance'>
          <div className='flex flex-col items-center justify-center gap-2 px-1'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gif/car-insurance.webp'
              alt=''
              className='h-8 lg:h-10'
            />
            <div>Insurance</div>
          </div>
        </Link>
      </div>
      <BookAServicePop
        open={open}
        setOpen={setOpen}
        title={'Book A SERVICE'}
        model={model}
        setModel={setModel}
      />
      <ShowRoomPopup open={open2} setOpen={setOpen2} title={'Showroom Visit'} />
      <TestDrive open={open3} setOpen={setOpen3} title={'Test Drive'} />
    </div>
  );
};

const VehicleProducts = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState('');

  return (
    <div className='container px-2 mx-auto lg:pt-4 md:px-3 lg:px-0 xl:max-w-7xl'>
      <div className='py-2 mt-2 mb-4 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl'></div>
      <div className='grid gap-4 px-1 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((item) => (
          <div
            className='relative flex flex-col overflow-hidden border-t border-l border-gray-200 shadow-lg shadow-gray-200 hover:shadow-gray-300'
            key={item.id}
          >
            {/* {item.offers && (
              <Link to="/offers">
                <p className="absolute py-1 text-sm text-center text-white uppercase rotate-45 bg-[#ec1b23] top-3 -right-7 w-28 ">
                  <span className="animate-pulse">Offer</span>
                </p>
              </Link>
            )} */}
            {item.price && (
              <div className='absolute z-10 top-4 right-5 '>
                <div className=''>
                  <a
                    href={item.brouchure}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-2 pl-1 text-sm group'
                    aria-label={item.name + ' Brochure'}
                  >
                    <HiOutlineDownload className='text-xl' />
                    Brochure
                  </a>
                </div>
              </div>
            )}
            <div className='overflow-hidden '>
              <Link to={item.explore}>
                <img
                  src={item.img}
                  alt={item.name}
                  className='mx-auto product_image'
                />
              </Link>
            </div>

            <div className='flex items-center justify-between p-5 rounded'>
              <img src={item.logo} className='w-32' alt={item.name} />
              {/*  */}

              <div className=''>
                <span className='text-lg'>₹</span>
                <span className='text-lg font-semibold sm:text-xl whitespace-nowrap'>
                  {' '}
                  {item.price} /-
                </span>
                {/* ₹ {Intl.NumberFormat('en-IN').format(item.price)}* */}
                <p className='text-gray-500 text-xm'>ex-showroom</p>
              </div>
            </div>
            <div className='flex items-center justify-center gap-4 pb-5 mx-4'>
              <Link
                to={item.explore}
                className='w-full p-2 text-sm text-center uppercase border border-gray-400 rounded hover:border-gray-800 '
              >
                Explore
              </Link>

              <button
                onClick={() => {
                  setOpen(true);
                  setModel(item.name);
                }}
                aria-label='Book Now'
                className='w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black'
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
        {/* <div className='sm:col-span-2'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+banner.webp'
            className='lg:mx-auto  lg:h-[400px] lg:w-full'
            alt='banner'
          />
        </div> */}
      </div>
      <EnquiryPopup
        open={open}
        setOpen={setOpen}
        title={'Book Now'}
        model={model}
        setModel={setModel}
      />
    </div>
  );
};

const SerFinInsur = () => {
  // const [num, setNum] = useState(1);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Update the state value from 1 to 6
  //     setNum((prevNum) => (prevNum >= 6 ? 1 : prevNum + 1));
  //   }, 5000);

  //   // Clear the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='py-4 mx-auto overflow-hidden xl:max-w-7xl'>
      <div className='container px-2 py-2 mx-auto mt-2 mb-4 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl '>
        NEXA SERVICES
      </div>
      <div className='container px-2 mx-auto space-y-2 '>
        {/* <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Maruti_Suzuki_Service_Navratri_dussehra_Saboo_RKS_Motor_02.webp"
              alt="Maruti Suzuki Service Navratri dussehra Saboo RKS Motor"
              // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
              // alt="service center"
              className="hidden w-full max-w-full overflow-hidden shadow-lg rounded-3xl shadow-gray-500 sm:block"
            /> */}
        <div className='grid gap-2 sm:grid-cols-3'>
          <div
            data-aos='zoom-in'
            data-aos-delay='0'
            data-aos-duration='500'
            className=''
          >
            <Link to='/accessories'>
              <img
                src={require('../../assets/HomePageImages/Maruti_Nexa_Accessories_Saboo_RKS_Nexa_Banner_RKS_Nexa-03.webp')}
                // src={require("../../assets/HomePageImages/saboo-nexa-accessories-banner.webp")}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                alt=' Discover top-quality Maruti Suzuki accessories designed to elevate your driving experience. Enhance your Maruti Suzuki vehicle with premium accessories for optimal performance and style. Browse our selection of Maruti Suzuki accessories to personalize and customize your car to your liking. Find the perfect Maruti Suzuki accessories to suit your needs and lifestyle, from interior upgrades to exterior enhancements. Elevate your Maruti Suzuki driving experience with our comprehensive range of high-quality accessories tailored to meet your requirements.'
                className={`w-full rounded hover:shadow-lg select-none lg:rounded-xl shadow-gray-500  hidden sm:block h-full duration-500 lg:hover:scale-95  saturate-150 `}
              />
            </Link>
          </div>
          <div
            data-aos='zoom-in'
            data-aos-delay='0'
            data-aos-duration='500'
            className='col-span-2 '
          >
            <Link to='/book-online-maruti-nexa-car-service'>
              {/* <div
                className={`w-full rounded shadow-lg select-none lg:rounded-xl shadow-gray-500 hidden sm:block duration-500 lg:hover:scale-95 h-full`}
                // style={{
                //   backgroundImage: `url(${require("../../assets/HomePageImages/Website_Summer_Maruti_Suzuki_Service_Happy_Holi_Service_Saboo_RKS_Motor_March_Offers.webp")})`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                
              </div> */}
              <section className='hidden sm:block'>
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
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={10}
                  slidesPerView={1}
                  centeredSlides={true}
                  modules={[Autoplay, Pagination]}
                  className='select-none mySwiper2 h-28'
                >
                  <SwiperSlide className='rounded-xl'>
                    <div className='hidden sm:block'>
                      <img
                        src={require('../../assets/others/Website_Maruti_Suzuki_Nexa_Service_At_Kompally_Suchitra_Beat_the_Heat_with_Saboo_RKS_Motor_service_Summer_Serviceat.webp')}
                        alt='Website_Maruti_Suzuki_Nexa_Service_At_Kompally_Suchitra_Beat_the_Heat_with_Saboo_RKS_Motor_service_Summer_Serviceat.webp'
                        className={`hidden w-full sm:block rounded-xl border-b border-gray-300 border-x`}
                      />
                    </div>
                    {/* <div className="sm:hidden">
                <img
                 src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp')}
                  alt="Maruti_Suzuki_Nexa_July_Monsoon_Offers_Saboo_RKS_Nexa_2024"
                  className="w-full rounded-2xl sm:hidden"
                />
              </div> */}
                  </SwiperSlide>

                  <SwiperSlide className='rounded-xl'>
                    <div className='hidden sm:block'>
                      <img
                        src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp')}
                        // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                        alt='Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor_Offers'
                        className={`hidden w-full sm:block rounded-xl border-b border-gray-300 border-x`}
                      />
                    </div>
                    {/* <div className="sm:hidden">
                <img
                  src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp')}
                  alt="Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor_Mobile_Offers"
                  className="w-full rounded-2xl sm:hidden"     
                />
              </div> */}
                  </SwiperSlide>
                </Swiper>
              </section>
              {/* <img
                src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp')}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                alt=' Summer_Maruti_Suzuki_Service_Happy_Holi_Service_Saboo_RKS_Motor_March_Offers'
                className={` w-full rounded shadow-lg select-none lg:rounded-xl shadow-gray-500   hidden sm:block duration-500 lg:hover:scale-95`}
              /> */}
              {/* <img
                src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad_Mobile.webp')}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                alt=' Summer_Maruti_Suzuki_Service_Happy_Holi_Service_Saboo_RKS_Motor_March_Offers'
                className={` w-full rounded shadow-lg select-none lg:rounded-xl shadow-gray-500    sm:hidden `}
              /> */}

              {/* <img
                src={require("../../assets/HomePageImages/Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor.webp")}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                alt=" Maruti Suzuki Service | Maruti Suzuki | Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service, Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor"
                className={`w-full rounded hover:shadow-lg select-none lg:rounded-xl shadow-gray-500  hover:saturate-200  hidden sm:block duration-500 lg:hover:scale-95`}
              />

              <img
                src={require("../../assets/HomePageImages/Website_Mobile_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor.webp")}
                alt=" Maruti Suzuki Service | Maruti Suzuki | Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service, Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor"
                className="w-full rounded-2xl sm:hidden"
              /> */}
            </Link>
          </div>
        </div>

        <div className='hidden grid-cols-2 gap-2 md:grid '>
          <div data-aos='zoom-in' data-aos-delay='0' data-aos-duration='500'>
            <Link to='/maruti-car-insurance'>
              <img
                src={require('../../assets/HomePageImages/Saboo_Nexa_Insurance_Hyderabad.webp')}
                // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/home-page-banners/Insurance+Desktop.webp"
                alt='Saboo_Nexa_Insurance_Hyderabad'
                className={`w-full max-w-full overflow-hidden duration-500 hover:shadow-lg rounded-xl hover:scale-95 shadow-gray-500 grayscale hover:grayscale-0 hover:saturate-200 `}
              />
            </Link>
          </div>
          <div data-aos='zoom-in' data-aos-delay='0' data-aos-duration='500'>
            <Link to='/maruti-car-finance'>
              <img
                src={require('../../assets/HomePageImages/Saboo_Nexa_Finance_Hyderabad.webp')}
                alt='Saboo_Nexa_Finance_Hyderabad'
                className={`w-full max-w-full overflow-hidden duration-500 hover:shadow-lg rounded-xl hover:scale-95 shadow-gray-500 grayscale hover:grayscale-0 hover:saturate-200 `}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='container px-2 mx-auto mb-2 overflow-hidden md:hidden lg:mx-0 rounded-xl lg:rounded-3xl'>
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
              spaceBetween: 5,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@1.50': {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className='mySwiper'
        >
          {/* <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/book-online-maruti-nexa-car-service">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp"
                  alt="Sevice Hafeezpet"
                  className="rounded-xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl">
                  <p>SERVICE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> 
              </figcaption>
            </figure>
          </SwiperSlide> */}
          <SwiperSlide>
            <figure className='relative cursor-pointer'>
              <Link to='/book-online-maruti-nexa-car-service'>
                <img
                  src={require('../../assets/others/WM_Maruti_Suzuki_Nexa_Service_At_Kompally_Suchitra_Beat_the_Heat_with_Saboo_RKS_Motor_service_Summer_Serviceat.webp')}
                  alt='Service'
                  className='rounded-xl'
                />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                {/* <div className='text-xl'>
                  <p>INSURANCE</p>
                </div> */}
                {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className='relative cursor-pointer'>
              <Link to='/book-online-maruti-nexa-car-service'>
                <img
                  src={require('../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad_Mobile.webp')}
                  alt='service'
                  className='rounded-xl'
                />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                {/* <div className='text-xl md-20'>
                  <p>FINANCE</p>
                </div> */}
                {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='container px-2 mx-auto mb-2 overflow-hidden md:hidden lg:mx-0 rounded-xl lg:rounded-3xl'>
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
              spaceBetween: 5,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            '@1.00': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@1.50': {
              slidesPerView: 2,
              spaceBetween: 5,
            },
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className='mySwiper'
        >
          {/* <SwiperSlide>
            <figure className="relative cursor-pointer">
              <Link to="/book-online-maruti-nexa-car-service">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/Nexa+Service+mobile+Hafeezpet.webp"
                  alt="Sevice Hafeezpet"
                  className="rounded-xl"
                />
              </Link>
              <figcaption className="absolute px-4 -mt-16 text-lg text-white">
                <div className="text-xl">
                  <p>SERVICE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with revolutionary technology</p>
              </div> 
              </figcaption>
            </figure>
          </SwiperSlide> */}
          <SwiperSlide>
            <figure className='relative cursor-pointer'>
              <Link to='/maruti-car-insurance'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Insurance+Mobile+800x800.webp'
                  alt='Insurance'
                  className='rounded-xl'
                />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                <div className='text-xl'>
                  <p>INSURANCE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with a firm grip</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className='relative cursor-pointer'>
              <Link to='/maruti-car-finance'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Finance+Mobile+800x800.webp'
                  alt='Finance'
                  className='rounded-xl'
                />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                <div className='text-xl md-20'>
                  <p>FINANCE</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with utmost comfort</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className='relative cursor-pointer'>
              <Link to='/accessories'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/homepage-mobile-carousel/Accessories+Mobile+800x800.webp'
                  alt='Accessories'
                  className='rounded-xl'
                />
              </Link>
              <figcaption className='absolute px-4 -mt-16 text-lg text-white'>
                <div className='text-xl'>
                  <p>ACCESSORIES</p>
                </div>
                {/* <div className='text-xs'>
                <p>Rules with a Powerful Persona</p>
              </div> */}
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='container flex flex-col gap-2 mx-auto sm:flex-row'>
        <section
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className='container relative py-2 mx-auto '
        >
          <div className='hidden grid-cols-3 mx-2 duration-500 gap-x-2 sm:grid rounded-3xl'>
            <div className='col-span-2 group'>
              <Link to='/maruti-suzuki-24/7-service-in-hyderabad '>
                <img
                  // src={require('../../assets/nexa service banner.jpg')}
                  src={require('../../assets/HomePageImages/SABOO_NEXA_24_7_SERVICE.jpg')}
                  // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner.jpg"
                  className={`w-full overflow-hidden duration-500 hover:shadow-lg rounded-xl shadow-black hover:scale-95 grayscale hover:grayscale-0 hover:saturate-200 max-h-[21.5rem]`}
                  alt='SABOO_NEXA_24_7_SERVICE'
                />
                {/* <div className="absolute  bottom-[23%] left-[16%] md:left-[12%] text-white py-2 lg:py-3 px-2 lg:px-10 border border-white rounded-lg lg:rounded-xl group-hover:bg-white group-hover:text-black cursor-pointer duration-500">
                  Book Your Serivce
                </div> */}
              </Link>
            </div>
            {/* <Link to='/maruti-suzuki-driving-school'>
              <img
                src={require('../../assets/others/Website_Tile_Maruti_Suzuki_Driving_School_Raksha_Bandhan_Offers_August_offers_Saboo_RKS_Motor.webp')}
                className={`w-full  overflow-hidden duration-500 hover:shadow-lg rounded-xl shadow-black hover:scale-95 border border-blue-800 `}
                alt='Website Maruti Suzuki Driving School October Dussehra Diwali Offers Saboo RKS Motor Learn Driving Driving School'
              />
            </Link> */}
          </div>
          <div className='px-2 sm:hidden '>
            <Link to='/maruti-suzuki-24/7-service-in-hyderabad '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner+mobile.jpg'
                className='rounded-xl '
                alt='Service Banner'
              />
            </Link>
            <Link to='/maruti-suzuki-driving-school'>
              <img
               //  src={require('../home/Website_Mobile_1Maruti_Suzuki_Driving_School_January_New_Year_2025_offers_Saboo_RKS_Motor.webp')}
               //  src={require("../../assets/others/Website_Nexa_Maruti_Suzuki_Driving_School_October_Dussehra_Diwali_Offers_Saboo_RKS_Motor_Learn_Driving_Driving_School.webp")}
                src={require('../../assets/others/Maruti_Driving_School_Kushaiguda.webp')}
                className='mt-2 overflow-hidden border sm:mt-3 rounded-xl '
                alt='Website Maruti Suzuki Driving School October Dussehra Diwali Offers Saboo RKS Motor Learn Driving Driving School'
              />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

const News = ({ setSelected }) => {
  const history = useNavigate();

  const handleOnClick = (num) => {
    // Set setSelected(2) first
    setSelected(num);
    // Navigate to /maruti-nexa-latest-news
    history('/maruti-nexa-latest-news');
  };

  return (
    <div className='container px-2 pt-3 mx-auto xl:max-w-7xl'>
      <div className='mb-3'>
        <span className='overflow-hidden text-4xl md:text-5xl'>NEWS</span>
        <div className='pt-4 pb-3 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl'>
          SABOO NEXA WORLD
        </div>
        {/* <div className="relative md:whitespace-nowrap ">
          <div className="inline-flex py-2 pt-2 pb-2 overflow-x-hidden text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl group-hover:animate-type-reverse text-brand-accent md:h-20 md:animate-type-second ">
            SABOO NEXA WORLD
          </div>
          <div className="box-border hidden w-1 h-10 -mb-2 bg-black md:inline-block md:animate-cursor will-change-transform md:-mb-4 md:h-16"></div>
        </div> */}
      </div>

      <div className=''>
        {/* <div className='h-[80vh] object-cover'> */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {blogData.slice(0, 3).map((item, index) => (
            <div key={index} className='relative '>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => handleOnClick(index)}
                className='overflow-hidden bg-black rounded-2xl brightness-110 saturate-150'
              />
              <div className='flex flex-col justify-between mt-4'>
                <div className='uppercase '>
                  <div className='pb-2 text-xl font-medium lg:text-2xl'>
                    {item.title}
                  </div>
                </div>
                <div
                  onClick={() => handleOnClick(index)}
                  className='relative inline-flex items-center justify-start px-4 py-3 overflow-hidden cursor-pointer lg:px-6 group w-min'
                >
                  <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-black opacity-[3%]'></span>
                  <span className='absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8'></span>
                  <span className='relative w-full text-left duration-200 ease-in-out whitespace-nowrap text-gray-600transition-colors group-hover:text-white'>
                    Read More
                  </span>
                  <span className='absolute inset-0 border border-gray-600'></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className='container px-2 pt-10 pb-16 mx-auto space-y-4 xl:max-w-7xl '>
      <div className=''>
        <span className='overflow-hidden text-4xl md:text-5xl'>SABOO NEXA</span>
        <div className='pt-4 pb-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl'>
          Testimonials
        </div>

        {/* <div className="relative md:whitespace-nowrap ">
          <div className="inline-flex py-2 pt-2 pb-2 overflow-x-hidden text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl group-hover:animate-type-reverse text-brand-accent md:animate-type ">
            Testimonials
          </div>
          <div className="-mb-2  box-border md:inline-block h-10 w-1 hidden md:animate-cursor bg-black will-change-transform md:-mb-2.5 md:h-16 "></div>
        </div> */}
      </div>
      <div className='pb-3 '>
        At Saboo RKS, we have implemented an advanced process that guarantees
        all reviews are authored by genuine individuals, accurately reflecting
        their real-life experiences.
      </div>

      <div className='grid grid-cols-1 gap-4 mt-3 md:grid-cols-3 lg:gap-10 '>
        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' rounded-3xl  bg-[#000000f4] '
        >
          <Link to='/testimonials'>
            {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
            <div className='flex flex-col justify-center h-full py-8'>
              <div className='ml-10 text-4xl text-gray-500 animate-pulse'>
                <BsQuote />
              </div>
              <p className='text-lg text-center text-gray-100 uppercase'>
                ROHIN KUMAR
              </p>
              <div className='flex items-center justify-center text-red-600'>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className='px-5 mt-6 text-center text-gray-200'>
                Great experience buying my new XL6. It all started with the
                praveen one of the RM making a call about my interest followed
                by Mr. Abishek's cordial and informative interactions that made
                me go with RKs
              </p>
              <div className='mr-10 text-4xl text-gray-500 rotate-180 animate-pulse'>
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>
        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' rounded-3xl bg-[#000000f4] '
        >
          <Link to='/testimonials'>
            {/* <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/Saboo-Nexa-Profile-Icon.webp'
            alt='profile icon'
            className='mx-auto'
          /> */}
            <div className='flex flex-col justify-center h-full py-8'>
              <div className='ml-10 text-4xl text-gray-500 animate-pulse'>
                <BsQuote />
              </div>
              <p className='text-lg text-center text-gray-100 uppercase'>
                JYOTHSNA INKOLLU
              </p>
              <div className='flex items-center justify-center text-red-600'>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                {/* <RiStarHalfFill /> */}
              </div>
              <div className='px-5 mt-6 text-center text-gray-100'>
                This is the best service center i have seen still now. Best
                service and best staff.
              </div>
              <div className='mr-10 text-4xl text-gray-500 rotate-180 animate-pulse lg:mt-4 '>
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>

        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' rounded-3xl bg-[#000000f4] '
        >
          <Link to='/testimonials'>
            <div className='flex flex-col justify-center h-full py-8'>
              <div className='ml-10 text-4xl text-gray-500 animate-pulse'>
                <BsQuote />
              </div>
              <p className='text-lg text-center text-gray-100 uppercase'>
                JHANSI PRIYA
              </p>
              <div className='flex items-center justify-center text-red-600 '>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className='px-5 mt-6 text-center text-gray-100'>
                It was a fabulous experience with you. Thanks a lot for the
                support provided by you, on time delivery, info about vehicle &
                Discounts. Good to have an executive like you. All the best, for
                your future endeavour.
              </p>
              <div className='mr-10 text-4xl text-gray-500 rotate-180 animate-pulse'>
                <BsQuote />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Outlets = () => {
  return (
    <div className='container px-2 py-10 mx-auto xl:max-w-7xl'>
      <div className='py-2 text-3xl font-medium text-right uppercase sm:text-4xl md:text-5xl'>
        OUTLETS
      </div>

      <div className='mb-6 text-right'>
        To ensure that you receive the ultimate Nexa experience, we have
        strategically positioned ourselves in three prominent hotspots
        throughout Hyderabad
      </div>

      <div className='container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-3 lg:gap-10 '>
        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden'
        >
          <div className='bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10'></div>
          <div className='mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl'>
            Nexa Lumbini
          </div>
          {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
          <a
            href='https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en'
            target='_blank'
            rel='noreferrer'
            aria-label='Nexa Lumbini Showroom'
          >
            <div
              className='flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0'
              style={{
                backgroundImage: `url(${require('../../assets/HomePageImages/SABOO_NEXA_LUMBINI_SHOWROOM_HYDERABAD.webp.webp')})`,
                // backgroundImage:
                //   'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/lumbini_outlet.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </a>
        </div>
        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden'
        >
          <div className='bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10'></div>
          <div className='mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl'>
            Nexa Jubilee
          </div>
          {/* <div className="mb-2">Jubilee Hills, Hyderabad - 500033</div> */}
          <a
            href='https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en'
            target='_blank'
            rel='noreferrer'
            aria-label='Nexa Jubilee Showroom'
          >
            <div
              className='flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0'
              style={{
                backgroundImage: `url(${require('../../assets/HomePageImages/SABOO_NEXA_JUBILEE_HILLS_SHOWROOM_HYDERABAD.webp')})`,
                // backgroundImage:
                //   'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/jubilee-outlet.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </a>
        </div>
        <div
          data-aos='zoom-in'
          data-aos-delay='0'
          data-aos-duration='500'
          className=' w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden'
        >
          <div className='bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10'></div>
          <div className='mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl xl:text-4xl'>
            Nexa Hafeezpet
          </div>
          {/* <div className="mb-2">Hafeezpet, Hyderabad - 500049</div> */}
          <a
            href='https://goo.gl/maps/rgoP8TXGQ9b3WvYu8'
            target='_blank'
            rel='noreferrer'
            aria-label='Nexa Hafeezpet Showroom'
          >
            <div
              className='flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0'
              style={{
                backgroundImage: `url(${require('../../assets/HomePageImages/SABOO_NEXA_HAFEEZPET_SHOWROOM_HYDERABAD.webp')})`,
                // backgroundImage:
                //   'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/hafeezpet-outlet.webp")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </a>
        </div>
      </div>
    </div>
  );
};

const WhyToChooseUs = () => {
  const data = [
    {
      title: 'Effortless Car Buying ',
      body: "Enjoy a seamless car-buying experience with us. Simply choose your dream car, and we'll handle the rest!",
      logo: [<IoCarSportOutline />],
    },
    {
      title: 'Extensive Service Network',
      body: ' Operating at around 22 touchpoints, we are one of the largest automobile dealerships in Telangana.',
      logo: [<LuNetwork />],
    },
    {
      title: 'Unwavering Reliability',
      body: 'Backed by years of unwavering commitment and expertise, Saboo RKS Motors is a brand synonymous with trust and dependability.',
      logo: [<VscWorkspaceTrusted />],
    },
    {
      title: 'Market Leader',
      body: ' We are Telangana’s No. 1 Maruti Suzuki dealer, an automobile dealer of choice.',
      logo: [<BsTrophy />],
    },
  ];

  return (
    <div className='container px-2 py-10 mx-auto xl:max-w-7xl lg:py-12'>
      <div className='py-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl'>
        WHY TO CHOOSE US
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4  mt-5 duration-500 lg:mt-8 `}
      >
        {data.map((item, index) => (
          <div
            className='  px-2 xl:px-4 py-6 md:rounded-3xl md:hover:-translate-y-2 lg:hover:-translate-y-5  md:shadow-xl lg:hover:shadow-gray-500 duration-500 cursor-pointer  text-center group select-none bg-[#ffffff] md:py-10 lg:py-8 relative delay-100  md:hover:bg-gray-900 md:hover:text-gray-200 border-t'
            key={index}
          >
            <div className='flex justify-center w-full pt-4 mx-auto text-3xl duration-100 lg:text-4xl '>
              {item.logo[0]}
            </div>

            <div className='my-2 text-xl '>{item.title}</div>
            {/* <div className="h-0.5 w-[30%] group-hover:w-[70%] delay-200 bg-black mx-auto mt-2 mb-3 md:group-hover:bg-white duration-500"></div> */}
            <div className='mb-2 text-sm md:text-base'>{item.body}</div>

            <div className='absolute -mt-4 -ml-4 text-6xl font-bold top-1/2 left-1/2 opacity-10'>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className='container px-2 pb-5 mx-auto xl:max-w-7xl '>
      {/* <div className='hidden sm:block'>
          <img
            src={require('../../assets/others/Website_Maruti_Suzuki_Nexa_Summer_Offers_April_offers_are_live_at_Saboo_RKS_Motor.webp')}
            alt='components/Website_Maruti_Suzuki_Nexa_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp'
            className={`hidden w-full sm:block rounded-xl border-b border-gray-300 border-x`}
            loading='lazy'
          />
        </div>
        <div className='sm:hidden'>
          <img
            src={require('../../assets/others/WM_Maruti_Suzuki_Nexa_Summer_Offers_April_offers_are_live_at_Saboo_RKS_Motor.webp')}
            // src={require("../../Website_Mobile_Maruti_Suzuki_Nexa_Year_End_Offers_2024_biggest_offers_are_live_at_Saboo_RKS_Motor (1).webp")}
            // src={require("../../assets/HomePageImages/Website_Mobile_Maruti_Suzuki_Nexa_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor_Nexa.webp")}
            alt='Mobile_Maruti_Suzuki_Nexa_Year_End_Offers_Remember_To_Remember_Offers_Saboo_RKS_Motor_Nexa'
            className='w-full rounded-2xl sm:hidden'
            loading='lazy'
          />
        </div> */}
      <section className=''>
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
          pagination={{
            clickable: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className='select-none mySwiper2 h-28'
        >
          {/* this is the home page banners */}
          {/* <SwiperSlide className='rounded-xl'>
            <Link to='/nexa-car-offers-in-hyderabad'>
              <div className='hidden sm:block'>
                <img
                  src={require('../../assets/others/Website_Maruti_Suzuki_Nexa_August_Independence_Day_Offers_Saboo_RKS_Nexa.webp')}
                  alt='Maruti_Suzuki_Nexa_July_Monsoon_Offers_Saboo_RKS_Nexa'
                  className={`hidden w-full sm:block rounded-xl border-b border-gray-300 border-x`}
                />
              </div>
              <div className='sm:hidden'>
                <img
                  src={require('../../assets/others/Website_Mobile_Maruti_Suzuki_Nexa_August_Independence_Day_Offers_Saboo_RKS_Nexa.webp')}
                  alt='Maruti_Suzuki_Nexa_July_Monsoon_Offers_Saboo_RKS_Nexa_2024'
                  className='w-full rounded-2xl sm:hidden'
                />
              </div>
            </Link>
          </SwiperSlide> */}

          {/* <SwiperSlide className='rounded-xl'>
            <Link to='/book-online-maruti-nexa-car-service'>
              <div className='hidden sm:block'>
                <img
                  src={require('../../assets/others/Website_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp')}
                  // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
                  alt='Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor_Offers'
                  className={`hidden w-full sm:block rounded-xl border-b border-gray-300 border-x`}
                />
              </div>
              <div className='sm:hidden'>
                <img
                  src={require('../../assets/others/WM_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp')}
                  alt='Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor_Mobile_Offers'
                  className='w-full rounded-2xl sm:hidden'
                />
              </div>
            </Link>
          </SwiperSlide> */}
        </Swiper>
      </section>

      {/* <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor.webp")}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
          alt="Website_Maruti_Suzuki_Nexa_Monsoon_July_July_Saboo_RKS_Motor_July_Offers"
          className="hidden w-full duration-500 shadow-lg rounded-xl hover:shadow-gray-500 shadow-gray-400 hover:scale-95 sm:block"
        />
        <img
          src={require("../../assets/HomePageImages/Maruti_Suzuki_Nexa_Awesome__April_Offers_Saboo_RKS_Motor_Mobile.webp")}
          alt="Maruti_Suzuki_Nexa_Monsoon_July_July_Saboo_RKS_Motor_July_Offers"
          className="w-full h-full sm:hidden "
        /> */}
    </div>
  );
};

// Define default props for CarEnq

export default Home;
