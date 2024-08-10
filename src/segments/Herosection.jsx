import React from "react";
import Cards from "../components/Cards";

const Herosection = () => {
  return (
    <section className="bg-background-linear-gradient grid w-full min-h-screen grid-cols-1 lg:grid-cols-2 place-items-center px-10 md:py-32 gap-10">
      <div className="text-start">
        <main className="font-bold text-6xl">
          <h1 className="inline text-white ">
            Crafting Custom
            <span className="ml-1 inline bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              AI assistants
            </span>
          </h1>
        </main>
      </div>
      <div className="w-[680px] h-[376px]">
        <Cards></Cards>
      </div>
    </section>
  );
};

export default Herosection;
