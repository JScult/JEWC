"use client";
import React from 'react'
import Image from 'next/image';
function page() {
  return (
    <div>
        <Image src="/Assets/logo.png" alt="Logo 1" height={100} width={100} className="h-18 hidden xl:flex items-center justify-between ml-6 w-auto" />
        <div className='bg-[url(/generation/imag.png)] bg-no-repeat bg-center bg-fixed h-screen flex flex-col justify-center items-center'>
        <h1 className="text-[#BF162B] text-shadow-purple-950 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center">
        HERITAGE MEETS INNOVATION
        </h1>
        <h2 className="text-gray-600 text-center leading-relaxed sm:leading-loose space-y-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-4">
  “ Welcome to the hub where tradition inspires progress. Here, you’ll find <br />
  junior confederations from across the world—each rooted in culture, yet <br />
  driven by bold ideas and forward-thinking youth. Discover how young <br /> leaders are shaping tomorrow by honoring the past and innovating for the ” future.
</h2>
    </div>
    <div className='flex flex-col space-y-5'>
        <Image src="/generation/img.png" alt="Logo 1" height={1000} width={1000} className="h-[80%]  items-center justify-between ml-6 w-auto" />
        <Image src="/generation/ima.png" alt="Logo 1" height={1000} width={1000} className="h-[80%]  items-center justify-between ml-6 w-auto" />
        <Image src="/generation/image.png" alt="Logo 1" height={1000} width={1000} className="h-[80%]  items-center justify-between ml-6 w-auto" />

    </div>
    </div>
  )
}
export default page