import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Linkedin, Mail } from 'lucide-react';

// Import images of the new team members. Replace 'imagePath' with the correct local paths for each image.
import henryImg from '../assets/henry.jpeg';
import obadiahImg from '../assets/obadiah.jpg'; 
import ogbonnaImg from '../assets/ogbonna.png';
import zibiriImg from '../assets/zibiri.jpeg';
import mustaphaImg from '../assets/mustapha.jpg';
import abdulmajeedImg from '../assets/abdulmajeed.jpg';
import augustineImg from '../assets/augustine.png';
import okechukwuImg from '../assets/user.png';
import victoriaImg from '../assets/victoria.png';
import madakiImg from '../assets/madaki.png';
import echeImg from '../assets/user.png';
import titusImg from '../assets/titus.jpg';
import yakubuImg from '../assets/YAKUBU YAHUZA MURI.jpg';
import kennethImg from '../assets/okechukwu.png';
import sadeImg from '../assets/SADE FATOKE.jpg';
import anthonyImg from '../assets/ANTHONY ANDOR UGAL.jpg';
import hiMuhammadImg from '../assets/H.I. MUHAMMAD.png';

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
      bio: 'Henry Dele Alake is a Nigerian journalist, activist, and technocrat, currently the Minister of Solid Minerals.',
    },
    {
      name: 'Engr. Obadiah Simon Nkom',
      position: 'Director General',
      image: obadiahImg,
      bio: 'Engr. Obadiah Simon Nkom is the Director-General of the Nigeria Mining Cadastre.',
    },
    {
      name: 'Ogbonna Ndubuisi Celestine',
      position: 'Ag. Director (Finance & Accounts)',
      image: ogbonnaImg,
      bio: 'Ogbonna Ndubuisi Celestine is the Acting Director of Finance & Accounts.',
    },
    {
      name: 'Barr. Zibiri Andrew',
      position: 'Director (Legal)',
      image: zibiriImg,
      bio: 'Barr. Zibiri Andrew oversees all legal matters in the organization.',
    },
    {
      name: 'Engr. Mustapha Mani Yusuf',
      position: 'Ag. Director (M&C)',
      image: mustaphaImg,
      bio: 'Engr. Mustapha Mani Yusuf is the Acting Director of Monitoring & Compliance.',
    },
    {
      name: 'Abdulmajeed J. Ibrahim',
      position: 'Ag. Director (Concession)',
      image: abdulmajeedImg,
      bio: 'Abdulmajeed J. Ibrahim is the Acting Director of Concessions.',
    },
    {
      name: 'Augustine Bakoshi',
      position: 'Ag. Director (Registry)',
      image: augustineImg,
      bio: 'Augustine Bakoshi manages the Registry Department.',
    },
    {
      name: 'Okechukwu Nwagbara',
      position: 'Ag. Director (Admin)',
      image: okechukwuImg,
      bio: 'Okechukwu Nwagbara oversees administrative functions.',
    },
    {
      name: 'Victoria Enape',
      position: 'Head (Finance & Accounts)',
      image: victoriaImg,
      bio: 'Victoria Enape heads the Finance & Accounts division.',
    },
    {
      name: 'Madaki Joseph',
      position: 'STA-DG',
      image: madakiImg,
      bio: 'Madaki Joseph is the Senior Technical Advisor to the Director General.',
    },
    {
      name: 'Eche Friday',
      position: 'AD (M&C)',
      image: echeImg,
      bio: 'Eche Friday is an Assistant Director in Monitoring & Compliance.',
    },
    {
      name: 'Titus Dakup',
      position: 'Assistant Director (Concession)',
      image: titusImg,
      bio: 'Titus Dakup is an Assistant Director in the Concession Department.',
    },
    {
      name: 'Yakubu Yahuza Muri',
      position: 'Assistant Director (Legal)',
      image: yakubuImg,
      bio: 'Yakubu Yahuza Muri handles legal affairs as an Assistant Director.',
    },
    {
      name: 'Kenneth Chukwu',
      position: 'Head (Procurement)',
      image: kennethImg,
      bio: 'Kenneth Chukwu is in charge of the Procurement division.',
    },
    {
      name: 'Sade Fatoke',
      position: 'Head (Press)',
      image: sadeImg,
      bio: 'Sade Fatoke manages press relations for the organization.',
    },
    {
      name: 'Anthony Andor Ugal',
      position: 'Head (ICT)',
      image: anthonyImg,
      bio: 'Anthony Andor Ugal leads the ICT department.',
    },
    {
      name: 'H.I. Muhammad',
      position: 'Head (RDS)',
      image: hiMuhammadImg,
      bio: 'H.I. Muhammad is responsible for the Research and Development Services.',
    },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Management Team</h1>
      <p className="text-xl mb-8">
        Meet the dedicated professionals driving the solid minerals sector. Our team is committed to sustainable development in Nigeria.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-96 overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-full transform scale-100 hover:scale-105 transition-transform duration-300" />
            </div>
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
          We're always looking for talented individuals passionate about Nigeria's solid minerals sector. Explore our career opportunities!
        </p>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          View Career Opportunities
        </a>
      </div>
    </animated.div>
  );
};

export default Team;
