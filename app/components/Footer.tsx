"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import { instagram, logo } from "../../public/assets";

const logoImage = logo;

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] py-12 px-4">
      <div className="container mx-auto max-w-[1250px]">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Left Section - Contact Information */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="space-y-3">
              <a
                href="tel:+971502765910"
                className="flex items-center gap-3 text-[#2a347c] hover:text-[#1a2552] transition-colors group"
              >
                <svg
                  className="w-6 h-6 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-semibold text-lg" dir="ltr">
                  +971 50 276 5910
                </span>
              </a>
            </div>

            {/* Logo */}
            <div className="mb-4">
              <Image
                src={logoImage}
                alt="Al Andalus Pest Control Logo"
                width={120}
                height={98}
                className="rounded-lg"
              />
            </div>

            {/* Company Name */}
            <div>
              <h3 className="text-2xl font-bold text-[#2a347c] mb-4">
                AL ANDALUS Pest Control
              </h3>
            </div>

            {/* Pest Control Worker Illustration */}
            <div className="relative w-48 h-48 rounded-2xl p-4 flex items-center justify-center">
              <Image
                src={instagram}
                alt="Al Andalus Pest Control Logo"
                width={160}
                height={160}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Middle Section - Location Information */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
                <svg
                  className="w-6 h-6 text-[#2a347c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-[#2a347c] font-semibold text-lg mb-2">
                  {t.contact.address}
                </p>
                <div className="text-[#2a347c] font-medium">
                  <p className="mb-2">
                    {language === "en"
                      ? "Dubai - Abu Dhabi - Sharjah - Ajman - Umm Al Quwain - Al Ain"
                      : "دبي - أبوظبي - الشارقة - عجمان - أم القيوين - العين"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Social Media */}
          <div className="space-y-6">
            <div>
              <h4 className="text-2xl font-bold text-[#2a347c] mb-6 text-center md:text-left">
                {language === "en" ? "Stay in touch" : "ابق على تواصل"}
              </h4>
              <div className="flex gap-4 justify-center md:justify-start">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/alandalus_pestcontrol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7.41a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-[#2a347c]/20 pt-8 mt-8">
          <p className="text-center text-[#2a347c] font-semibold">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
