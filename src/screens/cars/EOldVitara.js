import React, { useState, useRef, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import TestDrive from "../../components/utils/TestDrive";
import { IoVolumeMute } from "react-icons/io5";
import { GoUnmute } from "react-icons/go";
import { MdFullscreen } from "react-icons/md";
import { BiExitFullscreen } from "react-icons/bi";
import { FaRegPlayCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { GoArrowDown } from "react-icons/go";

function EVitara() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  // Set initial state to not muted, so the video plays with sound
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track video play state

  // Play and Pause control functions
  const handlePlayPauseToggle = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true); // Set state to true when the video is playing
      } else {
        videoRef.current.pause();
        setIsPlaying(false); // Set state to false when the video is paused
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted); // Toggle mute state
    }
  };

  const handleFullscreenToggle = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  // Ensure video plays automatically with sound if possible
  useEffect(() => {
    if (videoRef.current) {
      // Try to play the video immediately
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true); // Set the state to playing as soon as it starts
        })
        .catch((error) => {
          console.log(
            "Autoplay failed, trying to play after user interaction",
            error
          );
        });
    }

    // If sessionStorage or some other logic requires popup, handle that
    sessionStorage.setItem("popup", true);
  }, []); // Empty dependency array, runs once after the first render

  return (
    <div>
      {/* Logo Section */}
      <div className="bg-[#18171a]">
        <div className="flex justify-end logo">
          <a href="/">
            <img
              src={require("../../assets/others/logo.webp")}
              className="h-10 m-5 mr-24 sm:h-5 md:h-8 lg:h-9 "
              alt="Logo"
            />
          </a>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative ">
        <div className="hidden sm:block">
          <img
            src={require("../../website_Maruti_Suzuki_Nexa_Electric_vehicle_e_vitara_Saboo_RKS_Motor (1).webp")}
            alt="Hero Banner"
            className={`hidden w-full sm:block  border-gray-300 `}
            loading="lazy"
          />
        </div>
        <div className="sm:hidden">
          <img
            src={require("../../website_mobile_Maruti_Suzuki_Nexa_Electric_vehicle_e_vitara_Saboo_RKS_Motor (1).webp")}
            alt="Mobile Banner"
            className="w-full sm:hidden"
            loading="lazy"
          />
        </div>

        <div className="absolute space-y-5 text-white left-36 top-60 sm:left-5 md:left-10 lg:left-20">
          <p className="font-serif text-xs uppercase opacity-50 sm:text-2xl md:text-5xl">
            Introducing The Electric SUV
          </p>
          <h1 className="font-serif text-xl sm:text-2xl md:text-5xl">
            {/* Title Content */}
          </h1>
          <p className="font-serif text-xs uppercase opacity-50 sm:text-2xl md:text-5xl">
            {/* Subtitle */}Spark Your eMagination
          </p>
        </div>

        <div className="absolute bottom-2 sm:bottom-10 right-10 sm:right-5 z-10 sm:mb-14 lg:top-[90%] lg:left-[650px]  xl:left-[70%] md:top-[90%] ">
          <button
            className="px-7 py-2.5 bg-white rounded-tl-2xl rounded-br-2xl hover:text-red-600 flex items-center sm:px-6 md:px-7 lg:px-8"
            onClick={() => setOpen(true)}
          >
            <span>Register your interest</span>
            <FiArrowUpRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      {/*e-vitara*/}
      <div>
        <div className="flex justify-between p-4 bg-white">
          <div className="font-serif text-2xl">
            <a href="."> e VITARA </a>
          </div>
          <div className="space-x-5">
            <a href="/">Overview</a>
            <a href="/">Build Your Own </a>
          </div>
        </div>

        <div className="flex justify-center space-x-16 bg-gray-200">
          <a href="/" className="flex p-2">
            Design{" "}
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Comfort
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Performance
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Safety
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Suzuki Connect
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Configure
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Eco-Solutions
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex p-2">
            Register Your Interest
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
        </div>
        <div></div>
        <div className="relative">
          <video
            ref={videoRef}
            className="object-cover w-full h-[500px] sm:block"
            preload="metadata"
            poster="https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
            loop
            autoPlay
            playsInline
            muted={isMuted} // Ensure video starts with sound
            disableRemotePlayback
            disablePictureInPicture
            onClick={handlePlayPauseToggle} // Toggle play/pause on video click
          >
            <source
            //  src={require("../../assets/teaserVideoFinal.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="absolute left-0 p-4 space-y-6 font-serif text-white transform -translate-y-1/2 top-96">
            <h1 className="text-5xl">Polyhedral </h1>
            <h2 className="text-5xl">Muscular Stance</h2>
            <p>Shaped by aerodynamics. Designed by your imagination.</p>
          </div>

          <div className="absolute space-y-4 text-center text-white transform left-[700px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>Polyhedral Muscular Stance</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[950px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>Futuristic Front Fascia</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[1200px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>R18 Aerodynamic Alloys</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[1450px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />
            <p>NEXTre 3-Point Matrix LED DRLs</p>
          </div>
        </div>

        <div className="relative">
          <video
            ref={videoRef}
            className="object-cover w-full h-[500px] sm:block"
            preload="metadata"
            poster="https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
            loop
            autoPlay
            playsInline
            muted={isMuted} // Ensure video starts with sound
            disableRemotePlayback
            disablePictureInPicture
            onClick={handlePlayPauseToggle} // Toggle play/pause on video click
          >
            <source
            //  src={require("../../assets/teaserVideoFinal.mp4")}
              type="video/mp4"
            />
          </video>

          <div className="absolute left-0 p-4 space-y-6 font-serif text-white transform -translate-y-1/2 top-96">
            <h1 className="text-5xl">Futuristic & </h1>
            <h2 className="text-5xl">Spacious Cabin</h2>
            <p>Experience interiors that radiate luxury and exclusivity.</p>
          </div>

          <div className="absolute space-y-4 text-center text-white transform left-[700px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>Polyhedral Muscular Stance</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[950px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>Futuristic Front Fascia</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[1200px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />

            <p>R18 Aerodynamic Alloys</p>
          </div>
          <div className="absolute space-y-4 text-center text-white transform left-[1450px] bottom-5 -transulate-y-1/2">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:4197df38-512a-4b57-b152-1cfcb36818ac/as/POLYHEDRAL-MUSCULAR-STANCE.png?height=1440&width=750&id=1"
              className="h-28"
              alt="/"
            />
            <p>NEXTre 3-Point Matrix LED DRLs</p>
          </div>
        </div>
        <section className="py-16 text-center bg-gray-50">
          <h2 className="mb-8 text-4xl font-semibold text-gray-900">
            Comfort Like Never Before
          </h2>
          <p className="mb-12 text-lg text-gray-600">
            Crafted for those who seek relaxation, the rear seats of the
            e-VITARA recline up to 20 degrees.
          </p>

          <div className="container grid grid-cols-1 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {/* Rear Seat Alt */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5df7f7f5-e61a-481c-9b00-09f8e9e85413/as/C1_AR_BP_NEXA_E-VITARA_REAR-SEAT-ALT_03.png?width=2000&id=1"
                alt="Rear Seat Alt"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">Rear-seat-alt</h3>
              <p className="mt-2 text-gray-600">
                Crafted for those who seek relaxation, the rear seats of the
                e-VITARA recline up to 20 degrees.
              </p>
            </div>

            {/* Long Wheelbase */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5df7f7f5-e61a-481c-9b00-09f8e9e85413/as/C1_AR_BP_NEXA_E-VITARA_LONGER-WHEELBASE_03.png?width=2000&id=1"
                alt="Long Wheelbase"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">Long Wheelbase</h3>
              <p className="mt-2 text-gray-600">
                The long wheelbase ensures a smooth and stable ride for both
                driver and passengers.
              </p>
            </div>

            {/* Ventilated Seats */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_VENTILATED_SEATS_V12-(1).png?width=2000&id=1"
                alt="Ventilated Seats"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">Ventilated Seats</h3>
              <p className="mt-2 text-gray-600">
                Stay cool and comfortable with the ventilated seat feature that
                offers optimal air circulation.
              </p>
            </div>

            {/* 10-Way Power Adjustable Driver’s Seat */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_10-WAY-ADJUSTABLE-DRIVER-SEAT_V12-(1).png?width=2000&id=1"
                alt="10-Way Power Adjustable Driver’s Seat"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">
                10-Way Power Adjustable Driver’s Seat
              </h3>
              <p className="mt-2 text-gray-600">
                Enjoy a customized driving experience with the 10-way adjustable
                power driver's seat.
              </p>
            </div>

            {/* Sliding And Reclining Rear Seats */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_SLIDING-AND-RECLINING-SEATS_V12-(1).png?width=2000&id=1"
                alt="Sliding And Reclining Rear Seats"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">
                Sliding And Reclining Rear Seats
              </h3>
              <p className="mt-2 text-gray-600">
                Rear seats that slide and recline for personalized comfort and
                convenience.
              </p>
            </div>

            {/* 40-20-40 Rear Seat */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_40-20-40-REAR-SEAT_V12-(1).png?width=2000&id=1"
                alt="40-20-40 Rear Seat"
                className="object-cover w-full h-48 rounded-t-lg"
              />
              <h3 className="mt-4 text-2xl font-semibold">
                40-20-40 Rear Seat
              </h3>
              <p className="mt-2 text-gray-600">
                The 40-20-40 split rear seats provide versatility, allowing for
                both cargo and passenger needs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Video Section with Controls */}
      <div className="relative">
        <video
          ref={videoRef}
          className="object-cover w-full h-full duration-1000 sm:block"
          preload="metadata"
          poster="https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
          loop
          autoPlay
          playsInline
          muted={isMuted} // Ensure video starts with sound
          disableRemotePlayback
          disablePictureInPicture
          onClick={handlePlayPauseToggle} // Toggle play/pause on video click
        >
          <source
           // src={require("../../assets/teaserVideoFinal.mp4")}
            type="video/mp4"
          />
        </video>

        {/* Audio, Fullscreen, Play and Pause Controls */}
        <div className="absolute z-10 flex space-x-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {/* Play/Pause Button */}
          <button
            className="px-4 py-2 text-white rounded-full bg-opacity-60"
            onClick={handlePlayPauseToggle}
          >
            {!isPlaying ? <FaRegPlayCircle size={50} /> : null}{" "}
            {/* Display play button if paused */}
          </button>
        </div>

        <div className="absolute bottom-[15%] right-5 z-10 flex space-x-4">
          <button
            className="px-4 py-2 text-white bg-black rounded-full bg-opacity-60"
            onClick={handleMuteToggle}
          >
            {isMuted ? <IoVolumeMute size={24} /> : <GoUnmute size={24} />}
          </button>
          <button
            className="px-4 py-2 text-white bg-black rounded-full bg-opacity-60"
            onClick={handleFullscreenToggle}
          >
            {isFullscreen ? (
              <BiExitFullscreen size={24} />
            ) : (
              <MdFullscreen size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Main Section with Text */}
      <div className="p-16 text-center text-white bg-black md:p-20 lg:p-24">
        <h1 className="font-serif text-xl sm:text-2xl md:text-3xl">
          YOU IMAGINED IT. WE CREATED IT.
          <br />
          MARUTI SUZUKI'S FIRST SUV eBORN.
          <br />
          WORTH THE WAIT.
        </h1>
      </div>
      {/*colours*/}

      <div className="grid grid-cols-3 pr-24 bg-black pl-28">
        <div className="col-span-1 ">
          <img
            src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:fb943d89-6dee-462e-bae8-c6b67c15ca62/as/Suzuki_Ind%C4%B1a_Kas_1915_Male-copy.png?width=2000&id=1"
            alt=""
            className="h-92"
          />
        </div>
        <div className="pt-20 pl-6 bg-white space-y-14">
          <h className="font-serif text-3xl font-semibold">Download Brochure</h>
          <p>
            Explore cutting edge Design, Technology and Comfort of e VITARA -
            download now!
          </p>
          <button className="p-2 text-white bg-black">Download Brochure</button>
        </div>
        <div className="pt-20 pl-6 ml-4 bg-white space-y-14">
          <h className="font-serif text-3xl font-semibold">
            Register your interest
          </h>
          <p>
            Register your interest in e VITARA and we will reach out to you for
            assistance.
          </p>
          <button className="p-2 text-white bg-black">Show Interest</button>
        </div>
      </div>

      {/* More from NEXA Section - Swiper for slider */}
      <div className="p-8 font-serif text-white bg-black">
        <h className="m-4 text-2xl text-center sm:text-3xl md:text-4xl">
          More from NEXA
        </h>

        {/* Swiper Section */}
        <Swiper
          className="m-11"
          spaceBetween={2}
          slidesPerView="auto"
          breakpoints={{
            320: { slidesPerView: 3 },
            425: { slidesPerView: 4 },
            640: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          loop={false}
        >
          <SwiperSlide>
            <a
              href="/maruti-invicto-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Invicto
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/maruti-fronx-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Fronx
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/maruti-jimny-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Jimny
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/grand-vitara-on-road-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Grand Vitara
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/nexa-xl6-on-road-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              XL6
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/nexa-ignis-on-road-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Ignis
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/new-maruti-baleno-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Baleno
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="/nexa-ciaz-on-road-price-in-hyderabad"
              className="text-sm md:text-lg lg:text-xl"
            >
              Ciaz
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      <TestDrive
        open={open}
        setOpen={setOpen}
        title={"Register your interest"}
      />
    </div>
  );
}

export default EVitara;
