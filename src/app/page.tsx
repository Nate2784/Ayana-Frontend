"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { MoveRight, Star, Cake, Briefcase, Music, Coffee, Ribbon } from "lucide-react"; 

// Animation presets
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    } 
  },
};
      
const services = [
  {
    title: "Exquisite Weddings",
    icon: Ribbon,
    image: "/wedding-service.jpg",
    description: "From intimate garden ceremonies to grand ballroom galas, we curate weddings that are as unique as your love story. Our meticulous planning ensures every petal and playlist is perfectly placed.",
  },
  {
    title: "Birthdays",
    icon: Cake,
    image: "/birthday-service.jpg",
    description: "Milestones deserve to be celebrated in style. We handle everything from themed decor to gourmet catering, letting you focus on making memories with your loved ones.",
  },
  {
    title: "Corporate Meetings",
    icon: Briefcase,
    image: "/corporate-service.jpg",
    description: "Impress your clients and inspire your team. We provide seamless professional execution for high-stakes meetings, product launches, and executive corporate gatherings.",
  },
  {
    title: "Live Concerts",
    icon: Music,
    image: "/concert-service.jpg",
    description: "High-energy production meets flawless logistics. We manage stage design, sound engineering, and crowd flow to create unforgettable auditory and visual experiences.",
  },
];

