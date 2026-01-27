import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NexaPriceList = () => {
  const [fronxPrice, setFronxPrize] = useState("7,51,500");
  const [jimnyPrice, setJimnyPrice] = useState("12,74,000");
  const [vitaraprice, setvitaraPrice] = useState("10,80,000");
  const [xl6price, setxl6Price] = useState("11,61,000");
  const [ciazprice, setciazPrice] = useState("9,40,000");
  const [balenoprice, setbalenoPrice] = useState("6,66,000");
  const [ignisprice, setignisPrice] = useState("5,84,000");

  return (
    <div className="header">
      <nav className="py-2 bg-black md:py-4">
        <div className="container px-2 mx-auto md:flex md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-auto h-12"
                src={require("../../assets/others/logo.webp")}
                alt="logo"
              />
            </Link>

            {/* <button
                className='px-3 py-1 text-gray-600 border border-gray-600 border-solid rounded opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i className='fas fa-bars'></i>
              </button> */}
          </div>

          <div
            className="flex-col hidden mt-3 text-lg text-white md:flex md:flex-row md:ml-auto md:mt-0"
            id="navbar-collapse"
          >
            Price List
          </div>
        </div>
      </nav>

      <div className="py-6 md:py-12">
        <div className="container px-4 mx-auto sm:px-8">
          <div className="py-2">
            {/* <div>
              <h2 className='text-2xl font-semibold leading-tight'>Arena</h2>
            </div> */}
            <div className="px-4 py-2 overflow-x-auto lg-mx-2 sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                        Model
                      </th>
                      {/* <th className='px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200'>
                        Fuel / Transmission
                      </th> */}
                      <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                        Variant
                      </th>
                      <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase bg-gray-100 border-b-2 border-gray-200">
                        Ex Showroom Price ₹
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://imgd.aeplcdn.com/1280x720/cw/ec/39013/Maruti-Suzuki-Alto-Right-Front-Three-Quarter-154833.jpg?wm=0&q=75'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">Fronx</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$20,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <p className="text-gray-900 whitespace-no-wrap">
                          <div className="mx-auto space-y-3 md:mx-0">
                            <select
                              name="model"
                              value={fronxPrice}
                              onChange={(e) => setFronxPrize(e.target.value)}
                              aria-labelledby="model"
                              className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            >
                              <option value="7,51,500">
                                1.2L K-Series Dual Jet, Dual VVT Engine Sigma
                                5MT
                              </option>
                              <option value="8,37,500">
                                1.2L K-Series Dual Jet, Dual VVT Engine Delta
                                5MT
                              </option>
                              <option value="8,87,500">
                                1.2L K-Series Dual Jet, Dual VVT Engine Delta
                                AGS
                              </option>
                              <option value="8,77,500">
                                1.2L K-Series Dual Jet, Dual VVT Engine Delta+
                                5MT
                              </option>
                              <option value="9,27,500">
                                1.2L K-Series Dual Jet, Dual VVT Engine Delta+
                                AGS
                              </option>
                              <option value="9,72,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid
                                Delta+ 5MT{" "}
                              </option>
                              <option value="10,55,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid Zeta
                                5MT{" "}
                              </option>
                              <option value="11,95,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid Zeta
                                6AT{" "}
                              </option>
                              <option value="11,47,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid
                                Alpha 5MT{" "}
                              </option>
                              <option value="12,87,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid
                                Alpha 6AT
                              </option>
                              <option value="11,63,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid
                                Alpha MT (DT){" "}
                              </option>
                              <option value="13,03,500">
                                1.0L K-Series Turbo Boosterjet Smart Hybrid
                                Alpha AT (DT){" "}
                              </option>
                              <option value="8,46,500">CNG Sigma </option>
                              <option value="9,32,500">CNG Delta </option>
                            </select>
                          </div>
                        </p>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <div className="py-2 lg:text-lg sm:text-sm">
                            {fronxPrice}
                          </div>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-k10.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">Jimny</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={jimnyPrice}
                          aria-labelledby="model"
                          onChange={(e) => setJimnyPrice(e.target.value)}
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="12,74,000">
                            1.5L ALL GRIP PRO Zeta 5MT
                          </option>
                          <option value="13,69,000">
                            1.5L ALL GRIP PRO Alpha 5MT
                          </option>
                          <option value="13,85,000">
                            1.5L ALL GRIP PRO Alpha 5MT (DT)
                          </option>
                          <option value="13,84,000">
                            1.5L ALL GRIP PRO Zeta 4AT
                          </option>
                          <option value="14,79,000">
                            1.5L ALL GRIP PRO Alpha 4AT
                          </option>
                          <option value="14,95,000">
                            1.5L ALL GRIP PRO Alpha 4AT (DT)
                          </option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {jimnyPrice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-spresso.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">
                              Grand Vitara
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={vitaraprice}
                          aria-labelledby="model"
                          onChange={(e) => setvitaraPrice(e.target.value)}
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="10,80,000">
                            Smart Hybrid MT Sigma
                          </option>
                          <option value="12,20,000">
                            Smart Hybrid MT Delta
                          </option>
                          <option value="14,01,000">
                            Smart Hybrid MT Zeta
                          </option>
                          <option value="15,51,000">
                            Smart Hybrid MT Alpha
                          </option>
                          <option value="15,67,000">
                            Smart Hybrid MT Alpha (DT)
                          </option>
                          <option value="13,60,000">
                            Smart Hybrid AT Delta
                          </option>
                          <option value="15,41,000">
                            Smart Hybrid AT Zeta
                          </option>
                          <option value="16,91,000">
                            Smart Hybrid AT Alpha
                          </option>
                          <option value="17,07,000">
                            Smart Hybrid AT Alpha (DT)
                          </option>
                          <option value="17,01,000">
                            Smart Hybrid MT 4W Alpha
                          </option>
                          <option value="17,17,000">
                            Smart Hybrid MT 4W Alpha (DT)
                          </option>
                          <option value="18,43,000">
                            Intelligent Electric Hybrid eCVT ZETA+
                          </option>
                          <option value="18,59,000">
                            Intelligent Electric Hybrid eCVT ZETA+ (DT)
                          </option>
                          <option value="19,93,000">
                            Intelligent Electric Hybrid eCVT Alpha+
                          </option>
                          <option value="20,09,000">
                            Intelligent Electric Hybrid eCVT Alpha+ (DT)
                          </option>
                          <option value="13,15,000">CNG - MT Delta</option>
                          <option value="14,96,000">CNG - MT Zeta </option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {vitaraprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-celerio.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">XL6</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={xl6price}
                          onChange={(e) => setxl6Price(e.target.value)}
                          aria-labelledby="model"
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="11,61,000">
                            1.5 Smart Hybrid MT Zeta
                          </option>
                          <option value="12,61,000">
                            1.5 Smart Hybrid MT Alpha
                          </option>
                          <option value="13,21,000">
                            1.5 Smart Hybrid MT Alpha+
                          </option>
                          <option value="13,37,000">
                            1.5 Smart Hybrid MT Alpha+ (DT)
                          </option>
                          <option value="12,56,000">CNG - MT Zeta </option>
                          <option value="13,01,000">
                            1.5 Smart Hybrid AT Zeta AT
                          </option>
                          <option value="14,01,000">
                            1.5 Smart Hybrid AT Alpha AT
                          </option>
                          <option value="14,61,000">
                            1.5 Smart Hybrid AT Alpha+ AT
                          </option>
                          <option value="14,77,000">
                            1.5 Smart Hybrid AT Alpha+ AT (DT)
                          </option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {xl6price}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-wagonr.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">Ciaz</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={ciazprice}
                          onChange={(e) => setciazPrice(e.target.value)}
                          aria-labelledby="model"
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="9,40,000">
                            1.5 Smart Hybrid MT Sigma
                          </option>
                          <option value="10,00,000">
                            1.5 Smart Hybrid MT Delta
                          </option>
                          <option value="10,40,000">
                            1.5 Smart Hybrid MT Zeta
                          </option>
                          <option value="11,19,000">
                            1.5 Smart Hybrid MT Alpha
                          </option>
                          <option value="11,35,000">
                            1.5 Smart Hybrid MT Alpha (DT)
                          </option>
                          <option value="11,10,000">
                            1.5 Smart Hybrid AT Delta
                          </option>
                          <option value="11,50,000">
                            1.5 Smart Hybrid AT Zeta
                          </option>
                          <option value="12,29,000">
                            1.5 Smart Hybrid AT Alpha
                          </option>
                          <option value="12,45,000">
                            1.5 Smart Hybrid AT Alpha (DT)
                          </option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {ciazprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-swift.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">Baleno</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={balenoprice}
                          onChange={(e) => setbalenoPrice(e.target.value)}
                          aria-labelledby="model"
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="6,66,000">MT Sigma </option>
                          <option value="7,50,000">MT Delta</option>
                          <option value="8,43,000">MT Zeta</option>
                          <option value="9,38,000">MT Alpha </option>
                          <option value="8,40,000">CNG - MT Delta </option>
                          <option value="9,33,000">CNG - MT Zeta </option>
                          <option value="8,00,000">AGS Delta </option>
                          <option value="8,93,000">AGS Zeta </option>
                          <option value="9,88,000">AGS Alpha </option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {balenoprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <div className="flex">
                          {/* <div className='flex-shrink-0 w-10 h-10'>
                            <img
                              className='w-full h-full rounded-full'
                              src='https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/thumnails/arena-dzire.webp'
                              alt=''
                            />
                          </div> */}
                          <div className="ml-3">
                            <div className="lg:text-lg sm:text-sm">Ignis</div>
                          </div>
                        </div>
                      </td>
                      {/* <td className='px-5 py-5 text-sm border-b border-gray-200'>
                        <p className='text-gray-900 whitespace-no-wrap'>$214,000</p>
                        <p className='text-gray-600 whitespace-no-wrap'>USD</p>
                      </td> */}
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <select
                          name="model"
                          value={ignisprice}
                          onChange={(e) => setignisPrice(e.target.value)}
                          aria-labelledby="model"
                          className="block w-full max-w-[400px] py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                          <option value="5,84,000">MT Sigma</option>
                          <option value="6,38,000">MT Delta</option>
                          <option value="6,96,000">MT Zeta</option>
                          <option value="7,10,000">MT Zeta (DT)</option>
                          <option value="7,61,000">MT Alpha</option>
                          <option value="7,75,000">MT Alpha (DT)</option>
                          <option value="6,88,000">AGS Delta </option>
                          <option value="7,46,000">AGS Zeta </option>
                          <option value="7,60,000">AGS Zeta (DT)</option>
                          <option value="8,11,000">AGS Alpha </option>
                          <option value="8,25,000">AGS Alpha (DT)</option>
                        </select>
                      </td>
                      <td className="px-5 py-5 text-sm border-b border-gray-200">
                        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-full opacity-50"
                          ></span>
                          <span className="relative lg:text-lg sm:text-sm">
                            {ignisprice}
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="px-2 py-6 text-xs font-thin text-red-600">
                  Disclaimer: The following price list is provided for
                  informational purposes only and is subject to change without
                  prior notice. Please note that the prices mentioned in this
                  list may vary depending on factors such as location,
                  availability, market conditions, and any applicable taxes or
                  fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NexaPriceList;
