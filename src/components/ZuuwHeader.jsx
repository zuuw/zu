"use client";

import { TypeAnimation } from 'react-type-animation';
import React from 'react';

function ZuuwHeader() {
  return (
    // Added relative positioning and a subtle gradient for visual focus
    <div className="relative isolate items-center text-center p-6 sm:p-10">
      {/* Subtle Blue/Purple Glow Effect */}
      <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div 
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.6%, 3.4% 56.4%, 33.1% 42.1%, 42.9% 34.4%, 57.1% 9.5%, 67.8% 34.6%, 76.8% 100%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <TypeAnimation
          sequence={[1000, 'CODY', 1000]}
          wrapper="h1"
          speed={40}
          className="
            font-extrabold 
            text-[120px] 
            sm:text-[180px] 
            md:text-[250px] 
            lg:text-[300px] 
            inline-block
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r from-white to-gray-400 
            leading-none
            tracking-tighter
            font-[Montserrat, 'Arial Black', sans-serif]
          "
          repeat={0}
        />
      </div>

      <div className="h-[2em] mt-8">
        <TypeAnimation
          sequence={[1500, 'Full-Stack Developer | Next.js Enthusiast']} 
          cursor={true}
          deletionSpeed={40}
          wrapper="span"
          speed={50}
          className="text-2xl sm:text-4xl text-gray-300 inline-block font-light"
          repeat={0}
        />
      </div>

      {/* Call to Action Button */}
      <div className='mt-12'>
        <a 
          href="#projects"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          View My Work &darr;
        </a>
      </div>
    </div>
  );
}

export default ZuuwHeader;