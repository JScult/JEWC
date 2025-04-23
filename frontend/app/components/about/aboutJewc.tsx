"use client";
import React from 'react';
import Image from 'next/image';

const events = [
  { year: '2021', image: '/images/jewc.jpg' },
  { year: '2022', image: '/images/jewc.jpg' },
  { year: '2023', image: '/images/jewc.jpg' },
  { year: '2024', image: '/images/jewc.jpg' },
];

export default function AboutJewc() {
  return (
    <div className="py-10 px-4 md:px-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#BD1829] mb-6 text-left">ABOUT JEWC</h2>

      {/* Responsive Container */}
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 relative">
        {/* Left Button (top on small screens) */}
        <button className="md:w-12 w-full md:h-96 h-12 rounded-full bg-[#BD1829] text-white text-3xl flex items-center justify-center z-10">
          ‹
        </button>

        {/* Images Layout */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
          {/* 2021 + 2022 stacked */}
          <div className="flex flex-col space-y-4">
            {events.slice(0, 2).map((event) => (
              <div key={event.year} className="relative w-64 h-48 md:h-48 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={`JEWC ${event.year}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex items-center justify-center text-white text-2xl font-semibold">
                  {event.year}
                </div>
              </div>
            ))}
          </div>

          {/* 2023 + 2024 side by side */}
          <div className="flex space-x-0 md:space-x-6 flex-col md:flex-row space-y-4 md:space-y-0">
            {events.slice(2).map((event) => (
              <div key={event.year} className="relative w-64 h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={`JEWC ${event.year}`}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex items-center justify-center text-white text-3xl font-semibold">
                  {event.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button (bottom on small screens) */}
        <button className="md:w-12 w-full md:h-96 h-12 rounded-full bg-[#BD1829] text-white text-3xl flex items-center justify-center z-10">
          ›
        </button>
      </div>

      <div className="mt-6 text-right text-[#BD1829] text-sm md:text-base">
        <p>Check previous all the editions</p>
      </div>
    </div>
  );
}
