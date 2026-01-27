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

  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  model: string(),
});

export const CarEnq2 = ({ title, carName }) => {
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

  return (
    <div className="py-6 lg:py-12">
      <div className="container px-5 mx-auto space-y-3 lg:px-0 ">
        <div className="pt-2 pb-6 text-3xl text-center uppercase lg:pb-6 sm:text-4xl md:text-5xl">
          {title}
        </div>

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
                    LEADCF83: result,
                    // LEADCF14: "FEBRUARY",
                    LEADCF14: currentMonth,
                    LEADCF6: carName,
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
                  model: carName,
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
                  `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${values.phone}&msg=Thank you for showing interest in Maruti Suzuki. Our Sales consultant will contact you shortly. Regards RKS Motor Pvt. Ltd. 98488 98488 www.saboomaruti.in www.saboonexa.in&type=1&template_id=1407168967467983613`
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
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
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
                {/* <div className="relative ">
                    <label
                      htmlFor="email"
                      className="text-sm leading-7 text-gray-600"
                    >
                      Email
                    </label>
  
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full h-10 px-3 font-sans border-b-2 border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-700 "
                    />
                  </div> */}
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

                {/* <div>
                 <label
                      className="block font-semibold text-gray-800 text-md"
                      htmlFor="model"
                    >
                      Product Name
                    </label>
                    <Field
                      type="text"
                      className="w-full h-10 px-3 font-sans border-b-2 border-black outline-none placeholder:text-lg placeholder:text-gray-400 "
                      name="model"
                      id="model"
                      value="Invicto"
                      disabled
                    />
  
                     <Field
                    as="select"
                    className="w-full max-w-xs p-2 border-2 rounded-md select bg-slate-100 "
                    name="model"
                    id="model"
                  >
                    <option className="" value="Invicto">
                      Invicto
                    </option>
                    <option className="" value="Invicto">
                      Invicto
                    </option>
                   
                  </Field>
                  <ErrorMessage
                    name="model"
                    component="div"
                    className="text-red-700"
                  /> 
                  </div>*/}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`border-b-2 border-black px-6 py-2.5 lg:col-span-2 hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg `}
                  aria-label="Submit Enquiry"
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
