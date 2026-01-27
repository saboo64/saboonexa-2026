import { useState } from "react";

const TabsListVitara = ({ tabsList, caption, title, gradient, bgColor }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      {/* Grid layout with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 h-auto overflow-hidden">
        {/* Sidebar with tabs */}
        <div
          className={`col-span-1 md:col-span-2 lg:col-span-1 pl-5 sm:pl-10 md:pl-12 py-10 sm:py-14 md:py-20 bg-${bgColor} text-white`}
        >
          <div className="flex items-start justify-between flex-col h-full">
            <div>
              <p className="text-2xl italic font-serif">{caption}</p>
              <h2 className="capitalize text-3xl sm:text-3xl md:text-4xl font-serif mt-5">
                {title}
              </h2>
            </div>
            <div className="mt-5 sm:mt-8 md:mt-10">
              {tabsList.map((item, index) => (
                <p
                  className={`${
                    activeTab === index ? "!text-white" : "text-white/40"
                  } py-3 sm:py-4 md:py-5 cursor-pointer hover:text-white transition duration-300`}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Image and content section */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 relative">
          {/* Gradient Overlay */}
          <div className={`${gradient} absolute inset-0 z-10`}></div>

          {/* Image */}
          <img
            src={tabsList[activeTab].img}
            className="w-full h-auto sm:h-full min-h-[400px] max-h-[700px] object-cover"
            alt={tabsList[activeTab].name}
          />

          {/* Description Box */}
          <div className="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-5 sm:left-8 md:left-10 p-5 sm:p-6 md:p-8 bg-gray-300/20 duration-300 z-50 max-w-xs">
            <p className="text-white text-sm sm:text-base md:text-lg">
              {tabsList[activeTab].desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsListVitara;
