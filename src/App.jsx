import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden antialiased selection:bg-purple-300 selection:text-black">
      {/* Background Styling */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-r from-gray-900 via-gray-700 to-purple-300">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%, rgba(255,255,255,0.5), rgba(106,90,205,0.2), rgba(75,0,130,0.1))]"></div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;