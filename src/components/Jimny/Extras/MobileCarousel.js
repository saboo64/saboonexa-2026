import React from "react";
import "../Extras/styles.css";
import MobileFeatureCarousel from "../../shared/MobileFeatureCarousel";

const slides = [
  {
    to: "/grand-vitara-features-intelligent-electric-hybrid",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/1-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1+copy.webp",
    title: "HILL HOLD ASSIST",
  },
  {
    to: "/grand-vitara-allgrip",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/2-811x629-AR_SN_JIMNY_HILL+DESCENT+CONTROL+SHOT_V1.webp",
    title: "HILL DESCENT CONTROL",
  },
  {
    to: "/grand-vitara-5-speed-manual-transmission-price",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/3-Jimmy-811x629-1.webp",
    title: "BRAKE LSD",
    titleClassName: "text-xl md-20",
  },
  {
    to: "/grand-vitara-on-road-price-in-hyderabad",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/+carousel/4-811x629-AR_AB_BP_JIMNY_6_AIRBAG_SHOT_03_04.webp",
    title: "6 AIR BAGS",
  },
];

const MobileCarousel = () => <MobileFeatureCarousel slides={slides} />;

export default MobileCarousel;
