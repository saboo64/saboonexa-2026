import React from "react";
import "../Extras/styles.css";
import MobileFeatureCarousel from "../../shared/MobileFeatureCarousel";

const slides = [
  {
    to: "/grand-vitara-features-intelligent-electric-hybrid",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-27-IEH.webp",
    title: "INTELLIGENT ELECTRIC HYBRID",
    subtitle: "Rules with revolutionary technology",
  },
  {
    to: "/grand-vitara-allgrip",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-26-Allgrip.webp",
    title: "ALLGRIP",
    subtitle: "Rules with a firm grip",
  },
  {
    to: "/grand-vitara-5-speed-manual-transmission-price",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-32-AT.webp",
    title: "6-SPEED AUTOMATIC",
    titleClassName: "text-xl md-20",
    subtitle: "Rules with utmost comfort",
  },
  {
    to: "/grand-vitara-on-road-price-in-hyderabad",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/test/GV_811x629-33-MT.webp",
    title: "5-SPEED MANUAL",
    subtitle: "Rules with a Powerful Persona",
  },
];

const MobileCarousel = () => <MobileFeatureCarousel slides={slides} />;

export default MobileCarousel;
