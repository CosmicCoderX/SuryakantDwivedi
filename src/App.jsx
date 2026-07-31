import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
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
        <Stats />
        <Skills />
        <TechMarquee />
        <Projects />
        <Philosophy />
        <Journey />
        <Testimonials />
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
