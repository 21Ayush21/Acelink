import React from "react";
import image from "../assets/logo-placeholder.png";

const Aboutsection = () => {
  return (
    <section className="mx-auto bg-background-linear-gradient px-6 py-20">
      <div className="rounded-lg bg-[#01031f]">
        <div className="flex flex-col md:flex-row p-6">
          <img
            src={image}
            alt="logo"
            className="w-[300px] object-contain p-6"
          />
          <div className="ml-4 flex flex-col">
            <div>
              <h1 className="font-bold text-white text-3xl">
                <span className="bg-gradient-to-r from-pink-400 to-pink-700 text-transparent bg-clip-text">
                  About
                </span>{" "}
                the 
                <span className="ml-2 bg-gradient-to-r from-indigo-400 to-indigo-700 text-transparent bg-clip-text">
                  Company
                </span>
              </h1>
              <p className="text-gray-300 font-semibold text-xl mt-4 py-6">
                AceLink Software Solutions specializes in crafting custom AI
                assistants, internal tools, websites, and apps for B2B
                enterprises. We leverage advanced AI to enhance operational
                efficiency and improve customer engagement, helping businesses
                excel in the digital landscape
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
