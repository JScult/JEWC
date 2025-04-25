import Image from "next/image";
export default function WelcomeSection() {
    return (
        <div className="p-5 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-10">
                <h1 className="text-[#BD1829] font-bold text-center text-2xl p-5 md:text-4xl lg:text-5xl lg:text-left">
                    WELCOME TO JEWC25
                </h1>
                <p className="text-sm p-5 text-center md:text-lg lg:text-xl lg:text-left leading-relaxed">
                    From <span className="text-[#BD1829] font-semibold">September 18–21</span>, JE Tunisia will host JEWC25, the first-ever Junior Enterprises World Conference in Africa! Organized by JE Global and hosted by JE Tunisia, this international event gathers Junior Entrepreneurs from across the world. With the theme <span className="text-[#BD1829] font-semibold">``Heritage``</span>, it will celebrate culture, identity, and innovation. Attendees can expect enriching activities, workshops, and global networking.
                </p>
            </div>

            {/* Discover Tunisia Section */}
            <div>
                <h1 className="text-[#BD1829] font-bold text-center text-2xl p-5 md:text-4xl lg:text-5xl lg:text-left">
                    DISCOVER TUNISIA
                </h1>
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <p className="text-sm p-5 text-center lg:text-left md:text-lg lg:text-xl lg:w-3/5 leading-relaxed">
                        We proudly propose <span className="text-[#BD1829] font-semibold">Tunisia</span> as the host country for JEWC 2025, the first-ever edition in Africa. JE Tunisia is a dynamic confederation with strong experience and a wide network of partners. They have successfully led impactful events and are driven by innovation and collaboration.
                        <br /><br />
                        Tunisia is a cultural and geographical bridge between Africa, Europe, and the Middle East, it offers a rich heritage, welcoming atmosphere, and vibrant youth community. The country has a growing entrepreneurial ecosystem and strong event-hosting capacity, it’s also accessible, and inspiring. Tunisia is ideal for a global gathering like JEWC.
                        <br /><br />
                        <span className="text-[#BD1829] font-semibold block text-center lg:text-left">
                            It’s the perfect place to connect, celebrate heritage, and drive international impact.
                        </span>
                    </p>
                    <Image
                        width={100}
                        height={100} 
                        className="w-48 md:w-64 lg:w-80 m-auto lg:m-0 p-2.5" 
                        src="/Assets/Group 61.png" 
                        alt="Tunisian heritage illustration" 
                    />
                </div>
            </div>
        </div>
    );
}