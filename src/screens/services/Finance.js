import React, { useState } from "react";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
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

function Finance() {
  const [loading, setLoading] = useState(false);
  let history = useNavigate();

  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");

  function calculateEMI() {
    const principal = parseFloat(loanAmount);
    const calculateInterest = parseFloat(interestRate) / 100 / 12;
    const calculatePayments = parseFloat(loanTerm) * 12;

    //calculate the monthly payment
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = parseFloat(monthly).toFixed(2);

    //calculate interest
    const totalInterest = (monthly * calculatePayments - principal).toFixed(2);
    const totalPayment = (monthly * calculatePayments).toFixed(2);

    document.getElementById("month").innerHTML = parseFloat(monthlyPayment);
    document.getElementById("interest").innerHTML = totalInterest;
    document.getElementById("total").innerHTML = totalPayment;
  }

  return (
    <>
      <Helmet>
        <title>Maruti Suzuki Car Finance with Low Interest | Saboo Nexa</title>
        <meta
          name="title"
          content="Maruti Suzuki Car Finance with Low Interest | Saboo Nexa"
        />
        <meta
          name="description"
          content="Maruti Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI."
        />
        <meta name="keywords" content="Maruti Suzuki Nexa Car Finance" />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboonexa.in/maruti-finance/"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Nexa Car Finance with Low Interest | Saboo Nexa"
        />
        <meta
          property="og:description"
          content="Maruti Suzuki Nexa Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Finance.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/maruti-finance/"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Nexa Car Finance with Low Interest | Saboo Nexa"
        />
        <meta
          property="twitter:description"
          content="Maruti Suzuki Nexa Finance provides the best finance deals on New & Pre-Owned Car Loans. Get Quick Car Loan, Special offers, Quick Approval, Low-Interest Rates & Low EMI."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/Finance.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Finance.webp"
        className="w-full max-w-full"
        alt="finance banner"
      />
      <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto">
          <Link to="/">Home</Link> / Finance
        </p>
      </div>
      <div className="container py-16 mx-auto">
        <div className="grid gap-4 px-5 md:grid-cols-2">
          {/* new grid column opens */}
          <div className="space-y-3 ">
            <p className="text-2xl font-medium uppercase mb-7 lg:text-3xl">
              Contact Us{" "}
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
                  d.getDate() +
                  "/" +
                  (d.getMonth() + 1) +
                  "/" +
                  d.getFullYear();

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
                    .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/finance", {
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
                    <span className="font-semibold">*Disclaimer:</span> By
                    clicking 'Submit', you have agreed to our Terms and
                    Conditions.
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* new grid column opens */}
          <div>
            <p className="text-2xl font-medium uppercase mb-7 lg:text-3xl">
              EMI Calculator
            </p>
            <div className="flex items-center justify-between mt-2">
              <label htmlFor="currency">Currency:</label>
              <select
                disabled
                name="currency"
                aria-labelledby="Select Currency"
                className="block py-2 w-full max-w-[75%] px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                <option>Select Curreny</option>
                <option selected>₹ INR</option>
                <option>$ USD</option>
              </select>
            </div>
            <div className="flex items-center justify-between mt-2">
              <label htmlFor="loanAmount">Loan Amount :</label> <p></p>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500"
                type="text"
                placeholder="100000"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <label htmlFor="interestRate">Interest Rate :</label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500"
                type="text"
                placeholder="12%"
                id="interestRate"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <label htmlFor="loanTerm">Loan Term :</label>
              <input
                className="border h-10 outline-none px-3 rounded-md w-full max-w-[75%] focus:ring-red-500 focus:border-red-500"
                type="text"
                placeholder="5 years"
                id="loanTerm"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-3">
              <button
                className="bg-black text-white rounded py-2.5 px-5"
                type="submit"
                aria-label="Submit"
                onClick={calculateEMI}
              >
                Submit
              </button>
            </div>

            <table className="container w-full mx-auto my-8 text-sm text-left uppercase border border-collapse table-auto border-slate-400">
              <thead className="text-white bg-gray-800">
                <tr>
                  <th className="border border-slate-300 font-normal px-3 py-1.5">
                    EMI per month
                  </th>
                  <th className="border border-slate-300 font-normal px-3 py-1.5">
                    Interest
                  </th>

                  <th className="border border-slate-300 font-normal px-3 py-1.5">
                    Payment (Principal + Interest)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className="border border-slate-300 px-3 py-1.5"
                    id="month"
                  ></td>
                  <td
                    className="border border-slate-300 px-3 py-1.5"
                    id="interest"
                  ></td>
                  <td
                    className="border border-slate-300 px-3 py-1.5"
                    id="total"
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finance;
