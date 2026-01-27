import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import axios from "axios";

import { CgSpinner } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";

// const phoneRegExp = /^[6-9]\d{9}$/;
const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const proposelSchema = object().shape({
  name: string().required("This field is required*"),
  email: string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email"),
  outlet: string().required("This field is required*"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("This field is required*"),
});

function ShowRoomPopup({ open, setOpen, title }) {
  const [loading, setLoading] = useState(false);

  let history = useNavigate();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed left-0 right-0 z-10 overflow-y-auto -top-16 md:top-4"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6 bg-white sm:p-6 md:p-8">
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-2xl leading-6 text-center uppercase "
                >
                  {title}
                </Dialog.Title>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
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
                      d.getDate() +
                      "/" +
                      (d.getMonth() + 1) +
                      "/" +
                      d.getFullYear();

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
                            Email:
                              values.email.length > 0
                                ? values.email
                                : values.phone + "@gmail.com",
                            Phone: values.phone,
                            // LEADCF6: values.model,
                            LEADCF83: result,
                            LEADCF14: currentMonth,
                            LEADCF23: values.outlet,
                            Description: "Show Visit " + values.outlet,
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
                        .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/general", {
                          name: values.name,
                          phone: values.phone,
                          outlet: values.outlet,
                          email:
                            values.email.length > 0
                              ? values.email
                              : values.phone + "@gmail.com",
                          leadFrom: "Showroom",
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
                      <div className="space-y-4">
                        <div className="relative flex flex-col justify-end ">
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
                            className="w-full h-10 text-lg  font-sans border-b border-black outline-none  px-0.5 "
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
                            className="w-full text-lg h-10 font-sans border-b border-black outline-none placeholder:text-lg px-0.5 "
                          />
                        </div>{" "}
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
                            autoComplete="off"
                            placeholder="Email"
                            className="w-full text-lg h-10 font-sans border-b border-black outline-none placeholder:text-lg px-0.5 "
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
                            className="w-full h-10 px-0.5 font-sans text-center border-b border-black outline-none placeholder:text-lg placeholder:text-gray-400 lg:text-left"
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
                        {/* <input
                          type="text"
                          value="Test Drive"
                          disabled
                          className="w-full text-lg h-10 font-sans border-b border-black outline-none placeholder:text-lg   px-0.5   text-gray-600 bg-white"
                        />
                        */}
                        <div className="flex items-center gap-2 pt-3 ">
                          {!loading && (
                            <button
                              type="button"
                              className={` px-6 py-2.5  border hover:border-black duration-200  w-1/2 rounded `}
                              onClick={() => setOpen(false)}
                              aria-label="Back to Showroom"
                            >
                              Back
                            </button>
                          )}
                          <div
                            className={`${loading ? "w-full flex justify-center" : "w-1/2  "
                              }`}
                          >
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className={`${loading
                                ? "mx-auto w-10 rounded-full"
                                : "w-full rounded-md "
                                }  text-sm font-medium text-white bg-black cursor-pointer duration-300 shadow-lg border `}
                              aria-label="Submit Enquiry"
                            >
                              <div className="flex items-center justify-center min-h-8">
                                <CgSpinner
                                  className={`w-8 h-8 m-1 text-white animate-spin ${!loading && "hidden"
                                    }`}
                                />
                                <span
                                  className={`${loading ? "hidden " : "py-2.5"
                                    }`}
                                >
                                  Submit
                                </span>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="container mt-4 text-xs text-gray-600 ">
                        <span className="font-semibold">*Disclaimer:</span> By
                        clicking 'Submit', you have agreed to our Terms and
                        Conditions.
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ShowRoomPopup;
