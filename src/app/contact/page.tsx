"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-3">Get in Touch</h4>
        <h2 className="text-4xl md:text-5xl text-brand-navy font-serif">Let’s Begin Your Journey</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* 1. Company Information Card (Left Side) */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="md:col-span-5 bg-brand-navy text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
        >
          {/* Decorative Background Star */}
          <div className="absolute -top-10 -right-10 text-brand-gold opacity-10 text-9xl font-serif select-none">★</div>

          <div className="relative z-10">
            <h3 className="text-2xl font-serif text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">
              Ayana General Trading
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-tighter">Call Us</p>
                  <p className="text-lg">+251 911 123 456</p>
                  <p className="text-lg">+251 900 123 456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-tighter">Email Inquiries</p>
                  <p className="text-lg">info@ayanatrading.com</p>
                  <p className="text-lg">events@ayanatrading.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-tighter">Our Atelier</p>
                  <p className="text-lg">Bole District, Suite 402<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-tighter">Consultation Hours</p>
                  <p className="text-lg">Mon — Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-brand-gold font-medium">
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase tracking-[0.2em]">www.ayanatrading.com</span>
          </div>
        </motion.div>

        {/* 2. Contact Form (Right Side) */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="md:col-span-7 bg-white p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center"
        >
          <h3 className="text-2xl text-brand-navy mb-8 font-serif">Send an Inquiry</h3>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Subject</label>
              <select className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none">
                <option>Corporate Event Planning</option>
                <option>Bespoke Private Celebration</option>
                <option>General Trading Inquiry</option>
                <option>Audio-Visual Services</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea placeholder="Tell us about your vision..." rows={4} className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none"></textarea>
            </div>

            <button className="btn-gold w-full !py-4 flex items-center justify-center gap-2 group">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* 3. Google Maps Section (Bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5532585488427!2d38.7869687!3d9.0142347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850fef39958d%3A0xcf953041ed641036!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715350000000!5m2!1sen!2set" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          className="grayscale invert-[0.05] contrast-[1.1]" // Giving the map a slightly muted premium look
        ></iframe>
      </motion.div>
    </section>
  );
}