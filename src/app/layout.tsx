"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import "./globals.css";

// Elegant Serif for Headings
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant' 
});

// Clean Geometric Sans for Body
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat' 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Ayana General Trading | Premium Event Excellence</title>
        <meta name="description" content="Exclusive event organizing and general trading services." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} min-h-screen flex flex-col bg-brand-light font-sans antialiased text-brand-navy`}>
        
        {/* HEADER: GLASSMORPHISM + ANIMATED LOGO */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            
            {/* BRAND LOGO AREA */}
            <Link href="/" className="group flex items-center gap-3">
              <span className="font-serif text-3xl font-light tracking-[0.2em] transition-colors group-hover:text-brand-gold">
                AYANA
              </span>
              
              {/* Star Cluster Animation */}
              <div className="relative flex gap-1 items-center mb-2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="text-brand-gold"
                    initial={{ opacity: 0.3, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.3, 1, 0.3], 
                      scale: [0.8, 1.2, 0.8],
                      rotate: [0, 10, -10, 0] 
                    }}
                    transition={{ 
                      duration: 3, 
                      delay: i * 0.4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ fontSize: i === 1 ? '1.2rem' : '0.7rem' }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </Link>

            {/* NAVIGATION LINKS */}
            <nav className="hidden md:flex gap-12 text-[11px] font-bold uppercase tracking-[0.25em]">
              {['Home', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="relative group py-1 overflow-hidden"
                >
                  <span className="group-hover:text-brand-gold transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </Link>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/contact" className="btn-gold !py-2.5 !px-7 text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-brand-gold/10">
                Book Consult
              </Link>
            </motion.div>
          </div>
        </header>

        <main className="grow">
          {children}
        </main>

        {/* FOOTER: MODERN & ENGAGING */}
        <footer className="bg-brand-navy text-brand-light pt-24 pb-12 relative overflow-hidden">
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-shiny-gold opacity-50"></div>
          
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-2">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-serif text-4xl font-light tracking-widest text-brand-gold">AYANA</span>
                  <motion.span 
                    animate={{ opacity: [0.5, 1, 0.5] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-brand-gold text-xl"
                  >
                    ★
                  </motion.span>
                </div>
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
                  We specialize in the curation of bespoke events, blending artistic vision with logistical perfection.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-8">Quick Navigation</h4>
                <ul className="space-y-4 text-sm font-medium text-gray-400">
                  <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Heritage</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Global Offices</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-8">Connect</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase tracking-tighter">Inquiries</span>
                    contact@ayanatrading.com
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase tracking-tighter">Location</span>
                    Addis Ababa, Ethiopia
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                © {new Date().getFullYear()} Ayana General Trading. All Rights Reserved.
              </div>
              
              <div className="flex gap-8">
                {['Instagram', 'LinkedIn', 'Pinterest'].map((social) => (
                  <a key={social} href="#" className="text-[10px] uppercase tracking-[0.2em] text-gray-500 hover:text-brand-gold transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}