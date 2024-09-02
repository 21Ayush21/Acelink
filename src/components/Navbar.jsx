import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleNavClick = (link) => {
    if (link === "About" || link === "Services") {
      scrollToSection(link);
    }
  };

  const navlinks = ["Home", "About", "Portfolio", "Services"];
  return (
    <header className="md:flex md:justify-between md:flex-row p-2 cursor-pointer font-mono font-bold text-xl sticky top-0 bg-black w-full z-20">
      <div className=" ml-3 text-white text-3xl flex flex-row items-center justify-between">
        <div className=" text-4xl">
          Ace<span className="text-indigo-500">link</span>
        </div>
        <div
          className="sm:hidden text-white text-3xl mr-5"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>
      </div>
      <div className="md:flex md:space-x-4 md:flex-row m-0 hidden">
        {navlinks.map((link, index) => {
          return (
            <div
              key={index}
              className="px-4 text-3xl hover:text-indigo-500 transition-colors text-white"
              onClick={() => handleNavClick(link)}
            >
              {link}
            </div>
          );
        })}
      </div>

      {isOpen ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col md:hidden ease-in absolute bg-black left-0 w-full"
        >
          {navlinks.map((link, index) => {
            return (
              <div
                key={index}
                className="px-4 py-2 text-3xl hover:text-indigo-500 transition-colors text-white"
                onClick={() => handleNavClick(link)}
              >
                {link}
              </div>
            );
          })}
        </motion.div>
      ) : null}
      <div className="flex-shrink-0">
        {/* Placeholder for keeping the links centered */}
      </div>
    </header>
  );
};

export default Navbar;
