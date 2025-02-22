import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-gray-200"></div>
        <div
          className="w-12 h-12 rounded-full animate-spin absolute
        border-4 border-red-600 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
