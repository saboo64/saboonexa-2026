import React from "react";
import { ImCheckmark } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Seo from "../../components/SEO/seo";

function Thankyou() {
  return (
    <>
      <Seo
        title="Thank You | Popular Nexa"
        description="Thank you for your enquiry with Popular Nexa. Our executive will get in touch with you shortly."
        url="https://saboonexa.in/thank-you"
        noindex
      />
      <Header col={true} />

      <div className="py-16 lg:py-28 xl:py-32">
        <h1 className="flex justify-center text-green-700 text-9xl">
          <ImCheckmark />
        </h1>
        <h4 className="text-3xl font-semibold text-center">THANK YOU!</h4>
        <p className="mt-6 text-center">
          Your enquiry has been processed successfully. Our executive will get
          in touch with you shortly.
        </p>
        <Link to="/" className="flex items-center justify-center py-8">
          <BsArrowRight /> &nbsp;Back to Home
        </Link>
      </div>
    </>
  );
}

export default Thankyou;
