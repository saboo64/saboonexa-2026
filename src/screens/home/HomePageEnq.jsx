import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";

const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),
  email: string().email("Invalid email address"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  model: string().required("This field is required*"),
});

export const HomePageEnq = ({ title }) => {
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

  return (
    <div className="py-6 mx-auto md:py-12 lg:py-16 max-w-7xl">
      <div className="container px-5 mx-auto space-y-3 lg:px-1 ">
        <div className="py-2 text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl">
          {title}
        </div>
        {/* <div className="py-2 text-3xl font-medium text-left uppercase ">
          WHERE DREAMS MEET THE ROAD.
        </div>
        <div className="py-2 text-3xl font-medium text-left uppercase">
          BEGIN YOUR JOURNEY INTO LUXURY HERE.
        </div> */}
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            model: "",
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

            // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
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
                      "3e4c511e1bfac462fb9ac158b261b0d3e54ddbaf41eb8a08b30b4fc061369283",
                    actionType: "TGVhZHM=",
                    returnURL: "https://www.saboonexa.in/",
                    "Last Name": values.name,
                    Email: values.phone + "@gmail.com",
                    Phone: values.phone,
                    LEADCF6: values.model,
                    LEADCF83: result,
                    LEADCF14: currentMonth,
                    // LEADCF23: outlet,
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
                .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/onRoadPrice", {
                  name: values.name,
                  email: values.phone + "@gmail.com",
                  phone: values.phone,
                  model: values.model,
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
                    <option value="" disabled className="bg-gray-100 ">
                      Select Model
                    </option>
                    <option value="e-VITARA" className="bg-gray-100 ">
                      e-VITARA
                    </option>
                    <option value="INVICTO" className="bg-gray-100 ">
                      INVICTO
                    </option>
                    <option className="bg-gray-100 " value="FRONX">
                      FRONX
                    </option>
                    <option className="bg-gray-100 " value="JIMNY">
                      JIMNY
                    </option>
                    <option className="bg-gray-100 " value="GRAND VITARA">
                      GRAND VITARA
                    </option>
                    <option className="bg-gray-100 " value="CIAZ">
                      CIAZ
                    </option>
                    <option className="bg-gray-100 " value="BALENO">
                      BALENO
                    </option>
                    <option className="bg-gray-100 " value="IGNIS">
                      IGNIS
                    </option>
                    <option className="bg-gray-100 " value="XL6">
                      XL6
                    </option>
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit Enquiry Form"
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
    </div>
  );
};

HomePageEnq.defaultProps = {
  title: "ENQUIRY FORM",
};
