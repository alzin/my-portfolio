import React from "react";
import nature from "../img/nature_home.JPG";

export default function Home() {
  return (
    <main>
      <img src={nature} alt="nature" className="absolute h-full w-full" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-sung home-name">
          Hey. I'm Ghaith
        </h1>
      </section>
    </main>
  );
}
