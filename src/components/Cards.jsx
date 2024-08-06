import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-row flex-wrap relative">
      <div className="relative group my-4 -top-11">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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

      <div className="relative group my-4 top-11 mx-4">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div
          className=" relative px-7 py-6 bg-black rounded-lg leading-none flex items-center 
    justify-center flex-col text-white"
        >
          <div>
            <span className="text-center text-xl text-gray-200 font-semibold">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
      </div>

      <div className="relative group my-4 left-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div
          className=" relative px-5 py-6 bg-black rounded-lg leading-none flex items-center 
            justify-center flex-col text-white w-72"
        >
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex items-center justify-between font-semibold w-full text-xl">
              Our Plans
              <div className="text-indigo-400">Most Popular</div>
            </div>

            <div>
                <span className="text-center text-xl text-gray-200 font-semibold">
                    $99
                </span>
                <span className="text-gray-400">/month</span>
            </div>

            <div className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptate?</div>

            <div className="flex items-center justify-center">
                <button className="p-6 bg-indigo-500 rounded-lg px-7">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
