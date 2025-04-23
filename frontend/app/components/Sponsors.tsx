"use client";
import Image from "next/image";
export default function Sponsors() {
    // Array of sponsor logos (replace src with actual image paths)
    const sponsors = [
        { name: 'Key Values', src: '/Assets/keyvalues.png' },
        { name: 'Cloud Management', src: '/Assets/cloudmanagement.png' },
        { name: 'Touya', src: '/Assets/touya.png' },
        { name: 'Teamwill', src: '/Assets/teamwill.png' },
        { name: 'Managers', src: '/Assets/managers.png' },
        { name: 'Betacube', src: '/Assets/betacube.png' },
    ];

    return (
        <div className="w-full overflow-hidden py-10 bg-gray-50">
            <div className="relative">
                {/* Infinite scrolling container */}
                <div className="flex animate-scroll whitespace-nowrap">
                    {/* First set of logos */}
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-6 md:mx-10 lg:mx-12"
                        >
                            <Image
                                width={100}
                                height={100}
                                src={sponsor.src}
                                alt={`${sponsor.name} logo`}
                                className="h-10 md:h-12 lg:h-14 object-contain"
                            />
                        </div>
                    ))}
                    {/* Duplicate set of logos for seamless looping */}
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="flex-shrink-0 mx-6 md:mx-10 lg:mx-12"
                        >
                            <img
                                src={sponsor.src}
                                alt={`${sponsor.name} logo`}
                                className="h-10 md:h-12 lg:h-14 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS for infinite scroll animation */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 20s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}