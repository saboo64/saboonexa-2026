import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export const Customise = () => {
  const colors = [
    {
      background:
        "linear-gradient(225deg, rgb(75, 75, 63) 50%, rgb(24, 28, 40) 50%)",
      title: "Land Breeze green with Bluish Black roof",
      img:"https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/breeze-green-bluish-black-roof.png",
    },
    {
      background:
        "linear-gradient(225deg, rgb(182, 186, 189) 50%, rgb(23, 23, 23) 50%)",
      title: "Splendid Silver with Bluish Black Roof",
      img:"https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/silver-bluish-black-roof.png",
    },
    {
      background:
        "linear-gradient(225deg, rgb(172, 15, 15) 50%, rgb(23, 23, 23) 50%)",
      title: "Opulent Red with Bluish Black Roof",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/opulent-red-bluish-black-roof.png",
    },
    {
      background:
        "linear-gradient(225deg, rgb(249, 249, 249) 50%, rgb(23, 23, 23) 50%)",
      title: "Arctic White with Bluish Black Roof",
      img:"https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/arctic-white-bluish-black-roof.png",
    },
    {
      background:
        "linear-gradient(rgb(30, 43, 113) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Nexa blue",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/nexa-blue.png",
    },
    {
      background:
        "linear-gradient(rgb(70, 72, 72) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Grandeur Grey",
      img:"https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/grey.png",
    },
    {
      background:
        "linear-gradient(rgb(182, 186, 189) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Splendid Silver",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/silver.png",
    },
    {
      background:
        "linear-gradient(rgb(249, 249, 249) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Arctic White",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/arctic-white.png",
    },
    {
      background:
        "linear-gradient(rgb(172, 15, 15) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Opulent Red",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/red.png",
    },
    {
      background:
        "linear-gradient(rgb(24, 28, 40) 100%, rgba(255, 255, 255, 0) 50%)",
      title: "Bluish Black",
      img: "https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/e-vitara/color-variants/black.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-10 my-16">
      <div className="grid gap-5 lg:grid-cols-4 sm:grid-cols-1">
        <div className="col-span-1">
          <h2 className="font-serif text-2xl font-semibold capitalize sm:text-2xl md:text-3xl lg:text-4xl">
            Imagine it. <br />
            Customise it.
          </h2>
        </div>
        <div className="mx-auto lg:col-span-2">
          <div className="flex items-end xl:mt-52 ">
            <img
              src={colors[activeIndex].img}
              className="object-cover w-full h-40 2xl:h-96 lg:h-72 xl:h-80 sm:h-52"
              alt={colors[activeIndex].title}
            />
          </div>
        </div>
        <div className="col-span-1 space-y-5">
          <p className="text-xs font-light text-center text-black/60 sm:text-sm">
            Transform your e VITARA into a reflection of your style with endless
            customisation options.
          </p>

          {/* Responsive Color Selector */}
          <div className="relative flex flex-wrap items-center sm:justify-center">
            {colors.map((color, index) => (
              <div key={index} className="relative mb-2 mr-2">
                <div
                  style={{
                    background: color.background,
                  }}
                  className="w-8 h-8 border cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                ></div>

                {activeIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaCheck className="text-xs text-red-500" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-2 text-xs text-center text-black/70">
            {colors[activeIndex].title}
          </p>
        </div>
      </div>
    </div>
  );
};
