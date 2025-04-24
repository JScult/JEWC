"use client"
import type React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-10">
                <div
                    className="absolute inset-0 z-10  bg-no-repeat bg-cover opacity-30"
                    style={{
                        backgroundImage: " linear-gradient(95deg, rgba(189, 44, 81, 0.7) 70%, rgba(109, 82, 149, 1) 100%),url('/Assets/images/auth-img.png')",
                        backgroundPosition: "right center",
                        backgroundSize: "cover",
                    }}
                />
            </div>

            <header className="pt-6 hidden lg:flex items-center justify-between px-10 px-6 z-10 relative">
                <Image
                    src="/Assets/images/logo2.png"
                    alt="JEWC25 Logo"
                    width={90}
                    height={92}
                    priority
                />
                <div className="flex gap-4">
                    <button
                        onClick={()=> router.push("/sign-in") }
                        className="px-4 py-2 border cursor-pointer border-white text-white rounded-md hover:bg-white hover:text-[#101652] transition duration-300"
                    >
                        Se connecter
                    </button>

                    <button
                        onClick={()=> router.push("/sign-up") }
                        className="px-6 py-2 bg-white cursor-pointer rounded-md text-[#101652] font-semibold hover:bg-transparent hover:text-white transition duration-300"
                    >
                        S&apos;inscrire
                    </button>
                </div>
            </header>


            <main className="flex items-center justify-around min-h-[calc(100vh-100px)] px-4 z-10 relative">
                <div className="text-white hidden lg:block font-bold text-[50px] text-center">
                    <span className="text-bold text-[100px]">‘‘ </span>North Africa, Global Vision. <br/>
                    <span className="block">Welcome to Tunisia. </span>
                </div>


                <div className="w-full max-w-md bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg">

                    <div className="mb-8 lg:hidden text-center">
                        <Image
                            src="/Assets/images/logo.png"
                            alt="JEWC25 Logo"
                            width={200}
                            height={72}
                            className="mx-auto"
                            priority
                        />
                    </div>


                    {children}


                </div>


            </main>
        </div>
    );
};

export default Layout;
