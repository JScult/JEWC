"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface Event {
  year: string;
  image: string;
  id: number;
  description: string;
}

const events: Event[] = [
  {
    year: "2021",
    image: "/Assets/monastirmosque.jpg",
    id: 1,
    description: "The 2021 JEWC event brought together young entrepreneurs to share ideas and foster innovation.",
  },
  {
    year: "2022",
    image: "/Assets/monastirmosque.jpg",
    id: 2,
    description: "In 2022, JEWC expanded with more workshops and networking opportunities for attendees.",
  },
  {
    year: "2023",
    image: "/Assets/monastirmosque.jpg",
    id: 3,
    description: "The 2023 edition featured keynote speakers and a startup pitch competition.",
  },
  {
    year: "2024",
    image: "/Assets/monastirmosque.jpg",
    id: 4,
    description: "JEWC 2024 celebrated its largest turnout yet with global participation.",
  },
];

export default function AboutJewc() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Group events into pairs for display (2 sets of 4 images)
  const eventGroups = [events.slice(0, 2), events.slice(2, 4)];

  // Scroll functions
  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (currentIndex < eventGroups.length - 1) {
      setCurrentIndex(currentIndex + 1);
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
      }
    }
  };

  // Handle image click to open modal
  const handleImageClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="py-6 px-2 xs:px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 bg-white text-center mb-12">
      <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-[#BD1829] mb-4 xs:mb-5 sm:mb-6 text-left">
        ABOUT JEWC
      </h2>

      {/* Gallery Container */}
      <div className="relative flex flex-col items-center">
        {/* Navigation Buttons (Desktop) */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-[#BD1829] text-white w-10 h-32 xs:w-10 xs:h-36 sm:w-12 sm:h-40 md:w-12 md:h-48 lg:w-12 lg:h-48 xl:w-12 xl:h-48 rounded-r-full flex items-center justify-center z-10 transition-opacity ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#9b1321]"
          } hidden md:flex`}
          aria-label="Scroll Left"
          disabled={currentIndex === 0}
        >
          <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-[#BD1829] text-white w-10 h-32 xs:w-10 xs:h-36 sm:w-12 sm:h-40 md:w-12 md:h-48 lg:w-12 lg:h-48 xl:w-12 xl:h-48 rounded-l-full flex items-center justify-center z-10 transition-opacity ${
            currentIndex === eventGroups.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#9b1321]"
          } hidden md:flex`}
          aria-label="Scroll Right"
          disabled={currentIndex === eventGroups.length - 1}
        >
          <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {eventGroups.map((group, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-full flex flex-col md:flex-row justify-center items-center space-y-3 xs:space-y-3 sm:space-y-4 md:space-y-0 md:space-x-3 lg:space-x-4 xl:space-x-4"
            >
              {/* Left: 2021 + 2022 stacked */}
              <div className="flex flex-col space-y-3 xs:space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-4">
                {group.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="relative w-[280px] h-[160px] xs:w-[300px] xs:h-[170px] sm:w-[320px] sm:h-[180px] md:w-[480 Martino
                    lg:w-[512px] lg:h-[192px] xl:w-[540px] xl:h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => handleImageClick(event)}
                  >
                    <Image
                      src={event.image}
                      alt={`JEWC ${event.year}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-[#7f1d1d] bg-opacity-50 flex items-center justify-center text-white text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                      <Image src={event.image} alt={`JEWC ${event.year}`} fill className="object-cover" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: 2023 + 2024 side by side */}
              <div className="flex flex-col space-y-3 xs:space-y-3 sm:space-y-4 md:space-y-0 md:space-x-3 lg:space-x-4 xl:space-x-4 md:flex-row">
                {group.slice(0, 2).map((event) => (
                  <div
                    key={event.id}
                    className="relative w-[280px] h-[160px] xs:w-[300px] xs:h-[170px] sm:w-[320px] sm:h-[180px] md:w-[220px] md:h-[384px] lg:w-[240px] lg:h-[400px] xl:w-[260px] xl:h-[416px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => handleImageClick(event)}
                  >
                    <Image
                      src={event.image}
                      alt={`JEWC ${event.year}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-[#7f1d1d] bg-opacity-50 flex items-center justify-center text-white text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold">
                      <Image src={event.image} alt={`JEWC ${event.year}`} fill className="object-cover" />
                      {event.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Mobile) */}
        <div className="flex justify-between w-full mt-3 xs:mt-3 sm:mt-4 md:hidden">
          <button
            onClick={scrollLeft}
            className={`w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-[#BD1829] text-white rounded-full flex items-center justify-center transition-opacity ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#9b1321]"
            }`}
            aria-label="Scroll Left"
            disabled={currentIndex === 0}
          >
            <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            className={`w-10 h-10 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-[#BD1829] text-white rounded-full flex items-center justify-center transition-opacity ${
              currentIndex === eventGroups.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#9b1321]"
            }`}
            aria-label="Scroll Right"
            disabled={currentIndex === eventGroups.length - 1}
          >
            <svg className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-3 xs:mt-3 sm:mt-4 space-x-2">
          {eventGroups.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4 rounded-full ${
                currentIndex === index ? "bg-[#BD1829]" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentIndex(index);
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * scrollRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Event Preview */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-8 xl:p-8 w-11/12 xs:w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/2 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-800"
              aria-label="Close Modal"
            >
              <svg className="w-6 h-6 xs:w-6 xs:h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="flex flex-col items-center space-y-4 xs:space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-6 xl:space-y-6">
              {/* Event Image */}
              <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedEvent.image}
                  alt={`JEWC ${selectedEvent.year}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="text-center">
                <h3 className="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#BD1829] mb-2 xs:mb-3 sm:mb-4">
                  JEWC {selectedEvent.year}
                </h3>
                <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg text-gray-700">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}