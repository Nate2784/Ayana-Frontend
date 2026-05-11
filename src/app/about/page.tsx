"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

// Standard Animation Presets
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  },
};

export default function About() {
  return (
    <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Page Title & Divider */}
      <motion.div 
        className="text-center mb-16 md:mb-28"
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


      {/* 2. Company Story Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-28 md:mb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Left Side: Story Visual */}
        <motion.div 
          variants={fadeInUp}
          className="relative aspect-5/4 md:aspect-4/5 lg:aspect-square bg-brand-gold rounded-2xl overflow-hidden border border-brand-gold/20 group shadow-2xl"
        >
          <Image
            src="/about-vision.jpg" 
            alt="Ayana General Trading Excellence"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          
          {/* DECREASED OPACITY GOLD OVERLAY */}
          {/* Changed from /60 to /20 for a much more subtle effect */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-linear-to-t from-brand-gold/20 via-transparent to-transparent z-10" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-20">
            <p className="text-brand-gold font-serif text-xl md:text-3xl">Est. 2026</p> 
            <p className="text-brand-navy text-xs md:text-sm uppercase tracking-[0.3em]">Excellence defined</p>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div variants={fadeInUp} className="flex flex-col space-y-6 md:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-navy leading-tight">
            Sophistication in <br className="hidden sm:block" />
            <span className="italic font-serif">every single detail.</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-base md:text-lg font-light">
            <p>
              Ayana General Trading represents a commitment to excellence, bridging luxury experience curation with global commodities. Founded by Biruktawit Abebe with a vision to redefine professionalism in East Africa, we operate on two distinct pillars: masterfully organizing high-end events and sourcing the world&apos;s finest coffee.
            </p>
            <p>
              Whether we are orchestrating a flawless corporate summit, a bespoke wedding celebration, or establishing robust trade networks for premium coffee, our approach remains meticulous: obsessive planning and unparalleled execution.
            </p>
          </div>

          {/* Value List */}
          <div className="mt-8 md:mt-10 grid grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-brand-gold/20">
            {["Premium Events", "Flawless Execution", "Coffee Trading", "Global Reach"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-brand-navy font-medium text-xs md:text-sm uppercase tracking-wide">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>


      {/* 3. FOUNDER & LEADERSHIP SECTION */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center bg-brand-light p-10 md:p-16 rounded-3xl border border-brand-gold/10 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Founder Text */}
        <motion.div variants={fadeInUp} className="md:col-span-7 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-4 py-1 rounded-full text-brand-gold bg-brand-gold/5">
            <Star className="w-4 h-4 fill-brand-gold" />
            <span className="uppercase text-[10px] tracking-[0.3em] font-medium">Leadership Spotlight</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-brand-navy tracking-tight">Biruktawit Abebe</h2>
          
          <p className="text-gray-700 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Ayana General Trading was established under the strategic guidance of Biruktawit Abebe. With decades of experience in logistics, international trade, and luxury hospitality, she realized that Addis Ababa was ready for a new standard of general trading—one where quality is never compromised.
          </p>

          <p className="text-brand-gold italic font-serif text-xl md:text-2xl pt-6 border-t border-brand-gold/30">
            &ldquo;We don&apos;t just manage transactions or curate events. We build trust and craft legacies, whether it&apos;s a world-class summit, family or a premium coffee trade.&rdquo;
          </p>
        </motion.div>

        {/* CEO Image Card */}
        <motion.div 
          variants={fadeInUp}
          className="md:col-span-5 flex flex-col items-center justify-center text-center group"
        >
          <div className="relative aspect-4/5 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-gold/20 mb-6">
            <Image
              src="/ceo.jpeg" 
              alt="Biruktawit Abebe - CEO & Founder"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
            {/* Dark Brand Overlay */}
            <div className="absolute inset-0 bg-brand-navy opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10" />
          </div>
          
          <h3 className="text-2xl font-semibold text-brand-navy">Biruktawit Abebe</h3>
          <p className="text-sm text-brand-gold uppercase tracking-[0.2em]">Founder / CEO</p>
        </motion.div>
      </motion.div>

    </section>
  );
}