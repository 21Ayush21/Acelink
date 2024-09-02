import React from "react";
import Client from "../components/Client";

const Clientsection = () => {
  return (
    <section className="p-5 bg-background-linear-gradient">
      <div className="py-20 mx-2">
        <h2 className="text-white text-center text-3xl font-semibold mb-5">
          Our Clients
        </h2>

        <Client></Client>
      </div>
    </section>
  );
};

export default Clientsection;
