"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LanguageToggle from "./LanguageToggle";
import { logo } from "../../public/assets";

export const LogoImage = logo;

export default function Navigation() {
  const { language } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className=" max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={LogoImage}
              alt="Al Andalus Pest Control Logo"
              width={100}
              height={80}
              className="rounded-lg"
            />
            <h1 className="text-xl font-bold text-[#133563]">{t.hero.title}</h1>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#133563] hover:text-[#1a2552] font-medium transition-colors"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              className="text-[#133563] hover:text-[#1a2552] font-medium transition-colors"
            >
              {t.nav.about}
            </Link>

            <Link
              href="/services"
              className="text-[#133563] hover:text-[#1a2552] font-medium transition-colors"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/gallery"
              className="text-[#133563] hover:text-[#1a2552] font-medium transition-colors"
            >
              {t.nav.gallery}
            </Link>
            <Link
              href="/contact"
              className="bg-[#539B47] text-white px-6 py-2 rounded-full hover:bg-[#1a2552] transition-colors font-medium"
            >
              {t.nav.booking}
            </Link>
          </div>
          <div>
            <LanguageToggle />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#133563] p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#133563] hover:text-[#1a2552] font-medium transition-colors py-2"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#133563] hover:text-[#1a2552] font-medium transition-colors py-2"
            >
              {t.nav.about}
            </Link>
            <Link
              href="/company-information"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#133563] hover:text-[#1a2552] font-medium transition-colors py-2"
            >
              {t.nav.companyInfo}
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#133563] hover:text-[#1a2552] font-medium transition-colors py-2"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#133563] hover:text-[#1a2552] font-medium transition-colors py-2"
            >
              {t.nav.gallery}
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#133563] text-white px-6 py-2 rounded-full hover:bg-[#1a2552] transition-colors font-medium text-center"
            >
              {t.nav.booking}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
