import React, { useState } from 'react';
import Header from '../../../components/Header/Header';

import { BsArrowDown } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
// import { products } from '../../constants';

import EnquiryPopup from '../../../components/utils/EnquiryPopup';
import TabNavigationCNG from './TabNavigationCNG';

export const cngProducts = [
  {
    id: 1,
    name: 'Grand Vitara',
    price: '1045000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/GV-logo-204x37+webp.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/thumbnails/gt-thumbnail-cng.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/grand_vitara.pdf',
    explore: '/grand-vitara-cng',
    engineType: 'SMART HYBRID / ELECTRIC HYBRID',
    fuelType: 'PETROL',
    displacement: '1462 cc',
    power: '75.8 @ 6000 / 68 kW @ 5500 rpm',
    torque: '136.8 @ 4400 / 122 Nm @ 4400 - 4800',
    fuelTank: '45 L',
    mileage: '21.11 (MT), 20.58 (AT), 19.38 (AllGrip MT), 27.97 (e-CVT)',
    tranmission: '5MT/ 6AT / e-CVT',
    length: '4345',
    width: '1795',
    height: '1645',
    wheelbase: '2600',
    turningRadius: '5.4',
    frontBrake: 'Ventilated Disc',
    rearBrake: 'Solid Disc',
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    seating: '5',
  },

  {
    id: 2,
    name: 'Baleno',
    price: '649000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/newage_baleno_logo.png',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/cng/baleno-cng-thubnail.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/The_New_Age_Baleno_Brochure.pdf',
    explore: '/baleno-cng',
    engineType: 'Advanced K Series Dual Jet / Dual VVT Engine',
    fuelType: 'PETROL',
    displacement: '1197 cc',
    power: '66 @ 6000',
    torque: '113 @ 4400',
    fuelTank: '37',
    mileage: '22.35 (MT), 22.94 (AMT)',
    tranmission: '5MT/5AT',
    length: '3990',
    width: '1745',
    height: '1500',
    wheelbase: '2520',
    turningRadius: '4.85',
    frontBrake: 'Disc',
    rearBrake: 'Drum',
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    seating: '5',
  },

  {
    id: 3,
    name: 'XL6',
    price: '1129000',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/Saboo-Nexa-Logo-XL6.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/cng/xl6-cng-thumbnail.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/THE+ALL-NEW+XL6+Brochure.pdf',
    explore: '/xl6-cng',
    engineType: 'K15C SMART HYBRID',
    fuelType: 'PETROL',
    displacement: '1462 cc',
    power: '75.8 @ 6000',
    torque: '136.8 @ 4400',
    fuelTank: '45 L',
    mileage: '20.97 (MT), 20.27 (AT)',
    tranmission: '5 MT / 6 AT',
    length: '4445',
    width: '1775',
    height: '1755',
    wheelbase: '2740',
    turningRadius: '5.2',
    frontBrake: 'Disc',
    rearBrake: 'Drum',
    frontSuspension: 'MacPherson Strut with Coil Spring',
    rearSuspension: 'Torsion Beam with Coil Spring',
    seating: '6',
  },
  {
    id: 4,
    name: 'Fronx',
    price: '746500',
    logo: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/Flash_header_Menu_logo.webp',
    img: 'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/fronx-cng-thumbnail.webp',
    brouchure:
      'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/FRONX+Brochure.pdf',
    explore: '/fronx-cng',
    engineType: 'SMART HYBRID / ELECTRIC HYBRID',
    fuelType: 'PETROL',
    displacement: '1462 cc',
    power: '75.8 @ 6000 / 68 kW @ 5500 rpm',
    torque: '136.8 @ 4400 / 122 Nm @ 4400 - 4800',
    fuelTank: '45 L',
    mileage: '21.11 (MT), 20.58 (AT), 19.38 (AllGrip MT), 27.97 (e-CVT)',
    tranmission: '5MT/ 6AT / e-CVT',
    length: '4345',
    width: '1795',
    height: '1645',
    wheelbase: '2600',
    turningRadius: '5.4',
    frontBrake: 'Ventilated Disc',
    rearBrake: 'Solid Disc',
    frontSuspension: 'MacPherson Strut',
    rearSuspension: 'Torsion Beam',
    seating: '5',
  },
];

