import React from "react";
import Cards from "../components/Cards";

const Herosection = () => {
  return (
    <section className="bg-background-linear-gradient grid w-full md:min-h-screen grid-cols-1 lg:grid-cols-2 max-h-fit place-items-center px-10 md:py-32 gap-10 ">
      <div className="text-start w-full">
        <main className="font-bold text-3xl flex flex-col sm:ml-10 ml-7 mt-5 font-ibm">
          <h1 className="font-bold xl:text-10xl animate-colorChange text-6xl -ml-3 md:-ml-0">
            Acelink
          </h1>

          <div className="flex flex-col mt-4 text-white text-4xl space-y-4 sm:text-5xl">
            <div className="">
              <h1 className="xl:ml-36 leading-12">Linking</h1>  {/* just chaned margin */}
              <h1 className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent md:leading-12">
                Intelligent Software
              </h1>
            </div>
            <h1 className="xl:ml-44 leading-10">To</h1>  {/* just changed margin here as well */}
            <h1 className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent leading-10">
              Business Excellence
            </h1>
          </div>
        </main>
      </div>
      <div className="">
        <Cards></Cards>
      </div>
    </section>
  );
};

export default Herosection;
