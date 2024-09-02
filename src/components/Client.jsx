import React from "react";
import image from "../assets/Acelinklogo.png";

const Client = () => {
  return (
    <div className="grid xl:grid-cols-4 gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 mt-10">
      <div className="relative group">
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_rgba(238,119,82,1)_18%,_rgba(231,60,126,1)_42%,_rgba(35,166,213,1)_68%,_rgba(35,213,171,1)_86%)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt h-[180px]"></div>
        <div className="rounded-lg bg-[#01031f] shadow-sm relative">
          <div className="flex flex-col items-center p-3">
            <div className="flex flex-row items-center justify-start w-full">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src={image} alt="client image" />
              </div>

              <div className="flex flex-col text-white ml-3">
                <h3 className="font-semibold text-lg">Ovelia</h3>
                <p className="opacity-60 text-sm">Himanshi Sharma</p>
              </div>
            </div>
            <div className="text-white mt-4 opacity-80 px-3 py-2">
              AceLink developed our app and remains a trusted partner,
              consistently delivering outstanding service
            </div>
          </div>
        </div>
      </div>


      <div className="relative group">
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_rgba(238,119,82,1)_18%,_rgba(231,60,126,1)_42%,_rgba(35,166,213,1)_68%,_rgba(35,213,171,1)_86%)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="rounded-lg bg-[#01031f] shadow-sm relative">
          <div className="flex flex-col items-center p-3">
            <div className="flex flex-row items-center justify-start w-full">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src={image} alt="client image" />
              </div>

              <div className="flex flex-col text-white ml-3">
                <h3 className="font-semibold text-lg">Script</h3>
                <p className="opacity-60 text-sm">Sakshi Khedia</p>
              </div>
            </div>
            <div className="text-white mt-4 opacity-80 px-3 py-2">
            Developing our website allowed us to sell our clothing online, and the ongoing partnership has been key to our online success.
            </div>
          </div>
        </div>
      </div>


      <div className="relative group">
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_rgba(238,119,82,1)_18%,_rgba(231,60,126,1)_42%,_rgba(35,166,213,1)_68%,_rgba(35,213,171,1)_86%)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="rounded-lg bg-[#01031f] shadow-sm relative">
          <div className="flex flex-col items-center p-3">
            <div className="flex flex-row items-center justify-start w-full">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src={image} alt="client image" />
              </div>

              <div className="flex flex-col text-white ml-3">
                <h3 className="font-semibold text-lg">Vanderoo</h3>
                <p className="opacity-60 text-sm">Dev Nain</p>
              </div>
            </div>
            <div className="text-white mt-4 opacity-80 px-3 py-2">
            He communication throughout the development process was easy and open, making it a smooth and successful collaboration
            </div>
          </div>
        </div>
      </div>

      <div className="relative group ">
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,_rgba(238,119,82,1)_18%,_rgba(231,60,126,1)_42%,_rgba(35,166,213,1)_68%,_rgba(35,213,171,1)_86%)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt h-[130px]"></div>
        <div className="rounded-lg bg-[#01031f] shadow-sm relative">
          <div className="flex flex-col items-center p-3">
            <div className="flex flex-row items-center justify-start w-full">
              <div className="h-16 w-16 rounded-full overflow-hidden">
                <img src={image} alt="client image" />
              </div>

              <div className="flex flex-col text-white ml-3">
                <h3 className="font-semibold text-lg">1stRank</h3>
                <p className="opacity-60 text-sm">1stRank Lead</p>
              </div>
            </div>
            <div className="text-white mt-4 opacity-80 px-3 py-2">
            A smooth process
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
