import { ReactNode } from "react";
import Image from "next/image";
interface SectionHeaderProps {
  title: string;
  description: ReactNode;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
<div
      className=" bg-cover bg-center bg-fixed  px-6 py-4 flex flex-col justify-between pb-5"
      style={{
        backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/jem.jpg')`,
      }}
    >
         <div className="hidden lg:flex items-center justify-between">
        <Image src="/Assets/jewc.png" alt="Logo 1" height={100} width={100} className="h-26 ml-6 w-auto" />
              </div>
        <div className="flex items-center mt-24 justify-between flex-col">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight lg:text-left">{title}</h1>
        <p className="text-white text-center my-8 text-sm sm:text-base space-y-1 font-semibold">{description}</p>
        </div>
    </div>
  );
}