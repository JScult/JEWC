import Image from "next/image";

export default function NewLetter() {
    return (
        <div className="px-4 py-12 sm:px-8 md:px-16 lg:px-32">
            <div
                className="bg-gradient-to-r w-full flex flex-col md:flex-row justify-between items-center p-4 sm:p-6 md:p-8 rounded-lg"
                style={{
                    backgroundImage:
                        'linear-gradient(90deg, rgba(108, 80, 152, 1) 0%, rgba(152, 49, 91, 1) 61%, rgba(189, 24, 41, 1) 100%)',
                }}
            >
                <div className="text-white w-full md:w-2/3 mb-6 md:mb-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">JOIN OUR NEWSLETTER</h1>
                    <p className="text-sm sm:text-base md:text-lg mb-4">Receive fresh articles straight in your inbox, every week!</p>
                    <input
                        type="email"
                        placeholder="Your email address..."
                        className="w-full p-3 rounded-full text-black mb-4 focus:outline-none bg-white"
                    />
                    <p className="text-xs sm:text-sm opacity-75">Weekly newsletter only. No spam, unsubscribe at any time.</p>
                </div>
                <div className="relative w-1/2 md:w-1/3 flex justify-center">
                    <Image
                        src="/Assets/newsletter.png"
                        alt="News Letter"
                        width={100}
                        height={100}
                        className="w-auto h-[150px] sm:h-[200px] md:h-[280px]"
                    />
                    
                </div>
            </div>
        </div>
    );
}