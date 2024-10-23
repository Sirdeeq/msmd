import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ArrowRight, Download } from 'lucide-react';

const Invest: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // URL of the investment guide file
  const investmentGuideURL = 'https://www.minesandsteel.gov.ng/wp-content/uploads/2023/03/Nigeria-Ministry-of-Solid-Minerals-Investment-BrochureV12.pdf'; // Update this to the correct file path

  return (
    <animated.div style={fadeIn} className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Invest in Nigeria's Solid Minerals Sector</h1>
      <p className="text-xl mb-8">
        Nigeria offers numerous investment opportunities in its vast and diverse solid minerals sector. Discover how you can be a part of this growing industry.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Why Invest in Nigeria?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Abundant mineral resources</li>
            <li>Favorable government policies</li>
            <li>Growing domestic and international demand</li>
            <li>Skilled workforce</li>
            <li>Improving infrastructure</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Investment Opportunities</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mineral exploration and mining</li>
            <li>Mineral processing and beneficiation</li>
            <li>Mining equipment and services</li>
            <li>Logistics and transportation</li>
            <li>Research and development</li>
          </ul>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Investment Process</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <ol className="list-decimal list-inside space-y-4">
          <li>Research potential investment areas</li>
          <li>Contact the Ministry of Solid Minerals for guidance</li>
          <li>Obtain necessary licenses and permits</li>
          <li>Conduct feasibility studies and environmental impact assessments</li>
          <li>Secure funding and partnerships</li>
          <li>Implement your project with ongoing support from the Ministry</li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold mb-6">Online License Application Portal</h2>
      <div className="bg-green-100 rounded-lg p-6 mb-12">
        <p className="mb-4">
          Our online portal streamlines the process of applying for mining licenses and permits. Follow these steps to get started:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Create an account on our secure portal</li>
          <li>Select the type of license or permit you need</li>
          <li>Fill out the required information and upload necessary documents</li>
          <li>Pay the application fee online</li>
          <li>Track your application status through the portal</li>
        </ol>
        <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Access License Application Portal <ArrowRight className="ml-2" />
        </a>
      </div>

      <h2 className="text-3xl font-bold mb-6">Resources for Investors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Investment Guide</h3>
          <p className="mb-4">Download our comprehensive guide for investors in Nigeria's solid minerals sector.</p>
          <a
            href={investmentGuideURL}
            download="investment-guide.pdf"
            className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center"
          >
            Download Guide <Download className="ml-2" />
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Mineral Maps</h3>
          <p className="mb-4">Access detailed maps of Nigeria's mineral deposits and mining areas.</p>
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center">
            View Mineral Maps <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Our Investment Team</h2>
        <p className="mb-4">
          Our dedicated investment team is here to assist you with any questions or support you may need throughout your investment journey.
        </p>
        <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          Get in Touch <ArrowRight className="ml-2" />
        </a>
      </div>
    </animated.div>
  );
};

export default Invest;
