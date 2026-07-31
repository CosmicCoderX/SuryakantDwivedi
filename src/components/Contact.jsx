import React, { useState, useRef, Suspense, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars, Environment, ContactShadows, useGLTF, Center, Float, OrbitControls, Resize } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import * as THREE from 'three';

function ScreenContent({ activeScreen }) {
  switch (activeScreen) {
    case 0: // Portfolio
      return (
        <div className="flex flex-col h-full bg-black text-white p-2">
           <div className="w-full flex justify-between items-center border-b border-white/10 pb-1 mb-2">
             <div className="text-[8px] font-bold tracking-widest text-emerald-400">SD.</div>
             <div className="flex gap-1"><div className="w-3 h-0.5 bg-white/20"/><div className="w-3 h-0.5 bg-white/20"/></div>
           </div>
           <div className="text-[10px] font-bold text-center mt-3 tracking-wide">Building Modern Web</div>
           <div className="w-20 h-5 bg-emerald-500/20 rounded-md mx-auto mt-3 border border-emerald-500/50 flex items-center justify-center">
             <span className="text-[6px] uppercase tracking-widest text-emerald-400">Explore</span>
           </div>
        </div>
      );
    case 1: // VS Code
      return (
        <div className="flex flex-col h-full bg-[#1e1e1e] text-white">
          <div className="h-2.5 bg-[#2d2d2d] flex items-center px-1.5 gap-1 border-b border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="p-3 font-mono text-[7px] text-[#d4d4d4] leading-[1.6]">
            <span className="text-[#569cd6]">import</span> React <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">'react'</span>;<br/><br/>
            <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">Contact</span> = () <span className="text-[#569cd6]">=&gt;</span> {'{'}<br/>
            &nbsp;&nbsp;<span className="text-[#569cd6]">return</span> (<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#4fc1ff]">div</span> <span className="text-[#9cdcfe]">className</span>=<span className="text-[#ce9178]">"cinematic"</span>&gt;<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#4fc1ff]">div</span>&gt;<br/>
            &nbsp;&nbsp;);<br/>
            {'}'};
          </div>
        </div>
      );
    case 2: // GitHub
      return (
        <div className="flex flex-col h-full bg-[#0d1117] text-[#c9d1d9] p-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-[#30363d] border border-white/10" />
            <div className="h-2 w-12 bg-[#30363d] rounded" />
          </div>
          <div className="grid grid-cols-12 gap-0.5 opacity-80">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-[1px] ${Math.random() > 0.8 ? 'bg-[#39d353]' : Math.random() > 0.6 ? 'bg-[#26a641]' : Math.random() > 0.3 ? 'bg-[#006d32]' : 'bg-[#161b22]'}`} />
            ))}
          </div>
        </div>
      );
    case 3: // Terminal
      return (
        <div className="flex flex-col h-full bg-black text-[#27c93f] p-3 font-mono text-[7px] leading-relaxed">
          <div><span className="text-white">➜</span> <span className="text-[#4fc1ff]">portfolio</span> <span className="text-[#d4d4d4]">git:(</span><span className="text-[#ff5f56]">main</span><span className="text-[#d4d4d4]">)</span> npm run dev</div>
          <div className="text-[#d4d4d4] mt-1 text-[6px]">VITE v5.0.0  ready in 142 ms</div>
          <br/>
          <div className="text-[#d4d4d4]">➜  Local:   <span className="text-[#4fc1ff]">http://localhost:5173/</span></div>
          <div className="text-[#d4d4d4]">➜  Network: use --host to expose</div>
          <br/>
          <div className="mt-1"><span className="animate-pulse w-1.5 h-2.5 bg-white inline-block"></span></div>
        </div>
      );
    default:
      return null;
  }
}

function WorkspaceModel() {
  const group = useRef();
  const { scene } = useGLTF('/models/computer.glb');
  
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = Math.sin(t / 2) / 20;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.05} floatIntensity={0.2}>
        <Center>
          <Resize scale={5}>
            <primitive object={scene} />
          </Resize>
        </Center>
      </Float>
    </group>
  );
}

useGLTF.preload('/models/computer.glb');

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/polargod404@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formState.name,
            email: formState.email,
            message: formState.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full bg-black overflow-hidden pt-24 pb-0 flex flex-col justify-center">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
         <Canvas camera={{ position: [0, 0, 1] }}>
           <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
         </Canvas>
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-12 lg:px-16 z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left">
           <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-emerald-400 mb-6 backdrop-blur-md"
           >
             <span className="relative flex h-1.5 w-1.5">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
             </span>
             <span className="tracking-widest uppercase">Contact</span>
           </motion.div>
           
           <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-5 max-w-[600px] leading-[1.1]"
           >
             Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Amazing Together.</span>
           </motion.h2>
           <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-[500px] leading-relaxed font-medium"
           >
             Whether it's an internship, startup, hackathon or freelance project, I'd love to hear from you.
           </motion.p>
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 h-full">
          
          {/* Left: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[45%] relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 bg-[#141418]/45 backdrop-blur-[22px] p-8 sm:p-10 rounded-[28px] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                  
                  <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Your name</label>
                      <input required type="text" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="bg-white/[0.04] border border-white/[0.06] backdrop-blur-[10px] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 placeholder:text-white/20 shadow-[0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]" placeholder="What's your good name?" />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Your email</label>
                      <input required type="email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="bg-white/[0.04] border border-white/[0.06] backdrop-blur-[10px] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 placeholder:text-white/20 shadow-[0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]" placeholder="What's your email address?" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2.5 relative z-10">
                    <label className="text-[10px] font-medium text-white/50 uppercase tracking-widest">Your message</label>
                    <textarea required rows="4" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="bg-white/[0.04] border border-white/[0.06] backdrop-blur-[10px] rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300 resize-none placeholder:text-white/20 shadow-[0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]" placeholder="How can I help you?" />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="mt-2 group/btn relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:translate-y-0 z-10"
                  >
                    {isSubmitting ? <Loader2 size={18} className="animate-spin text-black/50" /> : (
                      <>
                        <span>Send message</span>
                        <span className="font-normal text-lg leading-none transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 bg-emerald-500/[0.02] p-12 rounded-[28px] border border-emerald-500/20 backdrop-blur-xl h-full shadow-[0_0_40px_rgba(16,185,129,0.1)] text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1, bounce: 0.5 }}
                  >
                    <CheckCircle2 size={64} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mt-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm font-medium">Thank you for reaching out.<br/>I'll get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-[55%] h-[400px] md:h-[600px] relative bg-[#141418]/35 backdrop-blur-[22px] rounded-[28px] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-10" />
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-[80px] pointer-events-none rounded-full z-0" />
             
             <Canvas shadows camera={{ position: [5, 4, 6], fov: 45 }} className="w-full h-full touch-none relative z-0">
                <ambientLight intensity={0.5} />
                <directionalLight position={[-5, 5, 5]} intensity={1.5} color="#ffffff" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-bias={-0.0001} />
                <directionalLight position={[5, 2, -5]} intensity={0.5} color="#ffffff" /> 
                
                <Suspense fallback={<Html center><Loader2 className="animate-spin text-white/30" /></Html>}>
                  <WorkspaceModel />
                  <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
                    <planeGeometry args={[50, 50]} />
                    <shadowMaterial opacity={0.4} />
                  </mesh>
                </Suspense>
                
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2 + 0.1} minPolarAngle={Math.PI / 4} minAzimuthAngle={-Math.PI/4} maxAzimuthAngle={Math.PI/4} />
                <Environment preset="city" />
             </Canvas>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
