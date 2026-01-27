import { Tab } from "@headlessui/react";


function TabNavigationIH() {
  return (
    <>
      <Tab.Group>
        <div className="flex items-center justify-center py-8">
          <Tab.List className="space-x-1">
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light  hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Electric Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Hybrid Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Engine Drive
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-black text-gray-200 px-4 py-2 rounded shadow outline-none"
                  : "bg-gray-300 text-black hover:bg-black font-light hover:text-gray-300 mb-3 px-4 py-2 rounded shadow outline-none"
              }
            >
              Regenerative Braking
            </Tab>
          </Tab.List>
        </div>
        <div>
          <Tab.Panels>
            {/* Ciaz 360° view  */}

            {/* exterior */}
            <Tab.Panel>
              <ElectricDrive />
            </Tab.Panel>

            {/* interior */}
            <Tab.Panel>
              <HybridDrive />
              {/* <HyrbridDrive /> */}
            </Tab.Panel>

            {/* color */}
            <Tab.Panel>
              <EngineDrive />
              {/* <EngineDrive /> */}
            </Tab.Panel>

            <Tab.Panel>
              <RegenerativeBraking />
            </Tab.Panel>
          </Tab.Panels>
        </div>
      </Tab.Group>
    </>
  );
}

const ElectricDrive = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video className="w-screen" autoPlay="autoplay" loop>
              <source
                className="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              For low speed cruising, the energy stored in the battery pack is
              utilized to power the electric motor. A truly Electric Drive that
              provides you with immediate acceleration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const HybridDrive = () => {
  // const [interiorSwiper, setInteriorSwiper] = useState(null);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video className="w-screen" autoPlay="autoplay" loop>
              <source
                className="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              A drive that gives you optimum performance and spontaneous
              acceleration using the power of both, the petrol engine and the
              battery pack. The combined power output provides for a powerful
              drive.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const EngineDrive = () => {
  // const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video className="w-screen" autoPlay="autoplay" loop>
              <source
                className="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              An engine drive leverages the IC engine to help you cruise through
              your journeys while also charging the battery at the same time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const RegenerativeBraking = () => {
  // const [tabsColors, setTabsColors] = useState(1);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white ">
          <div className="items-center max-w-screen-xl gap-1 px-2 py-2 mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-5 lg:px-4">
            <video className="w-screen" autoPlay="autoplay" loop>
              <source
                className="w-30 h-30"
                src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/nexa/grand-vitara/ieh-1.mp4"
                type="video/mp4"
              />
            </video>

            <p className="p-2 font-light tracking-wide text-center text-black sm:py-14 md:text-lg dark:text-black">
              A smart solution that maximizes energy efficiency by leveraging
              regenerative braking to recharge the Li-ion battery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabNavigationIH;
