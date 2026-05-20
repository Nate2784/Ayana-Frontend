"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const languages = [
  { code: "en", name: "English", label: "EN" },
  { code: "am", name: "አማርኛ", label: "አማ" },
  { code: "om", name: "Afaan Oromoo", label: "ORM" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [showToast, setShowToast] = useState(false);
  const [toastLanguageName, setToastLanguageName] = useState("");
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initializingRef = useRef(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Structural Google Widget setup execution definition
  const initGoogleTranslate = useCallback(() => {
    if (typeof window !== "undefined") {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              includedLanguages: "en,am,om",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };
    }
  }, []);

  // Core helper optimized to prevent double loading loops
  const injectGoogleScript = useCallback(() => {
    if (typeof window === "undefined") return;

    // Guard: If script already exists or is actively fetching, do not re-inject
    if (document.getElementById("google-translate-script")) {
      initGoogleTranslate();
      return;
    }

    initGoogleTranslate();

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, [initGoogleTranslate]);

  // Initial Sync State run safely exactly once on mount
  useEffect(() => {
    if (initializingRef.current) return;
    initializingRef.current = true;

    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const activeLang = match[1].split("/").pop();
      if (activeLang) setCurrentLang(activeLang);
    } else {
      setCurrentLang("en");
    }

    injectGoogleScript();
  }, [injectGoogleScript]);

  // Clean fallback layout reset engine
  const resetToEnglishFallback = useCallback(() => {
    setCurrentLang("en");
    const pastDate = "Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = `googtrans=; path=/; expires=${pastDate};`;
    document.cookie = `googtrans=; path=/; domain=.${window.location.hostname}; expires=${pastDate};`;
    
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = "en";
      googleSelect.dispatchEvent(new Event("change", { bubbles: true }));
    }
  }, []);

  // Handle Language Change with custom Toast triggers
  const handleLanguageChange = useCallback((langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Fire custom premium popup toast notification tracking
    const selectedLanguageName = languages.find(l => l.code === langCode)?.name || "";
    setToastLanguageName(selectedLanguageName);
    setShowToast(true);
    
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    const targetTransValue = `/en/${langCode}`;

    document.cookie = `googtrans=${targetTransValue}; path=/;${expires}`;
    document.cookie = `googtrans=${targetTransValue}; path=/; domain=.${window.location.hostname};${expires}`;

    let attempts = 0;
    const triggerTranslation = () => {
      const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      
      if (googleSelect) {
        googleSelect.value = langCode;
        googleSelect.dispatchEvent(new Event("focus", { bubbles: true }));
        googleSelect.dispatchEvent(new Event("change", { bubbles: true }));
        googleSelect.dispatchEvent(new Event("blur", { bubbles: true }));
        
        if (langCode === "en") {
          document.querySelectorAll(".goog-te-font-inherit").forEach((el) => {
            el.classList.remove("goog-te-font-inherit");
          });
        }
      } else if (attempts < 20) {
        attempts++;
        setTimeout(triggerTranslation, 100); // 100ms prevents heavy main thread locking
      } else {
        resetToEnglishFallback();
      }
    };

    triggerTranslation();

    if (typeof window !== "undefined" && window.google?.translate) {
      window.dispatchEvent(new Event("hashchange"));
    }
  }, [resetToEnglishFallback]);

  const activeLangLabel = languages.find((l) => l.code === currentLang)?.label || "EN";

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      <div id="google_translate_element" className="hidden" />

      {/* NUCLEAR STYLING LAYER: Forcefully destroys all Google native elements */}
      <style jsx global>{`
        .skiptranslate, 
        .goog-te-banner-frame, 
        .goog-te-banner-frame\.v2, 
        .goog-te-banner,
        #goog-gt-tt, 
        .goog-te-balloon-frame {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0px !important;
          width: 0px !important;
        }
        html, body {
          top: 0px !important;
          position: static !important;
          margin-top: 0px !important;
          padding-top: 0px !important;
        }
        .goog-text-highlight {
          background: transparent !important;
          box-shadow: none !important;
          box-sizing: border-box !important;
        }
      `}</style>

      {/* Responsive Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 md:gap-1.5 px-2.5 py-1.5 md:px-3 rounded-full border border-brand-gold/20 bg-white/50 text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group"
      >
        <Globe size={14} className="text-brand-gold group-hover:rotate-12 transition-transform duration-500 shrink-0" />
        <span className="text-[11px] md:text-[10px] font-bold tracking-widest uppercase notranslate min-w-5.5 text-center">
          {activeLangLabel}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-navy/60 group-hover:text-brand-gold shrink-0"
        >
          <ChevronDown size={13} />
        </motion.div>
      </button>

      {/* Dropdown Navigation Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute right-0 notranslate mt-5 w-44 md:w-40 origin-top-right rounded-2xl bg-white/90 backdrop-blur-3xl border border-brand-gold/20 shadow-[0_20px_40px_rgba(0,0,0,0.1),0_1px_1px_rgba(255,255,255,0.8)_inset] overflow-hidden"
    >
      <div className="p-1.5 flex flex-col gap-0.5">
        {languages.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full notranslate text-left px-4 py-3 md:py-2.5 text-xs font-bold tracking-wider transition-all duration-300 flex justify-between items-center touch-manipulation rounded-xl group ${
                isActive 
                  ? "text-brand-gold bg-brand-navy/5" 
                  : "text-brand-navy hover:bg-brand-gold/10 hover:text-brand-gold"
              }`}
            >
              <span className="text-[13px] md:text-xs transition-transform duration-300 group-hover:translate-x-0.5">
                {lang.name}
              </span>
              
              {isActive && (
                <span className="text-[9px] text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-md uppercase tracking-tighter font-black border border-brand-gold/20 shrink-0">
                  Active
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* PREMIUM CUSTOM POPUP TOAST NOTIFICATION */}
      <AnimatePresence onExitComplete={() => setShowToast(false)}>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onAnimationComplete={() => {
              // Automatically pull state down smoothly after 3.5 seconds
              setTimeout(() => setShowToast(false), 3500);
            }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 notranslate pointer-events-none"
          >
            <div className="bg-brand-navy/95 backdrop-blur-xl border border-brand-gold/40 shadow-[0_12px_40px_rgba(0,0,0,0.25)] text-white px-5 py-3 rounded-xl flex items-center gap-3 min-w-65 justify-center text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse shadow-[0_0_8px_#c5a059]" />
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-gray-200">
                Translated to: <span className="text-brand-gold font-bold">{toastLanguageName}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}