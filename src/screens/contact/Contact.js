import React, { useState } from "react";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),
  email: string()
    .required("This field is required*")
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  model: string().required("This field is required*"),
  outlet: string().required("This field is required*"),
  message: string()
    .max(300, "Message must be 300 characters or less") // Limit message to 300 characters
    .required("This field is required*"),
});

function Contact() {
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  return (
    <>
      <Helmet>
        <title>Maruti Suzuki Customer Care | Telangana & Hyderbad</title>
        <meta
          name="title"
          content="Maruti Suzuki Customer Care | Telangana & Hyderbad"
        />
        <meta
          name="description"
          content="Contact your nearest Saboo Nexa showroom for any Maruti Suzuki Nexa Vehicle Enquiry. For queries about any of the NEXA cars feedback or complaints contact us on 9848898488. Write to us at info@saboomaruti.in."
        />
        <meta
          name="keywords"
          content="Saboo Nexa, Contact Us, Test Drive, Service Appointment, Customer Support, Automotive Dealership ,Car Sales, Vehicle Maintenance, Inquiries, Nexa Dealership"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/contact-us/"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Customer Care | Telangana & Hyderbad"
        />
        <meta
          property="og:description"
          content="Maruti Suzuki customer care details for , Telanagana  | Telangana No. 1 Maruti Suzuki Dealer Sales: 9848898488 and Service:  9848898488"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Contact-us.webp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/contact-us/"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Customer Care | Telangana & Hyderbad"
        />
        <meta
          property="twitter:description"
          content="Maruti Suzuki customer care details for , Telanagana  | Telangana No. 1 Maruti Suzuki Dealer Sales: 9848898488 and Service:  9848898488"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Contact-us.webp"
        />
      </Helmet>
      <Header col={true} />
      <div className="pb-[67px]  sm:pb-[120px] lg:pb-[135px]"></div>
      <div className="mt-6 text-2xl font-medium text-center uppercase sm:text-3xl md:text-4xl ">
        CONTACT US
      </div>
      <div className="mt-4 mb-5 text-center">
        for Sales, Feedback or Complaint | Saboo Nexa
      </div>

      <div className="container px-5 py-6 mx-auto space-y-3 lg:py-12 lg:px-0">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            outlet: "",
            model: "",
            message: "",
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

            // First API call - Zoho Web Form - name="WebToLeads54158000000752015"
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
                      "5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b",
                    zc_gad: "",
                    xmIwtLD:
                      "3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92",
                    actionType: "TGVhZHM=",
                    returnURL: "https://www.saboonexa.in/",
                    "Last Name": values.name,
                    Email:
                      values.email.length > 0
                        ? values.email
                        : values.phone + "@gmail.com",
                    Phone: values.phone,
                    LEADCF6: values.model,
                    LEADCF23: values.outlet,
                    Description: values.message,
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
                .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/contactform", {
                  name: values.name,
                  phone: values.phone,
                  email:
                    values.email.length > 0
                      ? values.email
                      : values.phone + "@gmail.com",
                  model: values.model,
                  outlet: values.outlet,
                  message: values.message,
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
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12">
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
                <div className="relative flex flex-col justify-end ">
                  {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />

                  <Field
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                    placeholder="Email"
                    className="w-full text-lg text-center h-10 font-sans border-b-2 border-black outline-none placeholder:text-lg   px-0.5 lg:text-left"
                  />
                </div>

                <div className="relative flex flex-col justify-end ">
                  <label
                    className="block font-semibold text-gray-800 sr-only text-md"
                    htmlFor="outlet"
                  >
                    Outlet
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
                    placeholder="Select Outlet"
                  >
                    <option value="" disabled>
                      Select Outlet
                    </option>
                    <option value="Hafeezpet">Hafeezpet</option>
                    <option value="Kompallly">Kompally</option>
                    <option value="Suchitra">Suchitra</option>
                    <option value="Somajiguda">Somajiguda</option>
                    <option value="Moosarambagh">Moosarambagh</option>
                    <option value="Kodangal">Kodangal</option>
                    <option value="Uppal">Uppal</option>
                    <option value="Tadbund">Tadbund</option>
                    <option value="Nampally">Nampally</option>
                    <option value="Kushaiguda">Kushaiguda</option>
                    <option value="Kukatpally">Kukatpally</option>
                    <option value="Shamirpet">Shamirpet</option>
                  </Field>
                </div>
                <div className="relative flex flex-col justify-end ">
                  <label
                    className="block font-semibold text-gray-800 sr-only text-md"
                    htmlFor="model"
                  >
                    Model
                  </label>
                  <ErrorMessage
                    name="model"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />
                  <Field
                    as="select"
                    className="w-full h-10 px-0.5 font-sans text-center border-b-2 border-black outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
                    name="model"
                    id="model"
                    required
                    placeholder="Select Model"
                  >
                    <option value="" disabled>
                      Select Model
                    </option>
                    <option value="e-VITARA">e-VITARA</option>
                    <option value="INVICTO">INVICTO</option>
                    <option value="FRONX">FRONX</option>
                    <option value="JIMNY">JIMNY</option>
                    <option value="GRAND VITARA">GRAND VITARA</option>
                    <option value="CIAZ">CIAZ</option>
                    <option value="BALENO">BALENO</option>
                    <option value="Ignis">IGNIS</option>
                    <option value="XL6">XL6</option>
                  </Field>
                </div>
                <div className="relative flex flex-col justify-end ">
                  {/* <label
                        htmlFor="phone"
                        className="invisible text-sm leading-7 text-gray-600"
                      >
                        Phone No.
                      </label> */}
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />

                  <Field
                    as="textarea" // Render as textarea
                    id="message"
                    name="message"
                    required
                    autoComplete="off" // Use camelCase for autoComplete
                    placeholder="Message"
                    className="w-full  max-h-32 text-lg font-sans border-b-2 border-black outline-none placeholder:text-lg px-0.5 lg:text-left text-center"
                  />
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

export default Contact;
