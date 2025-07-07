import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 bg-clip-text text-transparent">
          Discover unforgettable experiences
        </h2>
        <p className="text-lg md:text-xl text-gray-800 mb-10">
          Curated activities hosted by passionate locals. Book in minutes,
          remember for a lifetime.
        </p>
        <Link href="/experiences">
          <button className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 font-semibold shadow-md hover:bg-indigo-60 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105">
            Explore experiences
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
