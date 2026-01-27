import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import "./Range.css";
const Range = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); // Initialize with the first slide
  const [but, setBut] = useState(false);
  const [pause, setPause] = useState(false);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);
  const videoRef5 = useRef(null);
  const videoRef6 = useRef(null);
  const videoRef7 = useRef(null);
  const videoRef8 = useRef(null);
  // const videoRefs = [
  //   videoRef1,
  //   videoRef2,
  //   videoRef3,
  //   videoRef4,
  //   videoRef5,
  //   videoRef6,
  //   videoRef7,
  //   videoRef8,
  // ];

  const NexaData = [
    {
      id: 1,
      name: "Invicto",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/invicto.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/invicto/Blue_810+x+411.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/2.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Invicto_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Invicto_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Invicto/Invicto_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Invicto/Invicto_test_back_safari.mov",
      explore: "/maruti-invicto-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Invicto_final.png",
      videoRef: videoRef1,
    },
    {
      id: 2,
      name: "XL6",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/xl6.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/XL6/new-xl6/Nexa-Blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/xl6_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/xl6_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/XL6/xl6_test_final_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/XL6/xl6_test_back_safari.mov",
      explore: "/nexa-xl6-on-road-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/xl6_final.png",
      videoRef: videoRef2,
    },
    {
      id: 3,
      name: "Jimny",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/jimny.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/jimny/colors/Jimmy-Color-1500x700-Kinetic_Yellow_Bluish_Black_Roof.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/1.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Jimny_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Jimny_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Jimny/Jimny_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Jimny/Jimny_test_back_safari.mov",
      explore: "/maruti-jimny-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Jimny_final.png",
      videoRef: videoRef3,
    },
    {
      id: 4,
      name: "Grand Vitara",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/grand+vitara.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/color-icons/Celestial_blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/5.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/GV_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/GV_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/GV/GV_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/GV/GV_test_back_safari.mov",
      explore: "/grand-vitara-on-road-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/GV_final.png",
      videoRef: videoRef4,
    },
    {
      id: 5,
      name: "Fronx",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/fronx.webp",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/fronx/colors/FRONX-Color-1500x700-NEXA_Blue.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/3.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/fronx_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/fronx_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Fronx/fronx_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Fronx/fronx_test_back_safari.mov",
      explore: "/maruti-fronx-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/fronx_final.png",
      videoRef: videoRef5,
    },
    {
      id: 6,
      name: "Ciaz",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/ciaz.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/1.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ciaz_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ciaz_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Ciaz/ciaz_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Ciaz/ciaz_test_back_safari.mov",
      explore: "/nexa-ciaz-on-road-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ciaz.png",
      videoRef: videoRef6,
    },
    {
      id: 7,
      name: "baleno",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/baleno.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/3.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/baleno_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/baleno_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Baleno/baleno_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Baleno/baleno_test_back_safari.mov",
      explore: "/new-maruti-baleno-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/baleno_final.png",
      videoRef: videoRef7,
    },
    {
      id: 8,
      name: "ignis",
      logo: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/Slider_logo/ignis.webp",
      backgroundImage:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_bg_image/4.webp",
      video:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ignis_forward.webm",
      videoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/ignis_back.webm",
      safariVideo:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Ignis/ignis_test_front_safari.mov",
      safariVideoBack:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/slider_video/Nexa+Website+Safari/Ignis/ignis_test_back_safari.mov",
      explore: "/nexa-ignis-on-road-price-in-hyderabad",
      imgMobile:
        "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/thumbnails/ignis_final.png",
      videoRef: videoRef8,
    },
  ];
  useEffect(() => {
    const videoRefs = [
      videoRef1,
      videoRef2,
      videoRef3,
      videoRef4,
      videoRef5,
      videoRef6,
      videoRef7,
      videoRef8,
    ];
    const playAllVideos = () => {
      videoRefs.forEach((ref) => {
        if (ref.current) {
          ref.current.setAttribute("playsinline", "true");
          ref.current.play();
        }
      });
    };
    if (!but) playAllVideos();
  }, [activeSlideIndex, but]);
  useEffect(() => {
    // When activeSlideIndex changes, set pause to true
    setPause(true);
    // Use setTimeout to set pause to false after 2 seconds
    const timer = setTimeout(() => {
      setPause(false);
    }, 2000);
    // Clean up the timer when the component unmounts or activeSlideIndex changes again
    return () => {
      clearTimeout(timer);
    };
  }, [activeSlideIndex]);
  const timeoutIdRef = useRef(null);
  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      setBut(false);
    }, 2000);
    // Cleanup the timeout if the component unmounts or if play changes
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [but]);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    const newIndex = swiper.activeIndex;
    // Check if the last slide is reached
    if (newIndex === 7) {
      swiper.autoplay.stop(); // Stop autoplay
    }
  };
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return (
    <>
      <div
        className="mt-4 mb-3 duration-1000 bg-black select-none "
        style={{
          backgroundImage: `url(${NexaData[activeSlideIndex].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onContextMenu={handleContextMenu}
      >
        <div className="duration-1000">
          <div className="container px-4 py-2 pt-6 mx-auto text-2xl text-center text-white uppercase md:pt-20 sm:text-4xl md:text-5xl">
            An extraordinary model range
          </div>
          <div className="flex justify-center h-12 -mb-8 text-center md:pt-10 md:-mb-2 md:h-24 ">
            <img
              src={NexaData[activeSlideIndex].logo}
              alt=""
              className="scale-[0.40] lg:scale-50 opacity-90"
            />
          </div>
        </div>
        <Swiper
          speed={2000}
          slidesPerView={1}
          // loop={true}
          autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          allowTouchMove={false}
          initialSlide={0}
          // grabCursor={true}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          onSlideChange={handleSlideChange}
          modules={[Navigation, Autoplay]}
          className="flex items-center carSlider "
        >
          {NexaData.map((car) => (
            <SwiperSlide key={car.id} className="py-6">
              <Link
                to={car.explore}
                className="focus:outline-none"
                aria-label={`Explore ${car.name}`}
              >
                <div className="relative hidden min-h-40 lg:ml-10 xl:ml-20 lg:block">
                  {isSafari ? (
                    // Use the Safari video source
                    <video
                      src={car.safariVideo}
                      ref={car.videoRef}
                      muted
                      playsInline
                      className={`slider_car bg-transparent ${
                        !but ? "opacity-100" : "opacity-0"
                      } `}
                    ></video>
                  ) : (
                    // Use the default video source
                    <video
                      src={car.video}
                      ref={car.videoRef}
                      muted
                      playsInline
                      className={`slider_car bg-transparent ${
                        !but ? "opacity-100" : "opacity-0"
                      } `}
                    ></video>
                  )}
                  {isSafari ? (
                    // Use the Safari videoBack source
                    <video
                      src={car.safariVideoBack}
                      autoPlay
                      loop
                      muted
                      className={`slider_car absolute inset-x-0 top-0 bg-transparent ${
                        but ? "opacity-100" : "opacity-0"
                      } `}
                    ></video>
                  ) : (
                    // Use the default videoBack source
                    <video
                      src={car.videoBack}
                      autoPlay
                      loop
                      muted
                      className={`slider_car absolute inset-x-0 top-0 bg-transparent ${
                        but ? "opacity-100" : "opacity-0"
                      } `}
                    ></video>
                  )}
                </div>
                <div className="relative mb-4 min-h-40 lg:ml-10 xl:ml-20 lg:hidden">
                  <img src={car.imgMobile} alt="" srcSet="" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div
            ref={navigationPrevRef}
            id="playButton"
            className={`absolute left-2 sm:left-10 lg:top-[100px]  md:top-[11.5rem] top-[5.8rem] z-10 duration-500 bg-gray-200 opacity-50 hover:opacity-100 rounded-full p-1.5 sm:p-3 cursor-pointer ${
              pause || activeSlideIndex === 0 ? "lg:hidden" : "block"
            } `}
            onClick={() => setBut(true)}
          >
            <GrFormPrevious className="lg:text-3xl " />
          </div>
          <div
            ref={navigationNextRef}
            className={`absolute right-2 sm:right-10 lg:top-[100px]  md:top-[11.5rem] top-[5.8rem]  z-10 duration-500 bg-gray-200 opacity-50 hover:opacity-100 rounded-full p-1.5 sm:p-3 cursor-pointer  ${
              pause || activeSlideIndex === 7 ? "lg:hidden" : "block"
            }`}
          >
            <GrFormNext className="lg:text-3xl" />
          </div>
        </Swiper>
        <div className="flex h-10 mb-8 -mt-24 duration-500 bg-white md:h-20 sm:-mt-32"></div>
      </div>
    </>
  );
};
export default Range;
