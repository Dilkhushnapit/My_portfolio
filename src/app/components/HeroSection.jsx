"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

function HeroSection() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between px-6 py-12">
      <div className="max-w-3xl place-self-center sm:text-left text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-pink-500">Hello, I'm {" "} </span>
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center sm:text-left">
            <TypeAnimation
      sequence={[
        'Dilkhush Napit.',
        2000, 
        'Web Developer.',
        2000,
        'Electronics and Communication Engineer.',
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </span>
        </h1>
        <p className="text-lg text-gray-300  sm:text-left mt-4">
          I am a passionate developer specializing in building web applications and IoT solutions. With a strong foundation in both software and hardware, I create seamless and efficient digital experiences.
        </p>
    
        
      </div>

      {/* Profile image inside circular background */}

      <div className="col-span-5 mt-6 sm:mt-0 sm:ml-8">
        <div className="relative rounded-full bg-[#181818] w-[300px] h-[300px] flex items-center justify-center">
          <Image
            src="/images/Hero-image.png"
            alt="Profile Picture"
            width={240}
            height={240}
            className="rounded-full object-cover border-4 border-white shadow-lg"

            priority
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
