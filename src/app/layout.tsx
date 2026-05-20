"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import LanguageSelector from "@/components/LanguageSelector"; // Adjust path based on your folder structure
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronUp, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat' 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Handle Scroll Visibility for "Go to Top" button
  useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About US', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Ayana General Trading | Premium Event Planning & Trading Ethiopia</title>
        <meta name="description" content="Ayana General Trading is Ethiopia's premier event planning and management agency. We specialize in luxury wedding coordination, corporate events, and international trading services in Addis Ababa." />
        <meta name="keywords" content="Ayana General Trading, Event Planning Ethiopia, Wedding Planner Addis Ababa, Corporate Events Ethiopia, Coffee Trading, Ayana Events, Ayana, event planer,ayana coffee, ethiopian coffee, coffee, event" />
        
        {/* Open Graph / Facebook SEO */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ayanageneraltrading.com.et/" />
        <meta property="og:title" content="Ayana General Trading | Premium Event Planning & Trading" />
        <meta property="og:description" content="Bespoke event organizing and premium general trading services in Addis Ababa, Ethiopia. Expert wedding and corporate planners." />
        <meta property="og:image" content="https://www.ayanageneraltrading.com.et/og-image.jpg" />

        {/* Twitter SEO */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.ayanageneraltrading.com.et/" />
        <meta property="twitter:title" content="Ayana General Trading | Event Planning & Trading" />
        <meta property="twitter:description" content="Luxury event planning and global trading excellence based in Addis Ababa, Ethiopia." />

        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} min-h-screen flex flex-col bg-brand-light font-sans antialiased overflow-x-hidden text-brand-navy`}>
        
        {/* HEADER */}
<div className="sticky top-0 z-50 w-full px-4 sm:px-6 md:px-8 pt-4 pointer-events-none">
  {/* Header: Elevated to a dense, milky "solid-glass" compound substrate */}
  <header className="max-w-7xl mx-auto bg-white/75 backdrop-blur-3xl border border-brand-gold/20 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.06),0_1px_2px_rgba(255,255,255,0.9)_inset,0_0_0_1px_rgba(197,160,89,0.03)] hover:border-brand-gold/35 hover:shadow-[0_16px_45px_rgba(197,160,89,0.1)] transition-all duration-500 pointer-events-auto relative overflow-visible">
    
    {/* Lowered horizontal padding on mobile (px-4) to maximize breathing room inside rounded container */}
    <div className="px-4 sm:px-6 md:px-8 py-3.5 flex justify-between items-center">
      
      {/* BRAND LOGO AREA */}
      <Link href="/" className="group flex items-center gap-1.5 md:gap-3 z-50 min-w-0">
        <span className="font-serif notranslate text-xl sm:text-2xl md:text-3xl font-light tracking-widest sm:tracking-[0.25em] text-brand-navy group-hover:text-brand-gold transition-colors duration-500 truncate">
          AYANA
        </span>
        
        {/* Futuristic Star Core Panel */}
        <div className="flex gap-0.5 items-center mb-1 shrink-0  px-2 py-0.5 ">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-brand-gold"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.15, 0.8] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: i === 1 ? '0.9rem' : '0.65rem' }}
            >
              ★
            </motion.span>
          ))}
        </div>
      </Link>

      {/* DESKTOP NAVIGATION */}
      <nav className="hidden notranslate md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-navy">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="relative group py-1 overflow-hidden">
            <span className="group-hover:text-brand-gold group-hover:tracking-[0.35em] transition-all duration-500 ease-out">{item.name}</span>
            <span className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-brand-gold opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 -translate-x-1/2 transition-all duration-500 ease-out"></span>
          </Link>
        ))}
      </nav>

      {/* ACTIONS CONTROLLER */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <LanguageSelector />

        {pathname !== "/contact" && (
          <Link href="/contact" className="hidden sm:block btn-gold py-2 px-5 text-[9px] uppercase tracking-[0.25em] whitespace-nowrap rounded-full shadow-[0_4px_15px_rgba(197,160,89,0.15)] hover:shadow-[0_6px_25px_rgba(197,160,89,0.3)] hover:-translate-y-0.5 transition-all duration-300">
            Book Consult
          </Link>
        )}
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-navy p-1.5 z-50 flex items-center justify-center rounded-full bg-brand-navy/5 hover:bg-brand-navy/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </div>

    {/* MOBILE DROPDOWN MENU - Strong Heavy Glass Capsule Sub-Panel */}
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="absolute top-[calc(100%+0.75rem)] left-0 w-full bg-white/90 backdrop-blur-2xl border border-brand-gold/20 flex flex-col p-5 sm:p-6 gap-3 md:hidden shadow-[0_25px_60px_rgba(0,0,0,0.12),0_1px_2px_rgba(255,255,255,0.8)_inset] rounded-3xl max-h-[calc(100vh-100px)] overflow-y-auto"
        >
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-xs sm:text-sm font-bold uppercase tracking-widest notranslate text-center py-3 rounded-xl hover:bg-brand-gold/10 hover:text-brand-gold text-brand-navy transition-all duration-300 border border-transparent hover:border-brand-gold/10"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </header>
</div>

        <main className="grow">
          {children}
        </main>

<footer className="relative bg-brand-navy text-gray-300 pt-24 pb-12 overflow-hidden border-t border-white/5">
  {/* Atmospheric Radial Glow - Futuristic depth */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.08),transparent_70%)] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
      
      {/* Brand Column */}
      <div className="md:col-span-5 space-y-8">
        <div className="flex items-center gap-4">
          <span className="font-serif text-4xl md:text-5xl font-light tracking-[0.2em] text-white notranslate">AYANA</span>
          <div className="h-px w-12 bg-brand-gold/50"></div>
        </div>
        <p className="text-gray-400 font-light leading-relaxed max-w-sm tracking-wide">
          Curation of bespoke events and premium global trading. Where artistic vision meets the precision of logistical excellence.
        </p>
      </div>

      {/* Links & Inquiries - Modernized Layout */}
      <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
        
        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="font-sans font-bold text-white text-[9px] uppercase tracking-[0.3em]">Navigation</h4>
          <ul className="space-y-4">
            {['Home', 'Our Legacy', 'Contact Us'].map((link) => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} 
                      className="group flex items-center gap-3 text-sm hover:text-brand-gold transition-all duration-300 notranslate">
                  <span className="w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Data - Capsule Style */}
        <div className="space-y-6">
          <h4 className="font-sans font-bold text-white text-[9px] uppercase tracking-[0.3em]">Global Contact</h4>
          <div className="space-y-5">
            <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-gold/30 transition-all duration-500">
              <span className="text-[8px] text-brand-gold block mb-1 uppercase tracking-widest">Email Channels</span>
              <a href="mailto:Ayanaevents16@gmail.com" className="block hover:text-white transition-colors text-sm notranslate">Ayanaevents16@gmail.com</a>
              <a href="mailto:Ayanageneraltrading@gmail.com" className="block hover:text-white transition-colors text-sm notranslate">Ayanageneraltrading@gmail.com</a>
            </div>
            <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-gold/30 transition-all duration-500">
              <span className="text-[8px] text-brand-gold block mb-1 uppercase tracking-widest">Telecommunications</span>
              <a href="tel:+251911108922" className="block hover:text-white transition-colors text-sm notranslate">+251 911 108 922</a>
              <a href="tel:+251955388008" className="block hover:text-white transition-colors text-sm notranslate">+251 955 388 008</a>
            </div>
            
            <div className="p-4 rounded-2xl bg-white/2 border border-white/5 hover:border-brand-gold/30 transition-all duration-500">
              <span className="text-[8px] text-brand-gold block mb-1 uppercase tracking-widest">Headquarters</span>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom Bar */}
    <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
      <div className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
        © {new Date().getFullYear()} Ayana General Trading. All Rights Reserved.
      </div>
      
      <a 
        href="https://www.facebook.com/share/1AHbgG7DvU/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-[9px] uppercase tracking-[0.25em] text-white hover:text-brand-gold transition-colors px-6 py-2 rounded-full border border-white/10 hover:border-brand-gold/30"
      >
        Connect via Facebook
      </a>
    </div>
  </div>
</footer>

        {/* GO TO TOP BUTTON */}
        <AnimatePresence>
          {showScroll && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              // Adjusted positioning: closer to edges on mobile (bottom-4 right-4), wider on desktop (md:bottom-8 md:right-8)
              className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col items-center gap-1 group"
            >
              <motion.span
                animate={{ 
                  y: [0, -8, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                  opacity: { repeat: Infinity, duration: 2 },
                }}
                whileHover={{
                  y: -15,
                  rotate: [0, -15, 15, -15, 0],
                  transition: { 
                    rotate: { duration: 0.5, repeat: Infinity, repeatType: "mirror" },
                    opacity: { duration: 0.5, repeat: Infinity }
                  }
                }}
                // Adjusted star size: smaller on mobile
                className="text-brand-gold text-sm md:text-base group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]"
              >
                ★
              </motion.span>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                // Adjusted padding: p-2 on mobile, p-3 on desktop
                className="bg-brand-gold text-brand-navy p-2 md:p-3 rounded-full shadow-2xl border border-brand-gold hover:bg-transparent hover:text-brand-gold transition-colors duration-300 relative"
                aria-label="Scroll to top"
              >
                {/* Removed size={24} to allow responsive Tailwind sizing via w-* and h-* */}
                <ChevronUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </body>
    </html>
  );
}

function StarIcon() {
  return (
    <motion.span 
      animate={{ opacity: [0.5, 1, 0.5] }} 
      transition={{ duration: 2, repeat: Infinity }}
      className="text-brand-gold text-xl"
    >
      ★
    </motion.span>
  );
}