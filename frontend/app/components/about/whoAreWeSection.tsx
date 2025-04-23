import Image from "next/image";
import React from 'react'

const whoAreWeSection = () => {
  return (
    <div
          className="h-[500px] bg-cover bg-center bg-fixed px-6 py-4 flex flex-col justify-between pb-5"
          style={{
            backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/jem.jpg')`,
          }}
        >                <div className="hidden lg:flex items-center justify-between">
    <Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-26 ml-6 w-auto" />
          </div>
            
          <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
        
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl leading-tight lg:text-left">
              WHO ARE WE
              </h1>
              
            </div>
          </div>
  )
}

export default whoAreWeSection