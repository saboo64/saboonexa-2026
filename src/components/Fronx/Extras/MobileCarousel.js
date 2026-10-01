import React from "react";
import "../Extras/styles.css";
import MobileFeatureCarousel from "../../shared/MobileFeatureCarousel";

const slides = [
  {
    to: "/",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-10C_Engine.webp",
    title: "1.0L TURBO BOOSTERJET ENGINE",
    subtitle: "Shaping exhilarating drives.",
  },
  {
    to: "/",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-12k_Engine.webp",
    title: "ADVANCED 1.2L K-SERIES DUAL JET, DUAL VVT ENGINE",
    subtitle: "Forged for new age performance.",
  },
  {
    to: "/",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-Smart_Hybird.webp",
    title: "SMART HYBRID TECHNOLOGY",
    titleClassName: "text-xl md-20",
    subtitle: "Where smartness and efficiency take shape.",
  },
  {
    to: "/",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AGS.webp",
    title: "6-SPEED AUTOMATIC TRANSMISSION WITH PADDLE SHIFTERS",
    subtitle: "Go through the gears in a new way. ",
  },
  {
    to: "/",
    img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/accordian/PERFORMANCE-811x629-AMT.webp",
    title: "AUTO GEAR SHIFT",
    subtitle: "Shaped for comfort and convenience.",
  },
];

const MobileCarousel = () => <MobileFeatureCarousel slides={slides} />;

export default MobileCarousel;
