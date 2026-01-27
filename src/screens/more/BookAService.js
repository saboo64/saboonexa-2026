import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Helmet from 'react-helmet';
import Header from '../../components/Header/Header';
import { CgSpinner } from 'react-icons/cg';
// import { BsArrowLeft } from "react-icons/bs";import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';

// Inside your component
import { object, string } from 'yup';

// const phoneRegExp = /^[6-9]\d{9}$/;

const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required('This field is required*'),

  phone: string()
    .matches(phoneRegExp, 'Invalid phone number')
    .min(10, 'Required 10 digit phone number')
    .required('This field is required*'),
  outlet: string().required('This field is required*'),
});

function BookAService() {
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Best Nexa Service Center in Hyderabad | September & Dussehra 2025
          Service Offers at Saboo Nexa
        </title>
        <meta
          name='title'
          content='Best Nexa Service Center in Hyderabad | September & Dussehra 2025 Service Offers at Saboo Nexa'
        />
        <meta
          name='description'
          content='Book your Nexa car service with Saboo Nexa and enjoy exclusive September & Dussehra 2025 offers! Get expert care, genuine parts, and up to 15% off on select services. Visit our service centers at Kukatpally, Kompally, Somajiguda, and Uppal. Call 98488 98488 to book now!'
        />
        <meta
          name='keywords'
          content='Nexa Service Center Hyderabad, September Dussehra Service Offers 2025, Nexa Car Service Deals, Saboo Nexa Kukatpally, Kompally, Uppal, Somajiguda, Baleno Ignis Ciaz Service Offers, Nexa Car Maintenance, Maruti Suzuki Service Discount, Book Nexa Service Online Hyderabad'
        />
        <meta name='author' content='Broaddcast' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://www.saboonexa.in/book-online-maruti-nexa-car-service'
        />
        <meta
          property='og:title'
          content='Book Nexa Car Service in Hyderabad | Saboo Nexa – September & Dussehra 2025 Service Offers'
        />
        <meta
          property='og:description'
          content='Book your Nexa car service with Saboo Nexa and get up to 15% off this September & Dussehra 2025. Trusted service centers in Hyderabad – Kukatpally, Kompally, Uppal & Somajiguda. Contact: 98488 98488'
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
          content='Book Nexa Car Service in Hyderabad | Saboo Nexa – September & Dussehra 2025 Service Offers'
        />
        <meta
          property='twitter:description'
          content='Top-rated Nexa service center in Hyderabad. Enjoy September & Dussehra 2025 offers with expert technicians, genuine parts & attractive discounts. Call Saboo Nexa: 98488 98488'
        />
        <meta
          property='twitter:image'
          content='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Book-service.jpg'
        />
      </Helmet>

      <div className='pb-[67px] bg-black sm:pb-[120px] lg:pb-[139px]'></div>

      <div className='relative '>
        {/* <img
          // src={require("../../assets/HomePageImages/Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor.webp")}
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
          alt=" Maruti Suzuki Service | Maruti Suzuki | Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service, Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor"
          className={`w-full shadow-lg select-none sm:block hidden`}
        />
        <img
          // src={require("../../assets/HomePageImages/Website_Mobile_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor.webp")}
          src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
          alt=" Maruti Suzuki Service | Maruti Suzuki | Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service, Website_Maruti_Suzuki_Nexa_Service_October_Dussehra_Navratri_Diwali_Offers_Saboo_RKS_Motor"
          className={`w-full shadow-lg select-none sm:hidden`}
        /> */}










        
        {/* <img
          //src={require("../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp")}
          src={require('../../assets/others/Website_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp')}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
          alt=' Maruti Suzuki Service | Maruti Suzuki | Valentines_day Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service'
          className={`w-full shadow-lg select-none sm:block hidden`}
        />
        <img
          src={require('../../assets/others/WM_Maruti_Suzuki_Service_Freedom_offer_with_Saboo_RKS_Motor_service_Independence_day_Service.webp')}
          // src={require("../../assets/others/Website_mobile_Maruti_Suzuki_Nexa_Service_Valentines_day_Service_offers_Saboo_RKS_Nexa_service.webp")}
          alt=' Maruti Suzuki Service | Maruti Suzuki | Service Center Near ME | Periodic Maintenance Service . Visit https://saboonexa.in/ T&C apply.... | By Saboo RKS |  NEXA | Maruti Suzuki | Winter service saboo Nexa | Year End Service'
          className='w-full sm:hidden'
        /> */}







        {/* <img
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/banners/Maruti_Suzuki_Service_Navratri_dussehra_Saboo_RKS_Motor_04.webp"
          src={require("../../assets/HomePageImages/Saboo_Nexa_Service_Center_In_Hyderabad.webp")}
          // src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Nexa+Service+Hafeezpet.webp"
          alt="MARUTI_SUZUKI_NEXA_NEW_YEAR_WINTER_SERVICE_NEAR_ME"
          className="hidden w-full select-none sm:block"
        /> */}

        {/* <div className="absolute justify-between hidden w-full select-none md:flex top-1/2 ">
          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white bg-[#0000005e] rounded-full ml-2 cursor-pointer hover:bg-black group "
            onClick={() => setIsTrue(!isTrue)}
          >
            <BsArrowLeft className="text-2xl duration-500 translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
          </div>
          <div
            className="flex items-center justify-center w-10 xl:w-12 h-10 xl:h-12 text-white bg-[#0000005e] rounded-full mr-2 cursor-pointer hover:bg-black group"
            onClick={() => setIsTrue(!isTrue)}
          >
            <BsArrowLeft className="text-2xl duration-500 rotate-180 -translate-x-4 group-hover:translate-x-0 xl:text-3xl" />
          </div>
        </div> */}
      </div>

      {/* <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/Saboo-Nexa-Service-banner1.png"
        className="w-full"
        alt="Service Banner"
      /> 
      <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto">
          <Link to="/">Home</Link> / Book Online Maruti Car Service
        </p>
      </div> */}

      <div className='py-6 bg-white lg:py-12'>
        <div className='container px-5 mx-auto space-y-3 lg:px-0 '>
          <div className='py-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl'>
            BOOK A SERVICE
          </div>

          <Formik
            initialValues={{
              name: '',

              phone: '',
              outlet: '',
            }}
            validationSchema={proposelSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setLoading(true);
              setSubmitting(true);
              var result = '';
              var d = new Date();
              result +=
                d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

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
                      LEADCF83: result,
                      LEADCF14: currentMonth,
                      // LEADCF6: values.model,
                      LEADCF23: values.outlet,
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

              // Second API call - Old SQL Backend

              // Third API call - New MongoDB backend
              try {
                await axios
                  .post(
                    'https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/service',
                    {
                      name: values.name,
                      phone: values.phone,
                      email: values.phone + '@gmail.com',
                      outlet: values.outlet,
                      model: '',
                      leadForm: 'Book A Service',
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
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8'>
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
                      className='w-full h-10 text-lg  font-sans border-b-2 border-black outline-none  px-0.5 text-center lg:text-left '
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
                      className='w-full text-lg text-center h-10 font-sans border-b-2 border-black outline-none placeholder:text-lg   px-0.5 lg:text-left'
                    />
                  </div>

                  <div className='relative flex flex-col justify-end '>
                    <label
                      className='block font-semibold text-gray-800 sr-only text-md'
                      htmlFor='outlet'
                    >
                      Outlet
                    </label>
                    <ErrorMessage
                      name='outlet'
                      component='div'
                      className='bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap '
                    />
                    <Field
                      as='select'
                      className='w-full h-10 px-0.5 font-sans text-center border-b-2 border-black outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left'
                      name='outlet'
                      id='outlet'
                      required
                      placeholder='Select Outlet'
                    >
                      <option value=''>Select Outlet</option>
                      <option value='Hafeezpet'>Hafeezpet</option>
                      <option value='Kompallly'>Kompally</option>
                      <option value='Suchitra'>Suchitra</option>
                      <option value='Somajiguda'>Somajiguda</option>
                      <option value='Moosarambagh'>Moosarambagh</option>
                      <option value='Kodangal'>Kodangal</option>
                      <option value='Uppal'>Uppal</option>
                      <option value='Tadbund'>Tadbund</option>
                      <option value='Nampally'>Nampally</option>
                      <option value='Kushaiguda'>Kushaiguda</option>
                      <option value='Kukatpally'>Kukatpally</option>
                      <option value='Shamirpet'>Shamirpet</option>
                    </Field>
                  </div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    aria-label='Submit'
                    className={`border-b-2 border-black px-6 py-2.5 lg:col-span-3 hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg `}
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

                <div className='container mt-6 text-xs text-gray-600 lg:mt-8'>
                  <span className='font-semibold'>*Disclaimer:</span> By
                  clicking 'Submit', you have agreed to our Terms and
                  Conditions.
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default BookAService;