export default function Home() {
  return (
    // ADDED: overflow-x-hidden to prevent the horizontal white space during x-axis animations
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      
{/* 1. THE HERO EXPERIENCE */}
      <section className="relative w-full h-screen flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Modern Depth Enhancements: Ambient Subtle Glow & Tech Grid Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)] z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] z-1 pointer-events-none" />
        
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image 
            src="/event-hero.jpg" 
            alt="Luxury Event Backdrop"
            fill
            sizes="100vw"
            className="object-cover opacity-35 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-navy/70 via-transparent to-brand-navy" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 text-brand-gold tracking-[0.35em] uppercase text-xs font-semibold mb-8 px-4 py-2 rounded-full border border-brand-gold/20 bg-brand-navy/40 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            A Legacy of Excellence
          </motion.span>

          <motion.h1 
            className="font-serif text-5xl md:text-9xl text-white mb-8 leading-[1.1] tracking-tight"
            variants={fadeInUp}
          >
            Crafting <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">Atmospheres</span> <br /> 
            <span className="text-transparent bg-clip-text bg-shiny-gold drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]">Beyond Imagination</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed tracking-wide opacity-90"
            variants={fadeInUp}
          >
            The finest aesthetic details, we orchestrate events that don’t just happen—they resonate.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto btn-gold group py-5 px-12 rounded-full overflow-hidden relative shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-3 text-sm tracking-widest uppercase font-semibold">
                Start Your Journey <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition-all text-sm uppercase tracking-widest font-medium relative py-2 group"
            >
              Learn About Us
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        </motion.div>

        {/* MODERN SCROLL INDICATOR */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 mb-1">Scroll</span>
          <motion.div
            className="p-1 rounded-full border border-brand-gold/20 backdrop-blur-xs bg-brand-navy/20"
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-brand-gold"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. COMPANY OVERVIEW: AYANA GENERAL TRADING */}
      <section className="w-full py-32 px-6 bg-white relative overflow-hidden">
        {/* Tech Vibe Subtle Structural Enhancements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />
        
        <motion.div 
          className="max-w-7xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl mb-6 font-serif text-brand-navy tracking-tight">Ayana General Trading</h2>
            {/* Sleek, ultra-thin high-end luxury divider */}
            <div className="h-[2px] w-20 bg-brand-gold mx-auto mb-12 relative">
              <span className="absolute inset-0 w-2 h-2 bg-brand-gold rounded-full -top-[3px] left-1/2 -translate-x-1/2 animate-pulse" />
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-24 tracking-wide">
              At Ayana General Trading, we operate on two distinct pillars of excellence. We are renowned masters in <strong>Premium Event Organization</strong>, creating unforgettable experiences. Looking to the future, we are rapidly expanding into the global market with our upcoming <strong>Coffee Export & Import</strong> division.
            </p>
          </motion.div>

          {/* Interactive Dual-Core Pillars Grid with Border-Integrated Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Pillar 1: Event Organization */}
            <motion.div 
              variants={fadeInUp} 
              className="group p-10 pt-14 border border-gray-100 rounded-3xl bg-brand-light relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:border-brand-gold/20 hover:-translate-y-1"
            >
              {/* FIXED: Isolated clipping container for the laser line, preventing spillover */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              {/* Integrated Border Icon Node (Sits comfortably outside the clip container) */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl border border-gray-100 shadow-xs flex items-center justify-center transition-all duration-500 group-hover:border-brand-gold/40 group-hover:shadow-md group-hover:scale-110 z-10">
                <div className="absolute inset-[3px] rounded-lg bg-brand-light flex items-center justify-center">
                  <Star className="w-5 h-5 text-brand-gold fill-brand-gold/10 transition-transform duration-500 group-hover:rotate-12" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-brand-navy mb-3 font-semibold tracking-tight">Event Organization</h3>
                <p className="text-gray-500 font-light text-base max-w-sm mx-auto leading-relaxed">Flawless execution of luxury events and gatherings.</p>
              </div>
            </motion.div>

            {/* Pillar 2: Coffee Trading */}
            <motion.div 
              variants={fadeInUp} 
              className="group p-10 pt-14 border border-gray-100 rounded-3xl bg-brand-light relative transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:border-brand-gold/20 hover:-translate-y-1"
            >
              {/* FIXED: Isolated clipping container for the laser line, preventing spillover */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>

              {/* Integrated Border Icon Node (Sits comfortably outside the clip container) */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-xl border border-gray-100 shadow-xs flex items-center justify-center transition-all duration-500 group-hover:border-brand-gold/40 group-hover:shadow-md group-hover:scale-110 z-10">
                <div className="absolute inset-[3px] rounded-lg bg-brand-light flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-brand-gold transition-transform duration-500 group-hover:-translate-y-[1px]" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-brand-navy mb-3 font-semibold tracking-tight">Coffee Trading</h3>
                <p className="text-gray-500 font-light text-base max-w-sm mx-auto leading-relaxed">Upcoming premium coffee import and export services.</p>
              </div>
            </motion.div>
            
          </div>
        </motion.div>
      </section>

      {/* 3. OUR SERVICES (Futuristic Luxury Grid) */}
      <section className="w-full py-36 px-6 bg-brand-light relative overflow-hidden">
        {/* Futuristic Spatial Depth Layering */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header Block with Ultra-Modern Typography Alignment */}
          <motion.div className="text-center mb-24 relative" variants={fadeInUp}>
            <span className="inline-block text-brand-gold tracking-[0.4em] uppercase text-[10px] font-bold mb-4 px-3 py-1 bg-brand-navy/5 rounded-md border border-brand-gold/10">
              Capabilities Matrix
            </span>
            <h2 className="text-4xl md:text-6xl mb-6 text-brand-navy font-serif tracking-tight font-medium">
              Our Services
            </h2>
            
            {/* Minimalist Neo-Luxury Structural Line */}
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mx-auto relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-navy border border-brand-gold" />
            </div>

            <p className="mt-8 text-gray-500 font-light max-w-2xl mx-auto text-lg md:text-xl leading-relaxed tracking-wide">
              Specializing in high-end event curation, elite strategic execution, and precision spatial management.
            </p>
          </motion.div>

          {/* Interactive Responsive Grid Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                className="group bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-100/80 flex flex-col items-start text-left transition-all duration-500 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(212,175,55,0.08)] hover:border-brand-gold/30 hover:-translate-y-2"
                variants={fadeInUp}
              >
                {/* Micro-glow localized radar dot (Sits in the upper-right corner) */}
                <span className="absolute top-6 right-8 w-2 h-2 rounded-full bg-gray-200 transition-all duration-500 group-hover:bg-brand-gold group-hover:animate-pulse" />

                {/* Cyber-Luxury Geometric Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-light/10 to-brand-gold/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)] rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-125 pointer-events-none" />

                {/* Structural Border Laser Trace Container */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none z-0">
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000 ease-in-out" />
                </div>

                {/* FIXED: Absolute Spatial Centering Hub */}
                <div className="w-16 h-16 rounded-2xl bg-brand-navy mb-10 relative overflow-hidden shadow-lg border border-brand-navy transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_10px_25px_rgba(10,25,47,0.3)] z-10">
                  {/* Internal ambient sweep inside the icon box */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  
                  {/* Bulletproof Absolute Positioning Core for SVGs */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-brand-gold block" />
                  </div>
                </div>

                {/* Text Content Block */}
                <div className="relative z-10 mt-auto">
                  <span className="text-[11px] font-mono tracking-widest text-brand-gold/60 uppercase block mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    // Service 0{i + 1}
                  </span>
                  
                  <h3 className="text-2xl mb-4 font-serif text-brand-navy leading-tight tracking-tight transition-colors duration-300 group-hover:text-black">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 group-hover:text-gray-600 leading-relaxed font-light text-sm line-clamp-4 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    {/* 4. DEDICATED SERVICE SECTIONS (Bespoke Editorial Gallery) */}
      <section className="w-full bg-white relative overflow-hidden">
        {/* Soft, Warm Ambient Lighting Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.02)_0%,transparent_60%)] pointer-events-none" />

        {services.map((service, i) => (
          <div 
            key={i} 
            className={`w-full py-36 px-6 relative ${
              i % 2 !== 0 ? 'bg-brand-light/30 border-y border-gray-100/60' : 'bg-white'
            }`}
          >
            {/* Elegant Floating Background Light */}
            <div className={`absolute top-1/2 ${
              i % 2 === 0 ? 'right-10 translate-x-1/4' : 'left-10 -translate-x-1/4'
            } -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,175,55,0.015)_0%,transparent_75%)] pointer-events-none`} />

            <div className={`max-w-7xl mx-auto flex flex-col ${
              i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center gap-20 lg:gap-32 relative z-10`}>
              
              {/* Media Exhibition Matrix: Editorial Matte Framing */}
              <motion.div 
                className="w-full lg:w-1/2 relative group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                
                transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Prestige Soft-Focus Aura */}
                <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
                
                {/* Main Image Frame with Luxury Matte Shadow */}
                <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden border border-gray-100 bg-brand-light shadow-[0_30px_70px_rgba(163,141,94,0.05)] transition-all duration-700 group-hover:shadow-[0_40px_90px_rgba(10,25,47,0.08)]">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    
                    className="object-cover scale-100 group-hover:scale-104 transition-transform duration-1200 ease-out"
                  />
                  {/* Silk Velvet Dark Overlay Tint */}
                  <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply opacity-40 group-hover:opacity-10 transition-opacity duration-700 z-10" />
                </div>

                {/* Decorative Asymmetric Fine-Art Corner Label */}
                <div className={`absolute -bottom-4 ${
                  i % 2 === 0 ? 'right-6' : 'left-6'
                } hidden sm:block font-serif italic text-xs tracking-widest text-brand-gold/60 bg-white px-4 py-2 border border-gray-100 rounded-md shadow-xs transition-transform duration-700 group-hover:translate-y-[-2px]`}>
                  Ayana Collection
                </div>
              </motion.div>

              {/* Editorial Information Column */}
              <motion.div 
                className="w-full lg:w-1/2 space-y-8 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                
                transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Heritage Nomenclature Badge */}
                <span className="text-[11px] font-sans font-semibold tracking-[0.35em] text-brand-gold uppercase bg-brand-gold/5 px-3 py-1.5 rounded-sm border border-brand-gold/10">
                  Pillar Suite 0{i + 1}
                </span>

                {/* Signature Ivory & Gold Crest Frame for Perfect Centering */}
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center relative shadow-xs border border-gray-100/80 transition-all duration-700 hover:scale-105 z-10">
                  {/* Absolute concentric gold filigree accent rim */}
                  <div className="absolute inset-0.75 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-light/50">
                    {/* Centered SVG Core */}
                    <service.icon className="w-5 h-5 text-brand-gold relative z-10 block m-0 p-0 transform-gpu" />
                  </div>
                </div>

                {/* Luxury Typography Composition */}
                <div className="space-y-4 w-full">
                  <h3 className="text-4xl md:text-5xl font-serif text-brand-navy tracking-tight font-light leading-tight">
                    {service.title}
                  </h3>
                  {/* Delicate Gold Thread Divider */}
                  <div className="h-px w-24 bg-linear-to-r from-brand-gold via-brand-gold/40 to-transparent" />
                </div>

                {/* High-End Editorial Copy */}
                <p className="text-gray-500 font-serif italic text-lg leading-relaxed max-w-xl font-light">
                  {service.description}
                </p>

                {/* Bespoke Couture Private Booking Anchor */}
                <Link 
                  href="/contact" 
                  className="group/link inline-flex items-center gap-4 py-2 text-brand-gold text-sm tracking-[0.25em] uppercase font-sans font-semibold relative transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Inquire Now
                  </span>
                  
                  <MoveRight className="w-5 h-5 text-brand-gold transition-transform duration-500 ease-out transform group-hover/link:translate-x-2" />
                  
                  {/* Luxury Gold Micro-Thread Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold/30" />
                  <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 ease-out" />
                </Link>
              </motion.div>

            </div>
          </div>
        ))}
      </section>

     {/* 5. UPCOMING SERVICES: COFFEE (Midnight Luxury Exhibition) */}
      <section className="w-full py-36 px-6 bg-brand-navy text-white overflow-hidden relative rounded-t-[3rem] md:rounded-t-[5rem]">
        {/* Deep Atmospheric Lighting Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-brand-gold/2 rounded-full filter blur-[120px] pointer-events-none" />
        
        {/* Micro-Point Stardust Luxury Mask */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.025)_1px,transparent_1px)] bg-size-[32px_32px] opacity-60 pointer-events-none" />

        <motion.div 
          className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Narrative Content Block */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-8 text-left">
            
            {/* Elegant Subtitle with Perfectly Centered Icon Node */}
            <div className="inline-flex items-center gap-3 bg-white/4 backdrop-blur-md px-4 py-2 rounded-full border border-white/6 shadow-sm">
              <span className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center relative transform-gpu">
                <Coffee className="w-3 h-3 text-brand-gold block m-0 p-0 transform-gpu" />
              </span>
              <span className="text-brand-gold font-sans font-semibold uppercase tracking-[0.25em] text-[10px]">
                Upcoming Global Endeavor
              </span>
            </div>

            {/* Typography Masterpiece */}
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.15] tracking-tight text-white font-light">
              Premium Coffee <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-gold via-[#f3e5ab] to-brand-gold font-normal italic">
                Import & Export
              </span>
            </h2>

            {/* Ultra-thin design architecture separation rule */}
            <div className="h-px w-28 bg-linear-to-r from-brand-gold/60 to-transparent" />
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-serif italic font-light max-w-xl">
              Ayana General Trading is proud to announce our upcoming expansion into the global coffee market. We are establishing networks to source, export, and import the finest coffee beans, bringing world-class quality from farm to cup.
            </p>

            {/* Minimalist Premium Status Indicator */}
            <div className="flex items-center gap-6 pt-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
              </div>
              <span className="text-sm font-sans tracking-[0.3em] uppercase text-brand-gold font-semibold">
                // Launching Soon
              </span>
            </div>
          </motion.div>

          {/* Exhibition Media Canvas */}
          <motion.div 
            variants={fadeInUp} 
            className="lg:col-span-5 w-full relative group justify-self-center lg:justify-self-end"
          >
            {/* Prestige Ambient Halo Backing */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl pointer-events-none" />
            
            {/* Image Outer Viewport Frame */}
            <div className="relative aspect-square md:aspect-4/5 w-full max-w-md mx-auto rounded-[2.25rem] overflow-hidden border border-white/10 bg-brand-light shadow-[0_40px_90px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:shadow-[0_50px_100px_rgba(212,175,55,0.08)] group-hover:border-brand-gold/30">
              <Image 
                src="/coffee.jpg" 
                alt="Premium Coffee Beans"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-1500 cubic-bezier(0.25, 1, 0.5, 1)"
              />
              {/* Premium Smoked Velvet Shadow Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-brand-navy/20 opacity-50 group-hover:opacity-10 transition-opacity duration-700 z-10" />
              
              {/* Soft Golden Border Lining Accent inside container */}
              <div className="absolute inset-0 border border-white/10 rounded-[2.25rem] z-20 pointer-events-none" />
            </div>

          
          </motion.div>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION SECTION (Bespoke Luxury Finale) */}
      <section className="w-full py-40 bg-white text-center px-6 relative overflow-hidden mb-24 rounded-b-[3rem] md:rounded-b-[5rem]">
        {/* Soft Luxury Cream Backlight Pool */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />

        <motion.div 
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Subtle Accent Crest Flag */}
          <motion.span 
            variants={fadeInUp}
            className="text-[11px] font-sans font-semibold tracking-[0.4em] text-brand-gold uppercase mb-6"
          >
            The Final Ingress
          </motion.span>

          {/* Majestic High-Fashion Typography Composition */}
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.1] tracking-tight text-brand-navy font-light"
          >
            Your Next Vision <br /> 
            <span className="text-brand-gold font-serif italic font-normal block mt-2">Is Ready</span>
          </motion.h2>

          {/* Delicate Minimal Separation Line */}
          <motion.div 
            variants={fadeInUp}
            className="h-px w-20 bg-linear-to-r from-transparent via-brand-gold/40 to-transparent mb-10"
          />
          
          {/* Editorial Body Text */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-500 mb-14 font-serif italic font-light max-w-2xl leading-relaxed"
          >
            Connect with our curators to orchestrate your next high-end milestone or structural corporate inquiry.
          </motion.p>

          {/* Minimalist Premium Luxury Anchor Link */}
          <motion.div variants={fadeInUp}>
            <Link 
              href="/contact" 
              className="group/link inline-flex items-center gap-5 py-3 px-2 text-brand-gold text-base tracking-[0.3em] uppercase font-sans font-bold relative overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Request Private Consultation</span>
              <MoveRight className="w-5 h-5 text-brand-gold transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1) transform group-hover/link:translate-x-2.5" />
              
              {/* Luxury Gold Micro-Thread Animated Underline */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold/20" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold origin-left scale-x-0 group-hover/link:scale-x-100 transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)" />
            </Link>
          </motion.div>

          {/* Minimalist Fine-Art Footer Accent */}
          <motion.div 
            variants={fadeInUp}
            className="mt-24 flex items-center gap-6 opacity-40"
          >
            <div className="h-px w-16 bg-linear-to-r from-transparent to-brand-gold/40"></div>
            <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-brand-gold font-medium">Ayana</span>
            <div className="h-px w-16 bg-linear-to-l from-transparent to-brand-gold/40"></div>
          </motion.div>
        </motion.div>
      </section>
           {/* 7. PORTFOLIO SHOWCASE */}
      {/* <section className="w-full py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl text-brand-navy max-w-lg mb-6 md:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Excellence<span className="text-brand-gold font-serif text-5xl">.</span> Perfected.
            </motion.h2>
            
            <Link 
              href="/gallery" 
              className="text-brand-gold font-semibold uppercase tracking-widest text-xs flex items-center hover:text-brand-navy transition-all group"
            >
              Explore All Events <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { src: "/gala.jpg", title: "Global Innovation Summit", date: "Dubai 2024" },
              { src: "/corporate.jpg", title: "Luxury Product Launch", date: "New York 2023" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="relative aspect-16/10 rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-brand-gold text-xs uppercase tracking-widest mb-1">{item.date}</span>
                  <h4 className="text-3xl text-white font-serif">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}