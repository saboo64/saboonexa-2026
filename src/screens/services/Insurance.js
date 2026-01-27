import React, { useState } from "react";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";

// const phoneRegExp = /^[6-9]\d{9}$/;
const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),

  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
});

function Insurance() {
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Car Insurance price, Offers & Renewal Details | Saboo Nexa
        </title>
        <meta
          name="title"
          content="Maruti Car Insurance price, Offers & Renewal Details | Saboo Nexa"
        />
        <meta
          name="description"
          content="Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today."
        />
        <meta name="keywords" content="Maruti Car Insurance" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/maruti-car-insurance/"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Nexa Car Insurance price, Offers & Renewal Details | Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Insurance.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/maruti-car-insurance/"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Nexa Car Insurance price, Offers & Renewal Details | Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Maruti Car Insurance Premium Details, Renewals & Offers. Get cashless settlement on Maruti Insurance. Visit nearest Saboo Nexa showroom today."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Insurance.jpg"
        />
      </Helmet>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Insurance-Banner.webp"
        className="w-full max-w-full"
        alt="inusrance banner"
      />
      <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto">
          <Link to="/">Home</Link> / Insurance
        </p>
      </div>
      <div className="container px-0.5 py-16 mx-auto">
        <p className="text-2xl font-medium uppercase mb-7 lg:text-3xl">
          Contact Us For Insurance
        </p>
        <Formik
          initialValues={{
            name: "",
            phone: "",
          }}
          validationSchema={proposelSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setLoading(true);
            setSubmitting(true);
            var result = "";
            var d = new Date();
            result +=
              d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

            var currentMonth = d.toLocaleDateString("en-US", {
              month: "long",
            });
            // First API call - Zoho Web Form - name="WebToLeads54158000085121507"
            try {
              const response = await fetch(
                "https://crm.zoho.in/crm/WebToLeadForm",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams({
                    xnQsjsdp:
                      "376faf1937bae26d548809a1bd5aaf291dc2f7699176a737321080a13a47f85d",
                    zc_gad: "",
                    xmIwtLD:
                      "e33401c4d750a93851eae1ea78230d307a269b2689c2e01c4311b323f4426b35c466507effa8d31791f1c544e84b80a3",
                    actionType: "TGVhZHM=",
                    returnURL: "https://www.saboonexa.in/",
                    "Last Name": values.name,
                    Email: values.phone + "@gmail.com",
                    Phone: values.phone,
                    LEADCF83: result,
                    LEADCF14: currentMonth,
                  }),
                }
              );
              if (response.ok) {
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
              } else {
                // Handle error, e.g., show an error message
              }
            } catch (error) {
              // Handle network or other errors
            }

            // Third API call - New MongoDB backend
            try {
              await axios
                .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/isurance", {
                  name: values.name,
                  phone: values.phone,
                  email: values.phone + "@gmail.com",
                })
                .then((res) => { })
                .catch((err) => {
                  toast.error("Something went wrong!");
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
                  console.error("Error sending SMS:", err);

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
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
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
                    autoComplete="off"
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
                    autoComplete="off"
                    maxLength={10}
                    placeholder="Mobile Number"
                    className="w-full text-lg text-center h-10 font-sans border-b-2 border-black outline-none placeholder:text-lg   px-0.5 lg:text-left"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit"
                  className={`border-b-2 border-black px-6 py-2.5 lg:col-span-2 hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg `}
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
                <span className="font-semibold">*Disclaimer:</span> By clicking
                'Submit', you have agreed to our Terms and Conditions.
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Insurance;
