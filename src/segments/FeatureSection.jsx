import React from "react";
import image from "../assets/logo-placeholder.png";
import { forwardRef } from "react";

const FeatureSection = forwardRef((props , ref) => {
  return (
    <section className="bg-background-linear-gradient mx-auto px-6 py-14" ref={ref}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="rounded-lg bg-[#01031f] shadow-sm relative">
            <div className="flex flex-col items-center">
              <div className="px-4 py-10">
                <h3 className="text-white text-center text-4xl font-semibold">
                  Virtual AI Assistants
                </h3>
              </div>
              <div className="text-white opacity-80 px-14 text-justify">
              We provide advanced Virtual AI Assistants that streamline your business operations, enhancing productivity by automating routine tasks and offering intelligent, real-time support.
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
                Custom Software
                </h3>
              </div>
              <div className="text-white opacity-80 px-14 text-justify">Our Custom Software solutions are tailored to meet the unique needs of your business, offering specialized functionality and flexibility to address specific challenges.</div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
          <div className="rounded-lg bg-[#01031f] shadow-sm relative h-full">
            <div className="flex flex-col items-center">
              <div className="px-4 py-10">
                <h3 className="text-white text-center text-3xl font-semibold">
                Websites / Apps
                </h3>
              </div>
              <div className="text-white opacity-80 px-14 text-justify">We create stunning, user-friendly websites and apps that not only capture your brand's essence but also deliver exceptional user experiences.</div>
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
});

export default FeatureSection;
