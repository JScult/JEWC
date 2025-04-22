import Image from "next/image";
export default function main() {
    return (
<div
      className="h-screen bg-cover bg-center bg-fixed px-6 py-4 flex flex-col justify-between pb-5"
      style={{
        backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/jem.jpg')`,
      }}
    >                <div className="hidden lg:flex items-center justify-between">
<Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-26 ml-6 w-auto" />
      </div>
        
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
      <div className="flex md:mt-40 lg:mt-0 items-center justify-between">
          <Image src="/Assets/globalLogo.png" width={100} height={100}  alt="Logo 1" className="h-6 md:h-12 w-auto" />
          <p className="text-white text-lg font-bold">X</p>
          <Image src="/Assets/logoje.png" width={100} height={100} alt="Logo 2" className="h-6 md:h-18 w-auto" />
        </div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:text-left">
            Junior Enterprises World Conference
          </h1>
          <div className="text-white text-sm sm:text-base space-y-1 font-semibold">
            <p className="uppercase tracking-wide ">Heritage Meets Innovation</p>
            <p>Date: 18–21 September 2025</p>
            <p>Place: Tunisia</p>
          </div>
          <button className="px-6 py-2 text-white bg-[#BD1829] rounded-full hover:bg-red-700 transition lg:scale-155">
            ATTEND
          </button>
        </div>
      </div>
        
       
    
    );
  }