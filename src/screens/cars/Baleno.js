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
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Seo from '../../components/SEO/seo';
import { vechicle } from '../../constants/seo';

function Baleno() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Baleno_safari.mov'
    : 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/baleno/Baleno.webm';

  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Seo {...vechicle.baleno} />
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
            poster={require('../../assets/cars/Nexa_Baleno_offers _in_Hyderabad.webp')}
            // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno/1.webp"
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
              THE NEW AGE
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
              TECH GOES BOLD
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
      <BalenoFeature />
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
                {/* Granite-Grey */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/CelestialBlue.webp'
                  alt='Saboo-Nexa-Baleno-Colours-CelestialBlue'
                  className={
                    tabsColors === 1
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Nexa-Blue */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/ArticWhite.webp'
                  alt='Saboo-Nexa-Baleno-Colours-NEXA-ArticWhite'
                  className={
                    tabsColors === 2
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Splendid Silver */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/SplendidSilver.webp'
                  alt='Saboo-Nexa-Baleno-Colours-Splendid-Silver'
                  className={
                    tabsColors === 3
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Grandeur Grey */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/GrandeurGrey.webp'
                  alt='Saboo-Nexa-Baleno-Colours-Grandeur-Grey'
                  className={
                    tabsColors === 4
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Opulant Red */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/OpulantRed.webp'
                  alt='Saboo-Nexa-Baleno-Colours-Opulant-Red'
                  className={
                    tabsColors === 5
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Luxe Beige */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/colors/LuxeBeige.webp'
                  alt='Saboo-Nexa-Baleno-Colours-Luxe-Beige'
                  className={
                    tabsColors === 6
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />

                {/* Peral Midnight Black */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/baleno/colors/Desktop_PearlMidnightBlack_810x411.webp'
                  alt='Saboo-Nexa-Baleno-Peral-Midnight-Black'
                  className={
                    tabsColors === 7
                      ? 'lg:h-[415px] lg:mt-32 ml-[14%] mr-auto'
                      : 'hidden'
                  }
                />
              </div>
              <div className='flex items-center justify-center mb-3'>
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#31416d] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#31416d]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? 'w-6 h-6 bg-[#31416d] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#ffffff] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#ffffff]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2 ? 'w-6 h-6 bg-[#ffffff] mr-2' : 'hidden'
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
                    <p className='w-6 h-6 bg-[#545454] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#545454]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4 ? 'w-6 h-6 bg-[#545454] mr-2' : 'hidden'
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
                    <p className='w-6 h-6 bg-[#704e40] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#704e40]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 6 ? 'w-6 h-6 bg-[#704e40] mr-2' : 'hidden'
                    }
                  ></p>
                </div>
                <div onClick={() => setTabsColors(7)}>
                  <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-black mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='border-t-8 border-black arrow-dropdown-selected-car'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 7 ? 'w-6 h-6 bg-black mr-2' : 'hidden'
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
                Pearl Arctic White
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
                Luxe Beige
              </p>
              <p
                className={
                  tabsColors === 7
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Pearl Midnight Black
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Variant /> */}
      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={'Baleno'} /> */}
      {/* <Features /> */}
      <Bi360 />
      <BalenoSafety />
      <div className='pt-2 '>
        <div className='w-full pt-12 pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          Design
        </div>
      </div>
      <ImageOptions />
      <CarComp details={products[6]} />
      <CarEnq2 title='BOOK YOUR BALENO' carName='Baleno' />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('5,98,900');
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
              <option value='5,98,900'>MT Sigma </option>
              <option value='6,79,900'>MT Delta</option>
              <option value='7,69,900'>MT Zeta</option>
              <option value='8,59,900'>MT Alpha </option>
              <option value='7,69,900'>CNG - MT Delta </option>
              <option value='8,59,900'>CNG - MT Zeta </option>
              <option value='7,29,900'>AGS Delta </option>
              <option value='8,19,900'>AGS Zeta </option>
              <option value='9,09,900'>AGS Alpha </option>
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

const ImageOptions = () => {
  return (
    <div className='container px-2 mx-auto md:px-0'>
      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-exterior-liquid-flow.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Lamp'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
        <div className='py-2 mx-auto my-auto space-y-3 md:p-8'>
          <p className='text-3xl font-medium '>Enhanced Liquid Flow Design</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The New Age Baleno is a sight to behold. Carrying forward the Liquid
            Flow Aesthetic, it exudes boldness from every curve. Its dynamic
            stance with strong shoulders and sharp character lines flow with
            harmony, from front to back. So, no matter if you see it coming, or
            passing by, you won’t be able to look away.
          </p>
        </div>
      </div>

      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='p-2 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-medium'>NEXWave Grille</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The signature NEXWave Grille is the first thing you see when you
            look upon the New Age Baleno. And it gets harder to look anywhere
            else. This artistically crafted grille with accentuated chrome
            strips gives Baleno a wider look, making it even more intimidating
            than ever before.
          </p>
        </div>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-grille.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Front-Gril'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
      </div>

      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-alloy-wheels.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Alloy-Wheel'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
        <div className='p-2 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-medium'>
            16-Inch Precision Cut Alloy Wheels
          </p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            They are bold. They are sharp. And they drive the style quotient of
            the New Age Baleno to a whole new level. Even when parked. These new
            16-Inch Precision Cut Alloy Wheels are crafted to perfection and are
            made to stand out.
          </p>
        </div>
      </div>

      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='p-2 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-medium'>Interior Design</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The New Age Baleno is more than just good looks. It is comfort
            reimagined. So, immerse yourself in the state-of-the-art cabin
            crafted with sleek chrome accentuation with smooth and natural flow
            lines. Bask in the glory of the Dual-tone Interiors with Piano Black
            inserts. And relax in the lap of the comfortable seats with deep
            curves for an indulgent experience like never before.
          </p>
        </div>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-1177x751-interior.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
      </div>
      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-749x751-LED-DRLs.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
        <div className='p-2 mx-auto my-auto space-y-3 md:p-8'>
          <p className='text-3xl font-medium'>
            NEXTre' LED Rear Combination Lights
          </p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The New Age Baleno never ceases to bowl you over with its looks.
            Even when viewed from behind. The sharp and stylish NEXTre’ LED Rear
            Combination Lights flow and merge effortlessly with the Liquid Flow
            Aesthetics of the Baleno, adding more flair to its bold looks.
          </p>
        </div>
      </div>
      <div className='grid px-2 py-4 shadow-lg sm:grid-cols-2 md:p-8 '>
        <div className='p-2 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-medium'>
            LED Projector Headlamps With NEXTre’ LED DRLs
          </p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The night is when the New Age Baleno truly comes alive. Driving down
            the beautiful tarmac, the Projector Headlamps with signature NEXTre’
            LED DRLs make a bold impression that is hard to forget. These
            crystal-clear Headlamps and sharp DRLs can brighten up any road. Day
            or night. Moreover, they can detect the lighting conditions around
            you and automatically turn on or off.
          </p>
        </div>
        <div className='overflow-hidden cursor-pointer'>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Baleno/exterior/submenu-design-751x379-Rear-lamps.webp'
            alt='Saboo-Nexa-Maruti-Suzuki-Baleno-Side-Lamp'
            className='w-full duration-500 hover:scale-105'
          />
        </div>
      </div>
    </div>
  );
};

const BalenoFeature = () => {
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
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_2.webp?la=en&hash=BA6CFC7780CD156D01B663302B01F5FC',
      title: 'Electronic Stability Program      ',
      body: 'The New Age Baleno comes equipped with Electronic Stability Program (ESP), which helps in improved vehicle control during cornering, immediate lane changes to avoid obstacles and provides more stability while driving on uneven or broken roads.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_3.webp?la=en&hash=45AE746094CB9E6C69FB51BE64D5D8D3',
      title: '6 Airbags',
      body: 'For the first time ever, Baleno gets 6 Airbags (Front, Side, and Curtain), that provide advanced safety in the event of a collision.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_4.webp?la=en&hash=B594B2ABD8E2EF170C610AF8D408DD6F',
      title: 'ISOFIX Child Seat Anchorages',
      body: 'The New Age Baleno comes with ISOFIX Child Seat anchorages, for that perfect drive with your little ones.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/seat-belt-reminder.webp?la=en&hash=EF35E5EFEE8447C3207EC3E06519D4F6',
      title: 'Seat Belt Reminder',
      body: 'The New Age Baleno comes with seat belt reminders for the driver and all passengers with an indication and a buzzer. Seat belt reminder comes on unless all rear passenger’s seat belts are fastened irrespective of the presence or absence of passenger.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/baleno_safety_1170x521_6.webp?la=en&hash=A21C0366728942F018BD6F560132E461',
      title: 'Rear Parking Assist Sensors',
      body: 'Parking in tough spots is now easier in the New Age Baleno as it is equipped with Rear Parking Assist Sensors.',
    },
    {
      img: 'https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/features/safety_banner_7.webp?la=en&hash=96517A0D2CA132573D1677155130EFD8',
      title: 'Hill Hold Assist',
      body: 'Hill Hold Assist helps the car to not to go back after you leave break and before you accelerate.',
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
                src='https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-hud.webp'
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
                src='https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-360-camera-view.webp'
                alt='360 View Camera'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'> 360 View Camera</div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Intelligence is all about knowing what’s around you. And the
                  New Age Baleno lets you see everything around you with the 360
                  View Camera. Experience the ease of driving and parking in
                  tight spaces with multiple view modes (3 each for front and
                  back) like never before. Moreover, the Approaching Object
                  Detection (AOD) up to 8 meters intuitively alerts you when
                  deemed necessary. It also offers 3D views of the complete
                  vehicle surroundings as well. And if that was not all, the
                  steering based dynamic grid-lines smartly pave the way for
                  you, into the spot.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full'>
              <img
                src='https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-apple-carplay.webp'
                alt='22.86 CM HD Smartplay Pro+'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  22.86 CM HD Smartplay Pro+
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  Intuitive. Instinctive. Intelligent. That’s the experience
                  waiting for you inside the New Age Baleno. Now equipped with
                  the all-new 22.86 Cm Full HD touch Screen Display. It comes
                  with an intuitive user interface with Advanced Voice Assist to
                  offer seamless connectivity. And it also boasts of premium
                  superior acoustic tuning experience “Surround Sense” powered
                  by ARKAMYS. Moreover, you can enjoy wireless connectivity for
                  Android Auto*** & Apple CarPlay****
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='relative'>
            <div className='w-full '>
              <img
                src='https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/baleno/technology/technology-1080x420-suzuki-connect.webp'
                alt='Next Generation Suzuki Connect'
              />
              <div className='w-full pt-4 text-left '>
                <div className='pb-2 font-medium'>
                  Next Generation Suzuki Connect
                </div>
                <div className='text-sm font-light lg:pr-40 md:text-base'>
                  The New Age Baleno is smarter than ever with the Next
                  Generation Suzuki Connect - Advanced Telematics Solution,
                  bringing a host of intelligent features to your fingertips.
                  Remotely access the headlamps, hazard lights, doors, alarm,
                  engine immobiliser as well as monitor your car’s battery
                  health in real-time. It also boasts of a host of safety &
                  security functions along with insightful trip and driving
                  behavior report. This is not all, due to its compatibility
                  with Alexa Skill as well as your smartwatch, the New Age
                  Baleno offers a connected car experience in its true sense.
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
        <View360
          path={
            'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/new_baleno'
          }
          count={34}
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
            Take A 360 Degree Look Around The New Age Baleno And Get To Know It
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

export default Baleno;
