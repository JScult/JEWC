import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Import Lucide icons
import Image from "next/image";

export default function Footer() {
    return (
        <div
            className="h-[80vh] lg:h-[60vh] bg-cover bg-center bg-fixed px-4 sm:px-6 md:px-8 lg:px-16 py-4 flex flex-col justify-between"
            style={{
                backgroundImage: `linear-gradient(95deg, rgba(189, 24, 41, 0.4) 10%, rgba(109, 82, 149, 0.5) 40%), url('/Assets/monastirmosque.jpg')`,
            }}
        >
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <Image
                    src="/Assets/image.png"
                    alt="Logo 1"
                    height={100}
                    width={100}
                    className="h-12 sm:h-16 w-auto mb-4 md:mb-0"
                />
                <div className="text-center space-y-2">
                    <h1 className="text-white text-center text-3xl mt-4 font-bold leading-tight">
                        HERITAGE MEETS INNOVATION
                    </h1>
                    <h3 className="text-white text-center text-sm sm:text-base md:text-lg font-semibold mt-2">
                        The world’s largest interdisciplinary <br className="hidden sm:block" />
                        entrepreneurial student network
                    </h3>
                    <button className="mt-6 bg-purple-600 text-white text-center align-middle font-bold py-2 px-6 rounded-full text-sm sm:text-base hover:bg-purple-700">
                        ATTEND
                    </button>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4 mt-4 md:mt-0">
                    <Image
                        src="/Assets/globalLogo.png"
                        width={100}
                        height={100}
                        alt="Logo 1"
                        className="h-6 sm:h-8 md:h-12 w-auto"
                    />
                    <p className="text-white text-lg font-bold">X</p>
                    <Image
                        src="/Assets/logoje.png"
                        width={100}
                        height={100}
                        alt="Logo 2"
                        className="h-6 sm:h-8 md:h-12 w-auto"
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm md:text-base py-4 border-t border-white/30 mt-4">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-2 sm:mb-0">
                    <a href="#" className="hover:underline">CONTACT US: info@jewcglobal.org</a>
                    <div className="flex space-x-2 sm:space-x-4">
                        <span>FOLLOW US</span>
                        <a href="#" className="hover:text-gray-300">
                            <Facebook className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Instagram className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Linkedin className="h-5 w-5 text-white" />
                        </a>
                        <a href="#" className="hover:text-gray-300">
                            <Twitter className="h-5 w-5 text-white" />
                        </a>
                    </div>
                    <a href="#" className="hover:underline">ANY QUESTIONS?</a>
                </div>
                <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                    <span>© 2023 ALL RIGHTS RESERVED</span>
                    <a href="#" className="hover:underline">PRIVACY POLICY</a>
                    <a href="#" className="hover:underline">TERMS OF USE</a>
                    <a href="#" className="hover:underline">SALES & REFUNDS</a>
                    <a href="#" className="hover:underline">LEGAL</a>
                    <a href="#" className="hover:underline">SITE MAP</a>
                </div>
            </div>
        </div>
    );
}