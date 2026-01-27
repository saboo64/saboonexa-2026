import { Tab } from "@headlessui/react";


function TabNavigationAGFeatures() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              4WD Control
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Synergetic Vehicle Dynamics Control
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              ESP
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Powertrain Control
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <FourWheelDrive />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <SVDControl />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <ESP />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              {/* <RegenerativeBraking /> */}
              <PowerTrainControl />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const FourWheelDrive = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Technology_AllGrip+(1).webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-left text-black sm:py-14 md:text-lg dark:text-black">
              The 4WD Control allocates torque to the rear wheels after
              detecting front wheel slippage. It also offers feedback and
              feed-forward control that anticipates slippage based on the road
              surface, throttle opening position and steering angles, and
              allocates the torque to rear wheels before any slippage occurs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SVDControl = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Technology_AllGrip+(1).webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-left text-black sm:py-14 md:text-lg dark:text-black">
              Synergetic Vehicle Dynamics Control stabilizes your drive by
              monitoring conditions through a steering angle sensor, yaw rate
              sensor and other systems. It properly allocates steering assist
              torque and front & rear wheel torque to suppress vehicle from
              skidding before the ESP intervenes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const ESP = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Technology_AllGrip+(1).webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-left text-black sm:py-14 md:text-lg dark:text-black">
              To enhance your driving experience, the powertrain is controlled
              when you are in Sport Mode. It modifies the throttle-torque
              performance in the low to medium engine speed range.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const PowerTrainControl = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Technology_AllGrip+(1).webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-left text-black sm:py-14 md:text-lg dark:text-black">
              The Advanced Dual Battery System (Li-ion and Lead Acid) stores the
              energy generated while braking and provides power to the ISG that
              assists during acceleration. It results in a powerful and fuel
              efficient drive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TabNavigationAGFeatures;
