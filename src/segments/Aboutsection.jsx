import image from "../assets/Acelinklogo.png";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Aboutsection = forwardRef((props , ref) => {
  return (
    <motion.section
    ref={ref}
      className="mx-auto px-6 py-20 bg-background-linear-gradient">
      <div className="rounded-lg bg-[#01031f]">
        <div className="flex flex-col md:flex-row p-6">
          <img
            src={image}
            alt="logo"
            className="w-[300px] h-[250px] object-contain p-6"
          />
          <div className="ml-4 flex flex-col">
            <div>
              <h1 className="font-bold text-white text-3xl mb-4">
                <motion.span
                  className="ml-2 text-transparent bg-clip-text"
                  initial={{
                    backgroundImage:
                      "linear-gradient(0deg, rgba(238,119,82,1) 18%, rgba(231,60,126,1) 42%, rgba(35,166,213,1) 68%, rgba(35,213,171,1) 86%)",
                  }}
                  animate={{
                    backgroundImage:
                      "linear-gradient(360deg, rgba(238,119,82,1) 18%, rgba(231,60,126,1) 42%, rgba(35,166,213,1) 68%, rgba(35,213,171,1) 86%)",
                  }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  About the Company
                </motion.span>
              </h1>
              <motion.span
                className=" font-semibold text-xl py-6 bg-clip-text text-transparent"
                initial={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(238,119,82,1) 18%, rgba(231,60,126,1) 42%, rgba(35,166,213,1) 68%, rgba(35,213,171,1) 86%)",
                  backgroundPosition: "0% 50%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                }}
              >
                AceLink Software Solutions specializes in crafting custom AI
                assistants, internal tools, websites, and apps for B2B
                enterprises. We leverage advanced AI to enhance operational
                efficiency and improve customer engagement, helping businesses
                excel in the digital landscape
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
});

export default Aboutsection;
