import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const MineralResources: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [selectedMineral, setSelectedMineral] = useState<string | null>(null);

  const minerals = [
    { name: 'Gold', locations: ['Zamfara', 'Osun', 'Kaduna'], uses: ['Jewelry', 'Electronics', 'Dentistry'] },
    { name: 'Coal', locations: ['Enugu', 'Kogi', 'Benue'], uses: ['Power generation', 'Steel production', 'Cement manufacturing'] },
    { name: 'Limestone', locations: ['Ogun', 'Cross River', 'Sokoto'], uses: ['Cement production', 'Construction', 'Agriculture'] },
    { name: 'Iron Ore', locations: ['Kogi', 'Enugu', 'Niger'], uses: ['Steel production', 'Construction', 'Automotive industry'] },
    { name: 'Bitumen', locations: ['Ondo', 'Ogun', 'Lagos'], uses: ['Road construction', 'Waterproofing', 'Roofing'] },
    { name: 'Lead-Zinc', locations: ['Ebonyi', 'Plateau', 'Nasarawa'], uses: ['Batteries', 'Galvanization', 'Alloys'] },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Nigeria's Mineral Resources</h1>
      <p className="text-xl mb-8">
        Nigeria is blessed with an abundance of solid minerals distributed across the country. Explore our rich mineral resources and their potential applications.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {minerals.map((mineral, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 ${
              selectedMineral === mineral.name ? 'ring-2 ring-green-500' : 'hover:shadow-lg'
            }`}
            onClick={() => setSelectedMineral(mineral.name)}
          >
            <h2 className="text-2xl font-bold mb-4">{mineral.name}</h2>
            <p className="mb-2"><strong>Locations:</strong> {mineral.locations.join(', ')}</p>
            <p><strong>Uses:</strong> {mineral.uses.join(', ')}</p>
          </div>
        ))}
      </div>
      {selectedMineral && (
        <div className="mt-8 bg-green-100 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Investing in {selectedMineral}</h3>
          <p className="mb-4">
            {selectedMineral} is a valuable mineral resource with significant potential for investment. The Ministry of Solid Minerals provides support and guidance for investors interested in exploring and developing {selectedMineral} deposits in Nigeria.
          </p>
          <a href="/invest" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn About Investment Opportunities
          </a>
        </div>
      )}
    </animated.div>
  );
};

export default MineralResources;