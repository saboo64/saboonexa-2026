import React from "react";
import Header from "../../components/Header/Header";
import { RiArrowRightSLine } from "react-icons/ri";
import { Helmet } from "react-helmet";

function TermsAndCond() {
  return (
    <>
      <Header col={true} />
      <Helmet>
        <title>
          Terms and Conditions | Saboo Motor Authorised Dealers Maruti Suzuki
        </title>
        <meta
          name="title"
          content="Terms and Conditions | Saboo Motor Authorised Dealers Maruti Suzuki"
        />
        <meta
          name="description"
          content="Terms and Conditions Saboo Motor | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School"
        />
        <meta
          name="keywords"
          content="Terms and Conditions, Saboo Motor, Maruti Suzuki, Nexa, Arena, True Value, Driving School"
        />
      </Helmet>
      <img
        src={require("../../assets/others/privacy-policy-banner-nexa.webp")}
        className="w-full"
        alt=""
      />
      <div className="container px-5 mx-auto">
        <p className="text-xl font-semibold uppercase">Terms and Conditions </p>

        <div className="my-4 space-y-1">
          <h5>Saboo RKS Maruti Suzuki Statement of Terms and Conditions</h5>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            At Saboo RKS we take your privacy seriously. Please read the
            following to learn more about our terms and conditions.
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5>What the terms and conditions cover</h5>
          <div className="flex">
            <RiArrowRightSLine className="text-red-600" size={23} />
            <p className="text-sm font-light">
              This covers Saboo RKS Maruti Suzuki treatment of personally
              identifiable information that Saboo RKS Maruti Suzuki collects
              when you are on Saboo RKS Maruti Suzuki site and when you use our
              services. This policy also covers Saboo RKS Maruti Suzuki
              treatment of any Personally identifiable information that Saboo
              RKS Maruti Suzuki shares with you.
            </p>
          </div>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            This policy does not apply to the practices of companies that Saboo
            RKS Maruti Suzuki does not own or control or Saboo RKS Maruti Suzuki
            does not own or employ or manage.
          </p>
          <br></br>
          <p className="flex items-center text-sm font-light">
            I, hereby authorize RKS Motor Pvt Ltd., to contact me. It will
            override my registry on the NCPR. By providing your contact details
            you have expressly authorized RKS Motor to contact you in future
            through calls /SMS / E-mails and inform you about our products.
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5>Information Collection and Use</h5>
          <div className="flex">
            <RiArrowRightSLine className="text-red-600" size={22} />
            <p className="text-sm font-light">
              Saboo RKS Maruti Suzuki collects personally identifiable
              information when you register for a Saboo RKS Maruti Suzuki
              account. When you choose the services and promotions. Saboo RKS
              Maruti Suzuki may also receive personally identifiable information
              from our business partners.
            </p>
          </div>
          <div className="flex">
            <RiArrowRightSLine className="text-red-600" size={22} />
            <p className="text-sm font-light">
              When you register with Saboo RKS Maruti Suzuki, we ask for your
              name, e-mail address, birth date, gender, occupation, industry and
              personal interest. Once you register with Saboo RKS Maruti Suzuki
              and sign in to our services, you are not anonymous to us.
            </p>
          </div>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            Saboo RKS Maruti Suzuki uses information for three general purpose:
            to fulfill your requests for certain products and services and to
            contact you about specials and new products.
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5>Information Sharing and Disclosure</h5>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            Saboo RKS Maruti Suzuki will not sell or rent your Personally
            Identifiable Information to anyone.
          </p>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            Saboo RKS Maruti Suzuki will send Personally Identifiable
            Information about you when:
          </p>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            We have consent to share the information
          </p>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            We need to share your information to provide the product or service
            you have requested
          </p>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            We respond to subpoenas, court orders or legal process.
          </p>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            When we find your action on the web site violates the Saboo RKS
            Maruti Suzuki terms and condition or any of your usage guidelines
            for specific products or services.
          </p>
        </div>

        <div className="my-4 space-y-1">
          <h5>Security</h5>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            Your Saboo RKS Maruti Suzuki account information is
            password-protected for your privacy and security We have taken
            adequate measures to secure access to your personal data
          </p>
        </div>
        <div className="my-4 space-y-1">
          <h5>Changes to this Policy</h5>
          <p className="flex items-center text-sm font-light">
            <RiArrowRightSLine className="text-red-600" />
            Saboo RKS Maruti Suzuki may edit this policy from time to time. If
            we make any substantial changes ,we will notify you by posting a
            prominent announcement on our pages.
          </p>
        </div>
      </div>
    </>
  );
}

export default TermsAndCond;
