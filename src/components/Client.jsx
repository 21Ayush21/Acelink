import React from "react";
import image from "../assets/Acelinklogo.png";

const Client = () => {
  return (
    <div className="relative group">
      <div
        className="absolute inset-0 bg-[linear-gradient(-45deg,_rgba(238,119,82,1)_18%,_rgba(231,60,126,1)_42%,_rgba(35,166,213,1)_68%,_rgba(35,213,171,1)_86%)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
        
      ></div>
      <div className="rounded-lg bg-[#01031f] shadow-sm relative">
        <div className="flex flex-col items-center p-3">
          <div className="flex flex-row items-center justify-start w-full">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <img src={image} alt="client image" />
            </div>

            <div className="flex flex-col text-white ml-3">
              <h3 className="font-semibold text-lg">Client Name</h3>
              <p className="opacity-60 text-sm">Client Details</p>
            </div>
          </div>
          <div className="text-white mt-4 opacity-80 px-3">
            Qoute Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae consectetur ipsum dolores laudantium beatae, assumenda
            quae asperiores minus ab eius!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
