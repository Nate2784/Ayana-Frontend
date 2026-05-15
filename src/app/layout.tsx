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
      <body className={`${montserrat.variable} ${cormorant.variable} min-h-screen flex flex-col bg-brand-light font-sans antialiased text-brand-navy`}>
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            
            <Link href="/" className="group flex items-center gap-2 md:gap-3 z-50">
              <span className="font-serif  notranslate text-2xl md:text-3xl font-light tracking-[0.2em] transition-colors group-hover:text-brand-gold">
                AYANA
              </span>
              <div className="flex gap-0.5 items-center mb-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="text-brand-gold"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
                    style={{ fontSize: i === 1 ? '1rem' : '0.6rem' }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </Link>

            <nav className="hidden notranslate md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em]">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="relative group py-1 overflow-hidden">
                  <span className="group-hover:text-brand-gold transition-colors duration-300">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <LanguageSelector/>
  
              {pathname !== "/contact" && (
                <Link href="/contact" className="hidden sm:block btn-gold py-2! px-5! text-[9px] uppercase tracking-[0.2em]">
                  Book Consult
                </Link>
              )}
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-brand-navy p-1 z-50"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 w-full bg-white border-b border-brand-gold/10 flex flex-col p-8 gap-6 md:hidden shadow-xl"
              >
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold uppercase tracking-widest text-center py-2 border-b border-gray-50 last:border-0"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="grow">
          {children}
        </main>

       {/* FOOTER */}
        <footer className="bg-brand-navy text-brand-light pt-16 md:pt-24 pb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold to-transparent opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-serif text-3xl md:text-4xl font-light tracking-widest text-brand-gold notranslate">AYANA</span>
                  <StarIcon />
                </div>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-sm">
                  Curation of bespoke events and premium global trading, blending artistic vision with logistical perfection.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-6">Explore</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-brand-gold transition-colors notranslate">Home</Link></li>
                  <li><Link href="/about" className="hover:text-brand-gold transition-colors notranslate">Our Legacy</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-gold transition-colors notranslate">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-6">Inquiries</h4>
                <div className="space-y-5 text-sm text-gray-400">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase">Email</span>
                    <a href="mailto:Ayanaevents16@gmail.com" className="hover:text-brand-gold transition-colors truncate notranslate">Ayanaevents16@gmail.com</a>
                    <a href="mailto:Ayanageneraltrading@gmail.com" className="hover:text-brand-gold transition-colors truncate notranslate">Ayanageneraltrading@gmail.com</a>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase">Phone</span>
                    <a href="tel:+251911108922" className="hover:text-brand-gold transition-colors notranslate">+251 911 108 922</a>
                    <a href="tel:+251955388008" className="hover:text-brand-gold transition-colors notranslate">+251 955 388 008</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase">Headquarters</span>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                © {new Date().getFullYear()} Ayana General Trading.
              </div>
              
              <div className="flex gap-6 md:gap-8">
                <a 
                  href="https://www.facebook.com/share/1AHbgG7DvU/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-brand-gold transition-colors"
                >
                  Facebook
                </a>
              </div>
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
              className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-1 group"
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
                className="text-brand-gold text-base group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.8)]"
              >
                ★
              </motion.span>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="bg-brand-gold text-brand-navy p-3 rounded-full shadow-2xl border border-brand-gold hover:bg-transparent hover:text-brand-gold transition-colors duration-300 relative"
                aria-label="Scroll to top"
              >
                <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
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