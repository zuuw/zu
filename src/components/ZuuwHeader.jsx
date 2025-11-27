"use client";

import { TypeAnimation } from 'react-type-animation';
import React from 'react';

function ZuuwHeader() {
  return (
    <div className="items-center text-center">
      <div>
        <TypeAnimation
          sequence={[1000, 'CODY', 1000]}
          wrapper="h1"
          speed={40}
          className="
            font-black
            text-[100px]   /* phones */
            md:text-[200px] /* medium screens+ */
            inline-block
            text-inherit
            font-[Poppins,Montserrat,'Arial Black',sans-serif]
          "
          repeat={0}
        />
      </div>

      <div className="h-[2em] mt-2">
        <TypeAnimation
          sequence={[500, 'E-Business Card']}
          cursor={false}
          deletionSpeed={4}
          wrapper="span"
          speed={40}
          className="text-2xl md:text-4xl text-white inline-block"
          repeat={0}
        />
      </div>
    </div>
  );
}

export default ZuuwHeader;
