import React from "react";
import Cards from "../components/Cards";

const Herosection = () => {
  return (
    <section className="bg-background-linear-gradient grid w-full md:min-h-screen grid-cols-1 lg:grid-cols-2 max-h-fit place-items-center px-10 md:py-32 gap-10">
      <div className="text-start w-full">
        <main className="font-bold text-3xl flex flex-col sm:ml-10 ml-7 mt-5">
          <h1 className="font-bold xl:text-10xl animate-colorChange text-6xl -ml-3 md:-ml-0">
            Acelink
          </h1>

          <div className="flex flex-col mt-4 text-white text-4xl space-y-3">
            <h1 className="md:">Linking</h1>
            <h1 className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Intelligent Software
            </h1>
            <h1>To</h1>
            <h1 className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Business Excellence
            </h1>
          </div>
        </main>
      </div>
      <div className="w-[680px] h-[376px]">
        <Cards></Cards>
      </div>
    </section>
  );
};

export default Herosection;
