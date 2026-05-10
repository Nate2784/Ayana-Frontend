"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        className="grid md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Left Side: Visual Element with New Image */}
        <motion.div 
          variants={fadeInUp}
          className="relative aspect-square bg-brand-navy rounded-2xl overflow-hidden border-2 border-brand-gold/30 group"
        >
          {/* Main Image replaces the decorative 'A' */}
          <Image
            src="/about-vision.jpg"
            alt="Ayana Visionary Event Design"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          
          {/* Overlay Content - Now sits on top of the image */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-brand-gold font-serif text-2xl"
            >
              Est. 2024
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-white/80 text-sm uppercase tracking-[0.3em]"
            >
              Excellence defined
            </motion.p>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div variants={fadeInUp}>
          <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-4">
            Our Legacy
          </h4>
          <h2 className="text-4xl md:text-5xl mb-8 text-brand-navy leading-tight">
            Sophistication in <br />
            <span className="italic font-serif">every single detail.</span>
          </h2>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
            <p>
              Ayana General Trading isn&apos;t just a company; it&apos;s a commitment to excellence. 
              Born from a vision to redefine the event landscape, we specialize in 
              transforming spaces and creating atmospheres that resonate with your 
              brand&apos;s prestige.
            </p>
            <p>
              Whether it&apos;s a high-stakes corporate summit or an intimate bespoke 
              celebration, our approach remains the same: meticulous planning, 
              unparalleled design, and a touch of the extraordinary.
            </p>
          </div>

          {/* Value List */}
          <motion.div 
            className="mt-10 grid grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {["Premium Sourcing", "Flawless Logic", "Custom Decor", "Global Reach"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                <span className="text-brand-navy font-medium text-sm uppercase tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          <div className="h-px w-full bg-brand-gold/30 my-10"></div>
          
          <motion.p 
            className="font-serif italic text-2xl text-brand-navy relative"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-brand-gold text-4xl absolute -left-6 -top-2 opacity-40">&ldquo;</span>
            We organize, you celebrate.
            <span className="text-brand-gold text-4xl absolute -bottom-6 opacity-40">&rdquo;</span>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}