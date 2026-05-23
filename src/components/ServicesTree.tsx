// components/ServicesTree.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, LucideIcon } from "lucide-react";

// --- INTERFACES & TYPES ---
interface ServicePosition {
  top: string;
  left: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  position: ServicePosition;
  // image property removed as requested
}

interface ServicesTreeProps {
  services: ServiceItem[];
}

export default function ServicesTree({ services }: ServicesTreeProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedService]);

  return (
    <section className="w-full py-20 md:py-36 px-4 md:px-6 bg-brand-light relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Ambience Layouts */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-80 md:w-200 md:h-200 bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.015)_1px,transparent_1px)] bg-size-[24px_24px] opacity-70 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center">
        {/* Architectural Section Header */}
        <motion.div 
          className="text-center mb-4 md:mb-8 relative w-full px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-gold tracking-[0.4em] uppercase text-[9px] md:text-[10px] font-bold mb-4 px-3 py-1 bg-brand-navy/5 rounded-md border border-brand-gold/10 shadow-[0_0_15px_rgba(200,161,83,0.1)]">
            Capabilities Matrix
          </span>
          <h2 className="text-3xl md:text-6xl mb-4 md:mb-6 text-brand-navy font-serif tracking-tight font-medium">
            Our Services
          </h2>
          <div className="h-px w-24 md:w-32 bg-linear-to-r from-transparent via-brand-gold/50 to-transparent mx-auto relative">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-navy border border-brand-gold" />
          </div>
          <p className="mt-6 md:mt-8 text-gray-500 font-light max-w-2xl mx-auto text-base md:text-xl leading-relaxed tracking-wide">
            Select a node below to explore our high-end event curation, elite strategic execution, and precision spatial management.
          </p>
        </motion.div>

        {/* TREE CANVAS WRAPPER */}
        <div className="relative w-full max-w-72.5 sm:max-w-112.5 md:max-w-3xl aspect-4/3 transition-all duration-500 mt-2 md:mt-6 origin-bottom scale-105 sm:scale-100">
          <svg 
            viewBox="0 0 800 600" 
            className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(200,161,83,0.2)]"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#122244" stopOpacity="0.95" />
                <stop offset="40%" stopColor="#C8A153" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FBF5B7" stopOpacity="0.95" />
              </linearGradient>

              <filter id="potShadow" x="-30%" y="-30%" width="160%" height="170%">
                <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#0a1224" floodOpacity="0.4" />
              </filter>
            </defs>

            <motion.path
              d="M400,530 L400,200 C400,160 250,150 200,120 M400,200 C400,160 550,150 600,90 M400,380 C400,290 200,330 120,250 M400,380 C400,290 600,330 680,220"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />

            <g fill="#122244" filter="url(#potShadow)">
              <motion.path 
                d="M 330,490 L 470,490 L 445,600 L 355,600 Z" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <motion.rect 
                x="320" y="478" width="160" height="12" rx="3"
                initial={{ opacity: 0, scaleX: 0.8 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                style={{ transformOrigin: "center" }}
              />
            </g>
          </svg>

          {services.map((service, i) => {
            const IconComponent = service.icon;
            const isSelected = selectedService === i;
            return (
              <motion.button
                key={i}
                className={`absolute w-10 h-10 md:w-16 md:h-16 -ml-5 -mt-5 md:-ml-8 md:-mt-8 rounded-full bg-linear-to-tr from-brand-gold to-[#FBF5B7] shadow-[0_0_20px_rgba(200,161,83,0.5)] md:shadow-[0_0_30px_rgba(200,161,83,0.6)] flex items-center justify-center group z-20 border-2 border-white/40 cursor-pointer transition-all ${
                  isSelected ? "scale-110 ring-4 ring-brand-navy/20" : ""
                }`}
                style={{ top: service.position.top, left: service.position.left }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 + (i * 0.15), type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedService(i)}
              >
                <span className="absolute inset-0 rounded-full border-2 border-brand-gold animate-ping opacity-30" />
                <IconComponent className="w-4 h-4 md:w-7 md:h-7 text-brand-navy z-10 transition-transform group-hover:rotate-12" />
                <span className="absolute -bottom-8 whitespace-nowrap text-[10px] md:text-sm font-semibold text-brand-navy bg-white/90 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none">
                  {service.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-brand-navy/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />

            <motion.div
              className="bg-white rounded-3xl shadow-[0_30px_70px_rgba(18,34,68,0.25)] border border-white/20 w-full max-w-lg overflow-hidden relative z-10 flex flex-col"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-navy hover:bg-gray-200 transition-colors z-30 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 md:p-10 pt-12 md:pt-14 relative bg-white flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-6 border border-brand-gold/30">
                  {React.createElement(services[selectedService].icon, {
                    className: "w-7 h-7 text-brand-gold",
                  })}
                </div>

                <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase block mb-2">
                  // Capability Focus / 0{selectedService + 1}
                </span>

                <h3 className="text-2xl md:text-4xl mb-4 font-serif text-brand-navy leading-tight tracking-tight">
                  {services[selectedService].title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base mb-8">
                  {services[selectedService].description}
                </p>

                <div className="w-full flex justify-between items-center border-t border-gray-100 pt-5">
                  <a
                    href="/contact"
                    className="inline-block text-sm font-semibold uppercase tracking-widest text-brand-navy border-b border-brand-gold pb-1 hover:text-brand-gold transition-colors duration-300"
                  >
                    Inquire Now →
                  </a>
                  <span className="text-xs text-gray-400 font-serif italic">Premium Curation</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}