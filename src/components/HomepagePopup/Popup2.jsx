import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import loginkey from "../../assets/others/login_key.svg";
import { object, string } from "yup";
import { SlCallOut } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useComponentState } from "../Context/StateProvide";

const phoneRegExp = /^(?!([6-9])\1{9})(?![6-9](\d)\2{8})[6-9]\d{9}$/;
const proposelSchema = object().shape({
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .max(10, "Required 10 digit phone number"),
});

function Popup2() {
  const { open2, setOpen2 } = useComponentState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem("popup") !== "false") {
        setOpen2(true);
        sessionStorage.setItem("popup", "true");
      }
    }, 3000);
  }, [setOpen2]);

  return (
    <Transition.Root show={open2} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto select-none"
        onClose={() => {
          setOpen2(true);
        }}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 h-[90vh] md:min-h-screen">
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
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full lg:px-4">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 ">
                <div
                  onClick={() => setOpen2(false)}
                  className="absolute flex items-center justify-center border rounded-full cursor-pointer hover:border-red-600 right-4 top-4 group hover:bg-red-500 "
                >
                  <div className="mx-2 text-xl font-light group-hover:text-white -mt-0.5 flex items-center gap-1  ">
                    x
                  </div>
                </div>
                <Dialog.Title as="h3" className="leading-6 text-center ">
                  <img
                    src={loginkey}
                    alt="Nexa Enquiry"
                    className="h-16 py-1 mx-auto"
                  />
                  <div className="flex justify-between w-40 mx-auto mt-2 text-3xl ">
                    <span className="font-serif ">N </span>
                    <span className="font-serif ">E </span>
                    <span className="font-serif ">X </span>
                    <span className="font-serif ">A </span>
                  </div>
                  <div className="mt-2 text-sm text-center uppercase md:text-lg">
                    Get a <span className="">Free </span>
                    Quote & New
                    <span className=""> Offers</span>
                  </div>
                </Dialog.Title>

                <Formik
                  initialValues={{
                    phone: "",
                  }}
                  validationSchema={proposelSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    setSubmitting(true);

                    var result = "";
                    var d = new Date();
                    var currentMonth = d.toLocaleDateString("en-US", {
                      month: "long",
                    });
                    result +=
                      d.getDate() +
                      "/" +
                      (d.getMonth() + 1) +
                      "/" +
                      d.getFullYear();

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
                            returnURL: "https://saboonexa.in/",
                            "Last Name": "Nexa Popup",
                            Email: `${values.phone}@gmail.com`,
                            LEADCF6: "SABOO NEXA Popup",
                            LEADCF83: result,
                            LEADCF14: currentMonth,
                            Phone: values.phone,
                          }),
                          {
                            headers: {
                              "Content-Type":
                                "application/x-www-form-urlencoded",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.status === 200) {
                            console.log(response);
                            // Handle success, e.g., show a success message
                          } else {
                            // Handle error, e.g., show an error message
                          }
                        })
                        .catch((error) => {
                          console.error("Error:", error);
                          // Handle network or other errors
                        });
                    } catch (error) {
                      // Handle network or other errors
                    }

                    sessionStorage.setItem("popup", "false");

                    // Fourth API call - New MongoDB backend
                    try {
                      await axios
                        .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/popup", {
                          phone: values.phone,
                        })
                        .then((res) => {
                          toast("Enquiry sent successfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                          setOpen2(false);
                          setLoading(false);

                        })
                        .catch((err) => {
                          setOpen2(false);
                          setLoading(false);
                          toast.error("Something went wrong!");
                          console.log(err);
                        });
                    } catch (error) {
                      setLoading(false);
                      setOpen2(false);
                      toast.error("Something went wrong!");
                    }

                    // Third API call - SMS Strikker
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
                          console.log("SMS API Response:", res.data);
                        })
                        .catch((err) => {
                          console.error("Error sending SMS:", err);
                        });
                    } catch (error) {
                      // Handle error for the third API call
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="space-y-3">
                        <div className="relative flex flex-col items-center pt-4 sm:pb-3">
                          <Field
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            autoComplete="off"
                            maxLength={10}
                            placeholder="Enter your mobile no here"
                            className="w-full px-3 text-center bg-white border border-gray-700 rounded-lg outline-none h-11 focus:bg-white placeholder:text-gray-400 focus:shadow-lg"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-white bg-[#FF0000] text-sm px-2 py-0.5 w-min whitespace-nowrap mt-1 rounded text-center opacity-70"
                          />
                        </div>

                        <div className="flex">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`${loading
                              ? "mx-auto w-10 rounded-full"
                              : "w-full rounded-md py-1"
                              } mb-3 text-sm font-medium text-white bg-black cursor-pointer hover:scale-95 duration-300 hover:shadow-lg`}
                            aria-label="Submit Enquiry"
                          >
                            <div className="flex items-center justify-center min-h-8">
                              <CgSpinner
                                className={`w-8 h-8 m-1 text-white animate-spin ${!loading && "hidden"
                                  }`}
                              />
                              <span
                                className={`${loading ? "hidden" : "py-2"}`}
                              >
                                SUBMIT
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                      {!loading && (
                        <div className="items-center justify-center hidden gap-2 mt-2 mb-6 sm:flex">
                          <a
                            href="tel:+919848898488"
                            rel="noopener noreferrer"
                            aria-label="Call Now"
                            className="flex items-center justify-center w-1/2 py-2 duration-200 bg-blue-500 border-b rounded-lg hover:shadow-lg group hover:text-white bg-opacity-5 hover:bg-opacity-100"
                          >
                            <SlCallOut
                              size={20}
                              className="mr-2 text-sm duration-200 hover:text-blue-700 group-hover:text-white"
                            />
                            Call now
                          </a>
                          <a
                            href="https://wa.me/919848898488"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="flex justify-center w-1/2 py-2 duration-200 bg-green-500 border-b rounded-lg hover:shadow-lg item-center group hover:text-white bg-opacity-5 hover:bg-opacity-100"
                          >
                            <IoLogoWhatsapp
                              size={20}
                              className="mr-2 duration-200 hover:text-green-700 group-hover:text-white"
                            />
                            WhatsApp
                          </a>
                        </div>
                      )}
                      <div className="container mb-2 text-xs text-center text-gray-600">
                        <span className="font-semibold">*Disclaimer:</span> By
                        clicking 'Submit', you have agreed to our Terms &
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

export default Popup2;
