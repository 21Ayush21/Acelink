import React from "react";
import Cards from "../components/Cards";

const Herosection = () => {
  return (
    <section className="bg-background-linear-gradient grid w-full min-h-screen grid-cols-1 lg:grid-cols-2 place-items-center px-10 md:py-32 gap-10">
      <div className="text-start w-full">
        <main className="font-bold text-3xl flex flex-col">
          <h1
            className="font-bold text-9xl animate-colorChange"
            style={{ fontSize: "10rem" }}
          >
            Acelink
          </h1>


          <h1 className="inline text-white ml-1">Linking
            <h1 className="ml-6 inline bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              Intelligent Software
            </h1>
            <h1 className="inline text-white ml-10">To</h1>
            <h1 className=" bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Business Excellence
            </h1>
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
