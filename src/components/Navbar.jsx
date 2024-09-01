import React, { useState } from "react";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavClick = (link) => {
    if (link === "About" || link === "Services") {
      scrollToSection(link);
    }
  };

  const navlinks = ["Home", "About", "Portfolio", "Services"];
  return (
    <header className="hidden lg:flex justify-between flex-row p-2 cursor-pointer font-mono font-bold text-xl sticky top-0 bg-black w-full z-20">
      <div className=" ml-3 text-white text-3xl">
        Ace<span className="text-indigo-500">Link</span>
      </div>
      <div className="flex space-x-4">
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
      <div className="flex-shrink-0">
        {/* Placeholder for keeping the links centered */}
      </div>
    </header>
  );
};

export default Navbar;
