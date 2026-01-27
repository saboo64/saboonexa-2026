import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoArrowDown } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import TestDrive from "../../components/utils/TestDrive";
import { Customise } from "../../components/Vitara/e-vitara/customize";
import { MiniBanner } from "../../components/Vitara/e-vitara/mini-banner";
import TabsListVitara from "../../components/Vitara/e-vitara/tabs-list-vitara";
import Video from "../../components/Vitara/e-vitara/video";
import { Options } from "../../components/Vitara/e-vitara/options";

const polySliders = [
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:a8bdc8ec-97df-4bfa-8bdc-c5df4ef6988f/as/AMBIENT-LIGHTING-WITH-MULTI-COLOUR-ILLUMINATION.png?height=1440&width=750&id=1",
    title: "Polyhyderal Muscular Stance",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:e0e39eb4-c5ae-4da8-924d-9fd859ece4db/as/26.04-cm-MULTI-INFORMATION-DISPLAY.png?height=1440&width=750&id=1",
    title: "Futuristic Front Fascia",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f6f2adb6-e36f-47b3-a10f-90699e3f80f2/as/Twindeck-Floating-Console-with-Shift-by-Wire-_-New.jpg?height=1078&width=750&id=1",
    title: "R18 Aerodynamic Alloys",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "NEXTre 3-Point Matrix LED DRLs ",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "NEXTre 3-Point Matrix Rear Lamps",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "Sculpted 3D Appearance",
  },
];

const futureSliders = [
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:a8bdc8ec-97df-4bfa-8bdc-c5df4ef6988f/as/AMBIENT-LIGHTING-WITH-MULTI-COLOUR-ILLUMINATION.png?height=1440&width=750&id=1",
    title: "Polyhyderal Muscular Stance",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:e0e39eb4-c5ae-4da8-924d-9fd859ece4db/as/26.04-cm-MULTI-INFORMATION-DISPLAY.png?height=1440&width=750&id=1",
    title: "Futuristic Front Fascia",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f6f2adb6-e36f-47b3-a10f-90699e3f80f2/as/Twindeck-Floating-Console-with-Shift-by-Wire-_-New.jpg?height=1078&width=750&id=1",
    title: "R18 Aerodynamic Alloys",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "NEXTre 3-Point Matrix LED DRLs ",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "NEXTre 3-Point Matrix Rear Lamps",
  },
  {
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:14509fd0-a222-4e67-9c03-6f4b21182f43/as/DIGITAL-COCKPIT-EXPERIENCE.png?height=1440&width=750&id=1",
    title: "Sculpted 3D Appearance",
  },
];

export const imagineList = [
  {
    name: "Long Wheelbase",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5df7f7f5-e61a-481c-9b00-09f8e9e85413/as/C1_AR_BP_NEXA_E-VITARA_LONGER-WHEELBASE_03.png?width=2000&id=1",
    desc: "HEARTECT-e, the pure electric platform offers a long wheelbase, maximises interior space to provide unparalleled legroom and comfort.",
  },
  {
    name: "Ventilated seats",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:99545a5c-2e0a-4eb3-a90c-4baffce3a6fc/as/AR_SN_E-VITARA_VENTILATED_SEATS_V12-(1).png?width=2000&id=1",
    desc: "Escape the fatigue of long journeys with ventilated front seats that ensure a constant flow of air.",
  },
  {
    name: "10-Way Power Adjustable Driver’s Seat",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:8fd919f4-a815-449d-ac3a-46257e2641eb/as/C3_AR_AD_NOV_24_NEXA_YY8_E-VITARA_10_WAY_ADJUSTABLE_DRIVER_SEAT_EXTENDED_02.png?width=2000&id=1",
    desc: "Tailor your perfect driving position according to your own convenience.",
  },
  {
    name: "Sliding And Reclining Rear Seats",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:661a246a-9c6f-44b8-9ab4-856774c4b9cf/as/C4_AR_PK_E_Vitara_2024_Rear_Seat_Sliding_Reclining_V-2.png?width=2000&id=1",
    desc: "Crafted for those who seek relaxation, the rear seats of the e VITARA recline up to 20 degrees.",
  },
  {
    name: "40-20-40 Rear Seat",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:d43c7890-a50c-4d12-a31d-7a4c9930db53/as/Ar_Vk_BP_Maruti_E-Vitara_402040-Rear-Seats-Lifestyle.png?width=2000&id=1",
    desc: "Accommodate anything and everything you need with a 40-20-40 rear seat split design.",
  },
  {
    name: "Flexible Boot Space",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:c0dca10f-d809-44ca-b718-9f169c51c919/as/AR_BP_NEXA_E-VITARAT_BOOT_SHOT_V3-copy-2.png?width=2000&id=1",
    desc: "In the e VITARA, there’s always room for more when it comes to your adventure gear or the necessary luggage you need for your spontaneous trips.",
  },
];

