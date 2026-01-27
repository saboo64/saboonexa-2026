import React from "react";
import { workshops } from "../../constants";

import Helmet from "react-helmet";
import Header from "../../components/Header/Header";

function Workshops() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Trust Your Car with Experts at Saboo Nexa Workshops | Quality Service
          Guaranteed
        </title>
        <meta
          name="title"
          content="Trust Your Car with Experts at Saboo Nexa Workshops | Quality Service Guaranteed
"
        />
        <meta
          name="description"
          content="Ensure your car receives top-notch care at Saboo Nexa Workshops. Our team of expert technicians provides quality service and maintenance for your vehicle, ensuring it stays in prime condition.
 "
        />
        <meta
          name="keywords"
          content="Car service, car maintenance, car repair, car workshop, Saboo Nexa workshop, car service center, expert technicians, quality service, car care, vehicle maintenance
"
        />
        <meta name="author" content="Broaddcast" />
      </Helmet>
      <div className="h-16 bg-black lg:h-20"></div>

      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Nexa-Outlet.webp"
        className="w-full max-w-full"
        alt="finance banner"
      />

      <div className="pt-10 mb-2 text-4xl font-medium text-center uppercase lg:pt-16 md:text-5xl">
        Workshop
      </div>
      <div className="container grid grid-cols-1 gap-4 pt-10 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-14 ">
        {workshops.map((x, i) => {
          return (
            <div className=" w-full  px-4 text-left py-6 hover:text-white shadow-xl  shadow-[#b0b0b0] group duration-500 border-t rounded-3xl relative overflow-hidden">
              <div className="bg-black h-32 w-36 duration-500 group-hover:h-[200%] group-hover:w-[200%] group-hover:-top-56 group-hover:-right-56 rounded-full absolute -top-20 -right-20 -z-10"></div>
              <div className="mb-4 text-xl font-medium uppercase sm:text-2xl ">
                {x.address}
              </div>
              <a
                href={x.googleMap}
                target="_blank"
                rel="noreferrer"
                aria-label={x.address}
              >
                <div
                  className="flex justify-center duration-500 bg-center h-52 lg:h-60 group-hover:saturate-200 rounded-3xl grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage: `url(${x.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Workshops;
