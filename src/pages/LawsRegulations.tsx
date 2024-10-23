import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FileText, Download } from 'lucide-react';

const LawsRegulations: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const laws = [
    { title: 'Nigerian Minerals and Mining Act', year: 2007, description: 'The primary legislation governing the mining sector in Nigeria.' },
    { title: 'Nigerian Minerals and Mining Regulations', year: 2011, description: 'Detailed regulations for implementing the Minerals and Mining Act.' },
    { title: 'Environmental Impact Assessment Act', year: 1992, description: 'Mandates environmental impact assessments for mining projects.' },
    { title: 'Land Use Act', year: 1978, description: 'Governs land ownership and use, including for mining purposes.' },
    { title: 'Companies and Allied Matters Act', year: 2020, description: 'Regulates the formation and operation of companies in Nigeria, including mining companies.' },
  ];

  const guidelines = [
    { title: 'Guidelines for Mineral Exploration', description: 'Outlines procedures for conducting mineral exploration activities.' },
    { title: 'Community Development Agreement Guidelines', description: 'Provides framework for agreements between mining companies and host communities.' },
    { title: 'Guidelines on Mineral Title Administration', description: 'Details the process of acquiring and maintaining mineral titles.' },
    { title: 'Environmental Protection and Rehabilitation Program Guidelines', description: 'Specifies requirements for environmental protection in mining operations.' },
  ];

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Laws and Regulations</h1>
      <p className="text-xl mb-8">
        Understanding the legal framework is crucial for operating in Nigeria's solid minerals sector. Here you'll find key laws, regulations, and guidelines governing mining activities.
      </p>

      <h2 className="text-3xl font-bold mb-6">Key Legislation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {laws.map((law, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">{law.title}</h3>
            <p className="text-gray-600 mb-4">Year: {law.year}</p>
            <p className="mb-4">{law.description}</p>
            <a href="#" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
              View Full Text <FileText className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Guidelines and Policies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {guidelines.map((guideline, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">{guideline.title}</h3>
            <p className="mb-4">{guideline.description}</p>
            <a href="#" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
              Download Guidelines <Download className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      <div className="bg-green-100 rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
        <p className="mb-4">
          Laws and regulations in the mining sector are subject to updates. Subscribe to our newsletter to stay informed about the latest changes and amendments.
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </form>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Need Legal Assistance?</h2>
        <p className="mb-4">
          Our legal team is available to provide guidance on interpreting and complying with mining laws and regulations.
        </p>
        <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Contact Legal Department
        </a>
      </div>
    </animated.div>
  );
};

export default LawsRegulations;