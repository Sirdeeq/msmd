import React from 'react';
import { useSpring, animated } from 'react-spring';

const Projects: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const projects = [
    {
      title: 'Gold Mining in Zamfara',
      description: 'Large-scale gold mining project in Zamfara State, aimed at boosting local economy and creating jobs.',
      image: 'https://source.unsplash.com/800x600/?gold-mining',
      status: 'Ongoing',
    },
    {
      title: 'Coal Exploration in Enugu',
      description: 'Revitalization of coal mining in Enugu State, focusing on sustainable practices and modern technology.',
      image: 'https://source.unsplash.com/800x600/?coal-mining',
      status: 'Planning',
    },
    {
      title: 'Limestone Quarry in Ogun',
      description: 'Expansion of limestone quarrying operations in Ogun State to support the cement industry.',
      image: 'https://source.unsplash.com/800x600/?limestone-quarry',
      status: 'Ongoing',
    },
    {
      title: 'Gemstone Mining in Plateau',
      description: 'Development of gemstone mining and processing facilities in Plateau State.',
      image: 'https://source.unsplash.com/800x600/?gemstones',
      status: 'Upcoming',
    },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <p className="text-xl mb-8">
        Explore our ongoing and upcoming mining initiatives across Nigeria. These projects demonstrate our commitment to sustainable development and economic growth through responsible mineral exploitation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === 'Ongoing' ? 'bg-green-200 text-green-800' :
                  project.status === 'Planning' ? 'bg-yellow-200 text-yellow-800' :
                  'bg-blue-200 text-blue-800'
                }`}>
                  {project.status}
                </span>
                <a href="#" className="text-green-600 hover:text-green-800 font-semibold">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Projects;