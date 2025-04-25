import React from 'react'
import Image from 'next/image';
import Collaborators from '../../components/partners/Collaborators';
function page() {
  return (
    <div><div
          className=" pt-20 lg:pt-0 bg-cover bg-center bg-fixed px-6 py-8 flex flex-col justify-between pb-5"
          style={{
            backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/collaborators.jpg')`,
          }}
        >    
        <div className="hidden lg:flex items-center justify-between">
        <Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-26 ml-6 w-auto" />
              </div>
              <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
                <h1 className="text-white pb-14 pt-6 text-4xl sm:text-5xl md:text-6xl  leading-tight lg:text-left">
                MEET OUR PARTNERS              </h1>
              
              </div>
         </div>
         <Collaborators/>
         </div>
  )
}

export default page