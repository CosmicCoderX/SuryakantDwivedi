import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function HomePage() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* 60 FPS Background Image Scroll Canvas Engine */}
      <BackgroundCanvas />

      {/* Full Screen Scrollable UI Overlay Layer */}
      <div id="ui-overlay">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Skills />
        <Projects />
        <Philosophy />
        <Journey />
        <Testimonials />
        
        {/* Cinematic Ending Wrapper */}
        <div className="w-full flex flex-col relative z-10 -mt-[120px]">
          {/* Smooth gradient transition in normal flow */}
          <div className="w-full h-[160px] bg-gradient-to-b from-transparent to-black pointer-events-none" />
          
          <div className="bg-black pointer-events-auto">
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
