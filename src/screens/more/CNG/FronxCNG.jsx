import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import './fronx.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import { MdOutlineFileDownload } from 'react-icons/md';

import { Tab } from '@headlessui/react';
import { fronx } from '../../../constants/cars';
import { CarEnq2 } from '../../../components/Invicto/CarEnq2';
import Seo from '../../../components/SEO/seo';
import { CNGvehicles } from '../../../constants/seo';

const FronxCNG = () => {
  return (
    <>
      <Seo {...CNGvehicles.fronx} />

      <Header />

      {/* <div>
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-desktop.webp'
          className='hidden object-cover w-full md:block '
          alt='SCNG Banner'
          srcSet=''
        />
        <img
          src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/GV-cng-banner-mobile.webp'
          className='block w-full md:hidden '
          alt='SCNG Banner'
          srcSet=''
        />
      </div> */}
      <div className='pb-[67px] bg-black sm:pb-[120px] lg:pb-[135px]'></div>
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fornx-cng-mobwebp.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng.webp')]  bg-cover bg-no-repeat md:h-[40vh] lg:h-[60vh] h-[60vh] ">
        <div className='flex items-end h-full max-w-6xl '>
          {/* <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-xl6.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              /> */}
          <a
            href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure_Saboo+RKS.6b9c2f109c812f47efb9.pdf'
            className='flex items-center p-3 mb-10 ml-20 bg-white rounded h-min md:bg-black md:text-white w-min md:mb-20 whitespace-nowrap '
            target='_blank'
            rel='noreferrer'
            aria-label='Fronx CNG Brochure Download Link'
          >
            <MdOutlineFileDownload size={20} />
            &nbsp;Download Brochure
          </a>
        </div>
      </div>
      {/* <OnRoadPrice title={"FRONX CNG"} /> */}
      <CarEnq2 title='BOOK YOUR FRONX S-CNG' carName='FRONX CNG' />
      <div className='container mx-auto my-8 text-center '>
        <div className='py-4 pt-8 text-2xl font-medium'>
          Meet the green side to your new drive
        </div>
        <span className=''>
          The ultimate blend of style and performance, gets a green streak.
          Experience the thrill of sustainable FRONXING with cutting-edge S-CNG
          technology, delivering optimum power and fuel efficiency. Embrace
          eco-friendly mobility with minimal carbon footprint while enjoying
          unmatched power.
        </span>
      </div>
      <FronxCNGSlider />
      {/* <div className='container pb-6 mx-auto my-6 text-center'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container px-6 py-2 md:px-12 lg:px-24 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className='py-4 text-2xl font-medium text-center lg:pt-10 '>
        FRONX S-CNG SPECIFICATIONS
      </div>
      <div className='py-6 pb-20 mx-auto max-w-7xl '>
        <div className='grid gap-4 md:grid-cols-4 md:space-x-4 lg:space-x-1'>
          <Tab.Group>
            <div className='col-span-1'>
              <p className='w-full p-4 mb-1 ml-3 text-white bg-black'>
                Features
              </p>
              <Tab.List className='space-x-3'>
                {/* Engine */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/engine.png'
                      alt='engine'
                      className='w-5 h-5'
                    />
                    <p>Engine</p>
                  </div>
                </Tab>

                {/* Transmission */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/transmission.png'
                      alt='transmission'
                      className='w-5 h-5'
                    />
                    <p>Transmission</p>
                  </div>
                </Tab>

                {/* Dimensions */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/dimensions.png'
                      alt='dimensions'
                      className='w-5 h-5'
                    />
                    <p>Dimensions</p>
                  </div>
                </Tab>

                {/* Weight */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/weight.png'
                      alt='Weight'
                      className='w-5 h-5'
                    />
                    <p>Weight</p>
                  </div>
                </Tab>

                {/* Brakes */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/brakes.png'
                      alt='Brakes'
                      className='w-5 h-5'
                    />
                    <p>Brakes</p>
                  </div>
                </Tab>

                {/* Suspension */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/suspension.png'
                      alt='Suspension'
                      className='w-5 h-5'
                    />
                    <p>Suspension</p>
                  </div>
                </Tab>

                {/* Tyre Size */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/tyre.png'
                      alt='Tyre Size'
                      className='w-5 h-5'
                    />
                    <p>Tyre Size</p>
                  </div>
                </Tab>

                {/* Fuel Tank */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/fuel.png'
                      alt='Fuel Tank'
                      className='w-5 h-5'
                    />
                    <p>Fuel Tank</p>
                  </div>
                </Tab>

                {/* Seating Capacity */}
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-gray-300 text-gray-700 mb-1 w-full ml-3'
                      : 'bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3'
                  }
                >
                  <div className='flex items-center p-4 space-x-2'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/seat.png'
                      alt='Seating Capacity'
                      className='w-5 h-5'
                    />
                    <p>Seating Capacity</p>
                  </div>
                </Tab>
              </Tab.List>
            </div>
            <div className='col-span-3 px-3'>
              <Tab.Panels>
                {/* Engine */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>
                      Specifications
                    </div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.engine.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.specs}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *Fuel efficiency as certified by test agency under rule 115
                    of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Transmission */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.transmission.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Dimensions */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.dimensions.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Weight */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.weight.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Brakes */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.brakes.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Suspension */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.suspension.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Tyre Size */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.tyre.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Fuel Tank */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.fuel.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>

                {/* Seating Capacity */}
                <Tab.Panel>
                  <div className='grid grid-cols-2'>
                    <div className='p-4 text-gray-300 bg-black'>Body Type</div>
                    <div className='p-4 text-gray-300 bg-black'>
                      Petrol BS VI
                    </div>
                    {fronx.seating.map((item, index) => (
                      <>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.body}
                        </div>
                        <div className='p-4 text-gray-700 bg-gray-100'>
                          {item.data}
                        </div>
                      </>
                    ))}
                  </div>
                  <p className='p-4 bg-black text-gray-200 mt-1.5'>
                    *As certified by test agency under rule 115 of CMVR 1989.
                  </p>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

const FronxCNGSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/VVT+Engine.webp',
      title: 'Advanced 1.2L K-Series Dual Jet, Dual VVT Engine',
      body: 'For those who refuse to compromise, the 1.2L K-Series Dual Jet Dual VVT Engine with Idle Start-Stop technology (ISS) is engineered to offer excellent drive performance and superior fuel-efficiency.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/Reference.webp',
      title: 'NEXWave GRILLE & STRIKING FRONT FASCIA',
      body: 'The stylish and sporty grille is bound to leave everyone in complete awe. It’s signature stye makes it stand out from the crowd.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Hill+Hold.webp',
      title: 'Hill Hold Assist',
      body: 'Prevents your car from rolling backwards while ascending a slope, thereby ensuring that your car descends in a controlled manner.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Dashboard.webp',
      title: 'Dual-Tone Plush Interiors',
      body: ' The lush and spacious dual tone interiors matched with horizontal linear embossed pattern makes you feel like you’re driving in the lap of comfort and grandeur.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/fronx-cng/FRONX_CNG+Chassis.webp',
      title: 'Factory Fitted S-CNG',
      body: '  Our CNG cylinder is fitted on to the new-generation chassis platform using Ultra and Advanced High Tensile Steels that aids the car to resist deformation. It also comes with a neatly placed fire extinguisher to ensure your safety.',
    },
  ];
  return (
    <div className=''>
      <div className='container mx-auto text-center '>
        <div className='py-4 pt-8 text-2xl font-medium '>THE ALL-NEW FRONX</div>
        <div className=''>Performance Goes Green.</div>
        {/* <div className="text-center text-md lg:text-lg">
          Convenience Goes Bold
        </div> */}
        <div className='py-2 sm:pt-5'>
          <div className='space-y-4 rounded '>
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
                    <div className='w-full px-4 pt-4 text-left md:text-white md:absolute bottom-4'>
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
              className='hidden mySwiper-3 md:block'
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

export default FronxCNG;
