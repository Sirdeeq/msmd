import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-300">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-green-300">Projects</Link></li>
              <li><Link to="/mineral-resources" className="hover:text-green-300">Mineral Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/invest" className="hover:text-green-300">Invest</Link></li>
              <li><Link to="/laws-regulations" className="hover:text-green-300">Laws & Regulations</Link></li>
              <li><Link to="/team" className="hover:text-green-300">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-green-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <p>Ministry of Solid Minerals</p>
            <p>Abuja, Nigeria</p>
            <p>Phone: +234 123 456 7890</p>
            <p>Email: info@solidminerals.gov.ng</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300"><Facebook /></a>
              <a href="#" className="hover:text-green-300"><Twitter /></a>
              <a href="#" className="hover:text-green-300"><Linkedin /></a>
              <a href="#" className="hover:text-green-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; {new Date().getFullYear()} Ministry of Solid Minerals, Nigeria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;