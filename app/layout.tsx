import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import FixedContactButtons from "./components/FixedContactButtons";
import WelcomePopup from "./components/WelcomePopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Andalus Pest Control | شركة الاندلس لمكافحة حشرات",
  description: "Professional pest control services in UAE. Effective solutions for cockroaches, rodents, termites, and more in Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, and Al Ain.",
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <FixedContactButtons />
          <WelcomePopup />
        </LanguageProvider>
      </body>
    </html>
  );
}
