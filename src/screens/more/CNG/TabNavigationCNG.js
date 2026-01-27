import { Tab } from '@headlessui/react';
import React from 'react';
// import { Link } from 'react-router-dom';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper';

function TabNavigationCNG() {
  return (
    <>
      <Tab.Group>
        <div className='flex items-center justify-center pt-8'>
          <Tab.List className='space-x-1'>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 mb-2  rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black font-light  hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              PERFORMANCE MEETS SUSTAINABILITY
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              SAFER AND SENSIBLE
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? 'bg-black text-gray-200 px-4 py-2 rounded shadow outline-none'
                  : 'bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none'
              }
            >
              CONVENIENCE WITH CARE
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <PrformanceMeetsSustainability />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <SaferAndSensible />
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <ConvenienceWithCare />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const PrformanceMeetsSustainability = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className='container mx-auto'>
        <div className=''>
          <div className='max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid lg:grid-cols-2 sm:py-5 lg:px-4'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Technology_AllGrip+webp.webp'
              alt=''
              className='rounded-xl'
            />
            <div className='flex flex-col justify-between'>
              <p className='p-2 font-light tracking-wide text-left text-black sm:pb-14 md:text-md 2xl:text-lg '>
                Enjoy a bold performance for every mile with our factory fitted
                NEXA S-CNG lineups. Progressive and domineering, NEXA S-CNG
                range of models are equipped with dual inter-dependent
                Electronic Control Units (ECU) and an Intelligent Injection
                System to provide an air-fuel ratio that ensures optimum
                performance and a superior fuel efficiency, making it one of the
                eco-friendly mobility solutions with lower carbon emissions.
                That’s how S-CNG continues to deliver safety along with
                durability.
              </p>
              <div className='text-sm text-left'>
                <span className='font-semibold'>Disclaimer:</span> Image is only
                for illustration purposes. The S-CNG Zeta variant has one fire
                extinguisher below the co-driver seat for safety purposes. For
                details on the functioning of air bag and other safety features
                kindly refer to owner's manual of vehicle
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SaferAndSensible = () => {
  // const [interiorSwiper, setInteriorSwiper] = useState(null);
  return (
    <>
      <div className='container mx-auto'>
        <div className=''>
          <div className='max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid lg:grid-cols-2 sm:py-5 lg:px-4'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Technology_AllGrip+webp.webp'
              alt=''
              className='rounded-xl'
            />
            <div>
              <p className='p-2 font-light tracking-wide text-left text-black sm:pb-14 md:text-md 2xl:text-lg '>
                NEXA S-CNG cars set the seal on lasting peace of mind with the
                entire CNG system. Our assertive designs put people first with
                increased protection and safety. Engineered with progressive
                tech at its core, the integrated wiring harness negates any
                chances of short circuits. Moreover, the superior quality of
                stainless steel pipes & joints make the entire CNG structure
                corrosion resistant and leak-proof design. Designed to enhance
                every moment behind the wheel, our NEXA S-CNG lineups come with
                a micro switch. It assures that a vehicle goes off during the
                CNG fuel filling process.
              </p>
              <div className='text-sm text-left'>
                <span className='font-semibold'>Disclaimer:</span> Image is only
                for illustration purposes. The S-CNG Zeta variant has one fire
                extinguisher below the co-driver seat for safety purposes. For
                details on the functioning of air bag and other safety features
                kindly refer to owner's manual of vehicle
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ConvenienceWithCare = () => {
  // const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className='container mx-auto'>
        <div className=''>
          <div className='max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid lg:grid-cols-2 sm:py-5 lg:px-4'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Technology_AllGrip+webp.webp'
              alt=''
              className='rounded-xl'
            />
            <div>
              <p className='p-2 font-light tracking-wide text-left text-black sm:pb-14 md:text-md 2xl:text-lg '>
                Experience ease of switching from CNG to Petrol and vice versa
                with agile auto-mode featuring a change-over switch. Be woke &
                stay in the know about CNG fuel level with an impressive
                precision fuel level indicator. As you explore & indulge with
                the exclusive NGV receptacle- the unique nozzle that lets you
                refill CNG in a faster and safer way. Our warranty benefits are
                tailored to serve you up to 5 years. Travel worry-free with NEXA
                service workshops at a distance of 30 km or thereabouts. You can
                get your car serviced at 3500+ Maruti Suzuki authorized service
                centers with skilled technicians.
              </p>
              <div className='text-sm text-left'>
                <span className='font-semibold'>Disclaimer:</span> Image is only
                for illustration purposes. The S-CNG Zeta variant has one fire
                extinguisher below the co-driver seat for safety purposes. For
                details on the functioning of air bag and other safety features
                kindly refer to owner's manual of vehicle
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabNavigationCNG;
