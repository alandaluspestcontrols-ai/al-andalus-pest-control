import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import FixedContactButtons from "./components/FixedContactButtons";
import WelcomePopup from "./components/WelcomePopup";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://al-andalus-pestcontrol.com";

export const metadata: Metadata = {
  title: "Al Andalus Pest Control | شركة الاندلس لمكافحة حشرات",
  description:
    "Professional pest control services in UAE. Effective solutions for cockroaches, rodents, termites, and more in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, and Al Ain.",
  keywords: [
    "pest control UAE",
    "شركة مكافحة حشرات الإمارات",
    "pest control Dubai",
    "مكافحة حشرات دبي",
    "pest control Abu Dhabi",
    "مكافحة حشرات أبوظبي",
    "cockroach control",
    "مكافحة الصراصير",
    "rodent control",
    "مكافحة القوارض",
    "termite control",
    "مكافحة النمل الأبيض",
  ],
  authors: [{ name: "Al Andalus Pest Control" }],
  creator: "Al Andalus Pest Control",
  publisher: "Al Andalus Pest Control",
  alternates: {
    canonical: baseUrl,
    languages: {
      en: baseUrl,
      ar: baseUrl,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AE"],
    url: baseUrl,
    siteName: "Al Andalus Pest Control",
    title: "Al Andalus Pest Control | شركة الاندلس لمكافحة حشرات",
    description:
      "Professional pest control services in UAE. Effective solutions for cockroaches, rodents, termites, and more in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, and Al Ain.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Al Andalus Pest Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Andalus Pest Control | شركة الاندلس لمكافحة حشرات",
    description:
      "Professional pest control services in UAE. Effective solutions for cockroaches, rodents, termites, and more.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Hreflang tags for Arabic and English - Critical for Google to index both language versions */}
        <link
          rel="alternate"
          hrefLang="en"
          href="https://al-andalus-pestcontrol.com"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://al-andalus-pestcontrol.com"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://al-andalus-pestcontrol.com"
        />
        {/* Additional Arabic Open Graph metadata for better Arabic search visibility */}
        <meta property="og:locale:alternate" content="ar_AE" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <StructuredData />
          {children}
          <FixedContactButtons />
          <WelcomePopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
