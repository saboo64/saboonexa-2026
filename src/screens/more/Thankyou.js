import React from "react";
import Helmet from "react-helmet";
import { ImCheckmark } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function Thankyou() {
  return (
    <>
      <Helmet>
        <title>
          Thank You for Choosing SabooNexa | Your Premier Destination for Maruti
          Suzuki Vehicles
        </title>
        <meta
          name="title"
          content="Thank You for Choosing SabooNexa | Your Premier Destination for Maruti Suzuki Vehicles"
        />
        <meta
          name="description"
          content="Thank you for choosing SabooNexa! We appreciate your trust in us. Explore our range of Maruti Suzuki vehicles, from stylish hatchbacks to powerful SUVs. Contact us for any assistance."
        />
        <meta
          name="keywords"
          content="SabooNexa, Maruti Suzuki, Thank You,Premier Destination, Car Dealership, Hatchbacks, SUVs, Contact Us, Customer Service, Automotive Excellence"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
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
