import React, { useState } from "react";
import Header from "./components/Header/Header";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { products } from "./constants";
import { Helmet } from "react-helmet";

function Compare() {
  const [selec1, setSelec1] = useState(0);
  const [selec2, setSelec2] = useState(1);
  const [selec3, setSelec3] = useState(2);
  const [third, setThird] = useState(false);

  // useEffect(() => {
  //   if (first !== undefined) setSelec1(first);
  //   if (second !== undefined) setSelec1(second);
  // }, []);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec1(selectedIndex);
  };
  const handleSelectChange2 = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec2(selectedIndex);
  };
  const handleSelectChange3 = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelec3(selectedIndex);
  };

  return (
    <>
      <Helmet>
        <title>Compare Cars | Nexa Hyderabad |  Popular Nexa</title>
        <meta
          name="title"
          content="Compare Cars | Nexa Hyderabad |  Popular Nexa"
        />
        <meta
          name="description"
          content="Best Nexa Showroom in Hyderabad.  Popular Nexa onde of the leading Nexa car dealers in Hyderabad. "
        />
      </Helmet>
      <Header col={true} />
      <div className="pb-[67px]  sm:pb-[120px] lg:pb-[135px]"></div>
      <p className="pt-4 text-2xl font-medium text-center uppercase sm:text-3xl md:text-4xl ">
        Compare Cars
      </p>

      <div className="container flex justify-center px-3 mx-auto mb-20">
        <div className="flex justify-center ">
          <div className="relative">
            <div className="flex justify-end overflow-hidden">
              <div className="w-1/2 mb-6 sm:scale-110 lg:w-1/3 ">
                <img src={products[selec1].img} alt="" srcSet="" className="" />
              </div>
              <div className="w-1/2 mb-6 sm:scale-110 lg:w-1/3 ">
                <img src={products[selec2].img} alt="" srcSet="" className="" />
              </div>

              <div className="relative hidden mb-6 sm:scale-110 lg:w-1/3 lg:block group ">
                <img
                  src={products[selec3].img}
                  alt=""
                  className={`${!third && "opacity-0"}`}
                />
                <div
                  className={`rounded-full w-10 h-10 cursor-pointer bg-gray-500 text-white  hidden absolute top-8 right-8 ${
                    third &&
                    "block group-hover:flex justify-center items-center"
                  } `}
                  onClick={() => setThird(false)}
                >
                  x
                </div>
              </div>
            </div>
            <div className="sticky left-0 grid grid-cols-2 gap-4 py-4 bg-white top-16 lg:top-20 lg:grid-cols-3 ">
              <div>
                <label htmlFor="product" className="sr-only">
                  Car 1
                </label>
                <select
                  name="product"
                  id="product"
                  onChange={handleSelectChange}
                  className="w-full col-span-1 text-2xl border-b outline-none lg:text-4xl"
                  aria-labelledby="Select Car"
                  // value={selec1}
                >
                  {products.map((item, i) => (
                    <option
                      key={i}
                      value={item.name}
                      className="text-lg "
                      selected={i === selec1}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="product2" className="sr-only">
                  Car 2
                </label>
                <select
                  name="product2"
                  id="product2"
                  onChange={handleSelectChange2}
                  className="w-full col-span-1 text-2xl border-b outline-none lg:text-4xl"
                  aria-labelledby="Select Car 2"
                  // value={selec1}
                >
                  {products.map((item, i) => (
                    <option
                      key={i}
                      value={item.name}
                      className="text-lg "
                      selected={i === selec2}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden lg:block">
                {!third ? (
                  <div className="flex items-center justify-center">
                    Add Car{" "}
                    <button
                      className="px-2 ml-2 text-xl border border-black rounded "
                      onClick={() => setThird(true)}
                      aria-label="Add Car"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <label htmlFor="product3" className="sr-only">
                      Car 3
                    </label>
                    <select
                      name="product3"
                      id="product3"
                      onChange={handleSelectChange3}
                      className="w-full col-span-1 text-2xl border-b outline-none lg:text-4xl "
                      aria-labelledby="Select Car 3"
                      // value={selec1}
                    >
                      {products.map((item, i) => (
                        <option
                          key={i}
                          value={item.name}
                          className="text-lg "
                          selected={i === selec3}
                        >
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="mt-6">
                <span className="text-lg text-gray-500 ">Base Price</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].price} ₹
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].price} ₹
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].price} ₹
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Power</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].power}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].power}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].power}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Front Brake</span>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].frontBrake}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].frontBrake}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].frontBrake}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Rear Brake</span>

                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].rearBrake}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].rearBrake}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].rearBrake}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Seating (Up to)</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].seating}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].seating}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].seating}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Height </span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].height} mm
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].height} mm
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].height} mm
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Width</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].width} mm
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].width} mm
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].width} mm
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Length</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].length} mm
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].length} mm
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].length} mm
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">fuelTank</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].fuelTank}
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].fuelTank}
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].fuelTank}
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <span className="text-lg text-gray-500">Mileage</span>
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 ">
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec1].mileage} KMPL
                  </div>
                  <div className="pt-2 md:text-lg lg:text-2xl ">
                    {products[selec2].mileage} KMPL
                  </div>
                  <div
                    className={`pt-2 md:text-lg lg:text-2xl  hidden lg:block ${
                      !third && "opacity-0"
                    }`}
                  >
                    {products[selec3].mileage} KMPL
                  </div>
                </div>
              </div>
              {/* <div className="mt-8">
              <span className="text-lg text-gray-500">displacement</span>
              <div className="pt-2 md:text-lg lg:text-2xl ">
                {products[selec1].displacement}
              </div>
            </div>
            <div className="mt-8">
              <span className="text-lg text-gray-500">fuelType</span>
              <div className="pt-2 md:text-lg lg:text-2xl ">{products[selec1].fuelType}</div>
            </div>
            <div className="mt-8">
              <span className="text-lg text-gray-500">engineType</span>
              <div className="pt-2 md:text-lg lg:text-2xl ">{products[selec1].engineType}</div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="z-10 -mr-20">
            {products.map((item, i) => (
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto scale-110 product_image "
              />
            ))}
          </div>
          <div>
            {products.map((item, i) => (
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto scale-110 product_image"
              />
            ))}
          </div> */}
    </>
  );
}

export default Compare;
