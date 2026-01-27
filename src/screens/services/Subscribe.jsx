import React, { useState } from "react";

import { toast } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";

function Subscribe() {
  return (
    <>
      <Header col={true} />
      <div className="pb-[67px]  sm:pb-[120px] lg:pb-[135px]"></div>
      <img
        src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/smp/hompage/banners/nexa-mobile_banner-1.webp"
        className="w-full lg:mt-16 md:hidden"
        alt="Service Subscribe"
      />
      <img
        src="https://marutisuzukiarenaprodcdn.azureedge.net/-/media/smp/hompage/banners/nexa-banner-1.webp"
        className="hidden w-full md:block"
        alt="Service Subscribe"
      />
      <div className="container mx-auto my-10 lg:my-16">
        <h2 className="w-full pb-6 text-3xl sm:text-4xl md:text-5xl">
          Why Subscribe from Maruti Suzuki?
        </h2>
        <p className="text-gray-500 ">
          Introducing a surprisingly easy way of bringing home a car. Simply
          choose a car for a preferred tenure and drive ahead to enjoy for an
          all-inclusive monthly fee which takes care of your maintenance and
          insurance cost also.
        </p>
        <div className="grid grid-cols-2 gap-5 mx-5 md:grid-cols-3 md:mx-0">
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits.webp"
            alt="1"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benifits-2.webp"
            alt="2"
          />
          <img
            src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/subscription-benefits-3.webp"
            alt="3"
          />
        </div>
        <ul className="mx-10 text-gray-600 list-disc md:mx-0">
          <li>
            In White plate, vehicle will be registered in customer’s name.
            Tenure options available in white plate are 24, 36 or 48 months.
          </li>
          <li>
            In Back plate, vehicle will be registered in the name of
            subscription partner. Tenure options available in black plate are
            12, 18, 24, 30, 36, 42 or 48 months.
          </li>
          <li>MS Subscribe is available in select cities only.</li>
        </ul>
      </div>
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="w-full py-6 text-3xl sm:text-4xl md:text-5xl">
            Easy Steps to Subscribe your Car
          </h2>

          <div className="grid grid-cols-2 gap-5 mx-5 md:grid-cols-4 md:mx-0">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-1.webp"
              alt="1"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-2.webp"
              alt="2"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-3.webp"
              alt="3"
            />
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboomaruti/subscribe_screen/easy-4.webp"
              alt="4"
            />
          </div>
        </div>
      </div>
      <PreferenceForm />
    </>
  );
}

const PreferenceForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // const [method, setMethod] = useState();
  const [loading, setLoading] = useState(false);
  const [outlet, setOutlet] = useState("");

  let history = useNavigate();
  // adding date
  var result = "";
  var d = new Date();
  result += d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  var currentMonth = d.toLocaleDateString("en-US", {
    month: "long",
  });

  const checkFormValidity = () => {
    return (
      name.trim() !== "" && phone.length === 10 && outlet !== "" && !loading
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://crm.zoho.in/crm/WebToLeadForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          xnQsjsdp:
            "49bfb8debdbef1eedeb5178c2aa64d2b0d2d050f0d2e9bf260366565c0acc5c4",
          zc_gad: "",
          xmIwtLD:
            "dce8352fec04acbfd88e152a47794d7646986665bafe3cfcb8434672fc2bca120113d9d9ba5ffdc5621e32eb15f41f93",
          actionType: "TGVhZHM=",
          returnURL: "https://www.saboomaruti.in/",
          "Last Name": name,
          // Email: phone + '@gmail.com',
          Phone: phone,
          // LEADCF6: model,
          LEADCF23: outlet,
          // adding date
          LEADCF83: result,
          LEADCF14: currentMonth,
        }),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
      } else {
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      // Handle network or other errors
    }

    // try {
    //   await axios
    //     .post('https://saboogroups.com/admin/api/arena-onRoadPrice', {
    //       name: name,
    //       phone: phone,
    //       // email: email,
    //       // model: model,
    //       outlet: outlet,
    //     })
    //     .then((res) => {
    //       toast.success('Enquiry sent successfully');
    //     })
    //     .catch((err) => {
    //       setLoading(false);
    //       toast.error('Something went wrong!');
    //       console.log(err);
    //     });
    // } catch (error) {
    //   // toast.error("Something went wrong!");
    //   setLoading(false);
    // }

    try {
      await axios
        .post("https://nexa-backend-git-main-saboo-nexas-projects.vercel.app/general", {
          name: name,
          phone: phone,
          // email: email,
          // model: model,
          Email: phone + "@gmail.com",
          outlet: outlet,

          leadFrom: "Subscribe",
        })
        .then((res) => {
          toast.success("Enquiry sent successfully");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Something went wrong!");
          console.log(err);
        });
    } catch (error) {
      // toast.error("Something went wrong!");
      setLoading(false);
    }

    // Second API call
    await axios
      .get(
        `https://www.smsstriker.com/API/sms.php?username=saboorks&password=LqHk1wBeI&from=RKSMOT&to=${phone}&msg=Thank you for showing interest in Maruti Suzuki.
   Our Sales consultant will contact you shortly.
   
   Regards
   RKS Motor Pvt. Ltd.
   98488 98488
   www.saboomaruti.in
   www.saboonexa.in&type=1&template_id=1407168967467983613`
      )
      .then((res) => {
        console.log("SMS API Response:", res.data);

        // setOpen(false);
        history(`/thank-you`);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error sending SMS:", err);

        // setOpen(false);
        history(`/thank-you`);
        setLoading(false);
      });
  };

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      sessionStorage.setItem("popup", "false");
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <>
      <div className="container mx-auto my-10 lg:my-16">
        <h2 className="w-full pb-6 text-3xl sm:text-4xl md:text-5xl">
          Select your Preference
        </h2>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <input
                className="w-full h-10 px-3 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Name"
                id="Last_Name"
                name="Last Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="w-full h-10 px-3 border rounded-full outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone"
                minlength="10"
                maxlength="10"
                id="Mobile"
                name="Phone"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value.replace(/[^1-9 ]/g, "") &&
                    e.target.value.replace(/ /g, "")
                  )
                }
              />
              {phone.length > 7 && phone.length < 10 ? (
                <small className="text-red-500">
                  Phone number must be 10 digits
                </small>
              ) : !pattern.test(phone) && phone.length === 10 ? (
                <small className="text-red-500">Phone number is invalid</small>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="LEADCF23" className="sr-only">
                Outlet
              </label>
              <select
                id="LEADCF23"
                name="LEADCF23"
                aria-label="Outlet"
                onChange={(e) => setOutlet(e.target.value)}
                defaultValue="Select Outlet"
                className="block w-full h-10 px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option disabled>Select Outlet</option>
                <option value="Nexa Jubilee">Nexa Jubilee</option>
                <option value="Nexa Lumbini">Nexa Lumbini</option>
                <option value="Hafeezpet">Hafeezpet</option>
              </select>
            </div>{" "}
            <button
              type="submit"
              aria-label="Submit Form"
              disabled={
                !checkFormValidity() ||
                phone.length !== 10 ||
                !pattern.test(phone) ||
                loading
              }
              onClick={handleSubmit}
              className={` inline-flex justify-center mr-3 py-2   border border-transparent shadow-sm text-sm font-medium rounded-full text-white px-6 ${!checkFormValidity()
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-blue-900 "
                }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
                  Loading
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>

          <div className="mt-2 ml-2 text-xs">
            Disclaimer
            <span className="text-black">
              : By clicking 'SUBMIT', you have agreed to our
            </span>
            <Link
              to="/terms-and-condition"
              className="px-2 text-sm text-red-600 "
            >
              Terms and Conditions
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
