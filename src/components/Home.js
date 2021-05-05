import React from "react";
import nature from "../img/nature_home.JPG";

export default function Home() {
  return (
    <main>
      <img src={nature} alt="nature" className="absolute h-full w-full" />
      <section className="relative flex justify-center md:pt-64 lg:pt-64 px-8">
        <h1 className="text-green-100 font-bold cursive home-name">
          Hey. I'm Ghaith
        </h1>
      </section>
    </main>
  );
}
