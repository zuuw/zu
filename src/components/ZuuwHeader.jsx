"use client";

import { TypeAnimation } from 'react-type-animation';

import React from 'react'

function ZuuwHeader() {
  return (
    <div className='items-center'>
        <div className='flex m-0'>
        <TypeAnimation 
            sequence={[
              1000,
                'zuuw',
                1000,
            ]}
        
            wrapper='h1'
            speed={40}
            style={{fontSize: '150px', display: 'inline-block', color: 'white'}}
            repeat={0}
            />
            </div>

               <div className='text-wrap-'>
        <TypeAnimation 
            sequence={[
              500,
              'E-Business Card'
                // 6000,
                // 'Developer',
                //  1000,
                // 'Digital Creator',
                // 1000,
                // 'Experience Designer',
                // 1000,
                // 'Best of all time',
                // 1000,
                // 'Humble',
                // 1000,
                // 'Silly Baka',
                // 1000,
                // 'Creator.',
                // 1000,
            ]}
            cursor={false}
            deletionSpeed={4}
            wrapper='span'
            speed={40}
            style={{fontSize: '2em', display: 'inline-block', color: 'white'}}
            repeat={0}
            />
            </div>
    </div>
  )
}

export default ZuuwHeader