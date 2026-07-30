import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
        <Projects />
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
