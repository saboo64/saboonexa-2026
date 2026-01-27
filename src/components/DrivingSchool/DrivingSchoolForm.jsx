import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";

import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";

const phoneRegExp = /^[6-9]\d{9}$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),

  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
  outlet: string().required("This field is required*"),
});

export const DrivingSchoolForm = () => {
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

  return (
    <div className="py-6 lg:pt-12">
      <div className="container px-5 mx-auto space-y-3 lg:px-0 ">
        <div className="py-2 text-3xl font-medium  uppercase sm:text-4xl md:text-5xl text-[#171c8f]">
          Maruti Suzuki Driving School
        </div>
        <Formik
          initialValues={{
            name: "",

            phone: "",
            outlet: "",
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

            // First API call - Zoho Web Form - name="WebToLeads54158000086119144"
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
                      "d2ee11c031006b880b3c3c1d0a1249b70273c831ed11ac7e90f0fad3690e2af1",
                    zc_gad: "",
                    xmIwtLD:
                      "eb9aa7b23b1843217e472cb4aef481c082be781902fe27153841d2d46b5e8e4324b8197533bb9485e2094469a0ab022f",
                    actionType: "TGVhZHM=",
                    returnURL: "https://www.saboonexa.in/",
                    "Last Name": values.name,
                    Email: values.phone + "@gmail.com",
                    Phone: values.phone,
                    LEADCF83: result,

                    LEADCF14: currentMonth,
                    // LEADCF6: values.model,
                    LEADCF23: values.outlet,
                    Description: `Driving School Enquiry from ${values.name} for ${values.outlet} outlet. Phone: ${values.phone}`,
                    // LEADCF6: values.model,
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
                console.log("Enquiry sent successfully");
              } else {
                // Handle error, e.g., show an error message
                console.error("Error sending enquiry");
              }
            } catch (error) {
              // Handle network or other errors
              console.error("Error sending enquiry", error);
            }
            // // Second API call - Old SQL Backend
            // try {
            //   await axios
            //     .post(
            //       "https://saboogroups.com/admin/api/arena-driving-school",
            //       {
            //         name: values.name,
            //         email: values.phone + "@gmail.com",
            //         phone: values.phone,
            //         outlet: values.outlet,
            //       }
            //     )
            //     .then((res) => {})
            //     .catch((err) => {
            //       toast.error("Something went wrong!");
            //       console.log(err);
            //     });
            // } catch (error) {
            //   // setSubmitting(false);
            // }

            // Third API call - New MongoDB backend
            try {
              await axios
                .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/drvingSchool", {
                  name: values.name,
                  email: values.phone + "@gmail.com",
                  phone: values.phone,
                  outlet: values.outlet,
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
                    className="w-full h-10 text-lg  font-sans border-b-2 border-[#171c8f] outline-none  px-0.5 text-center lg:text-left "
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
                    className="w-full text-lg text-center h-10 font-sans border-b-2 border-[#171c8f] outline-none placeholder:text-lg   px-0.5 lg:text-left"
                  />
                </div>

                <div className="relative flex flex-col justify-end ">
                  <label
                    className="block font-semibold text-gray-800 sr-only text-md"
                    htmlFor="outlet"
                  >
                    Select Outlet
                  </label>
                  <ErrorMessage
                    name="outlet"
                    component="div"
                    className="bg-[#FF0000] text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                  />
                  <Field
                    as="select"
                    className="w-full h-10 px-0.5 font-sans text-center border-b-2 border-[#171c8f] outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
                    name="outlet"
                    id="outlet"
                    required
                    placeholder="Select Outlet"
                  >
                    <option value="" disabled className="bg-gray-100 ">
                      Select Outlet
                    </option>
                    <option value="Nampally" className="bg-gray-100 ">
                      Nampally
                    </option>
                    <option value="Kushaiguda" className="bg-gray-100 ">
                      Kushaiguda
                    </option>
                    <option value="Malakpet" className="bg-gray-100 ">
                      Malakpet
                    </option>
                  </Field>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit Form"
                  className={`border-b-2 border-[#171c8f] px-6 py-2.5 lg:col-span-3 hover:bg-[#171c8f] hover:text-white duration-200 mt-4 lg:hover:rounded `}
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
