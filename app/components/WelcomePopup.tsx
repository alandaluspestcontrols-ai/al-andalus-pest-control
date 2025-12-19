"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

export default function WelcomePopup() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[language];

  useEffect(() => {
    // Show popup once per browser session (when user first visits)
    const hasSeenPopup = sessionStorage.getItem("welcomePopupShown");
    
    if (!hasSeenPopup) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem("welcomePopupShown", "true");
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const welcomeMessage = language === "en" 
    ? "Welcome to Al Andalus Pest Control! We're here to help you maintain a pest-free environment."
    : "مرحباً بك في شركة الأندلس لمكافحة حشرات! نحن هنا لمساعدتك في الحفاظ على بيئة خالية من الآفات.";

  const closeButton = language === "en" ? "Close" : "إغلاق";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-[#e4d8a7] via-[#d9d0a0] to-[#d4c897] rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp border-2 border-[#2a347c]/20">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#2a347c] hover:text-[#1a2552] transition-colors"
          aria-label={closeButton}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#2a347c] rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#2a347c]">
            {language === "en" ? "Welcome!" : "مرحباً!"}
          </h2>

          {/* Message */}
          <p className="text-[#2a347c] text-lg leading-relaxed">
            {welcomeMessage}
          </p>

          {/* Action Button */}
          <button
            onClick={handleClose}
            className="mt-6 w-full bg-[#2a347c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1a2552] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {closeButton}
          </button>
        </div>
      </div>
    </div>
  );
}

