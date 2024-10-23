import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Linkedin, Mail } from 'lucide-react';
import henryImg from '../assets/henry.jpeg';

const Team: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const teamMembers = [
    {
      name: 'Mr Henry Dele Alake',
      position: 'Minister of Solid Minerals',
       image: henryImg,
      bio: 'Mr Henry Dele Alake brings over 20 years of experience in the mining industry and public administration.',
    },
    {
      name: 'Amina Bello',
      position: 'Director of Mineral Resources',
       image: henryImg,
      bio: 'Amina Bello is an expert in geological surveys and mineral exploration strategies.',
    },
    {
      name: 'Chukwudi Okonkwo',
      position: 'Head of Mining Regulations',
       image: henryImg,
      bio: 'Chukwudi Okonkwo oversees the implementation and enforcement of mining regulations.',
    },
    {
      name: 'Dr. Fatima Usman',
      position: 'Director of Environmental Compliance',
       image: henryImg,
      bio: 'Dr. Usman leads initiatives to ensure sustainable and environmentally responsible mining practices.',
    },
    {
      name: 'Emmanuel Nwoke',
      position: 'Chief Investment Officer',
       image: henryImg,
      bio: 'Emmanuel Nwoke spearheads efforts to attract and facilitate investments in the solid minerals sector.',
    },
    {
      name: 'Aisha Mohammed',
      position: 'Director of Community Relations',
       image: henryImg,
      bio: 'Aisha Mohammed manages relationships between mining operations and host communities.',
    },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <p className="text-xl mb-8">
        Meet the dedicated professionals leading Nigeria's solid minerals sector. Our team brings together expertise in geology, mining engineering, environmental science, and public administration to drive sustainable growth in the industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-green-600 font-semibold mb-4">{member.position}</p>
              <p className="mb-4">{member.bio}</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <Linkedin />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <Mail />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-green-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-4">
          We're always looking for talented individuals passionate about developing Nigeria's solid minerals sector. Check out our current openings and join us in shaping the future of mining in Nigeria.
        </p>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          View Career Opportunities
        </a>
      </div>
    </animated.div>
  );
};

export default Team;