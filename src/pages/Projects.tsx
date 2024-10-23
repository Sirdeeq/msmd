import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

interface Project {
  title: string;
  description: string;
  image?: string;
  status: string;
}

const Projects: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [projects, setProjects] = useState<Project[]>([
    {
      title: 'Gold Mining in Zamfara',
      description: 'Large-scale gold mining project in Zamfara State, aimed at boosting local economy and creating jobs.',
      status: 'Ongoing',
    },
    {
      title: 'Coal Exploration in Enugu',
      description: 'Revitalization of coal mining in Enugu State, focusing on sustainable practices and modern technology.',
      status: 'Planning',
    },
    {
      title: 'Limestone Quarry in Ogun',
      description: 'Expansion of limestone quarrying operations in Ogun State to support the cement industry.',
      status: 'Ongoing',
    },
    {
      title: 'Gemstone Mining in Plateau',
      description: 'Development of gemstone mining and processing facilities in Plateau State.',
      status: 'Upcoming',
    },
  ]);

  useEffect(() => {
    const fetchImages = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await axios.get(
              `https://api.pexels.com/v1/search?query=${encodeURIComponent(project.title)}&per_page=1`,
              {
                headers: {
                  Authorization: 'ieVrTnAvAfjI9xRUXnRqMKd4l2uiX2zfUC8G0ycqX4GhuFjQ5SLjlw9z', // Replace with your Pexels API key
                },
              }
            );
            const imageUrl = response.data.photos[0]?.src.medium || '';
            return { ...project, image: imageUrl };
          } catch (error) {
            console.error('Error fetching image:', error);
            return project;
          }
        })
      );
      setProjects(updatedProjects);
    };

    fetchImages();
  }, []);

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <p className="text-xl mb-8">
        Explore our ongoing and upcoming mining initiatives across Nigeria. These projects demonstrate our commitment to sustainable development and economic growth through responsible mineral exploitation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image not available</span>
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Ongoing'
                      ? 'bg-green-200 text-green-800'
                      : project.status === 'Planning'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-blue-200 text-blue-800'
                  }`}
                >
                  {project.status}
                </span>
                <a href="#" className="text-green-600 hover:text-green-800 font-semibold">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Projects;