const imagine = [
  {
    name: "Pure Electric Platform",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5bc3400e-55cc-4983-ade3-372c64063b29/as/YY8_AssetRework_Template.png?width=2000&id=1",
    desc: "HEARTECT-e is a ground-up design that blends performance, efficiency, and innovation.",
  },
  {
    name: "Advanced Aerodynamics",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5bc3400e-55cc-4983-ade3-372c64063b29/as/YY8_AssetRework_Template.png?width=2000&id=1",
    desc: "Shaped by aerodynamics, the e VITARA’s body ensures a smooth flow of air over the vehicle for improved range.",
  },
  {
    name: "Driving Performance",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:5bc3400e-55cc-4983-ade3-372c64063b29/as/YY8_AssetRework_Template.png?width=2000&id=1",
    desc: "Experience electric performance from the future with the e VITARA.",
  },
];

const image = [
  {
    name: "High Capacity Battery",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:dd526c4c-3602-415a-8524-df7245b89752/as/AR_BP_NEXA_E-VITARA_E_GRID_BATTERY_03-copy-2.jpg.png?width=2000&id=1",
    desc: "The e VITARA comes equipped with a High Capacity Battery comprised of 120 lithium-ion based cells with an operating range from -30°C to 60°C.",
  },
  {
    name: "ADAS Level 2",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f6aace7c-7ce7-42cf-a200-c146a4f2fbff/as/ADAS-Hero-Image.png?width=2000&id=1",
    desc: "Fitted with advanced sensors, the e VITARA proactively works to keep you and your occupants safe on the road.",
  },
  {
    name: "Safety Tech",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:2c127b10-c8ee-4656-acfa-e662a14fe275/as/Safety-Others-Hero.png?width=2000&id=1",
    desc: "The e VITARA ensures peace of mind on every journey with a host of advanced safety features.",
  },
];

const Suzukiconnect = [
  {
    name: "Smart Watch Connectivity",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:9c1962c5-5ff0-483a-88ba-bc8fad385453/as/Smartwatch-Connectivity_opt1-1.png?width=2000&id=1",
    desc: "Get your vehicle charging status and other crucial alerts right on your wrist.",
  },
  {
    name: "Vehicle Status & Alerts",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:7e19a833-507d-4970-afe2-c51b7be0f468/as/Vehicle-Health_opt-1.png?width=2000&id=1",
    desc: "Stay updated always.",
  },
  {
    name: "Suzuki Navigation",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:503a2068-f159-460a-85e8-ab98880ad1ff/as/Suzuki-Navigation-_v1_opt1-1.png?width=2000&id=1",
    desc: "Find your nearest charging station with the fastest routes.",
  },
  {
    name: "Schedule Charging",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:411319f8-55ae-42a9-84fa-7f76c9693f2c/as/Schedule-Charging-(2)_opt1.png?width=2000&id=1",
    desc: "Schedule the e VITARA’s charging with ease as per your own convenience.",
  },
];

const charging = [
  {
    name: "Home Charger",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:962ca924-5177-478c-8657-7b02b610c18b/as/Shot_03_CMYK.png?width=2000&id=1",
    desc: "Professional installation tailored to your convenience. Transform your residence into your very own charging station.",
  },
  {
    name: "Fast Charger",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:f98b7caf-2163-4ee3-a42d-69a5abae3bfc/as/Shot_02_CMYK_SL.png?width=2000&id=1",
    desc: "Our expansive network of fast chargers has been designed for your convenience.",
  },
  {
    name: "e for me App",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:aa770403-01e8-405c-bee2-33e50fb792fb/as/App.png?width=2000&id=1",
    desc: "Get real-time navigation to nearby charging stations with availability updates and route optimisation for a stress-free journey.",
  },
  {
    name: "Service On Wheels",
    img: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:62749b03-f14e-4fcd-b47d-aec21e1c3fc7/as/Service-on-Wheels.png?width=2000&id=1",
    desc: "Our Service on Wheels provides a reliable support system, even in remote locations, backed by our dedicated call center.",
  },
];

