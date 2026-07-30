import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* 60 FPS Background Image Scroll Canvas Engine */}
      <BackgroundCanvas />

      {/* Full Screen Scrollable UI Overlay Layer */}
      <div id="ui-overlay">
        <Navbar />
        <Hero />
        <Stats />
      </div>
    </div>
  );
}
