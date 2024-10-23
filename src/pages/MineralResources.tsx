import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

interface Mineral {
  name: string;
  locations: string[];
  uses: string[];
  imageUrl?: string; // Add a property for the image URL
}

const MineralResources: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [selectedMineral, setSelectedMineral] = useState<string | null>(null);
  const [minerals, setMinerals] = useState<Mineral[]>([
    { name: 'Gold', locations: ['Zamfara', 'Osun', 'Kaduna'], uses: ['Jewelry', 'Electronics', 'Dentistry'] },
    { name: 'Coal', locations: ['Enugu', 'Kogi', 'Benue'], uses: ['Power generation', 'Steel production', 'Cement manufacturing'] },
    { name: 'Limestone', locations: ['Ogun', 'Cross River', 'Sokoto'], uses: ['Cement production', 'Construction', 'Agriculture'] },
    { name: 'Iron Ore', locations: ['Kogi', 'Enugu', 'Niger'], uses: ['Steel production', 'Construction', 'Automotive industry'] },
    { name: 'Bitumen', locations: ['Ondo', 'Ogun', 'Lagos'], uses: ['Road construction', 'Waterproofing', 'Roofing'] },
    { name: 'Lead-Zinc', locations: ['Ebonyi', 'Plateau', 'Nasarawa'], uses: ['Batteries', 'Galvanization', 'Alloys'] },
  ]);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedMinerals = await Promise.all(
        minerals.map(async (mineral) => {
          try {
            const response = await axios.get(
              `https://api.pexels.com/v1/search?query=${mineral.name}&per_page=1`,
              {
                headers: {
                  Authorization: 'ieVrTnAvAfjI9xRUXnRqMKd4l2uiX2zfUC8G0ycqX4GhuFjQ5SLjlw9z', // Replace with your Pexels API key
                },
              }
            );
            const imageUrl = response.data.photos[0]?.src.medium || '';
            return { ...mineral, imageUrl };
          } catch (error) {
            console.error('Error fetching image:', error);
            return mineral;
          }
        })
      );
      setMinerals(updatedMinerals);
    };

    fetchImages();
  }, []);

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
            className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 relative overflow-hidden ${
              selectedMineral === mineral.name ? 'ring-2 ring-green-500' : 'hover:shadow-lg'
            }`}
            style={{
              backgroundImage: `url(${mineral.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={() => setSelectedMineral(mineral.name)}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">{mineral.name}</h2>
              <p className="mb-2 text-white"><strong>Locations:</strong> {mineral.locations.join(', ')}</p>
              <p className="text-white"><strong>Uses:</strong> {mineral.uses.join(', ')}</p>
            </div>
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
