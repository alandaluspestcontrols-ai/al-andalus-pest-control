"use client";

import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import Navigation, { LogoImage } from "../components/Navigation";
import Footer from "../components/Footer";
import { img0033 } from "@/public/assets";

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Main Content Section - Two Column Layout */}
      <section className="py-12 px-4 md:py-20">
        <div className="container mx-auto max-w-[1250px]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Image */}
            <div className="relative w-full h-full min-h-[500px] md:min-h-[724px]">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={img0033}
                  alt="Al Andalus Pest Control"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Welcome Heading */}
              <h1 className="text-4xl md:text-[56px] font-bold text-[#2a347c] leading-tight">
                {t.about.title}
              </h1>

              {/* Company Definition Section */}
              <div className="space-y-4">
                <h2 className="text-lg md:text-xl font-semibold text-[#2a347c]">
                  {t.about.definitionTitle}
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t.about.description}
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t.about.description2}
                </p>
              </div>

              {/* General Manager Section */}
              <div className="space-y-4 pt-4">
                <h3 className="text-3xl md:text-[44px] font-bold text-[#2a347c] leading-tight">
                  {t.about.generalManager.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {t.about.generalManager.description}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="pt-6">
                <ul
                  className="flex flex-wrap gap-4 md:gap-6"
                  aria-label="Social Bar"
                >
                  <li>
                    <a
                      href="https://www.facebook.com/wix"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
                      aria-label="Facebook"
                    >
                      <Image
                        src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png"
                        alt="Facebook"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/wix"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
                      aria-label="Twitter"
                    >
                      <Image
                        src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c7d035ba85f6486680c2facedecdcf4d.png"
                        alt="Twitter"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/wix-com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <Image
                        src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6ea5b4a88f0b4f91945b40499aa0af00.png"
                        alt="LinkedIn"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/alandalus_pestcontrol/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="block w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition-opacity"
                      aria-label="Instagram"
                    >
                      <Image
                        src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_24,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/01c3aff52f2a4dffa526d7a9843d46ea.png"
                        alt="Instagram"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction Section */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a347c] text-center">
              {t.about.companyIntro.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              {t.about.companyIntro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Services Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a347c] text-center">
              {t.about.companyServices.title}
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              {t.about.companyServices.description}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🐜</div>
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en"
                    ? "Termite Control"
                    : "مكافحة النمل الأبيض"}
                </h3>
                <p className="text-gray-700">
                  {t.about.companyServices.termite}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🪳</div>
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Cockroach Control" : "مكافحة الصراصير"}
                </h3>
                <p className="text-gray-700">
                  {t.about.companyServices.cockroach}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🐭</div>
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Rat Control" : "مكافحة الفئران"}
                </h3>
                <p className="text-gray-700">{t.about.companyServices.rat}</p>
              </div>
              <div className="bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🦟</div>
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Mosquito Control" : "مكافحة البعوض"}
                </h3>
                <p className="text-gray-700">
                  {t.about.companyServices.mosquito}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a347c] text-center">
              {t.about.whyChoose.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2a347c]">
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en"
                    ? "Modern Technologies"
                    : "التقنيات الحديثة"}
                </h3>
                <p className="text-gray-700">{t.about.whyChoose.modernTech}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2a347c]">
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Professionalism" : "المهنية"}
                </h3>
                <p className="text-gray-700">
                  {t.about.whyChoose.professionalism}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2a347c]">
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Customized Services" : "خدمات مخصصة"}
                </h3>
                <p className="text-gray-700">{t.about.whyChoose.customized}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2a347c]">
                <h3 className="text-xl font-bold text-[#2a347c] mb-3">
                  {language === "en" ? "Good Reputation" : "سمعة طيبة"}
                </h3>
                <p className="text-gray-700">{t.about.whyChoose.reputation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a347c] text-center">
              {t.about.serviceAreas.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Dubai" : "دبي"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.dubai}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Abu Dhabi" : "أبوظبي"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.abuDhabi}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Sharjah" : "الشارقة"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.sharjah}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Ajman" : "عجمان"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.ajman}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Fujairah" : "الفجيرة"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.fujairah}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Ras Al Khaimah" : "رأس الخيمة"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.rasAlKhaimah}
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-bold text-[#2a347c] mb-2">
                  {language === "en" ? "Umm Al Quwain" : "أم القيوين"}
                </h3>
                <p className="text-gray-700 text-sm">
                  {t.about.serviceAreas.ummAlQuwain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-[#2a347c] to-[#1a2552] text-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.about.contact.title}
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {t.about.contact.description}
            </p>
            <p className="text-2xl md:text-3xl font-bold">
              {t.about.contact.phone}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 px-4 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-[1250px]">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2a347c] text-center">
              {t.about.summary.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              {t.about.summary.description}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
