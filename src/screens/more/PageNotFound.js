import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function PageNotFound() {
  return (
    <>
      <Header col={true} />
      <div className="text-center py-32 text-gray-700">
        <h1 className="text-9xl font-extrabold">404</h1>
        <p className="text-3xl mt-4">Not Found</p>
        <p>The resource requested could not be found on this server!</p>
        <div className="flex items-center justify-center text-blue-500 py-4">
          <FaLongArrowAltRight />
          <Link to="/" className="ml-2">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
