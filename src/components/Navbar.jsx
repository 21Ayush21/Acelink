import React from "react";

const Navbar = () => {
  const navlinks = ["Home", "About", "Contact", "Services"];
  return (
    <header className="flex flex-row p-2 cursor-pointer font-mono font-bold text-xl sticky top-0 bg-black w-full z-20">
      <div className="flex-1 ml-3 text-white text-3xl">Ace<span className="text-indigo-500">Link</span></div>
      {navlinks.map((link, index) => {
        return (
          <div
            key={index}
            className="px-4 text-3xl hover:text-indigo-500 transition-colors text-white"
          >
            {link}
          </div>
        );
      })}
    </header>
  );
};

export default Navbar;
