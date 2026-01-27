 import { Tab } from "@headlessui/react";
import React from "react";
import { baleno } from "../../constants/cars";

function Features() {
  return (
    <div className="py-10 mx-auto max-w-7xl lg:pb-20 sm:px-2 md:px-0">
      <div className="grid gap-4 md:grid-cols-4 md:space-x-4 lg:space-x-1">
        <Tab.Group>
          <div className="col-span-1">
            <p className="w-full p-4 mb-1 ml-3 text-white bg-black">Features</p>
            <Tab.List className="space-x-3">
              {/* Engine */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/engine.png"
                    alt="engine"
                    className="w-5 h-5"
                  />
                  <p>Engine</p>
                </div>
              </Tab>

              {/* Transmission */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/transmission.png"
                    alt="transmission"
                    className="w-5 h-5"
                  />
                  <p>Transmission</p>
                </div>
              </Tab>

              {/* Dimensions */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/dimensions.png"
                    alt="dimensions"
                    className="w-5 h-5"
                  />
                  <p>Dimensions</p>
                </div>
              </Tab>

              {/* Weight */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/weight.png"
                    alt="Weight"
                    className="w-5 h-5"
                  />
                  <p>Weight</p>
                </div>
              </Tab>

              {/* Brakes */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/brakes.png"
                    alt="Brakes"
                    className="w-5 h-5"
                  />
                  <p>Brakes</p>
                </div>
              </Tab>

              {/* Suspension */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/suspension.png"
                    alt="Suspension"
                    className="w-5 h-5"
                  />
                  <p>Suspension</p>
                </div>
              </Tab>

              {/* Tyre Size */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/tyre.png"
                    alt="Tyre Size"
                    className="w-5 h-5"
                  />
                  <p>Tyre Size</p>
                </div>
              </Tab>

              {/* Fuel Tank */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/fuel.png"
                    alt="Fuel Tank"
                    className="w-5 h-5"
                  />
                  <p>Fuel Tank</p>
                </div>
              </Tab>

              {/* Seating Capacity */}
              <Tab
                className={({ selected }) =>
                  selected
                    ? "bg-gray-300 text-gray-700 mb-1 w-full ml-3"
                    : "bg-gray-100 text-black hover:bg-gray-200 hover:text-gray-700 mb-1 w-full ml-3"
                }
              >
                <div className="flex items-center p-4 space-x-2">
                  <img
                    src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/icons/seat.png"
                    alt="Seating Capacity"
                    className="w-5 h-5"
                  />
                  <p>Seating Capacity</p>
                </div>
              </Tab>
            </Tab.List>
          </div>
          <div className="col-span-3 px-3">
            <Tab.Panels>
              {/* Engine */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">
                    Specifications
                  </div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.engine.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.specs}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100 ">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  ***Fuel efficiency as certified by test agency under Rule 115
                  of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Transmission */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">
                    Drive & Transmission
                  </div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.transmission.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Dimensions */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">
                    Dimensions Type
                  </div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.dimensions.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Weight */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Weight</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.weight.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Brakes */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Body Type</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.brakes.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Suspension */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Body Type</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.suspension.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Tyre Size */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Body Type</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.tyre.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Fuel Tank */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Body Type</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.fuel.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>

              {/* Seating Capacity */}
              <Tab.Panel>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-300 bg-black">Body Type</div>
                  <div className="p-4 text-gray-300 bg-black">Petrol BS VI</div>
                  {baleno.seating.map((item, index) => (
                    <>
                      <div
                        className="p-4 text-gray-700 bg-gray-100"
                        key={index}
                      >
                        {item.body}
                      </div>
                      <div className="p-4 text-gray-700 bg-gray-100">
                        {item.data}
                      </div>
                    </>
                  ))}
                </div>
                <p className="p-4 bg-black text-gray-200 mt-1.5">
                  *As certified by test agency under rule 115 of CMVR 1989.
                </p>
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Features;
