"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

// TypeScript Fix: Declare global window properties for Google Translate
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Set up Google Translate Widget Initializer Function
  const initGoogleTranslate = useCallback(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          // FIX: Removing pageLanguage avoids Google breaking the DOM when switching back to English
          includedLanguages: "en,am,om",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  // Core helper to inject or reinject the script tag when Google crashes the DOM
  const injectGoogleScript = useCallback(() => {
    const oldScript = document.getElementById("google-translate-script");
    if (oldScript) oldScript.remove();

    initGoogleTranslate();

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, [initGoogleTranslate]);

  // Initial Sync State and Script load
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const activeLang = match[1].split("/").pop();
      if (activeLang) setCurrentLang(activeLang);
    } else {
      setCurrentLang("en");
    }

    injectGoogleScript();
  }, [injectGoogleScript]);

  // Fallback engine: Forcefully clears out tracking states and restores English baseline
  const resetToEnglishFallback = useCallback(() => {
    setCurrentLang("en");
    
    // Clear cookies cleanly across current path and domains
    const pastDate = "Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = `googtrans=; path=/; expires=${pastDate};`;
    document.cookie = `googtrans=; path=/; domain=.${window.location.hostname}; expires=${pastDate};`;
    
    // Re-verify the DOM structure by completely pulling a fresh Google element instance
    injectGoogleScript();
  }, [injectGoogleScript]);

  // Handle Language Change with structural Validation & Recovery Fallback
  const handleLanguageChange = useCallback((langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();

    const targetTransValue = `/en/${langCode}`;
    document.cookie = `googtrans=${targetTransValue}; path=/;${expires}`;
    document.cookie = `googtrans=${targetTransValue}; path=/; domain=.${window.location.hostname};${expires}`;

    let googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (!googleSelect) {
      injectGoogleScript();
    }

    let attempts = 0;
    const triggerTranslation = () => {
      googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      
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
        setTimeout(triggerTranslation, 50);
      } else {
        // SAFETY TRIGGER: If 20 loops go by and selection fails, default state back cleanly to English
        resetToEnglishFallback();
      }
    };

    triggerTranslation();

    if (typeof window !== "undefined" && window.google?.translate) {
      window.dispatchEvent(new Event("hashchange"));
    }
  }, [injectGoogleScript, resetToEnglishFallback]);

  const activeLangLabel = languages.find((l) => l.code === currentLang)?.label || "EN";

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      {/* Hidden container required by Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Global CSS Inject to completely hide Google Translate's top bar banner */}
      <style jsx global>{`
        .skiptranslate, .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0px !important;
          position: static !important;
        }
      `}</style>

      {/* Responsive Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 md:gap-1.5 px-2.5 py-1.5 md:px-3 rounded-full border border-brand-gold/20 bg-white/50 text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group"
      >
        <Globe size={14} className="text-brand-gold group-hover:rotate-12 transition-transform duration-500 flex-shrink-0" />
        <span className="text-[11px] md:text-[10px] font-bold tracking-widest uppercase notranslate min-w-[22px] text-center">
          {activeLangLabel}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-navy/60 group-hover:text-brand-gold flex-shrink-0"
        >
          <ChevronDown size={13} />
        </motion.div>
      </button>

      {/* Mobile-Responsive Premium Luxury Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 notranslate mt-2 w-44 md:w-40 origin-top-right rounded-xl bg-white border border-brand-gold/20 shadow-xl overflow-hidden backdrop-blur-md"
          >
            <div className="py-1 bg-linear-to-b from-white to-brand-light/20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full notranslate text-left px-4 py-3 md:py-2.5 text-xs font-medium tracking-wide transition-colors flex justify-between items-center touch-manipulation
                    ${currentLang === lang.code 
                      ? "text-brand-gold bg-brand-navy/5 font-bold" 
                      : "text-brand-navy hover:bg-brand-gold/10 hover:text-brand-gold"
                    }`}
                >
                  <span className="text-[13px] md:text-xs">{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="text-[8px] md:text-[9px] text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded-sm uppercase font-bold tracking-tighter flex-shrink-0">
                      Active
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}