"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Globe, AlertCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { sendEmail } from "@/app/actions/sendEmail";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>();
  const [message, setMessage] = useState("");
  
  // Modal State
  const [modal, setModal] = useState<{ 
    isOpen: boolean; 
    title: string; 
    message: string; 
    isError: boolean 
  }>({
    isOpen: false,
    title: "",
    message: "",
    isError: false,
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const wordCount = message.trim() ? message.trim().split(/\s+/).length : 0;

  useEffect(() => {
    if (name && /[\d]/.test(name)) {
      setErrors(prev => ({ ...prev, name: "Names cannot contain numbers" }));
    } else {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  }, [name]);

  useEffect(() => {
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
    } else {
      setErrors(prev => ({ ...prev, email: undefined }));
    }
  }, [email]);

  useEffect(() => {
    if (phone && !isValidPhoneNumber(phone)) {
      setErrors(prev => ({ ...prev, phone: "Please enter a valid phone number" }));
    } else {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  }, [phone]);

  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/[0-9]/.test(e.key)) e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.name || errors.email || errors.phone || wordCount > 300 || wordCount === 0) return;

    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const subject = formData.get("subject") as string;

    const result = await sendEmail({ 
      name, 
      email, 
      phone: phone || "Not provided", 
      subject, 
      message 
    });

    if (result.success) {
      setModal({
        isOpen: true,
        title: "Inquiry Sent",
        message: "Thank you! Your inquiry has been sent to Ayana General Trading. Our team will contact you shortly. within 1-3 business days.",
        isError: false
      });
      setName("");
      setEmail("");
      setPhone(undefined);
      setMessage("");
      (e.target as HTMLFormElement).reset();
    } else {
      setModal({
        isOpen: true,
        title: "System Busy",
        message: "Our automated system is currently busy. Please contact us directly at +251 911 108 922 or Ayanaevents16@gmail.com.",
        isError: true
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 relative">
      
      {/* THEMED MODAL POPUP */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="absolute inset-0 h-full bg-brand-navy/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-brand-gold/20 text-center relative overflow-hidden z-10"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-brand-gold via-[#FCF6BA] to-brand-gold" />
              
              <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${modal.isError ? 'bg-red-50 text-red-500' : 'bg-brand-gold/10 text-brand-gold'}`}>
                {modal.isError ? <AlertCircle className="w-8 h-8" /> : <Send className="w-8 h-8" />}
              </div>

              <h3 className="text-2xl font-serif text-brand-navy mb-4">{modal.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">{modal.message}</p>

              <button 
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="w-full py-4 bg-brand-navy text-white rounded-xl font-medium hover:bg-brand-navy/90 transition-all shadow-lg active:scale-95"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12 md:mb-16">
        <h4 className="text-brand-gold font-semibold uppercase tracking-widest text-[10px] sm:text-xs mb-3">Get in Touch</h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-navy font-serif">Let’s Begin Your Journey</h2>
      </div>

      <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Company Information Card */}
        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-5 bg-brand-navy text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
        >
          <div className="absolute -top-10 -right-10 text-brand-gold opacity-10 text-9xl font-serif select-none">★</div>
          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl font-serif text-brand-gold mb-6 border-b border-brand-gold/20 pb-4">Ayana General Trading</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0"><Phone className="w-5 h-5 text-brand-gold" /></div>
              <div>
                <p>
                  <a href="tel:+251911108922" className="hover:text-brand-gold transition-colors">+251 911 108 922</a><br/>
                  <a href="tel:+251955388008" className="hover:text-brand-gold transition-colors">+251 955 388 008</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0"><Mail className="w-5 h-5 text-brand-gold" /></div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Event Inquiries</p>
                  <a href="mailto:Ayanaevents16@gmail.com" className="hover:text-brand-gold transition-colors">Ayanaevents16@gmail.com</a>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Trade Inquiries</p>
                  <a href="mailto:Ayanageneraltrading@gmail.com" className="hover:text-brand-gold transition-colors">Ayanageneraltrading@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Social Media</p>
                <a href="https://www.facebook.com/share/1AHbgG7DvU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors underline underline-offset-4">Follow us on Facebook</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-brand-gold/10 p-3 rounded-xl border border-brand-gold/20 shrink-0"><MapPin className="w-5 h-5 text-brand-gold" /></div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                <p className="text-base sm:text-lg">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex items-center gap-2 text-brand-gold font-medium"><Globe className="w-4 h-4" /><span className="text-[10px] uppercase tracking-[0.2em]">www.ayanageneraltrading.com.et/</span></div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-center"
        >
          <h3 className="text-2xl text-brand-navy mb-8 font-serif">Send an Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Full Name</label>
                <input 
                  name="name" required type="text" placeholder="John Doe"
                  value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleNameKeyDown}
                  className={`w-full p-4 border rounded-xl bg-brand-light focus:outline-none transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100 focus:ring-2 focus:ring-brand-gold/50'}`} 
                />
                {errors.name && <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Email Address *</label>
                <input 
                  name="email" required type="email" placeholder="john@example.com" 
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-4 border rounded-xl bg-brand-light focus:outline-none transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100 focus:ring-2 focus:ring-brand-gold/50'}`} 
                />
                {errors.email && <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Phone Number *</label>
                <div className={`transition-all rounded-xl border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100'}`}>
                  <PhoneInput international defaultCountry="ET" value={phone} onChange={setPhone} className="p-2 bg-brand-light rounded-xl phone-input-custom" />
                </div>
                {errors.phone && <p className="text-red-500 text-[10px] flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Subject</label>
                <select name="subject" className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 appearance-none cursor-pointer">
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Event</option>
                  <option value="concert">Concert</option>
                  <option value="meetings">Meetings</option>
                  <option value="coffee">Coffee Trading</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1">Message</label>
                <span className={`text-[10px] ${wordCount > 300 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>{wordCount}/300 words</span>
              </div>
              <textarea 
                name="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border border-gray-100 rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              disabled={isSubmitting || !!errors.name || !!errors.email || !!errors.phone || wordCount > 300 || wordCount === 0}
              type="submit" 
              className="btn-gold w-full py-4 flex items-center justify-center gap-2 group disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Send Message"} 
              {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="w-full h-80 sm:h-96 md:h-112.5 rounded-4xl md:rounded-[2.5rem] overflow-hidden border-4 border-brand-gold shadow-2xl"
      >
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.632297120536!2d38.7845344871582!3d8.985272600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85040e34f82f%3A0xc3f1a238618a8047!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715370000000!5m2!1sen!2set" 
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
          className="grayscale invert-[0.05] contrast-[1.1]"
        ></iframe>
      </motion.div>
    </section>
  );
}