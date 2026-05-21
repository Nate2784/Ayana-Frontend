"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, AlertCircle, Terminal, Cpu, ShieldCheck, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { sendEmail } from "@/app/actions/sendEmail";

// Specialized Cyber-Luxe Micro Animation Presets
const cyberFadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
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
        message: "Thank you! Your inquiry has been processed successfully by Ayana General Trading. Our core systems will route this to an account specialist within 1-3 business days.",
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
        title: "System Latency Detected",
        message: "Our automated transaction bridge is currently processing high volume. Please establish a direct physical patch line to us at +251 911 108 922 or route your raw data to Ayanaevents16@gmail.com.",
        isError: true
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section className="relative min-h-screen py-20 md:py-32 px-4 sm:px-6 bg-brand-light text-brand-navy overflow-hidden font-sans select-none selection:bg-brand-gold/30">
      
      {/* BACKGROUND VECTOR GEOMETRY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.02)_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />
      <div className="absolute top-[15%] left-[-15%] w-150 h-150 bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-125 h-125 bg-brand-navy/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ==================== THEMED FUTURISTIC MODAL POPUP ==================== */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="absolute inset-0 h-full bg-brand-navy/70 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-brand-navy border-2 border-brand-gold/40 text-white rounded-4xl p-8 max-w-md w-full shadow-[0_0_50px_rgba(197,160,89,0.15)] text-center relative overflow-hidden z-10"
            >
              {/* Corner brackets inside the modal */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-brand-gold/40" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-brand-gold/40" />
              
              <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border font-mono text-xl ${modal.isError ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold'}`}>
                {modal.isError ? <AlertCircle className="w-7 h-7" /> : <Send className="w-6 h-6 animate-pulse" />}
              </div>

              <h3 className="text-2xl font-serif text-brand-gold mb-4 tracking-wide">{modal.title}</h3>
              <p className="text-gray-300 font-sans text-sm leading-relaxed mb-8 font-light">{modal.message}</p>

              <button 
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="w-full py-4 bg-linear-to-r from-brand-gold to-brand-gold/80 hover:from-brand-gold/90 hover:to-brand-gold text-brand-navy font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all active:scale-98 shadow-xl"
              >
                [ CLOSE_WINDOW ]
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* ==================== MAIN HEADER ==================== */}
        <div className="text-center mb-16 md:mb-24 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md bg-brand-navy/5 border border-brand-gold/20 text-[10px] font-mono tracking-[0.4em] text-brand-gold uppercase">
            <Terminal className="w-3 h-3 text-brand-gold" /> COMM_BRIDGE_INIT
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-serif text-brand-navy tracking-tight">
            Let’s Begin Your <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy via-brand-gold to-brand-navy">Journey</span>
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* ==================== CORE GRID INTERFACE ==================== */}
        <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-stretch">
          
          {/* LEFT COLUMN: TECH-LUXE DIRECTORY CARD */}
          <motion.div 
            variants={cyberFadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-5 bg-brand-navy text-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_30px_70px_rgba(10,25,47,0.3)] border-2 border-brand-gold/20 relative overflow-hidden flex flex-col justify-between group"
          >
            {/* Structural Cyber HUD Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,160,89,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,160,89,0.03)_1px,transparent_1px)] bg-size-[16px_16px]" />
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/30" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/30" />
            <div className="absolute top-6 right-8 text-[8px] font-mono text-brand-gold/40 tracking-widest">// NET.NODE_01</div>

            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-3xl font-serif text-brand-gold tracking-wide">Ayana HQ</h3>
                <p className="text-[9px] font-mono tracking-widest text-gray-400 uppercase mt-1">Multi-Vector Management System</p>
                <div className="w-16 h-px bg-brand-gold/30 mt-4" />
              </div>
              
              <div className="space-y-6">
                {/* Comms Item: Voice */}
                <div className="flex items-start gap-4 group/item">
                  <div className="bg-brand-gold/5 p-3 rounded-xl border border-brand-gold/20 text-brand-gold transition-colors group-hover/item:bg-brand-gold/10 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-brand-gold/60 uppercase tracking-widest mb-1">Direct Phone Numbers [Voice]</p>
                    <div className="space-y-1 text-base sm:text-lg font-light tracking-wide text-gray-200">
                      <p><a href="tel:+251911108922" className="hover:text-brand-gold transition-colors">+251 911 108 922</a></p>
                      <p><a href="tel:+251955388008" className="hover:text-brand-gold transition-colors">+251 955 388 008</a></p>
                    </div>
                  </div>
                </div>

                {/* Comms Item: Routing Data Matrix */}
                <div className="flex items-start gap-4 group/item">
                  <div className="bg-brand-gold/5 p-3 rounded-xl border border-brand-gold/20 text-brand-gold transition-colors group-hover/item:bg-brand-gold/10 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[9px] font-mono text-brand-gold/60 uppercase tracking-widest mb-0.5">Email: High-Tier Events</p>
                      <a href="mailto:Ayanaevents16@gmail.com" className="hover:text-brand-gold text-sm sm:text-base transition-colors notranslate font-light">Ayanaevents16@gmail.com</a>
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-brand-gold/60 uppercase tracking-widest mb-0.5">Email: Global Logistics</p>
                      <a href="mailto:Ayanageneraltrading@gmail.com" className="hover:text-brand-gold text-sm sm:text-base transition-colors font-light">Ayanageneraltrading@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Comms Item: Social Portal */}
                <div className="flex items-start gap-4 group/item">
                  <div className="bg-brand-gold/5 p-3 rounded-xl border border-brand-gold/20 text-brand-gold transition-colors group-hover/item:bg-brand-gold/10 shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-brand-gold/60 uppercase tracking-widest mb-1">Social Broadcast Stream</p>
                    <a href="https://www.facebook.com/share/1AHbgG7DvU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:text-brand-gold transition-colors underline underline-offset-4 decoration-brand-gold/40">
                      Connect via Facebook
                    </a>
                  </div>
                </div>

                {/* Comms Item: Geoloc Array */}
                <div className="flex items-start gap-4 group/item">
                  <div className="bg-brand-gold/5 p-3 rounded-xl border border-brand-gold/20 text-brand-gold transition-colors group-hover/item:bg-brand-gold/10 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-brand-gold/60 uppercase tracking-widest mb-1">Geographic Anchoring Grid</p>
                    <p className="text-base sm:text-lg text-gray-200 font-light">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom System Status Bar */}
            <div className="mt-12 pt-6 border-t border-brand-gold/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center notranslate gap-2 text-brand-gold font-mono text-[10px] uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5 animate-spin-slow" />
                <span>ayanageneraltrading.com.et</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[8px] tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20">
                <span className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" /> SYS_ONLINE
              </div>
            </div>
          </motion.div>


          {/* RIGHT COLUMN: HIGH-SPEC INQUIRY PORTAL FORM */}
          <motion.div 
            variants={cyberFadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-brand-gold/10 flex flex-col justify-center relative"
          >
            {/* Corner Structural Marks */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 font-mono text-[9px] text-gray-400 tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" /> SECURE_SSL_TRANSACTION
            </div>
            
            <h3 className="text-2xl text-brand-navy mb-8 font-serif tracking-wide flex items-center gap-2">
              Inquiry Transmission Block
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-navy/60 ml-1">Identity: Full Name *</label>
                  <input 
                    name="name" required type="text" placeholder="Natnael Dagnachew"
                    value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleNameKeyDown}
                    className={`w-full p-4 border font-sans text-sm rounded-xl bg-brand-light focus:outline-none transition-all ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100 focus:ring-2 focus:ring-brand-gold/40 focus:bg-white'}`} 
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-navy/60 ml-1"> Email Address *</label>
                  <input 
                    name="email" required type="email" placeholder="natnael@example.com" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-4 border font-sans text-sm rounded-xl bg-brand-light focus:outline-none transition-all ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100 focus:ring-2 focus:ring-brand-gold/40 focus:bg-white'}`} 
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                </div>
              </div>
              
              {/* Row 2: Phone Input and Subject Matrix Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-navy/60 ml-1">Telephony: Number *</label>
                  <div className={`transition-all rounded-xl border overflow-hidden bg-brand-light focus-within:ring-2 focus-within:ring-brand-gold/40 focus-within:bg-white ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-100'}`}>
                    <PhoneInput international defaultCountry="ET" value={phone} onChange={setPhone} className="p-2.5 font-sans text-sm bg-transparent phone-input-custom" />
                  </div>
                  {errors.phone && <p className="text-red-500 text-[10px] font-mono flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-navy/60 ml-1">Operation Vector: Subject</label>
                  <div className="relative">
                    <select name="subject" className="w-full p-4 border border-gray-100 text-sm rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:bg-white appearance-none cursor-pointer text-brand-navy">
                      <option value="wedding">Wedding </option>
                      <option value="birthday"> Celebration / Birthday</option>
                      <option value="concert">High-Profile Concert Execution</option>
                      <option value="meetings">Corporate Summit / Meetings</option>
                      <option value="coffee">Premium Coffee Trading</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold text-xs font-mono">//</div>
                  </div>
                </div>
              </div>

              {/* Message Payload Textarea */}
              <div className="space-y-2">
                <div className="flex justify-between items-end">
                  <label className="text-[9px] font-mono uppercase tracking-[0.2em] text-brand-navy/60 ml-1">: Message</label>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm bg-brand-light ${wordCount > 300 ? 'text-red-500 font-bold bg-red-50' : 'text-gray-400'}`}>{wordCount} / 300 words</span>
                </div>
                <textarea 
                  name="message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your architectural vision or transactional  specifications..."
                  className="w-full p-4 border border-gray-100 text-sm rounded-xl bg-brand-light focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:bg-white transition-all resize-none font-sans"
                ></textarea>
              </div>

              {/* Fire Transmission Button */}
              <button 
                disabled={isSubmitting || !!errors.name || !!errors.email || !!errors.phone || wordCount > 300 || wordCount === 0}
                type="submit" 
                className="w-full py-4 bg-brand-navy hover:bg-brand-navy/95 border border-brand-gold/30 text-white font-mono text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 group disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xl active:scale-99"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><Zap className="w-3.5 h-3.5 animate-bounce text-brand-gold" /> Sending_DATA_PACKETS...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )} 
              </button>
            </form>
          </motion.div>
        </div>

        {/* ==================== 3. EMBEDDED HUD RADAR MAP ==================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="w-full h-80 sm:h-96 md:h-112 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-2xl relative group"
        >
          {/* Static Tech Frame Overlay on Top of Map */}
          <div className="absolute inset-0 border-12 border-brand-navy/10 pointer-events-none z-20" />
          
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.632297120536!2d38.7845344871582!3d8.985272600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85040e34f82f%3A0xc3f1a238618a8047!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1715370000000!5m2!1sen!2set" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
            className="grayscale invert-[0.08] contrast-[1.12] brightness-[0.98] transition-all duration-1000 group-hover:grayscale-0"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}