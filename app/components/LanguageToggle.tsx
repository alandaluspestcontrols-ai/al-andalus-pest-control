'use client';

import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className=" flex items-center gap-2 rounded-full bg-[#598b2c] px-4 py-2 text-white shadow-lg transition-all hover:bg-[#1a2552] hover:scale-105"
      aria-label="Toggle language"
    >
      <span className="font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
    
    </button>
  );
}

