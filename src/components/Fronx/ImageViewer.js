import { Tab } from "@headlessui/react";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function ImageViewer() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            {/* <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 ml-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              View 360°
            </Tab> */}
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Exterior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Interior
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Color
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Grand Vitara 360° view  */}
            {/* <Tab.Panel>
              
            </Tab.Panel> */}

            {/* exterior */}
            <Tab.Panel>
              <Exterior />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <Interior />
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <Color />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const Exterior = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/1.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/2.webp"
              alt="roof-end-spoiler"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/3.webp"
              alt="ORVM"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/4.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/5.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/6.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/7.webp"
              alt="roof-end-spoiler"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/8.webp"
              alt="ORVM"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="max-w-7xl mx-auto -mt-14">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/1.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/2.webp"
              alt="Exteriors-Side-Mirror"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/3.webp"
              alt="ORVM"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/4.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/5.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/6.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/7.webp"
              alt="Exteriors-Side-Mirror"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/exterior/8.webp"
              alt="ORVM"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Interior = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/9.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/10.webp"
              alt="roof-end-spoiler"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/11.webp"
              alt="ORVM"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/12.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/13.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/14.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/15.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/16.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/17.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/18.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/19.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="max-w-7xl mx-auto -mt-14">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/9.webp"
              alt="Fog-Light"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/10.webp"
              alt="Exteriors-Side-Mirror"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full"
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/11.webp"
              alt="ORVM"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/12.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/13.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/14.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/15.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/16.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/17.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/18.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/interior/19.webp"
              alt="UV-cut-glass"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

const Color = () => {
  const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="col-span-2">
        <>
          <div className="ml-auto mr-1 mt-24">
            {/* CELESTIAL BLUE */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Celestial_blue.webp"
              alt="CELESTIAL BLUE"
              className={tabsColors === 1 ? "flex mx-auto" : "hidden"}
            />

            {/* ARCTIC WHITE */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white.webp"
              alt="ARCTIC WHITE"
              className={tabsColors === 2 ? "flex mx-auto" : "hidden"}
            />

            {/* ARCTIC WHITE MIDNIGHT BLACK */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/arctic_white_midnight_black.webp"
              alt="ARCTIC WHITE MIDNIGHT BLACK"
              className={tabsColors === 3 ? "flex mx-auto" : "hidden"}
            />

            {/* CHESTNUT BROWN */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Chestnut_Brown.webp"
              alt="CHESTNUT BROWN"
              className={tabsColors === 4 ? "flex mx-auto" : "hidden"}
            />

            {/* GRANDEUR GREY */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/grandeur_grey.webp"
              alt="GRANDEUR GREY"
              className={tabsColors === 5 ? "flex mx-auto" : "hidden"}
            />

            {/* OPPULENT RED */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red.webp"
              alt="OPPULENT RED"
              className={tabsColors === 6 ? "flex mx-auto" : "hidden"}
            />

            {/* OPPULENT_RED MIDNIGHT BLACK */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/oppulent_red_midnight_black.webp"
              alt="OPPULENT_RED MIDNIGHT BLACK"
              className={tabsColors === 7 ? "flex mx-auto" : "hidden"}
            />

            {/* SPLENDID SILVER */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver.webp"
              alt="SPLENDID SILVER"
              className={tabsColors === 8 ? "flex mx-auto" : "hidden"}
            />

            {/* SPLENDID SILVER MIDNIGHT BLACK */}
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/splendid_silver_midnight_black.webp"
              alt="SPLENDID SILVER MIDNIGHT BLACK"
              className={tabsColors === 9 ? "flex mx-auto" : "hidden"}
            />
          </div>
          <div className="flex items-center justify-center">
            <div onClick={() => setTabsColors(1)}>
              <div className={tabsColors === 1 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#163472] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center "></span>
                <p className="arrow-dropdown-selected-car border-t-8 border-[#163472]"></p>
              </div>
              <p
                className={
                  tabsColors !== 1 ? "w-6 h-6 bg-[#163472] mr-2" : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(2)}>
              <div className={tabsColors === 2 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#f9f9f9] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                <p className="arrow-dropdown-selected-car border-t-8 border-[#f9f9f9]"></p>
              </div>
              <p
                className={
                  tabsColors !== 2 ? "w-6 h-6 bg-[#f9f9f9] mr-2" : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(3)}>
              <div className={tabsColors === 3 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                <p className="arrow-dropdown-selected-car border-t-8"></p>
              </div>
              <p
                className={
                  tabsColors !== 3
                    ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/arctic-white-black.webp')] mr-2 border-2"
                    : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(4)}>
              <div className={tabsColors === 4 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#282828] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                <p className="arrow-dropdown-selected-car border-t-8 border-[#282828]"></p>
              </div>
              <p
                className={
                  tabsColors !== 4
                    ? "w-6 h-6 border bg-[#282828] mr-2"
                    : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(5)}>
              <div className={tabsColors === 5 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#464848] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                <p className="arrow-dropdown-selected-car border-t-8 border-[#464848]"></p>
              </div>
              <p
                className={
                  tabsColors !== 5
                    ? "w-6 h-6 border bg-[#464848] mr-2"
                    : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(6)}>
              <div className={tabsColors === 6 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#AC0F0F] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
                <p className="arrow-dropdown-selected-car border-t-8 border-[#AC0F0F]"></p>
              </div>
              <p
                className={
                  tabsColors !== 6
                    ? "w-6 h-6 border bg-[#AC0F0F] mr-2"
                    : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(7)}>
              <div className={tabsColors === 7 ? "relative" : "hidden"}>
                <p className="w-6 h-6 mr-[10px] bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
              </div>
              <p
                className={
                  tabsColors !== 7
                    ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/opulent-red-black.webp')] mr-2"
                    : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(8)}>
              <div className={tabsColors === 8 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[#B6BABD] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
              </div>
              <p
                className={
                  tabsColors !== 8 ? "w-6 h-6 bg-[#B6BABD] mr-2" : "hidden"
                }
              ></p>
            </div>

            <div onClick={() => setTabsColors(9)}>
              <div className={tabsColors === 9 ? "relative" : "hidden"}>
                <p className="w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-[10px] border-t border-x"></p>
                <span className="bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/logos/check-icon.png')] h-6 w-6 absolute  top-0 -left-2 right-0 mx-auto bg-no-repeat bg-center"></span>
              </div>
              <p
                className={
                  tabsColors !== 9
                    ? "w-6 h-6 bg-[url('https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/grand_vitara/splendid-silver-black.webp')] mr-2"
                    : "hidden"
                }
              ></p>
            </div>
          </div>
          <>
            <p
              className={
                tabsColors === 1
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Celestial Blue
            </p>
            <p
              className={
                tabsColors === 2
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Arctic White
            </p>
            <p
              className={
                tabsColors === 3
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Arctic White with Midnight Black
            </p>
            <p
              className={
                tabsColors === 4
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Chestnut Brown
            </p>
            <p
              className={
                tabsColors === 5
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Grandeur Grey
            </p>
            <p
              className={
                tabsColors === 6
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Oppulent Red
            </p>
            <p
              className={
                tabsColors === 7
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Oppulent Red with Midnight Black
            </p>
            <p
              className={
                tabsColors === 8
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Splendid Silver
            </p>
            <p
              className={
                tabsColors === 9
                  ? "text-center font-light text-sm my-2"
                  : "hidden"
              }
            >
              Splendid Silver with Midnight Black
            </p>
          </>
        </>
      </div>
    </>
  );
};

export default ImageViewer;
