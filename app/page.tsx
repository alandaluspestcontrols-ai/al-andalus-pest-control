"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./translations";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import {
  logo,
  img0003,
  img0004,
  img0005,
  img0006,
  img0007,
  img0008,
  img0009,
  img0010,
  img0011,
  img0012,
  img0013,
  img0014,
  img0015,
  img0016,
  img0017,
  img0018,
  img0019,
  img0020,
  img0021,
  img0022,
  img0023,
  img0024,
  img0025,
  img0026,
  img0027,
  img0028,
  img0029,
  img0030,
  img0031,
  img0032,
  img0033,
  img0034,
  img0035,
  img0036,
  img0037,
  img0038,
  img0039,
  img0040,
  img0041,
  img0042,
  img0043,
  img0044,
  img0045,
  img0046,
  img0047,
  img0048,
  img0049,
  img0050,
  img0051,
  img0052,
  img0053,
  img0054,
  img0055,
  img0056,
  img0057,
  img0058,
  img0060,
  img0061,
  img0062,
  img0063,
} from "../public/assets";

const logoImage = logo;

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-[#e4d8a7] via-[#d9d0a0] to-[#d4c897] overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#133563] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#133563] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-[1250px] relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#133563] font-semibold text-sm mb-4">
                {language === "en"
                  ? "✨ Trusted Pest Control Experts"
                  : "✨ خبراء مكافحة حشرات الموثوقون"}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#133563] leading-tight">
                {t.hero.subtitle}
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
                {language === "en"
                  ? "Al Andalus Company is the ideal choice for pest control throughout the UAE, offering effective and safe solutions to maintain a healthy, insect-free environment."
                  : "شركة الأندلس هي الخيار الأمثل لمكافحة حشرات في جميع أنحاء الإمارات، حيث تقدم حلولاً فعالة وآمنة للحفاظ على بيئة صحية خالية من حشرات."}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <div className="font-bold text-[#133563] text-sm">
                      {language === "en" ? "Safe & Effective" : "آمن وفعال"}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === "en" ? "Eco-friendly" : "صديق للبيئة"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <div className="font-bold text-[#133563] text-sm">
                      {language === "en"
                        ? "24/7 Service"
                        : "خدمة على مدار الساعة"}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === "en" ? "Quick Response" : "استجابة سريعة"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl">✅</div>
                  <div>
                    <div className="font-bold text-[#133563] text-sm">
                      {language === "en" ? "Warranty" : "ضمان"}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === "en"
                        ? "Guaranteed Results"
                        : "نتائج مضمونة"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <div className="font-bold text-[#133563] text-sm">
                      {language === "en" ? "Expert Team" : "فريق خبير"}
                    </div>
                    <div className="text-xs text-gray-600">
                      {language === "en" ? "Professional" : "محترف"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="group bg-[#539B47] text-white px-8 py-4 rounded-full hover:bg-[#1a2552] transition-all transform hover:scale-105 font-semibold shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  <span>{t.hero.cta}</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="tel:+971502765910"
                  className="bg-white text-[#133563] px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-[#133563] font-semibold shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
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
                  <span dir="ltr">+971 50 276 5910</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#133563] rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <Image
                  src={img0022}
                  alt="Pest Control Service"
                  width={500}
                  height={415}
                  className="rounded-3xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Hero Section Images Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-12">
            {[
              img0011,
              img0012,
              img0013,
              img0014,
              img0015,
              img0016,
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <Image
                  src={img}
                  alt={`Pest Control Service ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#133563] to-[#1a2552] text-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">
                {language === "en" ? "Happy Clients" : "عميل سعيد"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">
                {language === "en" ? "Emergency Service" : "خدمة الطوارئ"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
              <div className="text-lg opacity-90">
                {language === "en" ? "UAE Emirates" : "إمارات الإمارات"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">
                {language === "en" ? "Years Experience" : "سنة خبرة"}
              </div>
            </div>
          </div>

          {/* Statistics Section Images Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[
              img0018,
              img0020,
              img0021,
              img0023,
              img0024,
              img0025,
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 opacity-80 hover:opacity-100"
              >
                <Image
                  src={img}
                  alt={`Pest Control Service ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Al Andalus Company Introduction Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-[#e4d8a7]/10 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-white font-semibold text-sm mb-4">
              {language === "en"
                ? "Al Andalus Pest Control"
                : "شركة الأندلس لمكافحة حشرات"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-6">
              {t.alAndalusIntro.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto font-semibold">
              {t.alAndalusIntro.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.alAndalusIntro.description}
            </p>
          </div>

          {/* Services Breakdown */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Household Pest Control */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#133563] transition-all hover:shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-4xl mb-6">
                🏠
              </div>
              <h3 className="text-2xl font-bold text-[#133563] mb-6">
                {t.alAndalusIntro.household.title}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.household.cockroach}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.household.termites}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.household.mosquitoes}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.household.rodents}
                  </span>
                </li>
              </ul>
            </div>

            {/* Commercial Pest Control */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#133563] transition-all hover:shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl mb-6">
                🏢
              </div>
              <h3 className="text-2xl font-bold text-[#133563] mb-6">
                {t.alAndalusIntro.commercial.title}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.commercial.restaurants}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.commercial.hospitals}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.commercial.factories}
                  </span>
                </li>
              </ul>
            </div>

            {/* Agricultural Pest Control */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#133563] transition-all hover:shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-4xl mb-6">
                🌾
              </div>
              <h3 className="text-2xl font-bold text-[#133563] mb-6">
                {t.alAndalusIntro.agricultural.title}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.agricultural.crops}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#133563] mt-1">✓</span>
                  <span className="text-gray-700">
                    {t.alAndalusIntro.agricultural.plants}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Why Choose Al-Andalus */}
          <div className="bg-gradient-to-br from-[#133563] to-[#1a2552] rounded-3xl shadow-2xl p-8 md:p-12 mb-16 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t.alAndalusIntro.whyChoose.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {language === "en"
                      ? "Comprehensive Solutions"
                      : "حلول شاملة"}
                  </h4>
                  <p className="text-white/90">
                    {t.alAndalusIntro.whyChoose.comprehensive}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl">🌿</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {language === "en"
                      ? "Safe & Eco-Friendly"
                      : "آمن وصديق للبيئة"}
                  </h4>
                  <p className="text-white/90">
                    {t.alAndalusIntro.whyChoose.safe}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl">👨‍🔬</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {language === "en" ? "Qualified Team" : "فريق مؤهل"}
                  </h4>
                  <p className="text-white/90">
                    {t.alAndalusIntro.whyChoose.qualified}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <div className="text-3xl">💰</div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    {language === "en" ? "Competitive Prices" : "أسعار تنافسية"}
                  </h4>
                  <p className="text-white/90">
                    {t.alAndalusIntro.whyChoose.competitive}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#e4d8a7]">
            <h3 className="text-3xl font-bold text-[#133563] mb-6 text-center">
              {t.alAndalusIntro.serviceAreas.title}
            </h3>
            <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
              {t.alAndalusIntro.serviceAreas.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
              {[
                { name: language === "en" ? "Dubai" : "دبي", emoji: "🏙️" },
                {
                  name: language === "en" ? "Abu Dhabi" : "أبوظبي",
                  emoji: "🏛️",
                },
                {
                  name: language === "en" ? "Sharjah" : "الشارقة",
                  emoji: "🏘️",
                },
                { name: language === "en" ? "Ajman" : "عجمان", emoji: "🏖️" },
                {
                  name: language === "en" ? "Ras Al Khaimah" : "رأس الخيمة",
                  emoji: "⛰️",
                },
                {
                  name: language === "en" ? "Fujairah" : "الفجيرة",
                  emoji: "🌊",
                },
                {
                  name: language === "en" ? "Umm Al Quwain" : "أم القيوين",
                  emoji: "🏝️",
                },
                {
                  name: language === "en" ? "All UAE" : "جميع الإمارات",
                  emoji: "🇦🇪",
                },
              ].map((location, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-4 rounded-xl text-center hover:shadow-lg transition-all border-2 border-transparent hover:border-[#133563]"
                >
                  <div className="text-3xl mb-2">{location.emoji}</div>
                  <div className="font-semibold text-[#133563] text-sm">
                    {location.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Al Andalus Intro Section Images Gallery */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                img0033,
                img0027,
                img0034,
                img0030,
                img0031,
                img0032,
              ].map((img, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <Image
                    src={img}
                    alt={`Pest Control Service ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-[#133563] font-semibold text-sm mb-4">
              {language === "en" ? "Our Services" : "خدماتنا"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Comprehensive pest control solutions for homes and businesses across the UAE"
                : "حلول شاملة لمكافحة حشرات للمنازل والشركات في جميع أنحاء الإمارات"}
            </p>
          </div>

          {/* Main Services Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: t.services.emergency.title,
                price: t.services.emergency.price,
                description: t.services.emergency.description,
                icon: "🚨",
                gradient: "from-red-500 to-orange-500",
                badge: language === "en" ? "Popular" : "شائع",
              },
              {
                title: t.services.residential.title,
                price: t.services.residential.price,
                description: t.services.residential.description,
                icon: "🏠",
                gradient: "from-blue-500 to-cyan-500",
                badge: language === "en" ? "Best Value" : "أفضل قيمة",
              },
              {
                title: t.services.standard.title,
                price: t.services.standard.price,
                description: t.services.standard.description,
                icon: "⭐",
                gradient: "from-green-500 to-emerald-500",
                badge: language === "en" ? "Standard" : "قياسي",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-[#133563] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {service.badge}
                  </div>
                )}

                {/* Icon with gradient background */}
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#133563] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-baseline gap-2 mb-6">
                  <div className="text-4xl font-bold text-[#133563]">
                    {service.price.split(" ")[0]}
                  </div>
                  <div className="text-gray-500">
                    {service.price.split(" ").slice(1).join(" ")}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#133563] to-[#1a2552] text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold transform group-hover:scale-105">
                  {t.nav.booking}
                </button>
              </div>
            ))}
          </div>

          {/* Specialized Services */}
          <div>
            <h3 className="text-3xl font-bold text-[#133563] text-center mb-4">
              {t.services.specialized.title}
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {language === "en"
                ? "Targeted solutions for specific pest problems"
                : "حلول مستهدفة لمشاكل حشرات المحددة"}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {[
                {
                  key: "cockroach",
                  icon: "🪳",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  key: "rodents",
                  icon: "🐭",
                  color: "from-gray-600 to-gray-800",
                },
                {
                  key: "birds",
                  icon: "🕊️",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  key: "termites",
                  icon: "🐜",
                  color: "from-red-400 to-red-600",
                },
                {
                  key: "general",
                  icon: "🐛",
                  color: "from-green-400 to-green-600",
                },
              ].map((service) => (
                <div
                  key={service.key}
                  className="group bg-white border-2 border-gray-200 p-8 rounded-2xl hover:border-[#133563] transition-all cursor-pointer text-center hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#133563]">
                    {
                      t.services.specialized[
                        service.key as keyof typeof t.services.specialized
                      ]
                    }
                  </h4>
                </div>
              ))}
            </div>

            {/* Services Section Images Gallery */}
        
          </div>
        </div>
      </section>

      {/* Pest Control Services List Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-[#e4d8a7]/10 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-white font-semibold text-sm mb-4">
              {language === "en" ? "Our Services" : "خدماتنا"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {language === "en"
                ? "Comprehensive Pest Control Services"
                : "خدمات مكافحة حشرات الشاملة"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Professional pest control solutions across all UAE emirates"
                : "حلول مكافحة حشرات المهنية في جميع إمارات الإمارات"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                en: "Pest Control Company in Abu Dhabi",
                ar: "شركة مكافحة حشرات في أبوظبي",
              },
              {
                en: "Pest Control in Dubai",
                ar: "مكافحة حشرات في دبي",
              },
              {
                en: "Pest Control Services in Sharjah",
                ar: "خدمات مكافحة حشرات في الشارقة",
              },
              {
                en: "Pest Spraying Company in Ajman",
                ar: "شركة رش حشرات في عجمان",
              },
              {
                en: "Pest Control in Ras Al Khaimah",
                ar: "مكافحة حشرات في رأس الخيمة",
              },
              {
                en: "Pest Control in Fujairah",
                ar: "مكافحة حشرات في الفجيرة",
              },
              {
                en: "Pest Spraying in Umm Al Quwain",
                ar: "رش حشرات في أم القيوين",
              },
              {
                en: "Commercial Pest Control in Abu Dhabi",
                ar: "مكافحة حشرات التجارية في أبوظبي",
              },
              {
                en: "Ant Control in Dubai",
                ar: "مكافحة النمل في دبي",
              },
              {
                en: "Cockroach Control in Sharjah",
                ar: "مكافحة الصراصير في الشارقة",
              },
              {
                en: "Mosquito Control in Ajman",
                ar: "مكافحة البعوض في عجمان",
              },
              {
                en: "Pesticide Spraying Services in Ras Al Khaimah",
                ar: "خدمات رش المبيدات في رأس الخيمة",
              },
              {
                en: "Pest Control in Fujairah",
                ar: "مكافحة حشرات في الفجيرة",
              },
              {
                en: "Pest Control Company in Umm Al Quwain",
                ar: "شركة مكافحة حشرات في أم القيوين",
              },
              {
                en: "Home Pest Control Services in Abu Dhabi",
                ar: "خدمات مكافحة حشرات المنزلية في أبوظبي",
              },
              {
                en: "Rodent Control in Dubai",
                ar: "مكافحة القوارض في دبي",
              },
              {
                en: "Pesticide Spraying in Sharjah",
                ar: "رش المبيدات في الشارقة",
              },
              {
                en: "Pest Control in Villas in Abu Dhabi",
                ar: "مكافحة حشرات في الفلل في أبوظبي",
              },
              {
                en: "Pest Control Services in Offices in Dubai",
                ar: "خدمات مكافحة حشرات في المكاتب في دبي",
              },
              {
                en: "Garden Pest Spraying in Sharjah",
                ar: "رش حشرات الحدائق في الشارقة",
              },
              {
                en: "Insect Treatment in Ajman",
                ar: "معالجة حشرات في عجمان",
              },
              {
                en: "Poisonous Insect Control in Ras Al Khaimah",
                ar: "مكافحة حشرات السامة في رأس الخيمة",
              },
              {
                en: "Pest Control Company Reviews in Fujairah",
                ar: "مراجعات شركات مكافحة حشرات في الفجيرة",
              },
              {
                en: "Pest Control Tips in Umm Al Quwain",
                ar: "نصائح مكافحة حشرات في أم القيوين",
              },
              {
                en: "Pest Control in Residential Areas in Abu Dhabi",
                ar: "مكافحة حشرات في المناطق السكنية في أبوظبي",
              },
              {
                en: "Specialized spraying services in Dubai",
                ar: "خدمات الرش المتخصصة في دبي",
              },
              {
                en: "Immediate pest control solutions in Sharjah",
                ar: "حلول مكافحة حشرات الفورية في الشارقة",
              },
              {
                en: "Natural pest control in Ajman",
                ar: "مكافحة حشرات الطبيعية في عجمان",
              },
              {
                en: "Pest control in restaurants in Ras Al Khaimah",
                ar: "مكافحة حشرات في المطاعم في رأس الخيمة",
              },
              {
                en: "Safe insect spraying for children in Fujairah",
                ar: "رش حشرات الآمن للأطفال في الفجيرة",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-[#133563] transition-all hover:shadow-xl transform hover:-translate-y-1 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#133563] font-bold text-lg mt-1">
                    {index + 1}.
                  </span>
                  <span className="text-gray-700 text-base leading-relaxed">
                    {language === "en" ? service.en : service.ar}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pest Control Services List Section Images Gallery */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-12">
            {[
              img0040,
              img0041,
              img0042,
          
            ].map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <Image
                  src={img}
                  alt={`Pest Control Service ${index + 1}`}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {language === "en" ? "Why Choose Us?" : "لماذا تختارنا؟"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "We provide safe, effective, and reliable pest control solutions"
                : "نوفر حلول مكافحة حشرات آمنة وفعالة وموثوقة"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title:
                  language === "en"
                    ? "Safety & Effectiveness"
                    : "الأمان والفعالية",
                description:
                  language === "en"
                    ? "Using environmentally safe materials that are safe for human health and pets"
                    : "استخدام مواد آمنة على البيئة وآمنة على صحة الإنسان والحيوانات الأليفة",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: "🏠",
                title:
                  language === "en"
                    ? "Home & Office Protection"
                    : "حماية المنزل والمكاتب",
                description:
                  language === "en"
                    ? "Maintaining an indoor environment free of pests for your peace of mind"
                    : "الحفاظ على بيئة داخلية خالية من حشرات لراحة بالك",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: "⚡",
                title:
                  language === "en"
                    ? "Fast & Effective Services"
                    : "خدمات سريعة وفعالة",
                description:
                  language === "en"
                    ? "Quick response to pest problems with 24/7 emergency services"
                    : "استجابة سريعة لمشاكل حشرات مع خدمات الطوارئ على مدار الساعة",
                color: "from-orange-500 to-red-600",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#133563] transition-all hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#133563] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Company Benefits Section Images Gallery */}
       
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-[#e4d8a7]/20">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-[#133563] font-semibold text-sm mb-4">
              {language === "en" ? "Company Information" : "معلومات الشركة"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {t.companyInfoSection.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Comprehensive information about pest control companies in the UAE"
                : "معلومات شاملة عن شركات مكافحة حشرات في الإمارات"}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Company Definition */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-[#133563] mb-6">
                {t.companyInfoSection.definition.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.companyInfoSection.definition.content}
              </p>
            </div>

            {/* Services Provided */}
            <div className="bg-gradient-to-br from-[#e4d8a7] to-[#539B47] rounded-3xl shadow-xl p-8 md:p-12 mb-8">
              <h3 className="text-3xl font-bold text-[#133563] mb-8 text-center">
                {t.companyInfoSection.services.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🪳</div>
                    <div>
                      <h4 className="font-bold text-[#133563] mb-2">
                        {language === "en"
                          ? "Cockroach Control"
                          : "مكافحة الصراصير"}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {t.companyInfoSection.services.cockroach}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🐜</div>
                    <div>
                      <h4 className="font-bold text-[#133563] mb-2">
                        {language === "en" ? "Ant Control" : "مكافحة النمل"}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {t.companyInfoSection.services.ants}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🦟</div>
                    <div>
                      <h4 className="font-bold text-[#133563] mb-2">
                        {language === "en"
                          ? "Mosquito Control"
                          : "مكافحة البعوض"}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {t.companyInfoSection.services.mosquitoes}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🐭</div>
                    <div>
                      <h4 className="font-bold text-[#133563] mb-2">
                        {language === "en"
                          ? "Rodent Control"
                          : "مكافحة القوارض"}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {t.companyInfoSection.services.rodents}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/50 md:col-span-2">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🛡️</div>
                    <div>
                      <h4 className="font-bold text-[#133563] mb-2">
                        {language === "en"
                          ? "Preventive Treatment"
                          : "المعالجة الوقائية"}
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {t.companyInfoSection.services.preventive}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
              <h3 className="text-3xl font-bold text-[#133563] mb-8 text-center">
                {t.companyInfoSection.benefits.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">✅</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Safety & Effectiveness"
                      : "الأمان والفعالية"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.safety}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🏠</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Protecting Homes & Offices"
                      : "حماية المنازل والمكاتب"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.protection}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">⚡</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Fast & Efficient Services"
                      : "خدمات سريعة وفعالة"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.fast}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Comprehensive Services"
                      : "خدمات شاملة"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.comprehensive}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border-2 border-yellow-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en" ? "Service Guarantee" : "ضمان الخدمة"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.guarantee}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl border-2 border-teal-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en" ? "Natural Solutions" : "حلول طبيعية"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.natural}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🏡</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Residential Services"
                      : "الخدمات السكنية"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.residential}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🏢</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Commercial Services"
                      : "الخدمات التجارية"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.commercial}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border-2 border-rose-100 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">🧼</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Sterilization Services"
                      : "خدمات التعقيم"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.sterilization}
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border-2 border-violet-100 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
                  <div className="text-4xl mb-4">🔬</div>
                  <h4 className="font-bold text-[#133563] mb-3">
                    {language === "en"
                      ? "Specialized Treatment"
                      : "المعالجة المتخصصة"}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t.companyInfoSection.benefits.specialized}
                  </p>
                </div>
              </div>
            </div>

       
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#e4d8a7]/30 via-white to-[#e4d8a7]/30">
        <div className="container mx-auto max-w-[1250px]">
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/about"
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center border-2 border-transparent hover:border-[#133563]"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform">
                ℹ️
              </div>
              <h3 className="text-2xl font-bold text-[#133563] mb-4">
                {t.nav.about}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === "en"
                  ? "Learn more about our company and mission"
                  : "تعرف على المزيد عن شركتنا ورسالتنا"}
              </p>
              <div className="mt-6 text-[#133563] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                {language === "en" ? "Learn More" : "اعرف المزيد"}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/services"
              className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center border-2 border-transparent hover:border-[#133563]"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform">
                🛠️
              </div>
              <h3 className="text-2xl font-bold text-[#133563] mb-4">
                {t.nav.services}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {language === "en"
                  ? "Explore our comprehensive pest control services"
                  : "استكشف خدمات مكافحة حشرات الشاملة لدينا"}
              </p>
              <div className="mt-6 text-[#133563] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                {language === "en" ? "View Services" : "عرض الخدمات"}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
            <Link
              href="/contact"
              className="group bg-gradient-to-br from-[#133563] to-[#1a2552] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 text-center text-white"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl transform group-hover:scale-110 transition-transform">
                📞
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.nav.booking}</h3>
              <p className="text-white/90 leading-relaxed">
                {language === "en"
                  ? "Get in touch with us today"
                  : "تواصل معنا اليوم"}
              </p>
              <div className="mt-6 text-white font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                {language === "en" ? "Contact Us" : "اتصل بنا"}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Quick Links Section Images Gallery */}
         
        </div>
      </section>

      {/* Enhanced Locations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {t.locations.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Serving all UAE emirates with professional pest control services"
                : "نخدم جميع إمارات الإمارات بخدمات مكافحة حشرات المهنية"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "abuDhabi",
              "dubai",
              "sharjah",
              "ajman",
              "ummAlQuwain",
              "alAin",
            ].map((location) => (
              <div
                key={location}
                className="group bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-8 rounded-2xl text-center hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-[#133563]"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  📍
                </div>
                <h3 className="text-xl font-bold text-[#133563]">
                  {t.locations[location as keyof typeof t.locations]}
                </h3>
              </div>
            ))}
          </div>

          {/* Locations Section Images Gallery */}
    
        </div>
      </section>

      {/* Articles Section with Accordion */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-[#e4d8a7]/20">
        <div className="container mx-auto max-w-[1250px]">
          <h2 className="text-4xl font-bold text-[#133563] text-center mb-12">
            {t.articles.title}
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion
              items={t.articles.items.map((article, index) => ({
                id: `article-${index}`,
                title: article.title,
                content: article.content,
              }))}
            />
          </div>

     
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-[#133563] font-semibold text-sm mb-4">
              {language === "en" ? "Client Reviews" : "آراء العملاء"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "See what our satisfied customers have to say"
                : "شاهد ما يقوله عملاؤنا الراضون"}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed text-center">
                {language === "en"
                  ? '"Excellent service! The team was professional and thorough. Our pest problem was completely resolved."'
                  : '"خدمة ممتازة! كان الفريق محترفًا وشاملًا. تم حل مشكلة حشرات لدينا بالكامل."'}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#133563] to-[#1a2552] flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <p className="font-bold text-[#133563]">
                    {language === "en" ? "Ahmed M." : "أحمد م."}
                  </p>
                  <p className="text-sm text-gray-500">
                    {language === "en" ? "Dubai" : "دبي"}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed text-center">
                {language === "en"
                  ? '"Very responsive and effective. They came quickly for our emergency and solved the issue immediately."'
                  : '"استجابة وفعالية عالية. جاءوا بسرعة لحالتنا الطارئة وحلوا المشكلة على الفور."'}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <p className="font-bold text-[#133563]">
                    {language === "en" ? "Sarah K." : "سارة ك."}
                  </p>
                  <p className="text-sm text-gray-500">
                    {language === "en" ? "Abu Dhabi" : "أبوظبي"}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100">
              <div className="flex items-center gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic leading-relaxed text-center">
                {language === "en"
                  ? '"Safe methods and great results. Highly recommend for families with children and pets."'
                  : '"طرق آمنة ونتائج رائعة. أنصح بها بشدة للعائلات التي لديها أطفال وحيوانات أليفة."'}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                  MA
                </div>
                <div>
                  <p className="font-bold text-[#133563]">
                    {language === "en" ? "Mohammed A." : "محمد أ."}
                  </p>
                  <p className="text-sm text-gray-500">
                    {language === "en" ? "Sharjah" : "الشارقة"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section Images Gallery */}
         
        </div>
      </section>

      {/* Enhanced FAQ Section with Accordion */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#539B47] rounded-full text-[#133563] font-semibold text-sm mb-4">
              {language === "en" ? "FAQ" : "الأسئلة الشائعة"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#133563] mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === "en"
                ? "Explore our knowledge base for answers to your questions"
                : "استكشف قاعدة المعرفة الخاصة بنا للحصول على إجابات لأسئلتك"}
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <Accordion
              items={t.faq.items.map((faq, index) => ({
                id: `faq-${index}`,
                title: faq.title,
                content: faq.content,
              }))}
            />
          </div>

          {/* FAQ Section Images Gallery */}
         
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#133563] via-[#1f2a6b] to-[#133563] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-[1250px] relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === "en"
              ? "Ready to Get Rid of Pests?"
              : "هل أنت مستعد للتخلص من حشرات؟"}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {language === "en"
              ? "Contact us today for a free consultation and quote. We're here to help 24/7!"
              : "اتصل بنا اليوم للحصول على استشارة مجانية وعرض أسعار. نحن هنا للمساعدة على مدار الساعة!"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+971502765910"
              className="bg-white text-[#133563] px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
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
              <span dir="ltr">+971 50 276 5910</span>
            </a>
          </div>

   
        </div>
      </section>

      {/* Al Andalus Pest Control Company - Effective Solutions Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-[#e4d8a7]/10 to-white">
        <div className="container mx-auto max-w-[1250px]">
          {/* Gallery Images */}
     

          {/* Main Article Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 border-2 border-gray-100">
            <h2
              className={`text-3xl md:text-4xl font-bold text-[#133563] mb-6 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "en"
                ? "Al Andalus Pest Control Company in the UAE: Effective and Sustainable Solutions"
                : "شركة الأندلس لمكافحة حشرات في الإمارات: حلول فعالة ومستدامة"}
            </h2>
            <p
              className={`text-lg text-gray-700 leading-relaxed mb-6 ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "en"
                ? "Pest control in the UAE is a vital sector requiring special attention. With the diversity of insects and rodents in the Emirates, finding effective and sustainable solutions for their control becomes essential. This article will review the most important methods for pest control in each emirate."
                : "مكافحة حشرات في الإمارات هي قطاع حيوي يتطلب اهتمامًا خاصًا. مع تنوع حشرات والقوارض في الإمارات، يصبح العثور على حلول فعالة ومستدامة لمكافحتها أمرًا ضروريًا. ستراجع هذه المقالة أهم طرق مكافحة حشرات في كل إمارة."}
            </p>

            {/* Pest Control by Emirate */}
            <div className="space-y-8">
              {/* Abu Dhabi */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Abu Dhabi:"
                    : "مكافحة حشرات في أبوظبي:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Abu Dhabi, the capital of the UAE, suffers from significant insect problems. Therefore, it's important to find specialized pest control services in Abu Dhabi. You can benefit from:"
                    : "أبوظبي، عاصمة الإمارات، تعاني من مشاكل حشرات كبيرة. لذلك، من المهم العثور على خدمات مكافحة حشرات متخصصة في أبوظبي. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Cockroach control services in Abu Dhabi"
                      : "خدمات مكافحة الصراصير في أبوظبي"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Termite control in Abu Dhabi"
                      : "مكافحة النمل الأبيض في أبوظبي"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control solutions in Abu Dhabi"
                      : "حلول مكافحة القوارض في أبوظبي"}
                  </li>
                </ul>
              </div>

              {/* Dubai */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Dubai:"
                    : "مكافحة حشرات في دبي:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Dubai, the city of wonders, needs effective pest control services. You can benefit from:"
                    : "دبي، مدينة العجائب، تحتاج إلى خدمات مكافحة حشرات فعالة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Pest control in homes in Dubai"
                      : "مكافحة حشرات في المنازل في دبي"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control services in Dubai"
                      : "خدمات مكافحة القوارض في دبي"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Bed bug control solutions in Dubai"
                      : "حلول مكافحة بق الفراش في دبي"}
                  </li>
                </ul>
              </div>

              {/* Sharjah */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Sharjah:"
                    : "مكافحة حشرات في الشارقة:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Sharjah, the emirate of culture, needs specialized pest control services. You can benefit from:"
                    : "الشارقة، إمارة الثقافة، تحتاج إلى خدمات مكافحة حشرات متخصصة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Cockroach control in Sharjah"
                      : "مكافحة الصراصير في الشارقة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Termite control services in Sharjah"
                      : "خدمات مكافحة النمل الأبيض في الشارقة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rat control solutions in Sharjah"
                      : "حلول مكافحة الفئران في الشارقة"}
                  </li>
                </ul>
              </div>

              {/* Ajman */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Ajman:"
                    : "مكافحة حشرات في عجمان:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Ajman, the emirate of friendship, needs effective pest control services. You can benefit from:"
                    : "عجمان، إمارة الصداقة، تحتاج إلى خدمات مكافحة حشرات فعالة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Pest control in homes in Ajman"
                      : "مكافحة حشرات في المنازل في عجمان"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control services in Ajman"
                      : "خدمات مكافحة القوارض في عجمان"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Bed bug control solutions in Ajman"
                      : "حلول مكافحة بق الفراش في عجمان"}
                  </li>
                </ul>
              </div>

              {/* Ras Al Khaimah */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Ras Al Khaimah:"
                    : "مكافحة حشرات في رأس الخيمة:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Ras Al Khaimah, the emirate of nature, needs specialized pest control services. You can benefit from:"
                    : "رأس الخيمة، إمارة الطبيعة، تحتاج إلى خدمات مكافحة حشرات متخصصة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Cockroach control in Ras Al Khaimah"
                      : "مكافحة الصراصير في رأس الخيمة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Termite control services in Ras Al Khaimah"
                      : "خدمات مكافحة النمل الأبيض في رأس الخيمة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control solutions in Ras Al Khaimah"
                      : "حلول مكافحة القوارض في رأس الخيمة"}
                  </li>
                </ul>
              </div>

              {/* Fujairah */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Fujairah:"
                    : "مكافحة حشرات في الفجيرة:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Fujairah, the emirate of nature, needs effective pest control services. You can benefit from:"
                    : "الفجيرة، إمارة الطبيعة، تحتاج إلى خدمات مكافحة حشرات فعالة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Pest control in homes in Fujairah"
                      : "مكافحة حشرات في المنازل في الفجيرة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control services in Fujairah"
                      : "خدمات مكافحة القوارض في الفجيرة"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Bed bug control solutions in Fujairah"
                      : "حلول مكافحة بق الفراش في الفجيرة"}
                  </li>
                </ul>
              </div>

              {/* Umm Al Quwain */}
              <div className="border-l-4 border-[#133563] pl-6 py-4">
                <h3
                  className={`text-2xl font-bold text-[#133563] mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Pest control in Umm Al Quwain:"
                    : "مكافحة حشرات في أم القيوين:"}
                </h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  {language === "en"
                    ? "Umm Al Quwain, the Emirate of Peace, needs specialized pest control services. You can benefit from:"
                    : "أم القيوين، إمارة السلام، تحتاج إلى خدمات مكافحة حشرات متخصصة. يمكنك الاستفادة من:"}
                </p>
                <ul
                  className={`list-disc list-inside space-y-2 text-gray-700 ${
                    language === "ar" ? "text-right" : "text-left"
                  }`}
                  dir={language === "ar" ? "rtl" : "ltr"}
                >
                  <li>
                    {language === "en"
                      ? "Cockroach control in Umm Al Quwain"
                      : "مكافحة الصراصير في أم القيوين"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Termite control services in Umm Al Quwain"
                      : "خدمات مكافحة النمل الأبيض في أم القيوين"}
                  </li>
                  <li>
                    {language === "en"
                      ? "Rodent control solutions in Umm Al Quwain"
                      : "حلول مكافحة القوارض في أم القيوين"}
                  </li>
                </ul>
              </div>
            </div>

            {/* Tips Section */}
            <div className="mt-12 bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] rounded-2xl p-8">
              <h3
                className={`text-2xl md:text-3xl font-bold text-[#133563] mb-6 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {language === "en"
                  ? "Tips for pest control:"
                  : "نصائح لمكافحة حشرات:"}
              </h3>
              <ol
                className={`list-decimal list-inside space-y-3 text-gray-800 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <li>
                  {language === "en"
                    ? "Keep your home clean."
                    : "حافظ على نظافة منزلك."}
                </li>
                <li>
                  {language === "en"
                    ? "Seal holes and cracks."
                    : "أغلق الثقوب والشقوق."}
                </li>
                <li>
                  {language === "en"
                    ? "Remove dirt and droppings."
                    : "أزل الأوساخ والفضلات."}
                </li>
                <li>
                  {language === "en"
                    ? "Don't leave food uncovered."
                    : "لا تترك الطعام مكشوفًا."}
                </li>
                <li>
                  {language === "en"
                    ? "Use insect nets."
                    : "استخدم شبكات حشرات."}
                </li>
                <li>
                  {language === "en"
                    ? "Spray insecticides regularly."
                    : "رش المبيدات الحشرية بانتظام."}
                </li>
              </ol>
            </div>
          </div>

          {/* Conclusion and Sources Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Conclusion */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100">
              <h3
                className={`text-2xl font-bold text-[#133563] mb-4 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {language === "en" ? "Conclusion" : "الخلاصة"}
              </h3>
              <p
                className={`text-gray-700 leading-relaxed ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {language === "en"
                  ? "Pest control in the UAE requires special attention. It's important to seek out specialized pest control services in each emirate. By following the tips and services mentioned above, you can keep your home and office insect-free."
                  : "مكافحة حشرات في الإمارات تتطلب اهتمامًا خاصًا. من المهم البحث عن خدمات مكافحة حشرات متخصصة في كل إمارة. باتباع النصائح والخدمات المذكورة أعلاه، يمكنك الحفاظ على منزلك ومكتبك خاليين من حشرات."}
              </p>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100">
              <h3
                className={`text-2xl font-bold text-[#133563] mb-4 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                {language === "en" ? "Sources" : "المصادر"}
              </h3>
              <ul
                className={`list-decimal list-inside space-y-2 text-gray-700 ${
                  language === "ar" ? "text-right" : "text-left"
                }`}
                dir={language === "ar" ? "rtl" : "ltr"}
              >
                <li>UAE Ministry of Environment and Water.</li>
                <li>Environment Agency – Abu Dhabi.</li>
                <li>Dubai Health Authority.</li>
                <li>Sharjah Environmental Protection Society.</li>
              </ul>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="bg-gradient-to-br from-[#133563] to-[#1a2552] rounded-3xl shadow-xl p-8 text-white">
            <h3
              className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "en" ? "Contact numbers:" : "أرقام الاتصال:"}
            </h3>
            <div
              className={`flex flex-col md:flex-row gap-6 justify-center items-center ${
                language === "ar" ? "text-right" : "text-left"
              }`}
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              <a
                href="tel:+971502765910"
                className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-white/20 transition-all font-semibold text-lg flex items-center gap-3"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span dir="ltr">+971 50 276 5910</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
