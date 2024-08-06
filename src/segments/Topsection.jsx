import React from "react";
import Card from "../components/Card";
import Cards from "../components/Cards";

const Topsection = () => {
  return (
    <section className="bg-background-linear-gradient h-screen flex items-center justify-center">
      <div className="grid lg:grid-cols-2 place-items-center px-10">
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
        <div>
          <Cards></Cards>
        </div>
      </div>
    </section>
  );
};

export default Topsection;
