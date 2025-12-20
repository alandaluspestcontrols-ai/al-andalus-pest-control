"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

export default function StructuredData() {
  const { language } = useLanguage();
  const baseUrl = "https://al-andalus-pestcontrol.com";

  useEffect(() => {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((script) => script.remove());

    // Create structured data for LocalBusiness
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": baseUrl,
      name:
        language === "ar"
          ? "شركة الاندلس لمكافحة حشرات"
          : "Al Andalus Pest Control",
      alternateName:
        language === "ar"
          ? "Al Andalus Pest Control"
          : "شركة الاندلس لمكافحة حشرات",
      description:
        language === "ar"
          ? "خدمات مكافحة حشرات احترافية في الإمارات. حلول فعالة وآمنة للصراصير والقوارض والنمل الأبيض والمزيد في دبي وأبوظبي والشارقة وعجمان وأم القيوين والعين."
          : "Professional pest control services in UAE. Effective solutions for cockroaches, rodents, termites, and more in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, and Al Ain.",
      url: baseUrl,
      telephone: "+971502765910",
      priceRange: "150-300 AED",
      address: {
        "@type": "PostalAddress",
        streetAddress: "AL RASHIDIYA 3 STREET AL AQSA",
        addressLocality: "Ajman",
        addressRegion: "Ajman",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.4052",
        longitude: "55.5136",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Dubai",
        },
        {
          "@type": "City",
          name: "Abu Dhabi",
        },
        {
          "@type": "City",
          name: "Sharjah",
        },
        {
          "@type": "City",
          name: "Ajman",
        },
        {
          "@type": "City",
          name: "Ras Al Khaimah",
        },
        {
          "@type": "City",
          name: "Fujairah",
        },
        {
          "@type": "City",
          name: "Umm Al Quwain",
        },
        {
          "@type": "City",
          name: "Al Ain",
        },
      ],
      serviceType:
        language === "ar"
          ? [
              "مكافحة الصراصير",
              "مكافحة القوارض",
              "مكافحة النمل الأبيض",
              "مكافحة الحشرات العامة",
              "مكافحة النمل",
              "مكافحة البعوض",
            ]
          : [
              "Cockroach Control",
              "Rodent Control",
              "Termite Control",
              "General Pest Control",
              "Ant Control",
              "Mosquito Control",
            ],
      inLanguage: [
        language === "ar" ? "ar" : "en",
        language === "ar" ? "en" : "ar",
      ],
    };

    // Create Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name:
        language === "ar"
          ? "شركة الاندلس لمكافحة حشرات"
          : "Al Andalus Pest Control",
      alternateName:
        language === "ar"
          ? "Al Andalus Pest Control"
          : "شركة الاندلس لمكافحة حشرات",
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-50-276-5910",
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["en", "ar"],
      },
      sameAs: [
        // Add social media links if available
      ],
    };

    // Create Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType:
        language === "ar" ? "خدمات مكافحة الحشرات" : "Pest Control Services",
      provider: {
        "@type": "LocalBusiness",
        name:
          language === "ar"
            ? "شركة الاندلس لمكافحة حشرات"
            : "Al Andalus Pest Control",
      },
      areaServed: {
        "@type": "Country",
        name: "United Arab Emirates",
      },
      description:
        language === "ar"
          ? "خدمات مكافحة حشرات شاملة وآمنة في جميع أنحاء الإمارات العربية المتحدة"
          : "Comprehensive and safe pest control services throughout the United Arab Emirates",
    };

    // Add scripts to head
    const addStructuredData = (schema: object, id: string) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addStructuredData(localBusinessSchema, "local-business-schema");
    addStructuredData(organizationSchema, "organization-schema");
    addStructuredData(serviceSchema, "service-schema");
  }, [language]);

  return null;
}
