import React from "react";
import Client from "../components/Client";
import { motion } from "framer-motion";

const Clientsection = () => {
  return (
    <motion.section
      className="p-5"
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
      <div className="py-20 mx-2">
        <h2 className="text-white text-center text-3xl font-semibold ">
          Our Clients
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
        </div>
      </div>
    </motion.section>
  );
};

export default Clientsection;
