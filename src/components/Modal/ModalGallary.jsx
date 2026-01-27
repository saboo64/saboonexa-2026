import React from "react";

const ModalGallary = ({ visible, onClose, selectImg }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
    >
      <div className="container mx-auto   flex justify-center items-center md:rounded-lg overflow-hidden  m-1  lg:w-2/3 lg:mt-10 xl:h-[85%]">
        <div className="relative overflow-hidden group md:rounded-lg">
          <img src={selectImg} alt="" srcSet="" className=" md:rounded-lg" />
          <div className="absolute flex gap-2 top-10 right-5 lg:top-10 xl:top-20 lg:right-10">
            <div
              className="hidden p-1 border border-red-600 rounded-full cursor-pointer select-none md:px-4 md:py-3 w-min group-hover:block "
              onClick={onClose}
            >
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalGallary;
