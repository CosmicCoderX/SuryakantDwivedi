import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* 60 FPS Background Image Scroll Canvas Engine */}
      <BackgroundCanvas />

      {/* Fixed Full Screen Hero & Navbar UI Overlay */}
      <div id="ui-overlay">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
