import React from "react";

const Navbar = () => {
  const navlinks = ["Home", "About", "Contact", "Services"];
  return (
    <header className="flex flex-row p-2 cursor-pointer font-mono font-bold text-xl sticky top-0 bg-black">
      <div className="flex-1 text-white">AceLink</div>
      {navlinks.map((link, index) => {
        return (
          <div
            key={index}
            className="px-4 hover:text-indigo-500 transition-colors text-white"
          >
            {link}
          </div>
        );
      })}
    </header>
  );
};

export default Navbar;
