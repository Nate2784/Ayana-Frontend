"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { MoveRight, Star, Cake, Briefcase, Music, Coffee, Heart, Ribbon} from "lucide-react"; 

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
    title: "Bespoke Birthdays",
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
    <div className="w-full flex flex-col items-center">
      
    {/* 1. THE HERO EXPERIENCE */}
      <section className="relative w-full h-screen flex items-center justify-center bg-brand-navy overflow-hidden">
        {/* Backdrop & Content remain same... */}
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
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy" />
        </motion.div>

        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block text-brand-gold tracking-[0.3em] uppercase text-xs md:text-sm font-medium mb-6"
          >
            A Legacy of Excellence
          </motion.span>

          <motion.h1 
            className="font-serif text-5xl md:text-9xl text-white mb-8 leading-[1.1] tracking-tight"
            variants={fadeInUp}
          >
            Crafting <span className="italic font-light">Atmospheres</span> <br /> 
            <span className="text-transparent bg-clip-text bg-shiny-gold drop-shadow-2xl">Beyond Imagination</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto leading-relaxed tracking-wide"
            variants={fadeInUp}
          >
            The finest aesthetic details, we orchestrate events that don’t just happen—they resonate.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp} 
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <Link href="/contact" className="btn-gold group py-5 px-12 rounded-full overflow-hidden relative">
              <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase font-semibold">
                Start Your Journey <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
            
            <Link 
              href="/about" 
              className="text-white/80 hover:text-white transition-all text-sm uppercase tracking-widest font-medium border-b border-white/20 hover:border-brand-gold pb-1"
            >
              Learn About Us
            </Link>
          </motion.div>
        </motion.div>

        {/* MODERN ARROW SCROLL INDICATOR */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 mb-2">Scroll</span>
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [0.3, 1, 0.3] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            {/* Using a simple ChevronDown from Lucide if you have it, otherwise a clean SVG */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
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
      <section className="w-full py-28 px-6 bg-white">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl mb-6 font-serif text-brand-navy">Ayana General Trading</h2>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded mb-10"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              At Ayana General Trading, we operate on two distinct pillars of excellence. We are renowned masters in <strong>Premium Event Organization</strong>, creating unforgettable experiences. Looking to the future, we are rapidly expanding into the global market with our upcoming <strong>Coffee Export & Import</strong> division.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="p-8 border border-gray-100 rounded-2xl bg-brand-light">
              <Star className="w-10 h-10 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-brand-navy mb-2">Event Organization</h3>
              <p className="text-gray-500 font-light">Flawless execution of luxury events and gatherings.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-gray-100 rounded-2xl bg-brand-light">
              <Coffee className="w-10 h-10 text-brand-gold mx-auto mb-4" />
              <h3 className="text-2xl font-serif text-brand-navy mb-2">Coffee Trading</h3>
              <p className="text-gray-500 font-light">Upcoming premium coffee import and export services.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

{/* 3. OUR SERVICES (Grid Style) */}
      <section className="w-full py-28 px-6 bg-brand-light">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div className="text-center mb-20" variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl mb-4 text-brand-navy font-serif">Our Services</h2>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded"></div>
            <p className="mt-6 text-gray-500 font-light max-w-2xl mx-auto text-lg leading-relaxed">
              Specializing in high-end event curation and management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-brand-gold/20"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 rounded-full bg-brand-navy flex items-center justify-center mb-8 border-2 border-brand-gold/20">
                  <service.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl mb-4 font-serif text-brand-navy leading-tight">{service.title}</h3>
                
                {/* Truncated description using line-clamp */}
                <p className="text-gray-600 leading-relaxed font-light text-sm line-clamp-3">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. DEDICATED SERVICE SECTIONS (The "Z-Pattern") */}
      <section className="w-full bg-white">
        {services.map((service, i) => (
          <div key={i} className={`w-full py-24 px-6 ${i % 2 !== 0 ? 'bg-brand-light' : 'bg-white'}`}>
            <div className={`max-w-7xl mx-auto flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
              
              {/* Image Container with Brand Navy Overlay */}
              <motion.div 
                className="w-full md:w-1/2 relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl group" // added 'group' for hover trigger
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* 1. The Image */}
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" // changed hover: to group-hover:
                />

                {/* 2. The Brand Navy Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-brand-navy opacity-40 group-hover:opacity-10 transition-opacity duration-500 z-10" />
              </motion.div>

              {/* Text Container */}
              <motion.div 
                className="w-full md:w-1/2 space-y-6"
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-14 h-14 rounded-full bg-brand-navy flex items-center justify-center border-2 border-brand-gold/20">
                  <service.icon className="w-7 h-7 text-brand-gold" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-brand-navy">{service.title}</h3>
                <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact" className="inline-flex items-center text-brand-gold font-medium hover:gap-4 transition-all text-lg">
                  Inquire Now <MoveRight className="ml-2 w-6 h-6" />
                </Link>
              </motion.div>

            </div>
          </div>
        ))}
      </section>

      {/* 5. UPCOMING SERVICES: COFFEE */}
      <section className="w-full py-28 px-6 bg-brand-navy text-white overflow-hidden relative rounded-t-[3rem] md:rounded-t-[5rem]">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4 flex items-center">
              <Coffee className="w-5 h-5 mr-3" /> Upcoming Endeavor
            </h4>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Premium Coffee <br />
              <span className="text-transparent bg-clip-text bg-shiny-gold">Import & Export</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 max-w-lg">
              Ayana General Trading is proud to announce our upcoming expansion into the global coffee market. We are establishing networks to source, export, and import the finest coffee beans, bringing world-class quality from farm to cup.
            </p>
            <div className="flex items-center gap-4 text-brand-gold font-medium">
              <span className="w-12 h-px bg-brand-gold"></span>
              Launching Soon
            </div>
          </motion.div>

          {/* Decorative image/graphic placeholder for Coffee section */}
          <motion.div variants={fadeInUp} className="relative aspect-square md:aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/coffee.jpg" 
              alt="Premium Coffee Beans"
              fill
              className="object-cover"
            />
            {/* Fallback overlay in case image is missing */}
            <div className="absolute inset-0 bg-brand-navy/30 border border-brand-gold/30 rounded-2xl"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="w-full py-32 bg-white text-center px-6 relative overflow-hidden mb-24 rounded-b-[3rem] md:rounded-b-[5rem]">
        <motion.div 
          className="max-w-3xl mx-auto relative z-10 flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-7xl mb-8 leading-tight text-brand-navy"
          >
            Your Next Vision<br /> 
            <span className="text-brand-gold font-serif text-6xl md:text-8xl">Is Ready</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-500 mb-12 font-light max-w-xl leading-relaxed"
          >
            Book a complimentary consultation with our team to discuss your next grand event or business inquiry.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gold py-4! px-12! text-base shadow-xl shadow-brand-gold/20"
              >
                Request Consultation
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 flex items-center gap-4 opacity-30"
          >
            <div className="h-px w-12 bg-brand-gold"></div>
            <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
            <div className="h-px w-12 bg-brand-gold"></div>
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