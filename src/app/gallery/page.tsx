"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const categories = ["All", "Corporate", "Bespoke", "Trading"];

const photos = [
  { id: 1, src: "/gala.jpg", title: "Innovation Summit", category: "Corporate" },
  { id: 2, src: "/corporate.jpg", title: "Luxury Product Launch", category: "Corporate" },
  { id: 3, src: "/wedding.jpg", title: "Royal Wedding Gala", category: "Bespoke" },
  { id: 4, src: "/private.jpg", title: "Elite Private Dinner", category: "Bespoke" },
  { id: 5, src: "/decor.jpg", title: "Premium Decor Supply", category: "Trading" },
  { id: 6, src: "/av.jpg", title: "Audio-Visual Setup", category: "Trading" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filteredPhotos = filter === "All" 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-3">Portfolio</h4>
        <h2 className="text-5xl text-brand-navy font-serif mb-8">Our Golden Moments</h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full border transition-all text-sm uppercase tracking-widest font-medium ${
                filter === cat 
                ? "bg-brand-navy text-white border-brand-navy" 
                : "border-gray-200 text-gray-500 hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-4/5 rounded-2xl overflow-hidden group border border-gray-100 bg-brand-light"
            >
              <Image 
                src={photo.src} 
                alt={photo.title} 
                fill 
                className="object-cover"
              />
              
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-brand-gold text-xs uppercase tracking-widest mb-2">{photo.category}</p>
                <h3 className="text-white text-2xl font-serif">{photo.title}</h3>
                <div className="mt-4 h-px w-0 group-hover:w-full bg-brand-gold/50 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Bottom CTA - Centered and Functional */}
      <div className="mt-24 flex flex-col items-center text-center">
        <p className="text-gray-500 font-light italic text-xl mb-8">
          Inspired by what you see?
        </p>
        
        <Link href="/contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold px-12! py-4! shadow-xl shadow-brand-gold/10"
          >
            Start Your Project
          </motion.button>
        </Link>
      </div>
    </section>
  );
}



