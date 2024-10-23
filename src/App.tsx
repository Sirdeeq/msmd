import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import MineralResources from './pages/MineralResources';
import Invest from './pages/Invest';
import LawsRegulations from './pages/LawsRegulations';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/mineral-resources" element={<MineralResources />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/laws-regulations" element={<LawsRegulations />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;