const NexaCNG = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState('');
  const imageSrc = require('../../../assets/cars/NEXA S-CNG Showrooms IN HYDERABAD.webp');
  const mobileImageSrc =
    'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/banners/NexaCNG/Cng-banner-mobile.webp';

  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <Helmet>
        <title> Saboo Nexa: Explore Our Eco-Friendly CNG Car Selection.</title>
        <meta
          name='title'
          content=' Saboo Nexa: Explore Our Eco-Friendly CNG Car Selection.
'
        />
        <meta
          name='description'
          content='Discover the eco-friendly and fuel-efficient CNG cars at SabooNexa. Explore our range of CNG vehicles designed for sustainability and performance. Visit us today!'
        />
        <meta
          name='keywords'
          content='SabooNexa, CNG Cars, Eco-Friendly Vehicles, Fuel Efficiency, Sustainable Driving, Environmentally Friendly Cars, Nexa CNG Models, CNG Car Dealership, CNG Vehicle Selection, CNG Car Offers'
        />
      </Helmet>
      <Header />
      <div className='pb-[67px] bg-black sm:pb-[120px] lg:pb-[135px]'></div>
      <div className='select-none'>
        <img
          src={imageSrc}
          className='hidden object-cover w-full select-none md:block'
          alt='NEXA S-CNG Showrooms IN HYDERABAD '
        />
        <img
          src={mobileImageSrc}
          className='block w-full md:hidden '
          alt='SCNG Banner'
        />
      </div>
      <div className='container mx-auto my-8 text-center '>
        <div className='py-4 pt-8 text-2xl font-medium lg:text-3xl '>
          CREATE. INSPIRE. THE CONSCIOUS WAY.
        </div>
        Make a conscious choice for the environment, zip through the road and
        explore the unknown with NEXA S-CNG, your eco-friendly mobility solution
        - designed to deliver class leading performance and inspire a trend of
        consciousness in the world.
      </div>
      <div className='container mx-auto mt-8 text-center '>
        <div className='py-4 pt-8 text-2xl font-medium lg:text-3xl '>
          NEXA CARS
        </div>

        <div className='grid justify-center w-full grid-cols-1 gap-4 p-2 pb-5 md:grid-cols-2 xl:grid-cols-3 lg:gap-8 sm:p-5'>
          {cngProducts.map((item) => (
            <div
              className='relative flex flex-col w-full col-span-1 overflow-hidden bg-white border rounded shadow-lg '
              key={item.id}
            >
              {/* <div
              className="absolute left-0 z-10 p-2 ml-5 bg-white rounded-full cursor-pointer top-2"
              // onClick={() => setCompareItems([...compareItems, item.name])}
              onClick={() => handleCompare(item.name)}
            >
              <IoShuffleSharp size={22} />
            </div> */}

              {item.price && (
                <div className='absolute right-0 mr-5 top-2 '>
                  <p className='flex items-center font-bold'>
                    <BiRupee />
                    {Intl.NumberFormat('en-IN').format(item.price)}*
                  </p>
                  <p className='font-light'>ex-showroom</p>
                </div>
              )}

              <div className='flex-auto overflow-hidden '>
                <Link to={item.explore}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className='mx-auto product_image'
                  />
                </Link>
              </div>
              <div className='flex-auto border-t border-gray-200'>
                <div>
                  <div className='flex items-center justify-between p-5 rounded'>
                    <img src={item.logo} className='w-32' alt={item.name} />
                    <div className='flex items-center font-semibold'>
                      <BsArrowDown />
                      <a
                        href={item.brouchure}
                        target='_blank'
                        rel='noreferrer'
                        aria-label={item.name + ' Brochure'}
                      >
                        Brochure
                      </a>
                    </div>
                  </div>
                  <div className='flex items-center justify-center pb-5 space-x-3 '>
                    <Link
                      to={item.explore}
                      className='border border-black  p-2 max-w-[44%] w-full text-center text-sm uppercase rounded animate-pulse'
                    >
                      Explore
                    </Link>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setModel(item.name);
                      }}
                      aria-label='Book Now'
                      className='bg-black hover:bg-white hover:border-black hover:border hover:text-black duration-300 ease-in text-white p-2 text-sm uppercase w-full max-w-[44%] text-center rounded'
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <EnquiryPopup
          open={open}
          setOpen={setOpen}
          model={model}
          setModel={setModel}
          title={'Book Now'}
        />
      </div>
      <div className='container mx-auto my-8 text-center'>
        <div className='pt-12 text-2xl font-medium '>Why NEXA S-CNG?</div>

        <TabNavigationCNG />
      </div>
    </div>
  );
};

export default NexaCNG;
