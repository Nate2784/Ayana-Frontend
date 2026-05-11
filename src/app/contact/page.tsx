"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This captures the data for your future Email Service integration
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    console.log("Form Submission:", data);

    // Simulation of a successful send
    setTimeout(() => {
      alert("Thank you! Your inquiry has been sent to Ayana General Trading.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-[10px] sm:text-xs mb-3">Get in Touch</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-navy font-serif">Let’s Begin Your Journey</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* 1. Company Information Card */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-5 bg-brand-navy text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute -top-10 -right-10 text-brand-gold opacity-10 text-9xl font-serif select-none">★</div>

          <div className="relative z-10">
            <h3 className="text-2xl font-serif text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">
              Ayana General Trading
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-base sm:text-lg">+251 955 388 008</p>
                  <p className="text-base sm:text-lg">+251 911 108 922</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="break-all">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Event Inquiries</p>
                  <p className="text-base sm:text-lg">Ayanageneraltrading@gmail.com</p>
                  <div className="break-all">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Trade Inquiries</p>
                  <p className="text-base sm:text-lg">Ayanageneraltrading@gmail.com</p>
                </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-base sm:text-lg">Addis Ababa, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Consultation Hours</p>
                  <p className="text-base sm:text-lg">Mon — Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-brand-gold font-medium">
            <Globe className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-[0.2em]">www.ayanatrading.com</span>
          </div>
        </motion.div>

        {/* 2. Contact Form */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center"
        >
          <h3 className="text-2xl text-brand-navy mb-8 font-serif">Send an Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input name="name" required type="text" placeholder="John Doe" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Email Address <span className="text-brand-gold">*</span></label>
                <input name="email" required type="email" placeholder="john@example.com" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Phone Number <span className="text-brand-gold">*</span></label>
                <input name="phone" required type="tel" placeholder="+251 9..." className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <select name="subject" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none cursor-pointer">
                  <option value="birthday">Birthday Event</option>
                  <option value="concert">Concert</option>
                  <option value="meetings">Meetings</option>
                  <option value="coffee">Coffee Trading</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Message</label>
              <textarea name="message" required placeholder="Tell us about your vision..." rows={4} className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none"></textarea>
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="btn-gold w-full py-4! flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isSubmitting ? "Processing..." : "Send Message"} 
              {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>

      {/* 3. Google Maps Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full h-80 sm:h-96 md:h-112.5 rounded-4xl md:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.632297120536!2d38.7845344871582!3d8.985272600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85040e34f82f%3A0xc3f1a238618a8047!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715370000000!5m2!1sen!2set" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          className="grayscale invert-[0.05] contrast-[1.1]"
        ></iframe>
      </motion.div>
    </section>
  );
}