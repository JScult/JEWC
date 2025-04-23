import Image from "next/image";
import jeImage from "@/public/Assets/collaborators.jpg"; // adjust the path if your image is elsewhere

const JegSection = () => {
  return (
    <section className="bg-[#6D5295] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            JUNIOR ENTERPRISES GLOBAL
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The Junior Enterprises Concept is currently spanning 45 Countries, 19 National
            Confederations, Continental Confederations, 2100+ Junior Enterprises and 80.000+ members,
            all united in the JE Global with the following mission:
          </p>
          <p className="text-lg leading-relaxed mb-6">
            “Strengthening the Junior Enterprises Global Network towards boosting educational,
            economic and collaborative impact & societal change for student’s professional
            outlooks worldwide.”
          </p>
          <div className="flex justify-end">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BD1829] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition "
          >
            Check JE Global ↗
          </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={jeImage}
            alt="Junior Enterprises Group"
            className="rounded-2xl shadow-lg"
            width={500}
            height={350}
          />
        </div>
      </div>
    </section>
  );
};

export default JegSection;
