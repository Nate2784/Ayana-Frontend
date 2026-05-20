"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Star, ShieldAlert, Cpu, Orbit, Terminal } from "lucide-react";

// Advanced Futuristic Animation Profiles
const cyberFadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  },
};

const marqueeVariants: Variants = {
  animate: {
    x: [0, -1200],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 22,
        ease: "linear",
      },
    },
  },
};

export default function About() {
  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 sm:px-6 bg-brand-light text-brand-navy overflow-hidden font-sans select-none selection:bg-brand-gold/30">
      
      {/* GLOBAL BACKGROUND CYBER ACCENTS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.02)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-125 h-125 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-150 h-150 bg-brand-navy/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==================== 1. HERO TITLE & MATRIX HUD ==================== */}
        <motion.div 
          className="text-center mb-24 md:mb-36 relative"
          initial="hidden"
          animate="visible"
          variants={cyberFadeInUp}
        >
          {/* Tech Data Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md bg-brand-navy/5 border border-brand-gold/20 text-[10px] font-mono tracking-[0.4em] text-brand-gold uppercase">
            <Terminal className="w-3 h-3 animate-pulse" /> [ Welcome ]
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif text-brand-navy mb-6 tracking-tight relative z-10">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy via-brand-gold to-brand-navy">Legacy</span>
          </h1>
          
          {/* Futuristic Geometric Underline */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-brand-gold/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <Star className="w-4 h-4 text-brand-gold fill-brand-gold rotate-45" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-brand-gold/50" />
          </div>

          <div className="absolute top-1/2 left-4 text-[9px] font-mono text-brand-gold/30 tracking-widest hidden lg:block -rotate-90 origin-left">
            LAT.09_022 // LON.38_746
          </div>
        </motion.div>


        {/* ==================== 2. STORY GRID (TECH-LUXE REFACTOR) ==================== */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-center mb-32 md:mb-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Left Side: Advanced UI Image Vault */}
          <motion.div 
            variants={cyberFadeInUp}
            className="lg:col-span-6 relative aspect-square sm:aspect-4/3 md:aspect-square bg-brand-navy rounded-3xl overflow-hidden border border-brand-gold/30 group shadow-[0_25px_60px_-15px_rgba(10,25,47,0.2)]"
          >
            {/* Tech Corner Tabs */}
            <div className="absolute top-5 left-5 z-30 flex items-center gap-2 font-mono text-[9px] tracking-widest text-brand-gold bg-brand-navy/80 px-3 py-1 rounded-sm border border-brand-gold/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> LIVE
            </div>

            <Image
              src="/about-vision.jpg" 
              alt="Ayana Curation Excellence"
              fill
              className="object-cover transition-transform duration-[2.5s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 filter contrast-[1.05] brightness-[0.95]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            
            {/* High-Tech HUD Shutter Overlays */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-80 z-10 transition-opacity duration-700 group-hover:opacity-40" />
            <div className="absolute inset-0 border-12 border-transparent group-hover:border-brand-gold/5 transition-all duration-700 z-20 pointer-events-none" />

            {/* Neon Data Stream Mask inside the graphic */}
            <div className="absolute inset-x-6 bottom-6 md:inset-x-10 md:bottom-10 z-20 border border-brand-gold/20 p-6 rounded-2xl transform group-hover:-translate-y-1.25 transition-transform duration-500">
              <div className="w-8 h-0.5 mb-3" />
              <p className="text-brand-gold font-serif text-1xl md:text-2xl tracking-wide">Est. 2026</p> 
              <p className="text-white/70 font-mono text-[9px] uppercase tracking-[0.3em] mt-1">
                 // EXCELLENCE GUARANTEED
              </p>
            </div>
          </motion.div>

          {/* Right Side: Editorial Blueprint Copy */}
          <motion.div variants={cyberFadeInUp} className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.5em] text-brand-gold font-bold">// PILARS OF OPERATIONS</span>
              <h2 className="text-4xl sm:text-5xl text-brand-navy leading-[1.15] font-light">
                Architectural sophistication in <br />
                <span className="font-serif italic text-brand-gold font-normal">every micro dimension.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-light border-l-2 border-brand-gold/20 pl-6">
              <p>
                Ayana General Trading represents an evolved commitment to precision, framing high-end luxury event curation inside robust global commodity frameworks. Founded by <strong className="font-medium text-brand-navy">Biruktawit Abebe</strong> to challenge structural paradigms in East Africa, we synchronize two operational nodes: high-precision international summits and elite global coffee logistics.
              </p>
              <p>
                Whether planning a high-profile corporate summit or orchestrating a luxury celebration, our execution standard remains the same: flawless operational precision combined with an immaculate design aesthetic.
              </p>
            </div>

            {/* Matrix Feature Chips */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { name: "Premium Events", icon: Orbit },
                { name: "Flawless Execution", icon: Cpu },
                { name: "Coffee Trading", icon: Terminal },
                { name: "Global Reach", icon: ShieldAlert }
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-xl bg-brand-navy/2 border border-brand-gold/10 hover:border-brand-gold/40 hover:bg-white transition-all duration-300 group">
                  <item.icon className="w-4 h-4 text-brand-gold transition-transform group-hover:rotate-12" />
                  <span className="text-brand-navy font-semibold font-mono text-[10px] md:text-xs uppercase tracking-wider">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>


        {/* ==================== 3. ULTRA-KINETIC CYBER SPLITTER ==================== */}
        <div className="relative w-full my-32 md:my-48 py-16 md:py-24 border-y-2 border-brand-gold/30 bg-brand-navy text-white rounded-4xl overflow-hidden shadow-[0_35px_100px_rgba(10,25,47,0.4)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.06)_1px,transparent_1px)] bg-size-[16px_16px]" />
          
          {/* Active Vector Laser Trackers */}
          <motion.div 
            className="absolute top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand-gold to-transparent opacity-60"
            animate={{ left: ["0%", "100%", "0%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          {/* Precision Framing Corners */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-brand-gold" />
          <div className="absolute top-6 right-6 w-6 h-6 border-t border-r border-brand-gold" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-b border-l border-brand-gold" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-brand-gold" />

          {/* Kinetic Text Ticker (Looping Matrix Stream) */}
          <div className="relative w-full overflow-hidden py-4 border-y border-brand-gold/20 bg-brand-light/2 backdrop-blur-xs">
            <motion.div 
              className="flex whitespace-nowrap gap-20 text-4xl sm:text-6xl font-black font-sans uppercase tracking-[0.4em] text-transparent [-webkit-text-stroke:1px_rgba(197,160,89,0.25)]"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-20">
                  <span className="hover:text-white transition-colors duration-300">Ayana Core</span>
                  <span className="text-brand-gold [-webkit-text-stroke:0px] font-serif font-light lowercase italic">//</span>
                  <span className="text-white [-webkit-text-stroke:1px_white] opacity-90">Events Grid</span>
                  <span className="text-brand-gold text-lg animate-spin-slow">✦</span>
                  <span className="hover:text-brand-gold transition-colors duration-300">Next_Gen Architecture</span>
                  <span className="text-brand-gold text-lg">✦</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative text-center mt-12 px-6 max-w-3xl mx-auto z-20">
            <p className="font-mono text-[10px] tracking-[0.6em] text-brand-gold font-bold uppercase mb-4">
              [ SYSTEMS INTELLIGENCE INDEXED ]
            </p>
            <p className="text-base sm:text-xl font-light text-gray-300 leading-relaxed font-sans max-w-xl mx-auto">
              Merging predictive asset execution modules with absolute legacy refinement to synchronize East African business and event curation parameters into international frameworks.
            </p>
          </div>
        </div>


        {/* ==================== 4. EXECUTIVE COMMAND & LEADERSHIP ==================== */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center bg-white p-8 sm:p-12 md:p-20 rounded-[2.5rem] border border-brand-gold/20 shadow-[0_30px_70px_rgba(0,0,0,0.03)] relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Subtle container geometry */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-brand-gold/10 pointer-events-none" />
          
          {/* Founder Editorial Column */}
          <motion.div variants={cyberFadeInUp} className="lg:col-span-7 space-y-6 md:space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 px-3 py-1 rounded-sm text-brand-gold bg-brand-gold/3 font-mono text-[9px] tracking-[0.3em] uppercase">
              <span className="w-1 h-1 bg-brand-gold rounded-full" /> Executive Command Profile
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-brand-navy tracking-tight">
              Biruktawit Abebe
            </h2>
            
           <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Ayana General Trading was established under the leadership of Biruktawit Abebe. By seamlessly bridging high-end event organization with global trade logistics, she has created an unparalleled ecosystem where premium execution and absolute quality remain non-negotiable.
          </p>

            <div className="pt-8 border-t border-brand-gold/30 relative">
              <span className="font-serif text-5xl text-brand-gold/20 absolute -top-2 left-0 select-none">“</span>
              <p className="text-brand-gold italic font-serif text-xl md:text-2xl pl-6 relative z-10 leading-relaxed">
                We don't just manage transactions or curate events. We build trust and craft legacies, whether it's a world-class summit, family events or a premium coffee trade.
              </p>
            </div>
          </motion.div>

          {/* CEO High-Fidelity Hologram Frame */}
          <motion.div 
            variants={cyberFadeInUp}
            className="lg:col-span-5 flex flex-col items-center justify-center text-center group relative"
          >
            {/* Structural UI Frame wrapper behind the photo */}
            <div className="absolute -inset-4 border border-brand-gold/10 rounded-4xl pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-700" />
            
            <div className="relative aspect-4/5 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/30 mb-6 bg-brand-navy">
              <Image
                src="/ceo.jpeg" 
                alt="Biruktawit Abebe - CEO & Founder"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-102 filter contrast-[1.02] brightness-[0.98]"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              {/* Matrix scan-overlay effect */}
              <div className="absolute inset-0 bg-linear-to-b from-brand-navy/20 to-transparent opacity-60 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-brand-navy/5 group-hover:opacity-0 transition-opacity duration-500 z-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-brand-navy tracking-wide">Biruktawit Abebe</h3>
            <p className="text-xs font-mono text-brand-gold uppercase tracking-[0.4em] mt-1">
              [ FOUNDER ]
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}