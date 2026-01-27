import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
function Awards() {
  const awards = [
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-nexa-highest-wholesale-growth-runner-up.jpg",
      title: "Maruti Suzuki Nexa Highest Wholesale Growth Runner-up",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-nexa-one.jpg",
      title: "Maruti Suzuki Nexa One",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Maruti-suzuki-rm-excellence-award.jpg",
      title: "Maruti Suzuki RM Excellence Award",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-%20rm-excellence-award.jpg",
      title: "Nexa RM Excellence Award",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-alpha-dealer-award-2016-2017.jpg",
      title: "Nexa Alpha Dealer Award 2016-2017",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-award-for-highest-conversion-in-manpower-certification.jpg",
      title: "Nexa Award for Highest Conversion in Manpower Certification",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-award-for-innovation-and-excellence-2018.jpg",
      title: "Nexa Award for Innovation and Excellence 2018",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-best-product-launch-award.jpg",
      title: "Nexa Best Product Launch Award",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/Nexa-best-product-launch-winner.jpg",
      title: "Nexa Best Product Launch Winner",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-alpha-dealer-2017.jpg",
      title: "Nexa Alpha Dealer 2017",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-best-sop.jpg",
      title: "Nexa Best SOP",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-composite-rating-quarter-winner-hyderabad.jpg",
      title: "Nexa Composite Rating Quarter Winner (Hyderabad)",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-emerging-outlet-of-the-year.jpg",
      title: "Nexa Emerging Outlet of the Year",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-highest-certified-manpower.jpg",
      title: "Nexa Highest Certified Manpower",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-relationship-manager-certification-contest-1st-runnerup.jpg",
      title: "Nexa Relationship Manager Certification Contest 1st Runner-up",
    },
    {
      imageUrl:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Awards/nexa-relationship-manager-certification-winner.jpg",
      title: "Nexa Relationship Manager Certification Winner",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Saboo Maruti - Awards & Achievements | Arena | Nexa </title>
        <meta
          name="title"
          content="Saboo Maruti - Awards & Achievements | Arena | Nexa "
        />
        <meta
          name="description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School "
        />
        <meta
          name="keywords"
          content="Awards, Recognitions, Saboo Nexa, Automotive Excellence"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/" />
        <meta
          property="og:title"
          content="Saboo Maruti - Awards & Achievements | Arena | Nexa "
        />
        <meta
          property="og:description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School 
"
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboonexa.in/" />
        <meta
          property="twitter:title"
          content="Saboo Maruti - Awards & Achievements | Arena | Nexa "
        />
        <meta
          property="twitter:description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School 
"
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/About-us.webp"
        />
      </Helmet>
      <Header />
      {/* <div className='bg-black h-[4.1rem] md:hidden'></div> */}
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/maruti-suzuki-awards.webp"
        className="w-full max-w-full"
        alt="Awards Banners"
      />
      <div className="px-4 shadow sm:px-0">
        <p className="container py-4 mx-auto">
          <Link to="/">Home</Link> / Awards
        </p>
      </div>
      <div className="container py-8 mx-auto md:py-16">
        <div className="grid grid-cols-1 gap-8 px-5 lg:grid-cols-4 md:px-0 sm:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className="overflow-hidden bg-gray-200 rounded-lg group "
            >
              <img
                src={award.imageUrl}
                alt={award.title}
                className="h-auto max-w-full mx-auto mb-4 duration-300 rounded-lg group-hover:scale-105 "
              />
              <p className="pb-3 text-center">{award.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Awards;
