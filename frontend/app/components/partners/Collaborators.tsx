import React from 'react';
import Image from 'next/image';
const Collaborators = () => {
  const partners = [
    { name: 'Touya', logo: '/Assets/touya.png' },
    { name: 'Teamwill', logo: '/Assets/teamwill.png' },
    { name: 'US Entrepreneur Network', logo: '/Assets/cloudmanagement.png' },
    { name: 'Key Values', logo: '/Assets/keyvalues.png' },
    { name: 'Betacube', logo: '/Assets/betacube.png' },
    { name: 'Managers', logo: '/Assets/managers.png' },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-red-700 text-center mb-4">
          OUR STRATEGIC PARTNERS
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          We collaborate with organizations that share our vision to achieve greater impact together in Tunisia and all over the world
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-4 h-24"
            >
              <Image
              width={100}
              height={100}
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;