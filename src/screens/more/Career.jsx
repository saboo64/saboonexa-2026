import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
// const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
const emailReg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const url =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

const SignupSchema = Yup.object().shape({
  salutation: Yup.string().required("Information is required*"),
  firstName: Yup.string().required("Information is required*"),
  lastName: Yup.string().required("Information is required*"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(emailReg, "mail is not valid")
    .required("Information is required*"),

  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Information is required*"),
  alterPhone: Yup.string().matches(phoneRegex, "Invalid phone number"),
  address: Yup.string().required("Information is required*"),
  lastCompany: Yup.string().required("Information is required*"),
  jobTitle: Yup.string().required("Information is required*"),
  jobLocation: Yup.string().required("Information is required*"),
  totalExp: Yup.string().required("Information is required*"),
  profileSum: Yup.string().required("Information is required*"),
  lastDwarnSalary: Yup.string().required("Information is required*"),
  skills: Yup.string().required("Information is required*"),
  currentCTC: Yup.string().required("Information is required*"),
  expectedCTC: Yup.string().required("Information is required*"),
  qualification: Yup.string().required("Information is required*"),
  resumeLink: Yup.string()
    .required("Information is required*")
    .matches(url, "link is not valid"),
});

// let state = [
//   "Andaman and Nicobar Islands",
//   "Andhra Pradesh",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Chandigarh",
//   "Chhattisgarh",
//   "Dadra and Nagar Haveli",
//   "Daman and Diu",
//   "Delhi",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Jharkhand",
//   "Karnataka",
//   "Kerala",
//   "Lakshadweep",
//   "Madhya Pradesh",
//   "Maharashtra",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Odisha",
//   "Puducherry",
//   "Punjab",
//   "Rajasthan",
//   "Sikkim",
//   "Tamil Nadu",
//   "Telangana",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
//   "West Bengal",
// ];

const Career = ({ formValue }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sub, setSub] = useState(false);
  const initialValues = {
    salutation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alterPhone: "",
    address: "",
    lastCompany: "",
    jobTitle: "",
    jobLocation: "",
    totalExp: "",
    profileSum: "",
    lastDwarnSalary: "",
    skills: "",
    currentCTC: "",
    expectedCTC: "",
    qualification: "",
    resumeLink: "",
  };

  const notify = () =>
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

  return (
    <>
      <Helmet>
        <title>Join Our Team - Careers at Saboo Nexa</title>
        <meta name="title" content="Join Our Team - Careers at Saboo Nexa" />
        <meta
          name="description"
          content="Explore exciting career opportunities at Saboo Nexa and become part of a dynamic team dedicated to automotive excellence."
        />
        <meta
          name="keywords"
          content="Careers, Jobs, Saboo Nexa, Automotive Industry, Opportunities"
        />
      </Helmet>
      <Header col={sub} />
      {sub ? (
        <div className=" pt-24 pb-10 flex flex-col justify-center items-center text-center    min-h-[75vh]">
          <div className="mb-4 text-2xl font-medium sm:text-3xl md:text-4xl">
            WE GOT YOUR APPLICATION.
          </div>
          <div>
            We just got your application. We'll analyze your information and
            come back to you soon. <br />
            In case you're approved on this first step.
            <br />
            You'll be invited to an in-person interview with our team.
          </div>
          <div className="w-40 h-1 mt-6 mb-4 bg-black"></div>
          <div className="">Best Wishes</div>
          <Link
            to="/"
            className="flex items-center justify-center py-8 text-blue-500"
          >
            <BsArrowRight /> &nbsp;Back to Home
          </Link>
        </div>
      ) : (
        <div>
          <div className="pb-[67px] bg-black sm:pb-[120px] lg:pb-[135px]"></div>
          <div className="bg-[#15151e] pt-14 pb-10 text-center text-white uppercase text-2xl sm:text-3xl md:text-4xl font-medium">
            POWER UP YOUR AUTO CAREER WITH SABOO RKS
          </div>

          <div className={` my-2 mx-auto container `}>
            <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setLoading(true);
                values = { ...values, ...formValue };
                console.log(values);
                axios
                  .post("https://saboo-careers.onrender.com/careers", values)
                  // .post('http://localhost:3001/register', values)
                  .then((response) => {
                    if (response.data.status === true) {
                      setLoading(false);
                      // alert('Successfully signup');
                      // history('/otpsign');
                      resetForm({ values: initialValues });
                      notify();
                      setSub(true);
                    } else {
                      setError(error.message);
                      setLoading(false);
                    }
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                    alert(`${error.response.data.message}`);
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="p-6 text-center bg-white rounded-3xl">
                  <div className="grid gap-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label htmlFor="salutation">Salutation*</label>

                        <ErrorMessage
                          name="salutation"
                          component="div"
                          className="-mt-5 text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        as="select"
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        name="salutation"
                        id="salutation"
                      >
                        <option
                          value=""
                          className="text-sm text-gray-500"
                          disabled
                        ></option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Ms.">Ms.</option>
                      </Field>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">First Name* </div>
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="firstName"
                        id="firstName"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Last Name* </div>
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="lastName"
                        id="lastName"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Email* </div>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="email"
                        id="email"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Phone* </div>
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="phone"
                        id="phone"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Alternative Phone </div>
                        <ErrorMessage
                          name="alterPhone"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="alterPhone"
                        id="alterPhone"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Address</div>
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="address"
                        id="address"
                        // placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid gap-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-6">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Last Company</div>
                        <ErrorMessage
                          name="lastCompany"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="lastCompany"
                        id="lastCompany"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Job Title</div>
                        <ErrorMessage
                          name="jobTitle"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="jobTitle"
                        id="jobTitle"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Job Location</div>
                        <ErrorMessage
                          name="jobLocation"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="jobLocation"
                        id="jobLocation"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">
                          Total Experience{" "}
                          <span className="text-xs">
                            {" "}
                            - (Mention zero (“0”) if you’re a fresher.)
                          </span>{" "}
                        </div>
                        <ErrorMessage
                          name="totalExp"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="totalExp"
                        id="totalExp"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div className="">
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Profile Summary</div>
                        <ErrorMessage
                          name="profileSum"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        as="textarea"
                        name="profileSum"
                        id="profileSum"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Last Dwarn Salary </div>
                        <ErrorMessage
                          name="lastDwarnSalary"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="lastDwarnSalary"
                        id="lastDwarnSalary"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Skills(Ex.Hr, Sales, Marketing)</div>
                        <ErrorMessage
                          name="skills"
                          component="div"
                          className="-mt-5 text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="skills"
                        id="skills"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Current CTC </div>
                        <ErrorMessage
                          name="currentCTC"
                          component="div"
                          className="-mt-5 text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="currentCTC"
                        id="currentCTC"
                        // placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Expected CTC </div>
                        <ErrorMessage
                          name="expectedCTC"
                          component="div"
                          className="-mt-5 text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="expectedCTC"
                        id="expectedCTC"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="">Highest Qualification</div>
                        <ErrorMessage
                          name="qualification"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="qualification"
                        id="qualification"
                        // placeholder="Company Name"
                      />
                    </div>

                    <div className="mb-4 md:col-span-2">
                      <div className="flex justify-between mb-1 ">
                        <div className="text-left md:hidden">Resume Link</div>
                        <div className="hidden text-left md:block">
                          <span className="font-medium">Resume Link :</span>{" "}
                          Upload your resume to Google Drive and paste the link
                          below.
                        </div>

                        <ErrorMessage
                          name="resumeLink"
                          component="div"
                          className="text-sm text-right text-red-700 "
                        />
                      </div>
                      <Field
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-black focus:outline-none"
                        type="text"
                        name="resumeLink"
                        id="resumeLink"
                        // placeholder="Company Name"
                      />
                      <div>
                        <div className="mt-1 text-left md:hidden">
                          Upload resume in your google drive and paste link
                          below
                        </div>
                        <div className="text-xs text-red-500 text-left mt-0.5">
                          Note: Update pdf document share setting from
                          Restricted to anyone with the link in google drive{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="col-span-3 px-6 py-2 mt-1 mb-6 font-sans text-lg font-semibold tracking-wide text-white bg-black rounded-md w-min whitespace-nowrap "
                    type="submit"
                    aria-label="Submit Application"
                    // disabled={isSubmitting}
                  >
                    {loading ? "SUBMITTING" : "SUBMIT APPLICATION"}
                  </button>
                </Form>
              )}
            </Formik>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
};

export default Career;
