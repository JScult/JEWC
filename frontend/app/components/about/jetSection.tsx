import Image from "next/image";
import jeImage from "@/public/Assets/collaborators.jpg";

const JetSection = () => {
  return (
    <section className="bg-white text-black py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image First on MD+ */}
        <div className="order-1 md:order-none flex justify-center md:justify-start">
          <Image
            src={jeImage}
            alt="Junior Enterprises Group"
            className="rounded-2xl shadow-lg"
            width={500}
            height={350}
          />
        </div>

        {/* Text Second on MD+ */}
        <div className="order-2 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
          JUNIOR ENTERPRISES TUNISIA
          </h2>
          <p className="text-lg leading-relaxed mb-6">
          Founded in 2012, JET was launched with the aim of expanding the 
          network of Junior Entrepreneurs in Tunisia and representing them
          worldwide. 


          </p>
          <p className=" text-lg leading-relaxed mb-6">
          The network currently has over 29 Junior Enterprises from various
          disciplines, including business, engineering, IT, communications
          , agronomy, and design.”
          </p>
          <a
            href="https://www.jetunisie.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#BD1829] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Check JE Tunisia 
          </a>
        </div>
      </div>
    </section>
  );
};

export default JetSection;
