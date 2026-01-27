import React from "react";
import { useState } from "react";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";

function Gallery() {
  const [ind, setInd] = useState(0);

  return (
    <>
      <Helmet>
        <title>New Gallery: A Glance Through RKS Motor Events</title>
        <meta
          name="title"
          content="New Gallery: A Glance Through RKS Motor Events"
        />
        <meta
          name="description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School."
        />
        <meta
          name="keywords"
          content="Gallery, Images, Photos, Cars, Showroom, Events, Saboo Nexa"
        />
        <meta name="author" content="Broaddcast" />
        <link rel="canonical" href="https://www.saboonexa.in/gallery" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="New Gallery: A Glance Through RKS Motor Events "
        />
        <meta
          property="og:description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School."
        />
        <meta property="og:url" content="https://www.saboonexa.in/gallery/" />
        <meta property="og:site_name" content="Saboo Nexa RKS Motors Pvt Ltd" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpg"
        />
        <meta property="og:image:width" content="850" />
        <meta property="og:image:height" content="445" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboonexa.in/gallery/"
        />
        <meta
          property="twitter:title"
          content="New Gallery: A Glance Through RKS Motor Events "
        />
        <meta
          property="twitter:description"
          content="Arena, Nexa, Commercial Vehicles, events | Authorised Maruti Suzuki Dealers For Nexa, Arena, True Value and Driving School."
        />
        <meta
          name="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/gallery.jpgg"
        />
        <meta name="twitter:creator" content="@rksnexa" />
        <meta name="twitter:site" content="@rksnexa" />
      </Helmet>
      <Header />
      <div className="bg-black h-[4.1rem] "></div>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Banner/banners/Saboo-Maruti-Suzuki-Nexa-Gallery-Banner.png"
        className="w-full max-w-full"
        alt="Gallery banner"
      />

      <div className="my-3 lg:my-10">
        {/* <div className="container py-2 mx-auto text-3xl font-medium text-left uppercase sm:text-4xl md:text-5xl lg:pb-6">
            Maruti SUZUKI JIMNY
          </div> */}
        <div className="container grid grid-cols-2 gap-3 mx-auto overflow-hidden duration-500 rounded md:grid-cols-4 group">
          <>
            <div className="col-span-2 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/2.webp"
                alt="6"
                className=" duration-500 hover:scale-[1.20] cursor-pointer h-full"
              />
            </div>
            <div className="grid grid-cols-2 col-span-2 gap-3">
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/11.webp"
                  alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/5.webp"
                  alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/4.webp"
                  alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                  alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
            </div>

            <div className="col-span-1 overflow-hidden rounded ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/3.webp"
                alt="8"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/7.webp"
                alt="6"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2934-2.webp"
                alt="6"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>

            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/12.webp"
                alt="7"
                className=" duration-500 hover:scale-[1.20] "
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/6.webp"
                alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/8.webp"
                alt="9"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>
            <div className="col-span-1 overflow-hidden rounded">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/10.webp"
                alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
            </div>

            <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
              <img
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/9.webp"
                alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                className=" duration-500 hover:scale-[1.20] cursor-pointer"
              />
              {ind === 0 && (
                <div
                  onClick={() => setInd(1)}
                  className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                >
                  <div className="px-4 py-2 bg-black border text-whtie">
                    + View more
                  </div>
                </div>
              )}
            </div>
          </>
          {ind >= 1 && (
            <>
              <div className="col-span-2 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-8.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer h-full"
                />
              </div>

              <div className="grid grid-cols-2 col-span-2 gap-3">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-1.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-4.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-5.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-6.webp"
                    alt="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/gallery/jimny+opening/1.webp"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-9.webp"
                  alt="15"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-2.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-11.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2947-4.webp"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] "
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-7.webp"
                  alt="8"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-3.webp"
                  alt="16"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2943-3.webp"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2957-5.webp"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2975-6.webp"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_2983-7.webp"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-lumbini-launch/IMG_3015-8.webp"
                  alt="13"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-12.webp"
                  alt="14"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
                {ind === 1 && (
                  <div
                    onClick={() => setInd(2)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {ind >= 2 && (
            <>
              <div className="col-span-2 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/9.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer h-full"
                />
              </div>

              <div className="grid grid-cols-2 col-span-2 gap-3">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/1.webp"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/2.webp"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/3.webp"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/4.webp"
                    alt="4"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/10.webp"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/15.webp"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/12.webp"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/5.webp"
                  alt="8"
                  className=" duration-500 hover:scale-[1.20] "
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/6.webp"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/7.webp"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/8.webp"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/11.webp"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/16.webp"
                  alt="13"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/nexa-jublee-launch/Grand+Vitara+Launch+-+Nexa+Jubilee-10.webp"
                  alt="14"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/13.webp"
                  alt="15"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/baleno_launch/14.webp"
                  alt="16"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
                {ind === 2 && (
                  <div
                    onClick={() => setInd(3)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {ind >= 3 && (
            <>
              <div className="col-span-2 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Celebrations.jpg"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer h-full"
                />
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-3">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Xl6-Launch.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Inauguration.jpg"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Maruti-Suzuki-Nexa-XL6--Launch-Inauguration.jpg"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Inauguration-Vinay-Saboo.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Bonthu-Rammohan.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Vinay-Saboo-Tanay-Saboo.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Press-Meet.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch.jpg"
                  alt="4"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-XL6-Bonthu-Rammohan.jpg"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Happy-Customer.jpg"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch.jpg"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Celebrations.jpg"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-XL6-Launch-Happy-Customer.jpg"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-JubileeXL6-Launch-Activities.jpg"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Premium-MPV.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-XL6-Launch-Bonthu-Rammohan-Vinay-Saboo.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Bonthu-Rammohan.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6-Launch-Celebrations.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-First-Customer.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Happy-Customer.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-XL6.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-XL6-Launch-Celebrations.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Dance-Activities.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-XL6-Launch-Activities.jpg"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Team.jpg"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
                {ind === 3 && (
                  <div
                    onClick={() => setInd(4)}
                    className="absolute inset-0 flex-col items-center justify-center hidden gap-4 text-white duration-700 bg-black bg-opacity-50 rounded group-hover:flex"
                  >
                    <div className="px-4 py-2 bg-black border text-whtie">
                      + View more
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {ind >= 4 && (
            <>
              <div className="col-span-2 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration.jpg"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer h-full"
                />
              </div>
              <div className="grid grid-cols-2 col-span-2 gap-3">
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Tany-Madhu-Saboo.jpg"
                    alt="1"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebrations.jpg"
                    alt="2"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Pramod-Sunil.jpg"
                    alt="3"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>

                <div className="col-span-1 overflow-hidden rounded">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Vinay-Saboo.jpg"
                    alt="4"
                    className=" duration-500 hover:scale-[1.20] cursor-pointer"
                  />
                </div>
              </div>

              <div className="col-span-1 overflow-hidden rounded ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Patel-Pramod.jpg"
                  alt="5"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Celebration.jpg"
                  alt="6"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Tanay-Saboo.jpg"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="relative col-span-1 overflow-hidden rounded cursor-pointer ">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Kenichi-Ayukawa-Vinay-Saboo.jpg"
                  alt="7"
                  className=" duration-500 hover:scale-[1.20] "
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa.jpg"
                  alt="9"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Visit-Vinay-Saboo-Kenichi-Ayukawa-Happy-Customer.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki_Nexa-Lumbini-Tanay-Saboo.jpg"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa.jpg"
                  alt="10"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo.jpg"
                  alt="11"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Vinay-Saboo-Patel.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Jubilee-Celebrations.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Motor-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Certificate-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Appreciation.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Celebrations.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee-Vinay-Saboo.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Jubilee.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>

              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/RKS-Motor-Maruti-Suzuki-Nexa-Lumbini-Hyderabad-Inauguration.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Inauguration-Celebration.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Team-Kenichi-Ayukawa.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer h-full w-full"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini-Team.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded">
                <img
                  src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/gallary/Saboo-RKS-Maruti-Suzuki-Nexa-Lumbini.jpg"
                  alt="12"
                  className=" duration-500 hover:scale-[1.20] cursor-pointer"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;
