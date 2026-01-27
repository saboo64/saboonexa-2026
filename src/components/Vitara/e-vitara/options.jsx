import React from "react";

export const Options = ({ open, setOpen }) => {


  const scrollUp = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };
  
  return (
    <div className="grid grid-cols-1 space-y-5 lg:space-y-0 lg:gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
      <div className="col-span-2 overflow-hidden rounded">
        <div className="grid bg-white md:grid-cols-2">
          <div className="col-span-1">
            <img
              src="https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:fb943d89-6dee-462e-bae8-c6b67c15ca62/as/Suzuki_Ind%C4%B1a_Kas_1915_Male-copy.png?width=2000&id=1"
              alt=""
              className="object-cover w-full h-72"
            />
          </div>
          <div className="p-10 px-5 space-y-8 ">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl md:text-3xl">
              Download Brochure
            </h3>
            <p className="text-sm sm:text-base md:text-lg">
              Explore cutting edge Design, Technology, and Comfort of e-VITARA -
              download now!
            </p>
            <div>
              <a
                target={"_blank"}
                href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/Brochure/e_VITARA_Saboo_RKS_Motor_Nexa_Brochure.pdf"
                className="px-5 py-3 text-white bg-black rounded-lg"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded lg:col-span-2 xl:col-span-1 xl:max-h-72">
        <div className="p-10 space-y-8 ">
          <h3 className="font-serif text-xl font-semibold sm:text-2xl md:text-3xl">
            Register your interest 
          </h3>
          <p className="text-sm sm:text-base md:text-lg">
            Register your interest in e-VITARA and we will reach out to you for
            assistance.
          </p>
        <button 
            // onClick={() => setOpen(true)}
            onClick={scrollUp}
            className="px-5 py-2 text-white bg-black rounded-lg "
          >
            Show Interest
          </button>
        </div>
      </div>
    </div>
  );
};
