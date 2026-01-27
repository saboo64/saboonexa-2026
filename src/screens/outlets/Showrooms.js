import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";

import { CgSpinner } from "react-icons/cg";

import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

const phoneRegExp = /^[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  outlet: string().required("This field is required*"),
});

function Showrooms({ title }) {
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  return (
    <>
      <Helmet>
        <title>
          Discover Luxury and Innovation at Saboo Nexa Outlets | Find Your Dream
          Car Today
        </title>
        <meta
          name="title"
          content="Discover Luxury and Innovation at Saboo Nexa Outlets | Find Your Dream Car Today"
        />
        <meta
          name="description"
          content="Explore the latest collection of premium Nexa cars at Saboo Nexa Outlets. From sleek sedans to stylish SUVs, find your perfect ride with us."
        />
        <meta
          name="keywords"
          content="Nexa cars, luxury cars, premium cars, car showroom, car dealership, Saboo Nexa, dream car, car collection, stylish cars, innovative cars"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
      <Header />
      <div className="h-16 bg-black lg:h-20"></div>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Outlet.webp"
        className="w-full max-w-full "
        alt="finance banner"
      />
      {/* <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto"><Link to='/'>Home</Link> / Showroom</p>
      </div> */}

      <div className="container px-2 mx-auto sm:py-5 lg:px-0 ">
        {/* <div className="text-4xl font-medium text-center uppercase md:text-5xl">
          Showroom
        </div>

        <br />
        <div className="mb-6 text-center">
          To ensure that you receive the ultimate Nexa experience, we have
          strategically positioned ourselves in three prominent hotspots
          throughout Hyderabad
        </div> */}
        <div className="container px-5 pt-10 pb-2 text-4xl uppercase lg:px-0 md:text-5xl">
          OUTLETS
        </div>
        <div className="container grid grid-cols-1 gap-4 mx-auto mt-5 mb-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-16 ">
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
            <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
            <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl ">
              Nexa Lumbini
            </div>
            {/* <div className="mb-2">Adarsh Nagar, Hyderabad - 500063</div> */}
            <a
              href="https://www.google.com/maps/place/NEXA/@17.407435,78.472675,14z/data=!4m5!3m4!1s0x0:0x167869bcabc7428b!8m2!3d17.407435!4d78.4726753?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Nexa Lumbini Showroom"
            >
              <div
                className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                style={{
                  backgroundImage:
                    'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/lumbini_outlet.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
          </div>
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
            <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
            <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl ">
              Nexa Jubilee
            </div>
            {/* <div className="mb-2">Jubilee Hills, Hyderabad - 500033</div> */}
            <a
              href="https://www.google.com/maps/place/NEXA/@17.439431,78.398485,14z/data=!4m5!3m4!1s0x0:0x1cb759ff5f828d3!8m2!3d17.4394309!4d78.398485?hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Nexa Jubilee Showroom"
            >
              <div
                className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                style={{
                  backgroundImage:
                    'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/jubilee-outlet.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
          </div>
          <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
            <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
            <div className="mb-4 text-xl font-medium uppercase sm:text-2xl lg:text-3xl ">
              Nexa Hafeezpet
            </div>
            {/* <div className="mb-2">Hafeezpet, Hyderabad - 500049</div> */}
            <a
              href="https://goo.gl/maps/rgoP8TXGQ9b3WvYu8"
              target="_blank"
              rel="noreferrer"
              aria-label="Nexa Hafeezpet Showroom"
            >
              <div
                className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                style={{
                  backgroundImage:
                    'url("https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/hafeezpet-outlet.webp")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </a>
          </div>
        </div>
        <div className="container px-2 py-5 pb-2 text-4xl uppercase sm:pt-10 lg:px-0 md:text-5xl">
          <span></span> BOOK A SHOWROOM VISIT
        </div>

        <div className="container px-2 py-4 mx-auto lg:px-0">
          <Formik
            initialValues={{
              name: "",
              phone: "",
              outlet: "",
            }}
            validationSchema={proposelSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const allQuery = [];
              setLoading(true);
              setSubmitting(true);
              var result = "";
              var d = new Date();
              result +=
                d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

              var currentMonth = d.toLocaleDateString("en-US", {
                month: "long",
              });
              // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
              try {
                await axios
                  .post(
                    "https://crm.zoho.in/crm/WebToLeadForm",
                    new URLSearchParams({
                      xnQsjsdp:
                        "5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b",
                      zc_gad: "",
                      xmIwtLD:
                        "3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283",
                      actionType: "TGVhZHM=",
                      returnURL: "https://www.saboonexa.in/",
                      "Last Name": values.name,

                      Email: values.phone + "@gmail.com",
                      LEADCF83: result,
                      LEADCF14: currentMonth,
                      Phone: values.phone,
                      // LEADCF6: values.model,
                      LEADCF23: values.outlet,
                      Description: "Show Visit " + values.outlet,
                    }),
                    {
                      headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                      },
                    }
                  )
                  .then((response) => {
                    console.log("Response:", response.data);
                    allQuery.push("Zoho, ");
                    toast("Enquiry sent successfully", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      // transition: Bounce,
                    });
                  })
                  .catch((error) => {
                    allQuery.push("Zoho - error, ");
                    console.error("Error:", error);
                  });
              } catch (error) {
                // Handle network or other errors
              }

              // try {
              //   const response = await fetch(
              //     "https://crm.zoho.in/crm/WebToLeadForm",
              //     {
              //       method: "POST",
              //       headers: {
              //         "Content-Type": "application/x-www-form-urlencoded",
              //       },
              //       body: new URLSearchParams({
              //         xnQsjsdp:
              //           "5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b",
              //         zc_gad: "",
              //         xmIwtLD:
              //           "3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283",
              //         actionType: "TGVhZHM=",
              //         returnURL: "https://www.saboonexa.in/",
              //         "Last Name": values.name,
              //         Email: values.phone + "@gmail.com",
              //         Phone: values.phone,
              //         // LEADCF6: values.model,
              //         LEADCF23: values.outlet,
              //         Description: "Show Visit " + values.outlet,
              //       }),
              //     }
              //   );
              //   if (response.ok) {
              //     toast("Enquiry sent successfully", {
              //       position: "top-right",
              //       autoClose: 5000,
              //       hideProgressBar: false,
              //       closeOnClick: true,
              //       pauseOnHover: false,
              //       draggable: true,
              //       progress: undefined,
              //       theme: "light",
              //       // transition: Bounce,
              //     });
              //   } else {
              //     // Handle error, e.g., show an error message
              //   }
              // } catch (error) {
              //   // Handle network or other errors
              // }

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
                    allQuery.push("Sms, ");
                    setLoading(false);
                    history(`/thank-you`);
                    setSubmitting(false);
                  })
                  .catch((err) => {
                    console.error("Error sending SMS:", err);
                    allQuery.push("Sms - Error, ");
                    setLoading(false);
                    history(`/thank-you`);
                    setSubmitting(false);
                  });
                // Handle response for the third API call
              } catch (error) {
                // Handle error for the third API call
              }

              // Third API call - New MongoDB backend
              allQuery.push(allQuery.length);
              try {
                await axios
                  .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/general", {
                    name: values.name,
                    phone: values.phone,
                    outlet: values.outlet,
                    email: values.phone + "@gmail.com",
                    allQuery: allQuery,
                    leadFrom: "Showroom",
                  })
                  .then((res) => { })
                  .catch((err) => {
                    toast.error("Something went wrong! (New Backend)");

                    console.log(err);
                  });
                // Handle response for the second API call
              } catch (error) {
                // Handle error for the second API call
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                  <div className="relative flex flex-col justify-end ">
                    {/* <label
                      htmlFor="name"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Name
                    </label> */}
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                    />
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      // autoComplete="off"
                      required
                      maxLength={35}
                      placeholder="Name"
                      className="w-full h-10 text-lg  font-sans border-b-2 border-black outline-none  px-0.5 text-center lg:text-left "
                    />
                  </div>

                  <div className="relative flex flex-col justify-end ">
                    {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                    />

                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      // autoComplete="off"
                      maxLength={10}
                      placeholder="Mobile Number"
                      className="w-full text-lg text-center h-10 font-sans border-b-2 border-black outline-none placeholder:text-lg   px-0.5 lg:text-left"
                    />
                  </div>

                  <div className="relative flex flex-col justify-end ">
                    <label
                      className="block font-semibold text-gray-800 sr-only text-md"
                      htmlFor="outlet"
                    >
                      Select Showroom
                    </label>
                    <ErrorMessage
                      name="outlet"
                      component="div"
                      className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                    />
                    <Field
                      as="select"
                      className="w-full h-10 px-0.5 font-sans text-center border-b-2 border-black outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
                      name="outlet"
                      id="outlet"
                      required
                      placeholder="Select Showroom"
                    >
                      {" "}
                      <option value="" disabled>
                        Select Showroom
                      </option>
                      <option value="Nexa Jubilee">Nexa Jubilee</option>
                      <option value="Nexa Lumbini">Nexa Lumbini</option>
                      <option value="Hafeezpet">Hafeezpet</option>
                    </Field>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="Submit Enquiry"
                    className={`border-b-2 border-black px-6 py-2.5 lg:col-span-3 hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg `}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <CgSpinner className="w-5 h-5 mr-2 animate-spin" />
                        Submitting
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

                <div className="container mt-6 text-xs text-gray-600 lg:mt-8">
                  <span className="font-semibold">*Disclaimer:</span> By
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

export default Showrooms;
