import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { accsliders, categoriess } from "../../constants";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";
import AccessoriesPop from "../../components/utils/AccessoriesPop";

function Accessories() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
    scrollToTop();
  };

  const handleOrderNowClick = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Shop Maruti Suzuki Genuine Accessories Online at RKS Motors – Premium Quality & Best Deals!</title>
        <meta
          name="title"
          content="Shop Maruti Suzuki Genuine Accessories Online at RKS Motors – Premium Quality & Best Deals!"
        />
        <meta
          name="description"
          content="Shop authorized Maruti Suzuki accessories online at the best price. Register and buy spare parts and accessories for Jimny, Ignis, Baleno, Grand Vitara, Ciaz, and more at RKS Motor"
        />
        <meta
          name="keywords"
          content="Maruti Suzuki Accessories, Buy Maruti Suzuki Accessories Online, RKS Motors Accessories, Jimny Accessories, Ignis Accessories, Baleno Accessories, Grand Vitara Accessories, Ciaz Accessories, Maruti Suzuki Spare Parts, Genuine Maruti Suzuki Parts, Maruti Suzuki Car Accessories, Genuine Accessories for Maruti Suzuki, Maruti Suzuki Online Accessories Shop, Best Maruti Suzuki Accessories Deals, Premium Maruti Accessories Online."
        />
      </Helmet>
      <Header col={true} />
      <div className="pb-[67px]  sm:pb-[120px] md:pb-[134px] bg-white"></div>
      <div className="hidden md:block">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="-mt-1 mySwiper"
        >
          {accsliders.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.img}
                className="w-full max-w-full select-none"
                alt={item.alt}
                width="100px"
                height="100px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <img
          src={require("../../assets/HomePageImages/Maruti_Nexa_Accessories_Saboo_RKS_Nexa_Banner_RKS_Nexa-03.webp")}
          // src={require("../../assets/HomePageImages/saboo-nexa-accessories-banner.webp")}
          alt=""
        />
      </div>
      <div className="relative mx-auto group lg:container">
        <div className="pt-4 pb-6 text-xl text-center select-none md:text-2xl lg:text-3xl lg:pt-8">
          Categories
        </div>
        <div className="flex flex-wrap justify-center border-b py-4 gap-2 sticky top-16 lg:top-[4.8rem] z-10 bg-gray-200  lg:text-lg border-gray-300 rounded-b-2xl">
          {categoriess.map((category, index) => (
            <div
              key={index}
              className={`cursor-pointer duration-500 transition-colors border-black  select-none px-1 md:px-4 lg:px-6 ${
                selectedCategory === index
                  ? "text-red-500 underline underline-offset-4 "
                  : "hover:text-red-600 hover:underline hover:underline-offset-4"
              } ${index < categoriess.length - 1 && "border-r"}`}
              onClick={() => handleCategorySelect(index)}
            >
              {category.filedName}
            </div>
          ))}
        </div>
        <div
          className={`grid gap-4 pb-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5`}
        >
          {categoriess[selectedCategory].data.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col justify-between overflow-hidden duration-200 border border-gray-200 rounded-lg shadow-lg shadow-gray-200 hover:shadow-gray-300 hover:scale-105"
            >
              <div className="flex items-center justify-between m-4 rounded-lg overflow-hidden bg-[url(https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/accessories/Loading-Image.webp)] min-h-[10vh] bg-center bg-cover ">
                <img
                  src={item.img}
                  className="w-full h-full rounded-lg "
                  alt={item.name}
                />
              </div>
              <div className="">
                <div className="m-4 ">{item.item}</div>

                <div className="flex items-center justify-center gap-4 pb-5 mx-4">
                  <div className="w-full py-2 text-xl text-left rounded ">
                    <div className="text-sm">{item.code}</div>
                  </div>
                  <button
                    onClick={() => handleOrderNowClick(item)}
                    aria-label="Order Now"
                    className="w-full p-2 text-sm text-center text-white uppercase duration-300 ease-in bg-black border border-black rounded hover:bg-white hover:text-black"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <AccessoriesPop open={open} setOpen={setOpen} item={selectedItem} />
      </div>
    </>
  );
}

export default Accessories;
