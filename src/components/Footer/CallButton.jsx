import React, { useState, useEffect } from "react";
import { MdCall, MdLocalOffer, MdLocationOn } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { Link } from "react-router-dom";

const CallButton = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 

  useEffect(() => {
     const controlNavbar = () => {
       if (typeof window !== "undefined") {
         if (window.scrollY > lastScrollY) {
           // if scroll down hide the CallButton
           setShow(false);
         } else {
           // if scroll up show the CallButton
           setShow(true);
         }
         setLastScrollY(window.scrollY);
       }
     };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 z-20 w-full py-3 bg-white shadow-lg shadow-black md:hidden rounded-t-xl transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-4">
        <a href="tel:9848898488">
          <div className="flex flex-col items-center justify-between">
            <MdCall className="text-2xl" />
            <div className="text-xs">Call</div>
          </div>
        </a>
        <Link to="/maruti-nexa-showroom-outlets-in-hyderabad">
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <MdLocationOn className="mx-auto text-2xl" />
            <div className="text-xs">Showroom</div>
          </div>
        </Link>
        <Link to="/book-online-maruti-nexa-car-service">
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <GiAutoRepair className="mx-auto text-2xl" />
            <div className="text-xs">Service</div>
          </div>
        </Link>
        <Link to="/nexa-car-offers-in-hyderabad">
          <div className="flex flex-col items-center justify-between cursor-pointer">
            <MdLocalOffer className="mx-auto text-2xl " />
            <div className="text-xs ">Offers</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CallButton;
