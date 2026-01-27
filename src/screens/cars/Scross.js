import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageViewer from '../../components/Scross/ImageViewer';
import OnRoadPrice from '../../components/utils/OnRoadPrice';
import Features from '../../components/Scross/Features';
import { MdOutlineFileDownload } from 'react-icons/md';
import Header from '../../components/Header/Header';
import Seo from '../../components/SEO/seo';
import { vechicle } from '../../constants/seo';

function Scross() {
  useEffect(() => {
    let location = window.location.pathname;
    sessionStorage.setItem('car', location);
  }, []);
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <Seo {...vechicle.Scross} />
      <Header />
      {/* <Helmet>
        <title>
       Maruti S – The New Benchmark in Style! On-Road Price in Hyderabad from ₹12.74 Lakh | Exciting July Monsoon Offers Now Live at Saboo RKS Nexa!
        </title>
        <meta
          name="title"
          content="Nexa S-Cross Petrol Price & Mileage in Hyderabad | July 2025 Offers at Saboo Nexa"
        />
        <meta
          name="description"
          content="Explore the Nexa S-Cross Petrol price and mileage in Hyderabad. Drive home your dream SUV with Saboo Nexa’s exclusive July Monsoon 2025 offers. Book a test drive today!"
        />
        <meta
          name="keywords"
          content="S-Cross Petrol price Hyderabad, Nexa S-Cross mileage, S-Cross on-road price 2025, Saboo Nexa offers, July car deals Hyderabad, S-Cross SUV price, Maruti S-Cross Nexa"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/nexa-scross-petrol-price/"
        />
        <meta
          property="og:title"
          content="Nexa S-Cross Petrol Price & Mileage in Hyderabad | July 2025 Offers at Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Explore the Nexa S-Cross Petrol price and mileage in Hyderabad. Drive home your dream SUV with Saboo Nexa’s exclusive July Monsoon 2025 offers. Book a test drive today!"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Scross.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/nexa-scross-petrol-price/"
        />
        <meta
          property="twitter:title"
          content="Nexa S-Cross Petrol Price & Mileage in Hyderabad | July 2025 Offers at Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Explore the Nexa S-Cross Petrol price and mileage in Hyderabad. Drive home your dream SUV with Saboo Nexa’s exclusive July Monsoon 2025 offers. Book a test drive today!"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Scross.jpg"
        />
      </Helmet> */}
      <div className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Product-Background-Banners/Saboo-RKS-Nexa-Scross-Car-Background.webp')] bg-cover bg-no-repeat">
        <div className='container mx-auto'>
          <div className='grid sm:grid-cols-2'>
            <div className='mx-auto my-auto'>
              <img
                src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-RKS-Nexa-Scross-Title.webp'
                alt='title'
              />
              <a
                href='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/Maruti-Suzuki-S-cross-Broucher.pdf'
                className='p-3 bg-black text-gray-200 flex items-center max-w-[200px] ml-3'
                target='_blank'
                rel='noreferrer'
                aria-label='Scross Brochure'
              >
                <MdOutlineFileDownload size={20} />
                &nbsp;Download Brochure
              </a>
            </div>
            <div>
              <div className='mx-auto'>
                {/* Nexa-Blue */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Blue.webp'
                  alt='nexa blue'
                  className={
                    tabsColors === 1
                      ? 'mx-auto lg:mt-[74px] w-auto lg:h-[300px]'
                      : 'hidden'
                  }
                />

                {/* Caffeine Brown */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Caffeine-Brown.webp'
                  alt='Caffeine Brown'
                  className={
                    tabsColors === 2
                      ? 'mx-auto lg:mt-[74px] w-auto lg:h-[300px]'
                      : 'hidden'
                  }
                />

                {/* Granite Grey */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Granite-Grey.webp'
                  alt='Granite Grey'
                  className={
                    tabsColors === 3
                      ? 'mx-auto lg:mt-[74px] w-auto lg:h-[300px]'
                      : 'hidden'
                  }
                />

                {/* White */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Pearl-Arctic-White.webp'
                  alt='Pearl Arctic White'
                  className={
                    tabsColors === 4
                      ? 'mx-auto lg:mt-[74px] w-auto lg:h-[300px]'
                      : 'hidden'
                  }
                />

                {/* Premium Silver */}
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/colors/Saboo-Nexa-SCross-Colours-Premium-Silver.webp'
                  alt='Premium Silver'
                  className={
                    tabsColors === 5
                      ? 'mx-auto lg:mt-[74px] w-auto lg:h-[300px]'
                      : 'hidden'
                  }
                />
              </div>
              <div className='flex items-center justify-center mb-4'>
                {/*  Nexa Blue */}
                <div onClick={() => setTabsColors(1)}>
                  <div className={tabsColors === 1 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 mr-[10px] bg-[#183f66] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#183f66]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 1 ? 'w-6 h-6 bg-[#183f66] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                {/* Caffeine Brown */}
                <div onClick={() => setTabsColors(2)}>
                  <div className={tabsColors === 2 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#86654f] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#86654f]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 2
                        ? 'w-6 h-6 bg-[#86654f] mr-2 border-2'
                        : 'hidden'
                    }
                  ></p>
                </div>

                {/* Granite Grey */}
                <div onClick={() => setTabsColors(3)}>
                  <div className={tabsColors === 3 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#72716b] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#72716b]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 3 ? 'w-6 h-6 bg-[#72716b] mr-2' : 'hidden'
                    }
                  ></p>
                </div>

                {/* Pearl Arctic White */}
                <div onClick={() => setTabsColors(4)}>
                  <div className={tabsColors === 4 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-white mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='border-t-8 border-white arrow-dropdown-selected-car'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 4
                        ? 'w-6 h-6 border bg-white mr-2'
                        : 'hidden'
                    }
                  ></p>
                </div>

                {/* Premium Silver */}
                <div onClick={() => setTabsColors(5)}>
                  <div className={tabsColors === 5 ? 'relative' : 'hidden'}>
                    <p className='w-6 h-6 bg-[#879194] mr-[10px] border-t border-x'></p>
                    <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-[9px] right-0 mx-auto bg-no-repeat bg-center"></span>
                    <p className='arrow-dropdown-selected-car border-t-8 border-[#879194]'></p>
                  </div>
                  <p
                    className={
                      tabsColors !== 5 ? 'w-6 h-6 bg-[#879194]' : 'hidden'
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
                Caffeine Brown
              </p>
              <p
                className={
                  tabsColors === 3
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Granite Grey
              </p>
              <p
                className={
                  tabsColors === 4
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Pearl Arctic White
              </p>
              <p
                className={
                  tabsColors === 5
                    ? 'text-center font-semibold text-lg my-2'
                    : 'hidden'
                }
              >
                Premium Silver
              </p>
            </div>
          </div>
        </div>
      </div>
      <Variant />
      <ImageViewer />
      <OnRoadPrice title={'S-cross'} />
      <Features />
      <img
        src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-RKS-Nexa-Scross.png'
        alt='nexa-scross'
        className='mb-10'
      />
      <ImageOptions />
    </>
  );
}

const Variant = () => {
  const [price, setPrice] = useState('8,95,000');
  return (
    <div className='py-8 bg-black'>
      <div className='container mx-auto'>
        <div className='grid space-y-3 md:grid-cols-3 md:space-y-0'>
          <div className='px-4 mx-auto space-y-3 md:mx-0 sm:px-0'>
            <label className='text-gray-300 uppercase' htmlFor='model'>
              Select car Variant
            </label>
            <select
              name='model'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-labelledby='Select Car Variant'
              className='block w-full max-w-[375px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
            >
              <option value='8,95,000'>THE NEW S-CROSS PETROL SIGMA</option>
              <option value='10,05,000'>THE NEW S-CROSS PETROL DELTA</option>
              <option value='10,14,000'>THE NEW S-CROSS PETROL ZETA</option>
              <option value='11,72,000'>THE NEW S-CROSS PETROL ALPHA</option>
              <option value='11,25,000'>
                THE NEW S-CROSS PETROL DELTA AUTOMATIC
              </option>
              <option value='11,34,000'>
                THE NEW S-CROSS PETROL ZETA AUTOMATIC
              </option>
              <option value='12,92,000'>
                THE NEW S-CROSS PETROL APLHA AUTOMATIC
              </option>
            </select>
          </div>
          <div className='text-center text-gray-200'>
            <p className='text-2xl font-bold'>₹ {price}*</p>
            <p className='text-xl tracking-wide'>Ex-Showroom Price</p>
            <p className='font-bold text-gray-400 uppercase'>Hyderabad</p>
          </div>
          <div className='mx-auto'>
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
    <div className='container px-5 mx-auto md:px-0'>
      <div className='grid sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Smartplay-Infotainment-System.webp'
            alt='Infotainment'
            className='w-full'
          />
        </div>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>New Smartplay Studio</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            Make your drives more exciting with the New Smartplay Studio. So,
            connect to your smartphone with Android Auto or Apple carplay and
            text, call, play songs, or navigate with just a tap, your voice, or
            steering mounted controls.
          </p>
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>
            Introduction to Automatic Transmission
          </p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The new S-Cross Petrol takes on sharp turns, steep climbs and rough
            roads with the ease of Automatic Transmission with Hill Hold assist.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/AT-scross.webp'
            alt='AT S-Cross'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/RainSensing-wiper.webp'
            alt='Rain Sensing Wiper'
            className='w-full'
          />
        </div>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Auto Rain Sensing Wipers</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The Auto Rain Sensing Wipers in the Refined SUV detects rain and
            starts automatically. The frequency is regulated according to the
            amount of rainfall, and the rain sensitivity can also be controlled.
          </p>
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Multi Information Display</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            Keep a check on your vehicle’s vitals, from information on fuel
            consumption to Gear Shift Indicator, on the hi-definition TFT
            Screen.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-multy-Information-System.webp'
            alt='Exteriors Slide main'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Main.webp'
            alt='Infotainment'
            className='w-full'
          />
        </div>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Automatic Headlamps</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The Auto LED Projector Headlamps with LED DRLs ensures optimum road
            visibility when you’re driving without having to turn them on
            manually.
          </p>
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Cruise Control</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The Cruise Control system makes all your long journeys comfortable
            by letting you pick a cruising speed over 40km/hr.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Cruise-Control.webp'
            alt='AT S-Cross'
            className='w-full'
          />
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/interior/Saboo-Nexa-SCross-Colours-Interior-Boot-Space.webp'
            alt='SCross Colours Interior Boot Space'
            className='w-full'
          />
        </div>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>60:40 Split Rear Seats</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            S-Cross – The Refined SUV offers a 60:40 split rear seatback, which
            can be folded down to make more space for everything you need on
            your journey.
          </p>
        </div>
      </div>

      <div className='grid shadow-lg sm:grid-cols-2'>
        <div className='p-5 mx-auto my-auto space-y-3'>
          <p className='text-3xl font-bold'>Auto Up/Down With Anti-Pinch</p>
          <p className='w-20 h-1 bg-black rounded-full '></p>
          <p>
            The Auto up/down power window on the driver’s side automatically
            rolls down when an obstacle is detected for optimum safety.
          </p>
        </div>
        <div>
          <img
            src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/s-cross/exterior/Saboo-Nexa-SCross-Colours-Exterios-Slide-Window.webp'
            alt='Exteriors Slide main'
            className='w-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Scross;
