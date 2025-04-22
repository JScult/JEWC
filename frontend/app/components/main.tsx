export default function main() {
    return (
      <div className="bg-[url('/Assets/jem.jpg')] h-screen bg-cover bg-center px-6 py-4 flex flex-col justify-between pb-5">
        {/* Logo row */}
        <div className="flex items-center justify-between">
          <img src="/Assets/Copy of logo1_white 3.png" alt="Logo 1" className="h-6 w-auto" />
          <p className="text-white text-lg font-bold">X</p>
          <img src="/Assets/LOGO-JE-Tunisia-White 1.png" alt="Logo 2" className="h-6 w-auto" />
        </div>
  
        
        <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6" >
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