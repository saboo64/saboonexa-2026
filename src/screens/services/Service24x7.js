import React, { useState } from 'react';
import axios from 'axios';

import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';
import { AiFillPlayCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

// import required modules

import { Link, useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from 'formik';

// Inside your component
import { object, string } from 'yup';
import ModalService24 from './ModalService24';
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri';
import { ImLinkedin } from 'react-icons/im';

// const phoneRegExp = /^[6-9]\d{9}$/;
const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required('This field is required*'),
  phone: string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'Required 10 digit phone number')
    .required('This field is required*'),
  service: string().required('This field is required*'),
  message: string().max(300, 'Message must be 300 characters or less'), // Limit message to 300 characters
});

function Service24x7() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let history = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          Saboo Nexa 24/7 Car Service - Reliable, Round-the-Clock Automotive
          Care
        </title>
        <meta
          name='title'
          content='Saboo Nexa 24/7 Car Service - Reliable, Round-the-Clock Automotive Care'
        />
        <meta
          name='description'
          content='Experience reliable and round-the-clock automotive care with Saboo Nexa 24/7 Car Service. Our expert technicians provide comprehensive car maintenance and repair services to keep your vehicle running smoothly at any hour. Visit us online to book your service appointment now!'
        />
        <meta
          name='keywords'
          content='Saboo Nexa, 24/7 Car Service, Round-the-Clock Automotive Care, Car Maintenance,Car Repair, Nexa Service, Emergency Car Service, Vehicle Maintenance, Automotive Technicians, Saboo Nexa Service         '
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service'
        />
        <meta
          property='og:title'
          content='Saboo Nexa 24/7 Car Service - Reliable, Round-the-Clock Automotive Care '
        />
        <meta
          property='og:description'
          content='Experience reliable and round-the-clock automotive care with Saboo Nexa 24/7 Car Service. Our expert technicians provide comprehensive car maintenance and repair services to keep your vehicle running smoothly at any hour. Visit us online to book your service appointment now!  '
        />
        <meta
          property='og:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service'
        />
        <meta
          property='twitter:title'
          content='Saboo Nexa 24/7 Car Service - Reliable, Round-the-Clock Automotive Care'
        />
        <meta
          property='twitter:description'
          content='Experience reliable and round-the-clock automotive care with Saboo Nexa 24/7 Car Service. Our expert technicians provide comprehensive car maintenance and repair services to keep your vehicle running smoothly at any hour. Visit us online to book your service appointment now!'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
      </Helmet>
      <div className='md:hidden'>
        <Header col={true} />
      </div>
      <div className='hidden md:block'>
        <Header />
      </div>
      {/* <Slider /> */}
      {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-banner1.png"
        className="w-full"
        alt="Service Banner"
      /> */}
      <div className='bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Lines.png)] text-white bg-black bg-cover bg-no-repeat '>
        <section>
          <div className='justify-around hidden md:flex'>
            <img
              // src={require('../../assets/nexa service banner.jpg')}
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner.jpg'
              className='w-full'
              alt='Service Banner'
            />
          </div>
          <div className=' md:hidden'>
            <img
              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/nexa+service+banner+mobile.jpg'
              className='w-full'
              alt='Service Banner'
            />
          </div>
        </section>
        <section>
          <div className='flex-col-reverse hidden gap-5 py-20 md:flex-row lg:justify-center md:flex'>
            <div className='flex justify-center mt-10 md:w-1/2 lg:justify-end lg:pr-20 md'>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>
                <div className='rounded-[4rem] bg-white overflow-hidden border-[0.5px] border-gray-400 mb-10 md:-mt-[27rem] lg:-mt-[29rem] ml-[3rem] md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/About+us.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center mb-10 md:w-1/2 md:p-4'>
              <div className='container md:w-[90%] '>
                <span className='font-serif text-xl md:text-4xl'>
                  About Saboo RKS <span className='font-sans'>24/7</span>
                </span>
                <br />
                <span className='font-serif text-5xl tracking-wide md:text-8xl'>
                  Service
                </span>
                <br />
                <span className='font-serif md:text-xl'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week. These services are designed to provide
                  convenience and accessibility to customers at any time of the
                  day or night, including weekends and holidays.
                </span>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className='px-3 py-4 text-center '>
              <div className='container '>
                <div className='font-serif text-xl'>
                  About Saboo RKS <span className='font-sans'>24/7</span>
                </div>

                <div className='font-serif text-5xl tracking-wide md:text-8xl'>
                  Service
                </div>

                <div className='pt-1 font-serif md:text-xl'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week. These services are designed to provide
                  convenience and accessibility to customers at any time of the
                  day or night, including weekends and holidays.
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center my-4'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/About+us.jpg'
                  alt=''
                  className=''
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='w-full mb-8 '>
            <div className='mb-1 text-center md:mb-6'>
              {/* <span className='font-serif txt-2xl md:text-5xl'>
                Our{' '}
                <span className='font-sans font-bold text-red-500 '>24/7 </span>
              </span>
              <span className='font-serif text-3xl tracking-wide md:text-8xl'>Service</span> */}
              <span className='font-serif text-2xl md:text-4xl'>
                Our{' '}
                <span className='font-sans text-3xl font-bold text-red-500 md:text-5xl'>
                  24/7
                </span>
              </span>
              <br />
              <span className='font-serif text-5xl tracking-wide md:text-8xl'>
                Service
              </span>
            </div>

            <div className='container hidden w-full gap-6 mx-auto lg:grid md:grid-cols-2 '>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Periodic+Service.png'
                    alt=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/period+Black.png'
                    alt=''
                    className='hidden group-hover:block'
                  />
                </div>
                <div className='font-serif text-3xl whitespace-nowrap'>
                  Periodic Services
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Repair.png'
                    alt=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/repair+Black.png'
                    alt=''
                    className='hidden group-hover:block'
                  />
                </div>
                <div className='font-serif text-3xl whitespace-nowrap'>
                  Repair & Maintenance
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Body.png'
                    alt=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/body+black.png'
                    alt=''
                    className='hidden group-hover:block'
                  />
                </div>
                <div className='font-serif text-3xl whitespace-nowrap'>
                  Body Repair
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
              <div
                className='col-span-1 lg:w-full border rounded-[3rem] mx-auto group bg-black flex justify-around items-center hover:bg-[#494949]  p-4 gap-2 cursor-pointer relative'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='h-[9rem] w-[9rem] flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-[2rem] px-1'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/car+care.png'
                    alt=''
                    className='group-hover:hidden'
                  />
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/care+care+black.png'
                    alt=''
                    className='hidden group-hover:block'
                  />
                </div>
                <div className='font-serif text-3xl whitespace-nowrap '>
                  Car Care Service
                </div>
                <div className=''>
                  <AiFillPlayCircle className='text-5xl absolute bottom-4 right-8 group-hover:text-white text-[#494949] bg-gray-300 rounded-full group-hover:bg-[#494949]' />
                </div>
              </div>
            </div>
            <div className='lg:hidden'>
              <div
                className='items-center p-4 mx-auto cursor-pointer group'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Periodic+Service.png'
                      alt=''
                      className='p-1 group-hover:hidden'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/period+Black.png'
                      alt=''
                      className='hidden p-1 group-hover:block'
                    />
                  </div>
                  <div className='w-2/3 pl-2 my-auto font-serif text-2xl'>
                    Periodic Services
                  </div>
                </div>
              </div>
              <div
                className='items-center p-4 mx-auto cursor-pointer group'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Repair.png'
                      alt=''
                      className='group-hover:hidden h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/repair+Black.png'
                      alt=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='w-2/3 pl-2 my-auto font-serif text-2xl'>
                    Repair & Maintenance
                  </div>
                </div>
              </div>
              <div
                className='items-center p-4 mx-auto cursor-pointer group'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3 h-[10vh]'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Body.png'
                      alt=''
                      className='group-hover:hidden  h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/body+black.png'
                      alt=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='w-2/3 pl-2 my-auto font-serif text-2xl'>
                    Body Repair
                  </div>
                </div>
              </div>
              <div
                className='items-center p-4 mx-auto cursor-pointer group'
                onClick={() => {
                  setOpen(true);
                }}
              >
                <div className='flex justify-around border p-2 rounded-2xl bg-black hover:bg-[#494949]'>
                  <div className=' flex justify-center items-center bg-[#222222] group-hover:bg-[#707070] rounded-xl  p-1 w-1/3'>
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/car+care.png'
                      alt=''
                      className='group-hover:hidden  h-[10vh] p-1'
                    />
                    <img
                      src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/care+care+black.png'
                      alt=''
                      className='group-hover:block hidden  h-[10vh] p-1'
                    />
                  </div>
                  <div className='w-2/3 pl-2 my-auto font-serif text-2xl'>
                    Car Care Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex-col hidden gap-5 py-24 md:flex md:flex-row md:justify-center '>
            <div className='flex items-center justify-end p-4 mb-10 md:w-1/2'>
              <div className=''>
                <div className='container px-10 mx-auto '>
                  <span className='font-serif text-5xl tracking-wide'>
                    Your comfort matters,
                  </span>
                  <br />
                  <span className='font-serif text-5xl tracking-wide'>
                    As much as your car.
                  </span>
                  <br />
                  <br />

                  <button
                    className=' bg-black px-4 py-3 mt-4 border rounded-xl text-xl hover:bg-[#494949]'
                    onClick={() => setOpen(true)}
                    aria-label='Book Now'
                  >
                    BOOK YOUR CAR SERVICE NOW
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center md:w-1/2 lg:justify-start lg:pl-10 xl:pl-28 '>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden h-[24rem] w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>

                <div className='rounded-[4rem] bg-white overflow-hidden border-[0.5px] border-gray-400 mb-10 -mt-[27rem] lg:-mt-[29rem] -ml-[3rem] h-[24rem] w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover'>
                  <img
                    src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/your+comfort.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className='px-3 py-4 text-center '>
              <div className='container '>
                <div className='font-serif text-3xl'>Your comfort matters,</div>

                <div className='font-serif text-3xl '>As much as your car.</div>

                <a href='#contact2'>
                  <button
                    className=' bg-black px-4 py-3 mt-4 border rounded-xl text-md mb-3 hover:bg-[#494949]'
                    aria-label='Book your car sevice'
                  >
                    BOOK YOUR CAR SERVICE NOW
                  </button>
                </a>
              </div>
            </div>
            <div className='flex flex-col items-center my-4'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/your+comfort.jpg'
                  alt=''
                  className=''
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='flex-col-reverse hidden gap-5 pt-10 pb-20 mb-10 md:flex md:flex-row lg:justify-center '>
            <div className='flex justify-center md:w-1/2 lg:justify-end lg:pr-20 '>
              <div>
                <div className='rounded-[4rem]  border border-gray-800 bg-black overflow-hidden md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem] object-cover  '></div>
                <div className='rounded-[4rem] bg-black overflow-hidden border-[0.5px] border-gray-400 mb-10 -mt-[29rem]  ml-[3rem] md:h-[24rem] md:w-[24rem] lg:h-[26rem] lg:w-[26rem]  object-cover  text-xl flex items-center '>
                  <div className='mx-10'>
                    <div className='mt-4 ' style={{ fontSize: '4rem' }}>
                      &#8223;
                    </div>
                    <div className='font-serif '>
                      Sent for servicing and after service doubts too they
                      cleared with efficiency and a lot of patience. I recommend
                      them very much for a trust worthy and efficient service.
                    </div>
                    <div
                      className='-mt-4 rotate-180 '
                      style={{ fontSize: '4rem' }}
                    >
                      &#8223;
                    </div>
                    <div className='flex justify-center mt-4 font-serif text-2xl italic'>
                      K Sudha
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center p-4 mb-10 md:w-1/2'>
              <div className='container md:w-[90%] '>
                <div className='pb-2 font-serif text-6xl tracking-wide'>
                  Our Customers Say
                </div>

                <div className='font-serif text-xl'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week.
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div className='px-3 py-4 text-center '>
              <div className='container '>
                <div className='font-serif text-4xl'>Our Customers Say</div>

                <div className='pb-3 font-serif text-lg'>
                  A 24/7 car service refers to a car-related service or
                  transportation option that operates around the clock, 24 hours
                  a day, 7 days a week.
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center my-4'>
              <div className='rounded-[2rem]  border border-gray-800 bg-black overflow-hidden  object-cover h-[40vh] w-[40vh] mr-6 m-1 '></div>
              {/* <div className='rounded-[2rem] bg-white overflow-hidden border-[0.5px] border-gray-400  h-[40vh] w-[40vh] -mt-[43vh]  object-cover ml-8 my-6 '>
                <img src={comfort} alt='' srcSet='' className='' />
              </div> */}
              <div className='rounded-[2rem] bg-black overflow-hidden border-[0.5px] border-gray-100 mb-10 -mt-[43vh]  ml-[1rem] h-[40vh] w-[40vh] object-cover flex items-center '>
                <div className='mx-6'>
                  <div className='' style={{ fontSize: '2rem' }}>
                    &#8223;
                  </div>
                  <div className='font-serif '>
                    Sent for servicing and after service doubts too they cleared
                    with efficiency and a lot of patience. I recommend them very
                    much for a trust worthy and efficient service.
                  </div>
                  <div className='rotate-180 ' style={{ fontSize: '2rem' }}>
                    &#8223;
                  </div>
                  <div className='flex justify-center mt-2 font-serif text-xl italic'>
                    ~ K Sudha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <InvictoCarEnquiry2 /> */}

        <section id='contact2'>
          <div className='px-2 pb-28'>
            <div className='container mx-auto space-y-3 lg:px-10 px-5 bg-[#1a1a1a] rounded-[4rem] py-6'>
              <div className='py-4 font-serif text-2xl tracking-wide text-center lg:text-4xl'>
                Book a Service Appointment
              </div>
              <Formik
                initialValues={{
                  name: '',
                  phone: '',
                  service: '',
                  message: '',
                }}
                validationSchema={proposelSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  setLoading(true);
                  setSubmitting(true);

                  var result = '';
                  var d = new Date();
                  result +=
                    d.getDate() +
                    '/' +
                    (d.getMonth() + 1) +
                    '/' +
                    d.getFullYear();

                  var currentMonth = d.toLocaleDateString('en-US', {
                    month: 'long',
                  });
                  // First API call - Zoho Web Form - name="WebToLeads54158000001051288"
                  try {
                    const response = await fetch(
                      'https://crm.zoho.in/crm/WebToLeadForm',
                      {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: new URLSearchParams({
                          xnQsjsdp:
                            '5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b',
                          zc_gad: '',
                          xmIwtLD:
                            '3e4c511e1bfac462fb9ac158b261b0d3a1f7118a5052416c6735cee16458265f',
                          actionType: 'TGVhZHM=',
                          returnURL: 'https://www.saboonexa.in/',
                          'Last Name': values.name,
                          Email: values.phone + '@gmail.com',
                          Phone: values.phone,
                          // LEADCF6: values.model,
                          LEADCF83: result,
                          LEADCF14: currentMonth,
                          LEADCF23: values.outlet,
                          Description: `${values.service} - ${values.message}`,
                        }),
                      }
                    );
                    if (response.ok) {
                      toast('Enquiry sent successfully', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                        // transition: Bounce,
                      });
                    } else {
                      // Handle error, e.g., show an error message
                    }
                  } catch (error) {
                    // Handle network or other errors
                  }

                  // Third API call - New MongoDB backend
                  try {
                    await axios
                      .post(
                        'https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/service',
                        {
                          name: values.name,
                          phone: values.phone,
                          email: values.phone + '@gmail.com',
                          message: values.message,
                          serviceType: values.service,
                          leadFrom: '24/7 Service',
                        }
                      )
                      .then((res) => {})
                      .catch((err) => {
                        toast.error('Something went wrong!');
                        console.log(err);
                      });
                    // Handle response for the second API call
                  } catch (error) {
                    // Handle error for the second API call
                  }

                  // Fourt API call - SMS Strikker
                  try {
                    await axios
                      .get(
                        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${values.phone}&msg=Thank you for showing interest in Maruti Suzuki.
             Our Sales consultant will contact you shortly.
             
             Regards
             RKS Motor Pvt. Ltd.
             98488 98488
             www.saboomaruti.in
             www.saboonexa.in&type=1&template_id=1407168967467983613`
                      )
                      .then((res) => {
                        // console.log("SMS API Response:", res.data);

                        setLoading(false);
                        history(`/thank-you`);
                        setSubmitting(false);
                      })
                      .catch((err) => {
                        console.error('Error sending SMS:', err);

                        setLoading(false);
                        history(`/thank-you`);
                        setSubmitting(false);
                      });
                    // Handle response for the third API call
                  } catch (error) {
                    // Handle error for the third API call
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
                      <div className='relative flex flex-col justify-end '>
                        {/* <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label> */}
                        <ErrorMessage
                          name='name'
                          component='div'
                          className='bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap '
                        />
                        <Field
                          type='text'
                          id='name'
                          name='name'
                          autoComplete='off'
                          required
                          maxLength={35}
                          placeholder='Name'
                          className='w-full h-10 text-lg  font-sans border-b-2 border-white bg-[#1a1a1a] outline-none  px-0.5 text-center lg:text-left '
                        />
                      </div>

                      <div className='relative flex flex-col justify-end '>
                        {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                        <ErrorMessage
                          name='phone'
                          component='div'
                          className='bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap '
                        />

                        <Field
                          type='tel'
                          id='phone'
                          name='phone'
                          required
                          autoComplete='off'
                          maxLength={10}
                          placeholder='Mobile Number'
                          className='w-full text-lg text-center h-10 font-sans border-b-2 border-white outline-none placeholder:text-lg   px-0.5 lg:text-left bg-[#1a1a1a]'
                        />
                      </div>

                      <div className='relative flex flex-col justify-end '>
                        <label
                          className='block font-semibold text-gray-800 sr-only text-md'
                          htmlFor='service'
                        >
                          Select Service
                        </label>
                        <ErrorMessage
                          name='service'
                          component='div'
                          className='bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap '
                        />
                        <Field
                          as='select'
                          className='w-full h-10 px-0.5 font-sans text-center border-b-2 border-white outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left bg-[#1a1a1a]'
                          name='service'
                          id='service'
                          required
                          placeholder='Select Service'
                        >
                          <option value='' disabled>
                            Select Service
                          </option>
                          <option value='Periodic Services'>
                            Periodic Services
                          </option>
                          <option value='Repair & Maintenance'>
                            Repair & Maintenance
                          </option>
                          <option value='Body Repair'>Body Repair</option>
                          <option value='Car Care Service'>
                            Car Care Service
                          </option>
                        </Field>
                      </div>
                      <div className='relative flex flex-col justify-end '>
                        {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                        <ErrorMessage
                          name='message'
                          component='div'
                          className='bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap '
                        />

                        <Field
                          as='textarea' // Render as textarea
                          id='message'
                          name='message'
                          autoComplete='off' // Use camelCase for autoComplete
                          placeholder='Message'
                          className='w-full  max-h-32 text-lg font-sans border-b-2 border-white bg-[#1a1a1a] outline-none placeholder:text-lg px-0.5 lg:text-left text-center'
                        />
                      </div>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        aria-label='Submit'
                        className={` w-min flex   whitespace-nowrap mx-auto shadow-lg overflow-hidden bg-black hover:bg-[#494949] text-md rounded-2xl font-semibold  mb-4   py-3 border border-gray-500 cursor-pointer text-xl lg:col-span-2  mt-2 px-10`}
                      >
                        {loading ? (
                          <div className='flex items-center justify-center'>
                            <CgSpinner className='w-5 h-5 mr-2 animate-spin' />
                            Submitting
                          </div>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                    <div className='container mb-6 text-xs text-gray-600'>
                      <span className='font-semibold'>*Disclaimer:</span> By
                      clicking 'Submit', you have agreed to our Terms and
                      Conditions.
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>

        <section className='bg-[#1b1b1b]'>
          <div className='container grid px-1 pt-8 mx-auto lg:grid-cols-2 '>
            <div className='col-span-1 px-2'>
              <div className='flex object-cover'>
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/rks+logo3.png'
                  alt=''
                  className='h-10 md:h-16'
                />
                <img
                  src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/misc/Asset+10.png'
                  alt=''
                  className='h-10 md:h-16'
                />
              </div>
              <div className='py-2 my-2 font-serif'>
                Emergency Roadside Assistance: Many automobile clubs, insurance
                companies and specialized service providers offer 24/7 roadside
                assistance. This service helps drivers who experience car
                breakdowns, flat tires, dead batteries, or other unexpected
                issues while on the road.
              </div>
              <div className=''>
                <a className='' href='tel:+91 9553595536'>
                  <button
                    className='px-4 py-2 bg-black border rounded-md mb-4 hover:bg-[#494949] '
                    aria-label='Call Us'
                  >
                    +(91) 95535 95536
                  </button>
                </a>
                <br />
                {/* <a
                  className='italic text-indigo-500 hover:opacity-75'
                  href='mailto:24-7SERVICE@SABOO'
                >
                  24-7SERVICE@SABOO
                </a> */}
                <button
                  className='px-4 py-2 bg-black border rounded-md  mb-4 hover:bg-[#494949]'
                  aria-label='Email Us'
                >
                  info@saboomaruti.in
                </button>
                <div className='flex items-center mt-2 space-x-2 xl:space-x-3'>
                  <a
                    href='https://www.facebook.com/saboorksnexa/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='facebook'
                  >
                    <span className='sr-only'>facebook</span>

                    <BsFacebook />
                  </a>
                  <a
                    href='https://twitter.com/saboorksnexa'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='twitter'
                  >
                    <span className='sr-only'>twitter</span>
                    <RiTwitterXLine />
                  </a>
                  <a
                    href='https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='youtube'
                  >
                    <span className='sr-only'>youtube</span>
                    <BsYoutube />
                  </a>
                  <a
                    href='https://www.linkedin.com/company/rks-nexa/?viewAsMember=true'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='linkedin'
                  >
                    <span className='sr-only'>linkedin</span>
                    <ImLinkedin />
                  </a>
                  <a
                    href='https://in.pinterest.com/rksmaruti/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='pinterest'
                  >
                    <span className='sr-only'>pinterest</span>
                    <BsPinterest />
                  </a>
                  <a
                    href='https://www.instagram.com/saboorksnexa/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='instagram'
                  >
                    <span className='sr-only'>instagram</span>
                    <BsInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-around w-full col-span-1 gap-4 px-2 font-seri lg:mx-auto md:flex-row'>
              <div className='font-serif'>
                <div className='mb-2 font-serif text-2xl'>Nexa Cars</div>
                <Link to='/nexa-xl6-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>XL6</div>
                </Link>
                <Link to='/nexa-ciaz-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Ciaz
                  </div>
                </Link>
                <Link to='/new-maruti-baleno-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Baleno
                  </div>
                </Link>
                <Link to='/nexa-ignis-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Ignis
                  </div>
                </Link>
                <Link to='/grand-vitara-on-road-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Grand Vitara
                  </div>
                </Link>
                <Link to='/maruti-fronx-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Fronx
                  </div>
                </Link>
                <Link to='/maruti-jimny-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Jimny
                  </div>
                </Link>
                <Link to='/maruti-invicto-price-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Invicto
                  </div>
                </Link>
              </div>

              <div className='font-serif'>
                <div className='mb-2 font-serif text-2xl'>Corporate</div>
                <Link to='/about'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    About
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Careers
                  </div>
                </Link>
                <Link to='/contact-us'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Contact Us
                  </div>
                </Link>
                <Link to='/book-online-maruti-nexa-car-service'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Book a service
                  </div>
                </Link>
                <Link to='/terms-and-condition'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Terms & Conditions
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    FAQ's
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    Annual Report
                  </div>
                </Link>
                <Link to='/'>
                  <div className='pb-2 font-serif hover:text-red-500 '>
                    CSR Policy
                  </div>
                </Link>
              </div>
              <div className='font-serif'>
                <div className='mb-2 font-serif text-2xl'>Outlets</div>
                <Link to='/maruti-nexa-showroom-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    Showrooms
                  </div>
                </Link>
                <Link to='/maruti-nexa-workshop-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    Workshops
                  </div>
                </Link>
                <Link to='/maruti-nexa-truevalue-outlets-in-hyderabad'>
                  <div className='pb-2 font-serif hover:text-red-500'>
                    True Value
                  </div>
                </Link>
              </div>
            </div>

            <div className='flex flex-wrap gap-2 pb-2 mt-8 text-xs text-gray-300 lg:col-span-2 lg:gap-2 md:justify-around lg:mt-20'>
              <div className='font-serif'>Terms & Conditions</div>
              <div className='font-serif'>Privacy Policy</div>
              <div className='font-serif'>
                ©2023 All Rights Reserved by RKS Motor Pvt Ltd.
              </div>
            </div>
          </div>
        </section>

        <ModalService24 open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default Service24x7;
