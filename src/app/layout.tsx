"use client";

import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Ayana General Trading | Premium Excellence</title>
        <meta name="description" content="Exclusive event organizing and general trading services." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} min-h-screen flex flex-col bg-brand-light font-sans antialiased text-brand-navy`}>
        
        {/* HEADER */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-gold/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            
            {/* BRAND LOGO */}
            <Link href="/" className="group flex items-center gap-2 md:gap-3 z-50">
              <span className="font-serif text-2xl md:text-3xl font-light tracking-[0.2em] transition-colors group-hover:text-brand-gold">
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

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em]">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="relative group py-1 overflow-hidden">
                  <span className="group-hover:text-brand-gold transition-colors duration-300">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-brand-gold translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                </Link>
              ))}
            </nav>

            {/* MOBILE TOGGLE & CTA */}
            <div className="flex items-center gap-4">
              <Link href="/contact" className="hidden sm:block btn-gold py-2! px-5! text-[9px] uppercase tracking-[0.2em]">
                Book Consult
              </Link>
              
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-brand-navy p-1 z-50"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* MOBILE OVERLAY */}
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
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-gold text-center py-3! text-[11px] uppercase tracking-widest"
                >
                  Request Consultation
                </Link>
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
                  <span className="font-serif text-3xl md:text-4xl font-light tracking-widest text-brand-gold">AYANA</span>
                  <StarIcon />
                </div>
                <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-sm">
                  Curation of bespoke events and premium global trading, blending artistic vision with logistical perfection.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-6">Explore</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Legacy</Link></li>
                  <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-sans font-bold text-white text-[10px] uppercase tracking-[0.3em] mb-6">Inquiries</h4>
                <div className="space-y-4 text-sm text-gray-400">
                  <p className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase">Email</span>
                    Ayanageneraltrading@gmail.com
                  </p>
                  <p className="flex flex-col">
                    <span className="text-[9px] text-brand-gold mb-1 uppercase">Headquarters</span>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                © {new Date().getFullYear()} Ayana General Trading.
              </div>
              
              <div className="flex gap-6 md:gap-8">
                {['Instagram', 'LinkedIn'].map((social) => (
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