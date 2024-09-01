import React from "react";

const Cards = () => {
  return (
    <div className="hidden md:flex md:flex-row lg:flex flex-row flex-wrap relative xl:w-[680px] xl:h-[376px] lg:flex-col lg:items-center">
      <div className="relative group my-4 xl:-top-11 xl:h-[90px] md:h-[90px]">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt h-full"></div>
        <div
          className=" relative px-7 py-6 bg-black rounded-lg leading-none flex items-center 
            justify-center flex-col text-white"
        >
          <span className="text-center text-2xl text-gray-200 font-semibold">
            Crafting Custom
            <span className="ml-1 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent font-semibold">
              AI assistants
            </span>
          </span>
        </div>
      </div>

      <div className="relative group my-4 xl:top-11 mx-4 w-[200px]">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div
          className=" relative px-7 py-6 bg-black rounded-lg leading-none flex items-center 
    justify-center flex-col text-white"
        >
          <div className="flex flex-col items-center">
            <span className="text-center text-xl text-gray-200 font-semibold text-wrap block bg-gradient-to-r from-pink-300 to-pink-600 bg-clip-text text-transparent">
              Websites and Apps
            </span>
            <span className="text-xl opacity-60 text-center">Accelerating your business</span>
          </div>
        </div>
      </div>

      <div className="relative group my-4 xl:left-5 ">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div
          className=" relative px-5 py-6 bg-black rounded-lg leading-none flex items-center 
            justify-center flex-col text-white w-72"
        >
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex items-center justify-center font-semibold w-full text-2xl mb-3">
              Get a Qoute
            </div>

            <div className="text-gray-500 text-lg leading-none">
            Need a solution tailored to your needs? We're here to help. Contact us today to get a personalized quote for your project.
            </div>

            <div className="flex items-center justify-center">
              <button className="p-4 bg-indigo-700 rounded-lg w-full mt-2 hover:bg-indigo-900">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
