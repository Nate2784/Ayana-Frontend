"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

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
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Page Title Section */}
      <motion.div 
        className="text-center mb-16 md:mb-24"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-5xl md:text-7xl font-serif text-brand-navy mb-6">Our Legacy</h1>
        
        {/* Star Underline Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 md:w-24 bg-brand-gold/40"></div>
          <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
          <div className="h-px w-12 md:w-24 bg-brand-gold/40"></div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Left Side: Visual Element */}
        <motion.div 
          variants={fadeInUp}
          className="relative aspect-square md:aspect-4/5 lg:aspect-square bg-brand-navy rounded-2xl overflow-hidden border-2 border-brand-gold/30 group shadow-2xl"
        >
          <Image
            src="/about-vision.jpg"
            alt="Ayana General Trading Excellence"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-linear-to-t from-brand-navy/90 via-brand-navy/20 to-transparent">
            <motion.p 
              className="text-brand-gold font-serif text-xl md:text-3xl"
            >
              Est. 2024
            </motion.p>
            <motion.p 
              className="text-white/80 text-xs md:text-sm uppercase tracking-[0.3em]"
            >
              Excellence defined
            </motion.p>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div variants={fadeInUp} className="flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 text-brand-navy leading-tight">
            Sophistication in <br className="hidden sm:block" />
            <span className="italic font-serif">every single detail.</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-light">
            <p>
              Ayana General Trading isn&apos;t just a company; it&apos;s a commitment to excellence. 
              Born from a vision to redefine luxury experiences, we operate on two distinct pillars: 
              masterfully curating high-end events and sourcing the world&apos;s finest coffee.
            </p>
            <p>
              Whether it&apos;s orchestrating a flawless corporate summit, a bespoke celebration, 
              or establishing robust global trade networks for premium coffee, 
              our approach remains the same: meticulous planning and unparalleled execution.
            </p>
          </div>

          {/* Value List */}
          <motion.div 
            className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={staggerContainer}
          >
            {["Premium Events", "Flawless Execution", "Coffee Trading", "Global Reach"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-brand-navy font-medium text-xs md:text-sm uppercase tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          <div className="h-px w-full bg-brand-gold/30 my-8 md:my-12"></div>
          
          {/* Quote Section */}
          <motion.div 
            className="font-serif italic text-xl md:text-2xl text-brand-navy relative pl-6"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-brand-gold text-4xl absolute left-0 -top-2 opacity-40">&ldquo;</span>
            <p>We organize, you celebrate.</p>
            <p className="mt-1 text-brand-gold">We source, you savor.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}