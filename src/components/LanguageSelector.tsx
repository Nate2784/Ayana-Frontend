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

  // Initialize Google Translate Script silently & Sync State
  useEffect(() => {
    // Sync initial state with Google Translate cookie to persist UI across reloads
    const match = document.cookie.match(/(?:^|;)\s*googtrans=([^;]*)/);
    if (match && match[1]) {
      const activeLang = match[1].split("/").pop();
      if (activeLang) setCurrentLang(activeLang);
    }

    const addGoogleTranslateScript = () => {
      // Fix: Check if the actual google translate object is loaded to avoid false positives
      if (window.google?.translate) return;

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,am,om",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      // Prevent injecting duplicate scripts into the DOM
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    addGoogleTranslateScript();
  }, []);

  // Memoize the handler to prevent unnecessary re-renders
  const handleLanguageChange = useCallback((langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Find the hidden native Google Translate dropdown and trigger it
    const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event("change"));
    }
  }, []);

  const activeLangLabel = languages.find((l) => l.code === currentLang)?.label || "EN";

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      {/* Hidden container required by Google Translate */}
      <div id="google_translate_element" className="hidden" />

      {/* Global CSS Inject to completely hide Google Translate's top bar banner */}
      <style jsx global>{`
        .skiptranslate, .goog-te-banner-frame, #goog-gt-tt {
          display: none !important;
        }
        body {
          top: 0px !important;
          position: static !important;
        }
        .goog-te-balloon-frame {
          display: none !important;
        }
      `}</style>

      {/* Elegant Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-gold/20 bg-white/50 text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group"
      >
        <Globe size={13} className="text-brand-gold group-hover:rotate-12 transition-transform duration-500" />
        <span className="text-[10px] font-bold tracking-widest uppercase notranslate">{activeLangLabel}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-navy/60 group-hover:text-brand-gold"
        >
          <ChevronDown size={12} />
        </motion.div>
      </button>

      {/* Premium Luxury Dropdown Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute notranslateright-0 mt-2 w-40 origin-top-right rounded-xl bg-white border border-brand-gold/20 shadow-xl overflow-hidden backdrop-blur-md"
          >
            <div className="py-1 bg-linear-to-b from-white to-brand-light/20">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full notranslate text-left px-4 py-2.5 text-xs font-medium tracking-wide transition-colors flex justify-between items-center
                    ${currentLang === lang.code 
                      ? "text-brand-gold bg-brand-navy/5 font-bold" 
                      : "text-brand-navy hover:bg-brand-gold/10 hover:text-brand-gold"
                    }`}
                >
                  <span>{lang.name}</span>
                  {currentLang === lang.code && (
                    <span className="text-[9px] text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded-sm uppercase font-bold tracking-tighter">
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