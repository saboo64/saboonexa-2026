import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  BsFacebook,
  BsYoutube,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";

import { RiTwitterXLine } from "react-icons/ri";

import { ImLinkedin } from "react-icons/im";

const navigation = {
  cars: [
    {
      name: "Maruti e-Vitara",
      to: "/nexa-evitara-on-road",
    },

    
    { name: "Maruti XL6", to: "/nexa-xl6-on-road-price-in-hyderabad" },
    
    

    { name: "Maruti Ciaz", to: "/nexa-ciaz-on-road-price-in-hyderabad" },
    { name: "Maruti Baleno", to: "/new-maruti-baleno-price-in-hyderabad" },
    { name: "Maruti Ignis", to: "/nexa-ignis-on-road-price-in-hyderabad" },
    {
      name: "Maruti Grand Vitara",
      to: "/grand-vitara-on-road-price-in-hyderabad",
    },
    {
      name: "Maruti FRONX",
      to: "/maruti-fronx-price-in-hyderabad",
    },
    {
      name: "Maruti Jimny",
      to: "/maruti-jimny-price-in-hyderabad",
    },
    {
      name: "Maruti Invicto",
      to: "/maruti-invicto-price-in-hyderabad",
    },
  ],
  corporate: [
    { name: "About", to: "/about" },
    { name: "Careers", to: "/career" },
    { name: "Contact Us", to: "/contact-us" },
    { name: "Book a service", to: "/book-online-maruti-nexa-car-service" },
    { name: "Terms and Conditions", to: "/terms-and-condition" },
    { name: "Privacy policy", to: "/privacy-policy" },
    { name: "FAQ's", to: "/" },
    { name: "Annual Report", to: "/" },
    { name: "CSR Policy", to: "/" },
  ],
  financeInsurance: [
    // { name: "Nexa Extended Warranty", to: "/" },
    { name: "Finance", to: "/maruti-car-finance" },
    { name: "Insurance", to: "/maruti-car-insurance" },
    // { name: "Corporate & Institutional Sales", to: "/" },
  ],

  service: [
    // { name: "Nexa Extended Warranty", to: "/" },
    { name: "24/7 Service", to: "/maruti-suzuki-24/7-service-in-hyderabad" },
  ],
  outlets: [
    {
      name: "Showrooms",
      to: "/maruti-nexa-showroom-outlets-in-hyderabad",
    },
    {
      name: "Workshops",
      to: "/maruti-nexa-workshop-outlets-in-hyderabad",
    },
    {
      name: "Truevalue",
      to: "/maruti-nexa-truevalue-outlets-in-hyderabad",
    },
  ],
};

function Footer() {
  return (
    <>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Saboo-RKS-Nexa-Footer.webp"
        className="w-full bg-white "
        alt=" Popular Nexa Hyderabad Footer 2024"
      />
      {/* Footer section */}
      <div className="bg-[#15151e] pt-16 pb-10 md:px-4 lg:px-0 px-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 md:grid-cols-2">
            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1">
              <img
                src={require("../../assets/others/logo_color.png")}
                alt="deva"
                className="h-10 lg:h-12"
              />
              <div className="grid grid-rows-2 gap-4">
                <p className="mt-3 font-light text-white">
                   Popular RKS is Hyderabad’s leading automobile dealership and has
                  been driving growth in domains of automobile sales & service
                  over the last four decades.
                </p>
                <div className="space-x-2">
                  <a
                    href="mailto:info@saboomaruti.in"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="email"
                    className=" bg-white  px-2 sm:px-3 py-1.5 rounded shadow-sm text-sm mt-3"
                  >
                    info@saboomaruti.in
                  </a>

                  <a
                    href="tel:9848898488"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="phone"
                    className=" bg-white  px-2 sm:px-3 py-1.5 rounded shadow-sm text-sm mt-3 whitespace-nowrap"
                  >
                    +91 98488 98488
                  </a>
                </div>
              </div>
            </div>

            {/* col starts */}
            <div className="space-y-3 text-gray-200">
              <p>Nexa Cars</p>
              <div className="flex flex-col space-y-3">
                {navigation.cars.map((item, index) => (
                  <div
                    className="flex items-center pb-2 border-b border-gray-700 hover:text-white"
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className="space-y-3 text-gray-200 ">
              <p>Corporate</p>
              <div className="flex flex-col space-y-3">
                {navigation.corporate.map((item, index) => (
                  <div
                    className="flex items-center pb-2 border-b border-gray-700 hover:text-white"
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className="space-y-3 text-gray-200">
              <p>Finance & Insurance</p>
              <div className="flex flex-col space-y-3">
                {navigation.financeInsurance.map((item, index) => (
                  <div
                    className="flex items-center pb-2 border-b border-gray-700 hover:text-white"
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>

              <p>Service</p>
              <div className="flex flex-col space-y-3">
                {navigation.service.map((item, index) => (
                  <div
                    className="flex items-center pb-2 border-b border-gray-700 hover:text-white"
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
            </div>

            {/* col starts */}
            <div className="space-y-3 text-gray-200">
              <p>Outlets</p>
              <div className="flex flex-col space-y-3">
                {navigation.outlets.map((item, index) => (
                  <div
                    className="flex items-center pb-2 border-b border-gray-700 hover:text-white"
                    key={index}
                  >
                    <RiArrowRightSLine />
                    <Link to={item.to}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <p>Social Links</p>
              <div className="flex items-center space-x-2 xl:space-x-3">
                <a
                  href="https://www.facebook.com/saboorksnexa/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <span className="sr-only">facebook</span>

                  <BsFacebook />
                </a>
                <a
                  href="https://twitter.com/saboorksnexa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="twitter"
                >
                  <span className="sr-only">twitter</span>
                  <RiTwitterXLine />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCcX41w_0KU95uunUdNcP8TA?view_as=subscriber"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="youtube"
                >
                  <span className="sr-only">youtube</span>
                  <BsYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/company/rks-nexa/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <span className="sr-only">linkedin</span>
                  <ImLinkedin />
                </a>
                <a
                  href="https://in.pinterest.com/rksmaruti/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="pinterest"
                >
                  <span className="sr-only">pinterest</span>
                  <BsPinterest />
                </a>
                <a
                  href="https://www.instagram.com/saboorksnexa/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="instagram"
                >
                  <span className="sr-only">instagram</span>
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CopyRight content */}
      <div className="pt-3 pb-16 text-gray-300 bg-black md:py-3">
        <div className="container items-center px-5 mx-auto lg:flex md:space-y-2 lg:justify-between lg:px-0">
          <div>
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/terms-and-condition" className="hover:text-red-500">
                Terms & Conditions
              </Link>
              <span className="h-4 border"></span>
              <Link to="/privacy-policy" className="hover:text-red-500">
                Privacy Policy
              </Link>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} All Rights Reserved by RKS Motor Pvt
              Ltd.
            </p>
          </div>
          <p className="text-sm">
            Powered by{" "}
            <a
              className="hover:text-red-500"
              href="https://broaddcast.com"
              target="_blank"
              rel="noreferrer"
              aria-label="broaddcast"
            >
              BroaddCast Business Solutions LLP
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
