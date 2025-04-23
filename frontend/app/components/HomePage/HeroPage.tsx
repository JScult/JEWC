import Image from "next/image";
import { motion } from "framer-motion";

console.log(Image, motion);

export default function HeroPage() {
  return (
    <div
      className="h-screen bg-cover bg-center px-6 py-4 flex flex-col justify-between pb-5"
      style={{
        backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/jem.jpg')`,
      }}
    >
      <div className="flex items-center justify-between absolute">
        <Image
          src="/Assets/globalLogo.png"
          width={100}
          height={100}
          alt="Logo 1"
          className="h-12 w-auto"
        />
        <p className="text-white text-lg font-bold">X</p>
        <Image
          src="/Assets/logoje.png"
          width={100}
          height={100}
          alt="Logo 2"
          className="h-14 w-auto"
        />
      </div>
      <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:text-left">
          Junior Enterprises World Conference
        </h1>
        <div className="text-white text-sm sm:text-base space-y-1 font-semibold">
          <p className="uppercase tracking-wide">Heritage Meets Innovation</p>
          <p>Date: 18–21 September 2025</p>
          <p>Place: Tunisia</p>
        </div>
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-white bg-[#BD1829] rounded-full hover:bg-red-700 transition"
        >
          ATTEND
        </motion.button>
      </div>
    </div>
  );
}