import { Tab } from "@headlessui/react";


function TabNavigationMT() {
  return (
    <div className="ml-2">
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
              Idle Start Stop
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Torque Assist
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Brake Energy Regeneration
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Advanced Dual Battery
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <IdleStartStop />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <TorqueAssist />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <BrakeEnergyRegeneration />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              {/* <RegenerativeBraking /> */}
              <AdvancedDualBattery />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}

const IdleStartStop = () => {

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              The Belt driven ISG ensures a quick and silent engine restart as
              soon as the clutch is pressed. It uses the energy stored from the
              Advanced Dual Battery System.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const TorqueAssist = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              It assists engine power during acceleration using the energy
              stored in the Advanced Dual Battery System.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const BrakeEnergyRegeneration = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              The ISG converts the energy from braking and stores it in the
              Advanced Dual Battery System.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const AdvancedDualBattery = () => {
  
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <img
              src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/variants/manual-transmission/hybrid-02.webp"
              className="w-full mb-8"
              alt="dashboard"
            />

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
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

export default TabNavigationMT;
