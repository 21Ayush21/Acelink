import React from "react";
import Client from "../components/Client";

const Clientsection = () => {
  return (
    <section className="p-5 bg-background-linear-gradient">
      <div className="py-20 mx-2">
        <h2 className="text-white text-center text-3xl font-semibold mb-5">
          Our Clients
        </h2>
        <div className="grid xl:grid-cols-4 gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 mt-10">
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
        </div>
      </div>
    </section>
  );
};

export default Clientsection;
