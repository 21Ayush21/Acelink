import React from "react";

const Navbar = () => {
  const navlinks = ["Home", "About", "Portfolio", "Services"];
  return (
    <header className="flex justify-between flex-row p-2 cursor-pointer font-mono font-bold text-xl sticky top-0 bg-black w-full z-20">
      <div className=" ml-3 text-white text-3xl">Ace<span className="text-indigo-500">Link</span></div>
      <div className="flex space-x-4">

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
      </div>
      <button className="text-white bg-transparent border-2 bg-white rounded-full px-2">Contact Us</button>
    </header>
  );
};

export default Navbar;
