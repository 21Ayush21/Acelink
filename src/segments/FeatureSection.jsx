import React from "react";
import image from "../assets/logo-placeholder.png";

const FeatureSection = () => {
  return (
    <section className="bg-background-linear-gradient mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="rounded-lg bg-[#01031f] shadow-sm relative">
            <div className="flex flex-col items-center">
              <div className="px-4 py-10">
                <h3 className="text-white text-center text-3xl font-semibold">
                  Virtual AI Assistants
                </h3>
              </div>
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-[300px] object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="rounded-lg bg-[#01031f] shadow-sm relative">
            <div className="flex flex-col items-center">
              <div className="px-4 py-10">
                <h3 className="text-white text-center text-3xl font-semibold">
                  Virtual AI Assistants
                </h3>
              </div>
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-[300px] object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="rounded-lg bg-[#01031f] shadow-sm relative">
            <div className="flex flex-col items-center">
              <div className="px-4 py-10">
                <h3 className="text-white text-center text-3xl font-semibold">
                  Virtual AI Assistants
                </h3>
              </div>
              <div>
                <img
                  src={image}
                  alt=""
                  className="w-[300px] object-contain p-6"
                />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default FeatureSection;
