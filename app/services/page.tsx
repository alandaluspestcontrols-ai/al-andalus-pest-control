"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import LanguageToggle from "../components/LanguageToggle";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-[#e4d8a7] via-[#d9d0a0] to-[#d4c897] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#133563] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#133563] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-[1250px] relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#133563] font-semibold text-sm mb-4">
            {language === "en" ? "Our Services" : "خدماتنا"}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#133563] mb-6 leading-tight">
            {t.services.title}
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Comprehensive pest control solutions for homes and businesses across the UAE"
              : "حلول شاملة لمكافحة حشرات للمنازل والشركات في جميع أنحاء الإمارات"}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#e4d8a7] rounded-full text-[#133563] font-semibold text-sm mb-4">
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

                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-[#133563] to-[#1a2552] text-white py-4 rounded-xl hover:shadow-lg transition-all font-semibold transform group-hover:scale-105 text-center"
                >
                  {t.nav.booking}
                </Link>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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
          </div>
        </div>
      </section>

      {/* Service Areas */}
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
