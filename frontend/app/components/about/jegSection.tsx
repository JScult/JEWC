import Image from "next/image";
import jeImage from "@/public/Assets/collaborators.jpg"; // adjust the path if your image is elsewhere

const JegSection = () => {
  return (
    <section className="bg-[#6D5295] text-white py-8 px-4 sm:py-12 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            JUNIOR ENTERPRISES GLOBAL
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            The Junior Enterprises Concept is currently spanning 45 Countries, 19 National
            Confederations, Continental Confederations, 2100+ Junior Enterprises and 80.000+ members,
            all united in the JE Global with the following mission:
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            “Strengthening the Junior Enterprises Global Network towards boosting educational,
            economic and collaborative impact & societal change for student’s professional
            outlooks worldwide.”
          </p>
          <div className="flex justify-end">
            <a
              href="https://www.juniorenterprises.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#BD1829] hover:bg-red-700 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition text-sm sm:text-base"
            >
              Check JE Global 
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src={jeImage}
            alt="Junior Enterprises Group"
            className="rounded-2xl shadow-lg w-full max-w-[500px] h-auto"
            width={500}
            height={350}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default JegSection;