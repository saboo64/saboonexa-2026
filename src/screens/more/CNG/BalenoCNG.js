import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import { MdOutlineFileDownload } from 'react-icons/md';
import Features from '../../../components/BALENO/Features';
import { CarEnq2 } from '../../../components/Invicto/CarEnq2';
import Seo from '../../../components/SEO/seo';
import { CNGvehicles } from '../../../constants/seo';

const BalenoCNG = () => {
  return (
    <>
      <Seo {...CNGvehicles.baleno} />

      <Header />
      <div className='pb-[67px] bg-black sm:pb-[120px] lg:pb-[135px]'></div>
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

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-cng-banner-desktop.webp')]  bg-cover bg-no-repeat  sm:h-[60vh] h-[80vh]">
        <div className='max-w-6xl '>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <div className='my-auto mx-5 pt-[90%] md:pt-10 '>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-baleno.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/The_New_Age_Baleno_Brochure.pdf'
                className='p-3 bg-black text-white flex items-center max-w-[200px] md:ml-24 lg:ml-40 mt-5 rounded'
                target='_blank'
                rel='noreferrer'
                aria-label='Baleno CNG Brochure'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <OnRoadPrice title={"BALENO CNG"} /> */}
      <CarEnq2 title='BOOK YOUR BALENO S-CNG' carName='BALENO CNG' />
      <div className='container mx-auto mb-8 text-center '>
        <div className='py-4 pt-4 text-2xl font-medium'>RESPONSIBLY BOLD</div>
        Future never looked so good. With the NEXA S-CNG, your search for a
        smart and conscious drive finds the final destination. Presenting the
        New Age Baleno S-CNG, now equipped with Maruti Suzuki’s tested and
        reliable S-CNG technology. Now it's your turn to take the road to green
        fuel mobility for a progressive and premium driving experience.
      </div>
      <BalenoCNGSlider />
      {/* <div className='container pb-6 mx-auto my-6 text-center'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container px-6 py-2 md:px-12 lg:px-24 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className='py-4 pt-10 text-2xl font-medium text-center '>
        THE NEW AGE BALENO S-CNG SPECIFICATIONS
      </div>
      <Features />
    </>
  );
};

const BalenoCNGSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Baleno+airbag.webp',
      title: '6 Airbags',
      body: 'A perfect balance of smart design and safety, go bold with 6 Airbags (Side and Curtain) that provide advanced protection.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/BALENO-Chasis.webp',
      title: 'Factory Fitted S-CNG',
      body: 'Our CNG cylinder is fitted on the new-generation chassis platform using Ultra and Advanced High Tensile Steels that aids the car to resist deformation. It also comes with a neatly placed fire extinguisher to ensure your safety.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Feature-1170x521-Rear-USB-Ctype.webp',
      title: 'Rear USB Type A and Type C Charger',
      body: 'Never run out of charge for your gadgets with the best-in-segment Rear USB Type A and Type C fast charging ports.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/image.webp',
      title: ' Rear AC Vents',
      body: ' Enjoy a breezy feel even on the hottest days with the Rear AC Vents in the New Age Baleno.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Tilt-telescopic.webp',
      title: 'Telescopic Steering',
      body: 'Experience nimble yet refined driving experience with a Tilt and Telescopic steering that lets you adjust the steering as per your convenience. With enhanced steering returnability and high-speed straight-line stability, drive firmly within your reach.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/SuzukiConnect-2.webp',
      title: 'Suzuki Connect',
      body: 'Get future-ready and keep a track of real-time updates without breaking a sweat with Suzuki Connect. With Nexa S-CNG, now buckle up to enter a whole new world of unique driving experience.',
    },
  ];
  return (
    <div className=''>
      <div className='container mx-auto text-center '>
        <div className='py-4 pt-8 text-2xl font-medium '>
          THE NEW AGE BALENO FEATURES
        </div>
        <div className=''>Convenience Goes Bold</div>
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

export default BalenoCNG;
