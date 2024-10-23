import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);

  return (
    <header className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Ministry of Solid Minerals</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <div className="relative group">
            <button onClick={toggleAboutDropdown} className="flex items-center hover:text-green-300">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                <Link to="/about/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Leadership</Link>
                <Link to="/about/departments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Departments</Link>
                <Link to="/about/structure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Organizational Structure</Link>
                <Link to="/about/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Services</Link>
                <Link to="/about/opportunities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Opportunities</Link>
                <Link to="/about/roadmap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100">Roadmap</Link>
              </div>
            )}
          </div>
          <Link to="/projects" className="hover:text-green-300">Projects</Link>
          <Link to="/mineral-resources" className="hover:text-green-300">Mineral Resources</Link>
          <Link to="/invest" className="hover:text-green-300">Invest</Link>
          <Link to="/laws-regulations" className="hover:text-green-300">Laws & Regulations</Link>
          <Link to="/team" className="hover:text-green-300">Team</Link>
          <Link to="/contact" className="hover:text-green-300">Contact</Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-green-700">Home</Link>
          <button onClick={toggleAboutDropdown} className="w-full text-left py-2 px-4 text-sm hover:bg-green-700 flex justify-between items-center">
            About <ChevronDown className="h-4 w-4" />
          </button>
          {aboutDropdownOpen && (
            <>
              <Link to="/about/leadership" className="block py-2 px-8 text-sm hover:bg-green-700">Leadership</Link>
              <Link to="/about/departments" className="block py-2 px-8 text-sm hover:bg-green-700">Departments</Link>
              <Link to="/about/structure" className="block py-2 px-8 text-sm hover:bg-green-700">Organizational Structure</Link>
              <Link to="/about/services" className="block py-2 px-8 text-sm hover:bg-green-700">Services</Link>
              <Link to="/about/opportunities" className="block py-2 px-8 text-sm hover:bg-green-700">Opportunities</Link>
              <Link to="/about/roadmap" className="block py-2 px-8 text-sm hover:bg-green-700">Roadmap</Link>
            </>
          )}
          <Link to="/projects" className="block py-2 px-4 text-sm hover:bg-green-700">Projects</Link>
          <Link to="/mineral-resources" className="block py-2 px-4 text-sm hover:bg-green-700">Mineral Resources</Link>
          <Link to="/invest" className="block py-2 px-4 text-sm hover:bg-green-700">Invest</Link>
          <Link to="/laws-regulations" className="block py-2 px-4 text-sm hover:bg-green-700">Laws & Regulations</Link>
          <Link to="/team" className="block py-2 px-4 text-sm hover:bg-green-700">Team</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-green-700">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;