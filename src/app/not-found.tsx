import { Compass } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen text-gray-800">
      <div className="text-center p-8 space-y-6">
        {/* Icon */}
        <div className="inline-flex items-center justify-center">
          <Compass className="w-24 h-24 text-indigo-400" />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-9xl font-extrabold text-gray-900 tracking-wider">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
          Oops! You have taken a wrong turn.
        </h2>

        {/* Informative Text */}
        <p className="text-md md:text-lg text-gray-500 max-w-md mx-auto">
          The experience you are looking for might have been moved, or perhaps it
          never existed. Let`&apos;` get you back on a known path.
        </p>

        {/* Call to Action Button */}
        <Link href="/">
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-60 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-transform transform hover:scale-105">
            Return to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
