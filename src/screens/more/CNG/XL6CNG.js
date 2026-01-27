import React, { useState } from 'react';
import Header from '../../../components/Header/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Helmet } from 'react-helmet';
import Features from '../../../components/XL/Features';
import { CarEnq2 } from '../../../components/Invicto/CarEnq2';

const XL6CNG = () => {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki XL6 CNG 2025 – Premium MPV with Exceptional Efficiency &
         September Festive CNG Offers at Saboo Nexa
        </title>
        <meta
          name='title'
          content='Maruti Suzuki XL6 CNG 2025 – Premium MPV with Exceptional Efficiency &September Festive CNG Offers at Saboo Nexa'
        />
        <meta
          name='description'
          content='Introducing the 2025 Maruti Suzuki XL6 CNG at Saboo Nexa, a premium MPV that combines luxury with exceptional fuel efficiency. Enjoy spacious interiors, advanced features, and the benefits of CNG technology. Take advantage of exclusiveSeptember Festive CNG offers and book your test drive today!'
        />
        <meta
          name='keywords'
          content='XL6 CNGSeptember Festive Offers, Maruti Suzuki XL6 CNG, Fuel-Efficient CNG MPV, XL6 CNG Fuel Economy, Saboo Nexa XL6 CNG, Premium CNG MPV 2025, CNG Technology MPV, Best XL6 CNG DealsSeptember 2025, Maruti XL6 CNG Offers,September Festive CNG MPV Deals, Nexa XL6 CNG Offers 2025.'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.saboonexa.in/the-xl6/' />
        <meta
          property='og:title'
          content='Maruti Suzuki XL6 CNG 2025 – Premium MPV with Exceptional Efficiency &September Festive CNG Offers at Saboo Nexa'
        />
        <meta
          property='og:description'
          content='Introducing the 2025 Maruti Suzuki XL6 CNG at Saboo Nexa, a premium MPV that combines luxury with exceptional fuel efficiency. Enjoy spacious interiors, advanced features, and the benefits of CNG technology. Take advantage of exclusiveSeptember Festive CNG offers and book your test drive today!'
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/the-xl6/'
        />
        <meta
          property='twitter:title'
          content='Maruti Suzuki XL6 CNG 2025 – Premium MPV with Exceptional Efficiency &September Festive CNG Offers at Saboo Nexa'
        />
        <meta
          property='twitter:description'
          content='Introducing the 2025 Maruti Suzuki XL6 CNG at Saboo Nexa, a premium MPV that combines luxury with exceptional fuel efficiency. Enjoy spacious interiors, advanced features, and the benefits of CNG technology. Take advantage of exclusiveSeptember Festive CNG offers and book your test drive today!'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/XL6.jpg'
        />
      </Helmet>
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

      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-mobile.webp')] sm:bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6-cng-banner-desktop.webp')]  bg-cover bg-no-repeat   sm:h-[60vh] h-[80vh]">
        <div className='max-w-6xl '>
          <div className='grid sm:grid-cols-2 lg:grid-cols-2'>
            <div className='my-auto mx-5 pt-[90%] md:pt-10  pr-[30]'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Logo-xl6.webp'
                className='p-3 md:ml-20 lg:ml-36'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf'
                className='p-3 bg-black text-white flex items-center max-w-[200px] md:ml-24 lg:ml-40 mt-5 rounded'
                target='_blank'
                rel='noreferrer'
                aria-label='XL6 CNG Brochure Download'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <OnRoadPrice title={"XL6 CNG"} /> */}
      <CarEnq2 title='BOOK YOUR XL6 S-CNG' carName='XL6 CNG' />
      <div className='container mx-auto text-center '>
        <div className='py-4 text-2xl font-medium'>
          EXPERIENCE INDULGENCE. RESPONSIBLY.
        </div>
        Take the first step towards a conscious lifestyle with NEXA S-CNG, where
        innovation and intelligence meet to power the future. Designed to go the
        extra mile, the All-New XL6 S-CNG is the premium MPV offering superior
        features with a desire to improve the environment- all culminating in an
        indulgent experience like no other. Now, let your every drive be suave
        and sensible.
      </div>

      <XL6CNGSlider />

      {/* <div className='container pb-6 mx-auto my-6 text-center'>
        <div className='text-2xl font-semibold '>REGISTER YOUR INTEREST</div>
        <div className='container px-6 py-2 md:px-12 lg:px-24 sm:py-5'>
          Register Now To Know All About The Advanced Features Of Grand Vitara
          CNG
        </div>
        <hr className='w-1/5 mx-auto' />
      </div> */}
      <div className='pt-8 text-2xl font-medium text-center'>
        THE ALL-NEW XL6 S-CNG SPECIFICATIONS
      </div>
      <Features />
    </>
  );
};

const XL6CNGSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = [
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-MID-fuel.webp',
      title: 'MID Screen- Fuel Indicator',
      body: 'Get every detail related to fuel consumption as you stay behind the wheels.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-MID-petrol.webp',
      title: 'MID Screen- Petrol/CNG (Mode)',
      body: 'Fitted for self-serving and fast-filling, the CNG nozzle provides unmatched convenience and enhanced safety.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-Nozzle.webp',

      title: 'NGV Receptacle Special Nozzle',
      body: 'Fitted for self-serving and fast-filling, the CNG nozzle provides unmatched convenience and enhanced safety.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/1170x521-captain-seatsss+webp.webp',

      title: 'Captain Seats',
      body: 'Indulge in your comfort zone, find yourself cocooned in the remarkably plush Captain Seats.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/XL6-Interior.webp',
      title: 'All Black Interiors',
      body: 'True indulgence comes in this CNG variant too. The all-black interiors exuding an aesthetic appeal and comfort create a tranquil sanctuary.',
    },
    {
      img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/XL6+CNG/classic.webp',
      title: 'Factory Fitted S-CNG',
      body: 'Our CNG cylinder is fitted on the new-generation chassis platform using Ultra and Advanced High Tensile Steels that aids the car to resist deformation with precision.',
    },
  ];
  return (
    <div className=''>
      <div className='container mx-auto text-center '>
        <div className='py-4 pt-8 text-2xl font-medium '>
          THE ALL-NEW XL6 FEATURES
        </div>
        <div className=''>
          The All-New XL6 Is Equipped With Features That Make Your World An
          Indulgent Place.
        </div>
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

export default XL6CNG;