const Test = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* logo section */}
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

      {/* hero image section */}
      <div className="relative ">
        {/* Video Section with Controls */}
        <Video
          contorls
          poster={
            "https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
          }
        //  src={require("../../assets/teaserVideoFinal.mp4")}
        />

        <div className="absolute top-[16%] left-10 text-white z-50 space-y-7">
          <h1 className="!font-light italic text-4xl font-serif capitalize">
            Introducing the electric SUV
          </h1>
          <img
            src={require("../../assets/cars/e-vitara/e-vitara-logo-6.png")}
            alt=""
          />
          <h6 className="font-serif text-4xl italic">Spark Your eMagination</h6>
        </div>

        <div className="absolute z-50 text-white top-2/3 left-10 md:right-auto right-10">
          <div className="flex items-center justify-center space-x-5 md:space-x-10">
            <div className="space-y-3">
              <p className="md:text-xl ">Pure Electric</p>
              <p className="text-xs uppercase ">Platform</p>
            </div>
            <div className="w-px h-10 bg-white"></div>
            <div className="space-y-3">
              <p className="md:text-xl">61 kWh</p>
              <p className="text-xs uppercase ">Battery</p>
            </div>
            <div className="w-px h-10 bg-white"></div>
            <div className="md:space-y-3">
              <p className="text-xl">500 km</p>
              <p className="text-xs uppercase ">Range</p>
            </div>
          </div>
        </div>

        <div className="absolute z-10 left-20 md:left-auto right-20 bottom-20 sm:bottom-24 md:top-3/4 lg:top-2/3 ">
          <button
            className="px-7 py-2.5 max-w-screen-md w-full bg-white rounded-tl-2xl rounded-br-2xl hover:text-red-600 flex items-center justify-center sm:px-6 md:px-7 lg:px-8 text-sm md:text-base"
            onClick={() => setOpen(true)}
          >
            <span>Register your interest</span>
            <FiArrowUpRight size={20} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="flex justify-between py-4 mx-10 bg-white">
        <div className="font-serif text-2xl">
          <a href="/e-vitara"> e VITARA </a>
        </div>
        <div className="space-x-5">
          <a href="/">Overview</a>
          {/* <a href="/">Build Your Own </a> */}
        </div>
      </div>

      <div className="bg-stone-100 ">
        <div className="lg:flex hidden justify-center font-light container mx-auto space-x-10 py-2.5">
          <a href="/" className="flex font-normal">
            Design
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Comfort
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Performance
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Safety
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Suzuki Connect
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Configure
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Eco-Solutions
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
          <a href="/" className="flex">
            Register Your Interest
            <span className="mt-1">
              <GoArrowDown />
            </span>
          </a>
        </div>
      </div>

      <MiniBanner
        sliders={polySliders}
        poster={
          "https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
        }
      //  src={require("../../assets/teaserVideoFinal.mp4")}
        title={"Polyhedral"}
        subtitle={"Muscular Stance"}
        desc={"Shaped by aerodynamics. Designed by your imagination."}
      />
      <MiniBanner
        sliders={futureSliders}
        poster={
          "https://prod-nexa.marutisuzuki.com/adobe/assets/urn:aaid:aem:d870afe0-68fb-4c6f-a998-720fc8210614/as/studioFinish-banner.png?width=2000&id=1"
        }
       // src={require("../../assets/teaserVideoFinal.mp4")}
        title={"Futuristic &"}
        subtitle={"Spacious Cabin"}
        desc={"Experience interiors that radiate luxury and exclusivity."}
      />

      <TabsListVitara
        bgColor={"black"}
        gradient={"bg-gradient-to-r from-black to-transparent"}
        tabsList={imagineList}
        title={"Comfort Like Never Before"}
        caption={"Imagine"}
      />

      <TabsListVitara
        bgColor={"gray-500"}
        gradient={"bg-gradient-to-r from-gray-500 to-transparent"}
        tabsList={imagine}
        title={"Like A Beast"}
        caption={"Performs"}
      />

      <TabsListVitara
        bgColor={"black"}
        gradient={"bg-gradient-to-r from-black to-transparent"}
        tabsList={image}
        title={"Beyond Imagination"}
        caption={"Safety"}
      />

      <TabsListVitara
        bgColor={"black"}
        gradient={"bg-gradient-to-r from-black to-transparent"}
        tabsList={Suzukiconnect}
        title={"Suzuki Connect"}
        caption={"Next Gen"}
      />

      {/*colors-section*/}
      <Customise />

      <TabsListVitara
        bgColor={"black"}
        gradient={"bg-gradient-to-r from-black to-transparent"}
        tabsList={charging}
        title={"e for me"}
        caption={"charging the future with sustainable eco-solution"}
      />
      <div className="bg-[#15151e] p-10">
        <Options open={open} setOpen={setOpen} />

        {/* More from NEXA Section - Swiper for slider */}
        <div className="p-8 font-serif text-white">
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
      </div>

      <TestDrive
        open={open}
        setOpen={setOpen}
        title={"Register your interest"}
      />
    </>
  );
};

export default Test;
