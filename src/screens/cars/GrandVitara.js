import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import View360 from '../../components/utils/View360';
import { Tb360View, TbView360 } from 'react-icons/tb';
import { GiReturnArrow } from 'react-icons/gi';
import {
  MdAirlineSeatReclineExtra,
  MdOutlineFileDownload,
} from 'react-icons/md';
import Header from '../../components/Header/Header';
// import ImageViewer from '../../components/Vitara/ImageViewer';

import MobileCarousel from '../../components/Vitara/Extras/MobileCarousel';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { CarComp } from './Invicto';
import { CarEnq2 } from '../../components/Invicto/CarEnq2';
import { products } from '../../constants';
import { useRef } from 'react';
import { GiBeltBuckles, GiSpeedometer } from 'react-icons/gi';
import Seo from '../../components/SEO/seo';
import { vechicle } from '../../constants/seo';

// const width = window.innerWidth;

function GrandVitara() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ once: true });
  }, []);

  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Seo {...vechicle.GrandVitara} />

      <Header />
      <VariantPlayer />
      <CarEnq2 title='BOOK YOUR GRAND VITARA' carName='Grand Vitara' />
      <Variant />
      <SecondVideo />
      <KeyHigh />
      <DesignPhilosophy />

      {/* {width > 425 ? <Carousel /> : <MobileCarousel />} */}
      <div className='hidden pt-2 pb-8 text-white bg-black sm:block'>
        <div className='w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          THE ADVANCED GRAND VITARA
        </div>

        <div className='flex h-[75vh]  gap-1 px-2 my-1'>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3  bg-no-repeat bg-cover bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-27-IEH.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='text-lg font-semibold'>
                INTELLIGENT ELECTRIC HYBRID
              </span>
              <span className='mb-2 font-thin tracking-wider'>
                Rules with revolutionary technology
              </span>
              <div>
                <Link to='/grand-vitara-features-intelligent-electric-hybrid'>
                  <button
                    aria-label='Know more'
                    className='py-2 text-black duration-300 bg-white rounded-lg text-normal md:px-2 lg:px-4 hover:bg-black hover:text-white'
                  >
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-26-Allgrip.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='text-lg font-semibold'>ALLGRIP</span>
              <span className='mb-2 font-thin tracking-wider'>
                Rules with a firm grip
              </span>
              <div>
                <Link to='/grand-vitara-allgrip'>
                  <button
                    aria-label='Know more'
                    className='py-2 text-black duration-300 bg-white rounded-lg text-normal md:px-2 lg:px-4 hover:bg-black hover:text-white'
                  >
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-32-AT.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='text-lg font-semibold'>
                6-SPEED AUTOMATIC TRANSMISSION
              </span>
              <span className='mb-2 font-thin tracking-wider'>
                Rules with utmost comfort
              </span>
              <div>
                <Link to='/grand-vitara-6-speed-automatic-transmission-price'>
                  <button
                    aria-label='know more'
                    className='py-2 text-black duration-300 bg-white rounded-lg text-normal md:px-2 lg:px-4 hover:bg-black hover:text-white'
                  >
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/4 duration-500 rounded-lg border hover:w-2/3 bg-cover bg-no-repeat bg-center bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-33-MT.webp')] ">
            <div className='flex flex-col justify-end h-full p-4 text-white '>
              <span className='text-lg font-semibold'>
                5-SPEED MANUAL TRANSMISSION
              </span>
              <span className='mb-2 font-thin tracking-wider'>
                Rules with a powerful persona
              </span>
              <div>
                <Link to='/grand-vitara-5-speed-manual-transmission-price'>
                  <button
                    aria-label='know more'
                    className='py-2 text-black duration-300 bg-white rounded-lg text-normal md:px-2 lg:px-4 hover:bg-black hover:text-white'
                  >
                    KNOW MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-2 pb-8 text-white bg-black sm:hidden'>
        <div className='w-full py-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          THE ADVANCED GRAND VITARA
        </div>
        <MobileCarousel />
      </div>
      <div className='pt-2 text-white bg-black '>
        <div className='w-full pt-10 pb-8 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
          COLOURS
        </div>
      </div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/vitara-color-banner.webp')] bg-cover bg-no-repeat">
        <div className='max-w-6xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <div className='my-auto mx-5 pt-10 pr-[30]'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/grand-vitara-logo.webp'
                className='p-2'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf'
                className='p-3 bg-black text-white flex items-center max-w-[200px] ml-3 mt-5 rounded'
                target='_blank'
                rel='noreferrer'
                aria-label='Grand Vitara Brochure'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div className='col-span-2'>
              <>
                <div className='mt-24 ml-auto mr-1'>
                  {/* CELESTIAL BLUE */}

                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/NEXA-BLUE.png'
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Celestial_blue.webp"

                    alt='CELESTIAL BLUE'
                    className={tabsColors === 1 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* ARCTIC WHITE */}
                  <img
                    //  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white.webp"
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Arctic-white.png'
                    alt='ARCTIC WHITE'
                    className={tabsColors === 2 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* Midnight Black */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/midnight-black.png'
                    // src="https://az-ci-cdn-prd-nexa-01.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-color/688x360/midnight_black.webp"
                    alt='                   Midnight Black                    '
                    className={tabsColors === 3 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* CHESTNUT BROWN */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/chestnut-brown.png'
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Chestnut_Brown.webp"
                    alt='CHESTNUT BROWN'
                    className={tabsColors === 4 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* GRANDEUR GREY */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Grandeur-grey.png'
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/grandeur_grey.webp"
                    alt='GRANDEUR GREY'
                    className={tabsColors === 5 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* OPPULENT RED */}
                  <img
                    //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red.webp"
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Opulent-red.png'
                    alt='OPPULENT RED'
                    className={tabsColors === 6 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* OPPULENT_RED MIDNIGHT BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Opulent-red-black.png'
                    //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red_midnight_black.webp"
                    alt='OPPULENT_RED MIDNIGHT BLACK'
                    className={tabsColors === 7 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* SPLENDID SILVER */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Splended-silver.png'
                    // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver.webp"
                    alt='SPLENDID SILVER'
                    className={tabsColors === 8 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* SPLENDID SILVER MIDNIGHT BLACK */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Splended-silver-black.png'
                    //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver_midnight_black.webp"
                    alt='SPLENDID SILVER MIDNIGHT BLACK'
                    className={tabsColors === 9 ? 'flex mx-auto' : 'hidden'}
                  />

                  {/* Arctic White with Midnight Black */}
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/new-colors/Arctic-white-black.png'
                    //src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white_midnight_black.webp"
                    alt='Arctic White with Midnight Black '
                    className={tabsColors === 10 ? 'flex mx-auto' : 'hidden'}
                  />
                </div>
                <div className='flex flex-wrap items-center justify-center gap-2'>
                  <div onClick={() => setTabsColors(1)}>
                    <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#163472] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#163472]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 1
                          ? 'w-6 h-6 bg-[#163472] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(2)}>
                    <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 2
                          ? 'w-6 h-6 bg-[#f9f9f9] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(3)}>
                    <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#35312e] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#35312e]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 3
                          ? 'w-6 h-6 border bg-[#35312e] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>
                  <div onClick={() => setTabsColors(4)}>
                    <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#5B4F45] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#5B4F45]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 4
                          ? 'w-6 h-6 border bg-[#5B4F45] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(5)}>
                    <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#464848] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#464848]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 5
                          ? 'w-6 h-6 border bg-[#464848] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(6)}>
                    <div className={tabsColors === 6 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#AC0F0F] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 6
                          ? 'w-6 h-6 border bg-[#AC0F0F] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>
                  <div onClick={() => setTabsColors(8)}>
                    <div className={tabsColors === 8 ? 'relative' : 'hidden'}>
                      <p className='w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x'></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 8
                          ? 'w-6 h-6 bg-[#B6BABD] mr-2'
                          : 'hidden'
                      }
                    ></p>
                  </div>
                  <div onClick={() => setTabsColors(7)}>
                    <div className={tabsColors === 7 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 7
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>

                  <div onClick={() => setTabsColors(9)}>
                    <div className={tabsColors === 9 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute  top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                    </div>
                    <p
                      className={
                        tabsColors !== 9
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>
                  <div onClick={() => setTabsColors(10)}>
                    <div className={tabsColors === 10 ? 'relative' : 'hidden'}>
                      <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-[10px] border-t border-x"></p>
                      <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                      <p className='border-t-8 arrow-dropdown-selected-car'></p>
                    </div>
                    <p
                      className={
                        tabsColors !== 10
                          ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-2 border-2"
                          : 'hidden'
                      }
                    ></p>
                  </div>
                </div>
                <div className='mb-4 '>
                  <p
                    className={
                      tabsColors === 1
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1  '
                        : 'hidden'
                    }
                  >
                    Celestial Blue
                  </p>
                  <p
                    className={
                      tabsColors === 2
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Arctic White
                  </p>
                  <p
                    className={
                      tabsColors === 3
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Midnight Black
                  </p>
                  <p
                    className={
                      tabsColors === 4
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Chestnut Brown
                  </p>
                  <p
                    className={
                      tabsColors === 5
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Grandeur Grey
                  </p>
                  <p
                    className={
                      tabsColors === 6
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Oppulent Red
                  </p>
                  <p
                    className={
                      tabsColors === 7
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Oppulent Red with Midnight Black
                  </p>
                  <p
                    className={
                      tabsColors === 8
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Splendid Silver
                  </p>
                  <p
                    className={
                      tabsColors === 9
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Splendid Silver with Midnight Black
                  </p>
                  <p
                    className={
                      tabsColors === 10
                        ? 'mt-4 text-sm font-medium text-center uppercase lg:text-xl backdrop-blur-sm md:text-base bg-black bg-opacity-10 rounded-full py-1'
                        : 'hidden'
                    }
                  >
                    Arctic White with Midnight Black
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      {/* <ImageViewer /> */}
      {/* <OnRoadPrice title={"Grand Vitara"} /> */}
      {/* <Features /> */}

      {/* <ImageOptions /> */}
      {/* <ImageOptions/> */}

      <GV360 />
      <Safety />
      <CarComp details={products[4]} />
      <CarEnq2 title='BOOK YOUR GRAND VITARA' carName='GRAND VITARA' />
    </>
  );
}

const VariantPlayer = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the video source URL based on the browser
  const videoSource = isSafari
    ? 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/header_video/Grand+Vitara_Safari.mov'
    : 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/Grand+vitara.webm';

  return (
    <div className='relative top-0 left-0 w-full h-screen bg-black '>
      <video
        className='object-cover w-full h-full '
        preload='metadata'
        poster={require('../../assets/cars/New_Maruti_Grand_Vitara_car_price_in_Hyderabad.webp')}
        // poster="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/Jimny_HeaderBanner_1500x634+webp.webp"
        loop
        autoPlay
        playsInline
        muted
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
          THE ADVANCED
        </div>
        <div
          data-aos='fade-right'
          data-aos-delay='400'
          data-aos-duration='500'
          className='pb-1 font-serif text-5xl uppercase lg:text-8xl'
        >
          GRAND VITARA
        </div>
        <div
          data-aos='fade-right'
          data-aos-delay='600'
          data-aos-duration='1000'
          className='mb-2 text-2xl uppercase lg:text-5xl lg:mb-4'
        >
          THE LEAGUE OF EXTRAORDINARY
        </div>
        <a
          href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf'
          target='_blank'
          rel='noreferrer'
          aria-label='Grand Vitara Brochure'
        >
          <button
            data-aos='fade-right'
            data-aos-delay='800'
            data-aos-duration='1000'
            className='px-4 py-2 uppercase border hover:text-white hover:bg-black hover:border-black lg:px-8'
            aria-label='Download Brochure'
          >
            BROCHURE
          </button>
        </a>
      </div>
    </div>
  );
};

const Variant = () => {
  const [price, setPrice] = useState('10,76,500');
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
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black '
              aria-labelledby='Select Car Variant'
            >
              {/* 4th */}
              <option value='10,76,500'>Smart Hybrid Sigma</option>
              <option value='15,93,000'>Smart Hybrid MT Alpha - O (DT) </option>
              <option value='15,77,600'>Smart Hybrid MT Alpha - O </option>
              <option value='15,35,100'>Smart Hybrid MT Alpha (DT) </option>
              <option value='15,19,700'>Smart Hybrid MT Alpha</option>
              <option value='14,43,400'>Smart Hybrid MT Zeta - O (DT)</option>
              <option value='14,28,000'>Smart Hybrid MT Zeta - O</option>
              <option value='13,85,400'>Smart Hybrid MT Zeta (DT)</option>
              <option value='13,70,000'>Smart Hybrid MT Zeta</option>
              <option value='12,09,700'>Smart Hybrid MT Delta</option>

              {/* 5th */}
              <option value='18,73,000'>All Grip Alpha - O (DT) </option>
              <option value='18,57,600'>All Grip Alpha - O </option>
              <option value='18,15,100'>All Grip Alpha (DT) </option>
              <option value='17,99,700'>All Grip Alpha</option>

              {/* 3rd set */}
              <option value='17,28,000'>Smart Hybrid AT Alpha - O (DT) </option>
              <option value='17,12,600'>Smart Hybrid AT Alpha - O </option>
              <option value='16,70,100'>Smart Hybrid AT Alpha (DT) </option>
              <option value='16,54,700'>Smart Hybrid AT Alpha</option>
              <option value='15,78,400'>Smart Hybrid AT Zeta - O (DT)</option>
              <option value='15,63,000'>Smart Hybrid AT Zeta - O</option>
              <option value='15,20,400'>Smart Hybrid AT Zeta (DT)</option>
              <option value='15,05,000'>Smart Hybrid AT Zeta </option>
              <option value='13,44,700'>Smart Hybrid AT Delta</option>
              {/* 2nd set */}
              {/* <option value='17,01,000'>Smart Hybrid MT 4W Alpha</option>
              <option value='17,17,000'>Smart Hybrid MT 4W Alpha (DT)</option> */}
              {/* 1set */}
              <option value='19,72,400'>
                Intelligent Electric Hybrid eCVT Alpha+ - O (DT){' '}
              </option>

              <option value='19,57,000'>
                Intelligent Electric Hybrid eCVT Alpha+ - O
              </option>
               <option value='19,65,600'>
                Intelligent Electric Hybrid eCVT Alpha+ (DT)
              </option>

              <option value='19,50,200'>
                Intelligent Electric Hybrid eCVT Alpha+
              </option>
              <option value='18,65,700'>
                Intelligent Electric Hybrid eCVT Zeta+ - O (DT)
              </option>
              <option value='18,50,300'>
                Intelligent Electric Hybrid eCVT Zeta+ - O
              </option>
              <option value='18,07,000'>
                Intelligent Electric Hybrid eCVT Zeta+ (DT)
              </option>
              <option value='17,91,600'>
                Intelligent Electric Hybrid eCVT Zeta+
              </option>
              <option value='16,63,300'>
                Intelligent Electric Hybrid eCVT Delta+
              </option>

              {/* CNG set */}
              <option value='12,99,700'>CNG - MT Delta</option>
              <option value='14,60,000'>CNG - MT Zeta </option>
               <option value='14,75,400'>CNG - MT Zeta (DT)</option>
            </select>
          </div>
          <div className='text-center text-gray-200'>
            <p className='text-2xl font-bold'>₹ {price}*</p>
            <p className='pb-1 text-xl tracking-wide'>
              Ex-Showroom Price - Hyderabad
            </p>

            <div className='text-xs font-light text-red-200'>
              <sup>*</sup>Alpha+ & Zeta+ are applicable only for Intelligent
              Electric Hybrid Variants
            </div>
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

const SecondVideo = () => {
  return (
    <div className='relative  bg-black flex flex-col xl:max-h-[80vh] overflow-hidden'>
      <div className='w-full py-6 text-center text-white lg:absolute lg:pt-10'>
        <div className='mb-2 text-2xl font-medium lg:text-3xl'>
          RULE EVERY ROAD
        </div>
        <div className=''>
          Every road is a new story, a new discovery and there is a new breed of
          SUVs that can conquer them all. It is the Advanced Grand Vitara{' '}
          <br className='hidden lg:block' /> and it’s here to Rule Every Road.
        </div>
      </div>
      <video
        className='w-full 2xl:-mt-52'
        preload='none'
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
        poster='https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp'
      >
        <source
          type='video/mp4'
          data-src='//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-title-video/end-shot-grand-vitara.mp4'
          //  src="//nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-title-video/end-shot-grand-vitara.mp4"
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/END+SHOT+GRAND+VITARA.mp4'
        />
      </video>
    </div>
  );
};

const KeyHigh = () => {
  const videoRef = useRef(null);
  const [playingSegment, setPlayingSegment] = useState(0);
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  const jumpToTime = (timeInSeconds, segment) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeInSeconds;
      videoRef.current.play();
      setPlayingSegment(segment);
    }
  };
  useEffect(() => {
    if (videoRef.current) {
      const videoNode = videoRef.current; // Capture the current value of videoRef.current
      const handleTimeUpdate = () => {
        const currentTime = videoNode.currentTime;

        if (currentTime >= 0 && currentTime < 1) {
          setPlayingSegment(0);
        } else if (currentTime >= 1 && currentTime < 2) {
          setPlayingSegment(1);
        } else if (currentTime >= 2 && currentTime < 4) {
          setPlayingSegment(2);
        } else if (currentTime >= 5 && currentTime < 7) {
          setPlayingSegment(3);
        } else if (currentTime >= 8 && currentTime < 9) {
          setPlayingSegment(4);
        } else if (currentTime >= 10 && currentTime < 12) {
          setPlayingSegment(5);
        } else if (currentTime >= 12 && currentTime < 14) {
          setPlayingSegment(6);
        } else if (currentTime >= 14 && currentTime < 16) {
          setPlayingSegment(7);
        } else if (currentTime >= 16 && currentTime < 18) {
          setPlayingSegment(8);
        } else if (currentTime >= 18) {
          setPlayingSegment(9);
        }
      };

      videoNode.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        videoNode.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, []);

  return (
    <div className='overflow-hidden text-white bg-black '>
      <div className='w-full pt-10 pb-6 text-3xl text-center uppercase sm:text-4xl md:text-5xl'>
        KEY HIGHLIGHTS
      </div>

      <div
        className='top-0 left-0 w-full  md:h-[85vh] relative  '
        onContextMenu={handleContextMenu}
      >
        <video
          className='object-cover w-full h-full mx-auto overflow-hidden '
          // className=" md:h-[84%] mx-auto object-cover  rounded-xl overflow-hidden"
          autoPlay='autoplay'
          loop
          muted
          playsInline
          ref={videoRef}
          poster='https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp'
        >
          <source
            className='w-30 h-30'
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/Desktop.mp4'
            type='video/mp4'
          />
        </video>
        {/* <video
          className="h-[70%] px-1 sm:hidden mx-auto object-cover  rounded overflow-hidden"
          autoPlay="autoplay"
          loop
          muted
          ref={videoRef}
          poster="https://nexaprod3.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp"
        >
          <source
            className="w-30 h-30"
            src="https://www.nexaexperience.com/slider_html_code/images/Mobile.mp4"
            type="video/mp4"
          />
        </video> */}
        {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-mobile-banner-without-book-now.webp"
        alt=""
        className="w-full h-screen sm:hidden"
      /> */}
        <div className='w-full py-4 text-xl text-center lg:text-2xl md:hidden'>
          {playingSegment === 0
            ? 'Bold & Expressive Font Fascia'
            : playingSegment === 1
            ? '17" Precision Cut Alloy Wheels'
            : playingSegment === 2
            ? 'Ventilated Front Seats'
            : playingSegment === 3
            ? 'Digital Multi-Information Display'
            : playingSegment === 4
            ? 'Head Up Display'
            : playingSegment === 5
            ? 'Smartplay Pro+'
            : playingSegment === 6
            ? 'Wireless Charger'
            : playingSegment === 7
            ? 'All Black Interior With Champagne Gold Accents'
            : playingSegment === 8
            ? 'Panoramic Sunroof'
            : playingSegment === 9 && 'LED Stop Lamp'}
        </div>
        <div className='absolute w-full bottom-10 '>
          <div className='hidden px-4 py-2 mx-auto mb-4 text-lg text-center text-black duration-500 bg-white bg-opacity-50 rounded-full cursor-default select-none w-min whitespace-nowrap hover:bg-opacity-100 md:block'>
            {playingSegment === 0
              ? 'Bold & Expressive Font Fascia'
              : playingSegment === 1
              ? '17" Precision Cut Alloy Wheels'
              : playingSegment === 2
              ? 'Ventilated Front Seats'
              : playingSegment === 3
              ? 'Digital Multi-Information Display'
              : playingSegment === 4
              ? 'Head Up Display'
              : playingSegment === 5
              ? 'Smartplay Pro+'
              : playingSegment === 6
              ? 'Wireless Charger'
              : playingSegment === 7
              ? 'All Black Interior With Champagne Gold Accents'
              : playingSegment === 8
              ? 'Panoramic Sunroof'
              : playingSegment === 9 && 'LED Stop Lamp'}
          </div>
          <div className='hidden md:block container mx-auto bg-[#ffffff39] rounded-2xl '>
            <div className='relative'>
              <div className='relative flex justify-between '>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(0, 0)}
                    className={`bg-black h-full w-full rounded-full `}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(1, 1)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(2, 2)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(5, 3)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(8, 4)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(10, 5)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(12, 6)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(14, 7)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(16, 8)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>
                <div
                  className={`h-2.5 w-2.5 z-10 cursor-pointer hover:border border-gray-200 rounded-full`}
                >
                  <div
                    onClick={() => jumpToTime(18, 9)}
                    className={`bg-black h-full w-full rounded-full`}
                  ></div>
                </div>

                {/* <div
                className={`h-4 w-4  p-1 z-10 cursor-pointer  border-2 border-gray-200 rounded-full absolute duration-500 transition-all  ${
                  playingSegment === 3
                    ? "ml-[132px]"
                    : playingSegment === 2
                    ? "ml-[44px]"
                    : playingSegment === 1
                    ? "mr-[44px]"
                    : playingSegment === 0 && "mr-[132px]"
                }`}
              ></div> */}
              </div>
              <div
                className={`${
                  playingSegment === 0
                    ? 'w-[0%]'
                    : playingSegment === 1
                    ? 'w-[11.11%]'
                    : playingSegment === 2
                    ? 'w-[22.22%]'
                    : playingSegment === 3
                    ? 'w-[33.33%]'
                    : playingSegment === 4
                    ? 'w-[44.44%]'
                    : playingSegment === 5
                    ? 'w-[55.55%]'
                    : playingSegment === 6
                    ? 'w-[66.66%]'
                    : playingSegment === 7
                    ? 'w-[77.77%]'
                    : playingSegment === 8
                    ? 'w-[88.88%]'
                    : 'w-[100%]'
                } h-0.5 bg-white duration-500 absolute top-1 `}
              ></div>
            </div>
          </div>
        </div>
        {/* <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/webpage-fronx-banner.webp'
        alt=''
      /> */}
        {/* <video className='w-screen' autoPlay='autoplay' loop>
        <source
          className='w-30 h-30'
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/video/NEXA+FRONX++05SEC++110123+C2C+MUTE.mp4'
          type='video/mp4'
        />
      </video> */}
      </div>
    </div>
  );
};

const DesignPhilosophy = () => {
  return (
    <div className='relative pt-10 text-white bg-black lg:pt-16'>
      <div className='w-full text-3xl text-center uppercase lg:py-6 sm:text-4xl md:text-5xl'>
        DESIGN PHILOSOPHY
      </div>
      <div className='z-10 w-full h-full pt-6 lg:absolute lg:pt-12'>
        <div className='container flex px-1 mx-auto '>
          <div className='lg:w-1/3 xl:w-1/4'>
            <div className='pb-4 text-xl italic font-medium uppercase lg:text-2xl lg:pb-8'>
              THE GRAND VITARA IS BORN OUT OF THE PASSION OF SUZUKI DESIGN AND
              ENGINEERING.
            </div>
            <div className='pb-4 font-light text-justify lg:pb-8 lg:text-left'>
              Featuring a distinct exterior design, sophisticated interiors,
              segment leading features and industry redefining fuel efficiency,
              The Grand Vitara is an expression of our commitment towards
              excellence.
            </div>
            <div className='px-4 py-2 mb-4 text-black bg-white cursor-pointer select-none w-min whitespace-nowrap'>
              Know More
            </div>
          </div>
        </div>
      </div>
      <div className='lg:h-[60vh] overflow-hidden'>
        <video
          className='w-full '
          autoPlay
          loop
          muted
          playsInline
          poster='https://nexaprod6.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/banner/poster-img.webp'
        >
          <source
            className='w-full h-full'
            // src="https://nexaprod1.azureedge.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-philosophy/vid-11.mp4"
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/02+FRONT.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

function Safety() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='container mx-auto mt-6 text-center '>
        <div className='pb-4 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:pt-8 '>
          SAFETY
        </div>
        <span className='text-md lg:text-lg'>
          Reassurance of Safety on Every Drive
        </span>
      </div>
      <div className='py-4 text-2xl font-medium text-center lg:text-3xl '></div>
      <div className='container relative flex flex-col items-center justify-center mx-auto -mt-10'>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/interior/car-image.webp'
          alt='Grand Vitara Safety Features'
          className='m-28'
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
        <div className='absolute left-[10%]  bottom-[58%]    lg:flex-col md:items-start group hidden lg:flex '>
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
        <div className='absolute left-[78%]  bottom-[58%] md:items-start group hidden lg:flex lg:flex-col '>
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

        <div className='absolute left-[77%]  top-[45%]  md:items-start group hidden lg:block '>
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
          aria-label='6 Air Bags to take the impact before it reaches you.'
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

const ImageOptions = () => {
  return (
    <div className='container px-5 mx-auto md:px-0'>
      <div className='grid p-8 shadow-lg sm:grid-cols-2 '>
        <div>
          <img
            src='https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:6bfb5355-eff0-4b85-8440-414d0355dced/as/GV_Wheel_Desktop_Image.png?width=750&id=1'
            alt='saboo-nexa-ignis-exterior-front-grill'
            className='w-full'
          />
        </div>
        <div className='p-8 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold '>
            New Striking 17-inch Machined-Cut Alloy Wheels
          </p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            lead the way for the Grand Vitara’s bold design — commanding,
            dynamic, and built to dominate
          </p>
        </div>
      </div>

      <div className='grid p-8 shadow-lg sm:grid-cols-2'>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Premium Crafted Chrome Grille</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>Gives a strong and sophisticated presence</p>
        </div>
        <div>
          <img
            src='https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:35e03d4a-826c-4ecb-ad3b-bf3a380809a5/as/GV_Grille_Desktop_Image.png?width=750&id=1'
            alt='saboo-nexa-ignis-exterior-back'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid p-8 shadow-lg sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-side-shot.webp'
            alt='saboo-nexa-ignis-exterior-side-shot'
            className='w-full'
          />
        </div>
        <div className='p-8 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>High SUV-like Stance</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The New Ignis has a high SUV-like Stance which makes it easier to
            get in and off, coupled with a higher seating that allows a great
            road visibility.
          </p>
        </div>
      </div>

      <div className='grid p-8 shadow-lg sm:grid-cols-2'>
        <div className='mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Toughened Exterior</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            Adding to the toughness, the New Ignis comes with stunning 15”
            All-Black Alloy Wheels, All-Around Cladding and Sturdy New Front &
            Rear Skid Plates.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Ignis/exterior/saboo-nexa-ignis-exterior-Toughened.webp'
            alt='saboo-nexa-ignis-exterior-Toughened'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default GrandVitara;

const GV360 = () => {
  return (
    <div
      className='relative bg-center bg-no-repeat bg-cover'
      style={{
        backgroundImage: "url('https://your-image-url-here.jpg')",
      }}
    >
      <div className='bg-black bg-opacity-50'>
        {/* Small screen title */}
        <div className='text-center text-black'>
          <div className='w-full pt-10 pb-2 text-3xl text-center uppercase sm:text-4xl md:text-5xl lg:hidden'>
            360
            <sup>
              <span className='text-lg'>0</span>
            </sup>{' '}
            View
          </div>
          <div className='pb-4 text-black lg:hidden'>
            Take A 360 Degree Look Around The Grand Vitara And Get To Know It
            Better
          </div>
        </div>

        {/* View360 Component */}
        <div className='relative w-full max-w-7xl mx-auto px-4 h-[200px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[670px] '>
          {/* Force View360 container height */}
          <div className='flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='w-full h-full '>
              <View360
                path='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/360'
                count={37}
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
          <div className='absolute flex-col items-center hidden w-full text-white lg:flex top-6'>
            <div className='text-4xl font-bold text-black uppercase'>
              360
              <sup>
                <span className='text-lg'>0</span>
              </sup>{' '}
              View
            </div>
            <div className='mt-2 text-lg text-black'>
              Take A 360 Degree Look Around The Grand Vitara And Get To Know It
              Better
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
