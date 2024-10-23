import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const AboutLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About the Ministry of Solid Minerals</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <nav>
            <ul className="space-y-2">
              <li><Link to="/about/leadership" className="text-green-600 hover:text-green-800">Leadership</Link></li>
              <li><Link to="/about/departments" className="text-green-600 hover:text-green-800">Departments</Link></li>
              <li><Link to="/about/structure" className="text-green-600 hover:text-green-800">Organizational Structure</Link></li>
              <li><Link to="/about/services" className="text-green-600 hover:text-green-800">Services</Link></li>
              <li><Link to="/about/opportunities" className="text-green-600 hover:text-green-800">Opportunities</Link></li>
              <li><Link to="/about/roadmap" className="text-green-600 hover:text-green-800">Roadmap</Link></li>
            </ul>
          </nav>
        </aside>
        <div className="md:col-span-3">
          <Routes>
            <Route index element={<AboutOverview />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="departments" element={<Departments />} />
            <Route path="structure" element={<Structure />} />
            <Route path="services" element={<Services />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="roadmap" element={<Roadmap />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const AboutOverview: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="mb-4">
      The Ministry of Solid Minerals is dedicated to developing Nigeria's vast mineral resources, promoting sustainable mining practices, and attracting investments to the sector. Our goal is to position Nigeria as a leading mining destination in Africa and contribute significantly to the nation's economic growth.
    </p>
    <p>
      Explore the sections on the left to learn more about our leadership, departments, organizational structure, services, opportunities, and our roadmap for the future of Nigeria's solid minerals sector.
    </p>
  </div>
);

const Leadership: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Leadership</h2>
    <p>Information about the Ministry's leadership team...</p>
  </div>
);

const Departments: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Departments</h2>
    <p>Overview of the Ministry's various departments...</p>
  </div>
);

const Structure: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Organizational Structure</h2>
    <p>Details about the Ministry's organizational structure...</p>
  </div>
);

const Services: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Services</h2>
    <p>Information about services provided by the Ministry...</p>
  </div>
);

const Opportunities: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Opportunities</h2>
    <p>Overview of opportunities within the solid minerals sector...</p>
  </div>
);

const Roadmap: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Roadmap</h2>
    <p>The Ministry's roadmap for developing Nigeria's solid minerals sector...</p>
  </div>
);

export default AboutLayout;