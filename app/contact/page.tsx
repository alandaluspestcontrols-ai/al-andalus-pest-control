"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Initialize EmailJS
  const SERVICE_ID = "service_64nc3hd";
  const TEMPLATE_ID = "template_eho9dne";
  const PUBLIC_KEY = "d8gTcQ_3Z2smo-saQ";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log("EmailJS Response:", response);

      // Success
      setSubmitStatus({
        type: "success",
        message:
          language === "en"
            ? "Message sent successfully! We'll get back to you soon."
            : "تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch (error: any) {
      // Error - log for debugging
      console.error("EmailJS Error:", error);
      console.error("Error Details:", {
        text: error?.text,
        status: error?.status,
        message: error?.message,
      });

      // Error
      setSubmitStatus({
        type: "error",
        message:
          language === "en"
            ? `Failed to send message. ${
                error?.text || error?.message || "Please try again later."
              }`
            : `فشل إرسال الرسالة. ${
                error?.text ||
                error?.message ||
                "يرجى المحاولة مرة أخرى لاحقاً."
              }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2a347c] to-[#1a2552] py-20 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.contact.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {language === "en"
              ? "Get in touch with us for all your pest control needs"
              : "تواصل معنا لجميع احتياجاتك في مكافحة حشرات"}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className=" mx-auto max-w-[1250px] relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-[#2a347c] mb-8">
                {language === "en" ? "Contact Information" : "معلومات الاتصال"}
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#2a347c]">
                  <span>📞</span> {t.contact.phone}
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+971502765910"
                    className="block text-lg text-gray-700 hover:text-[#2a347c] transition-colors p-4 bg-gray-50 rounded-lg hover:bg-[#e4d8a7]/20"
                  >
                    <span dir="ltr">+971 50 276 5910</span>
                  </a>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#2a347c]">
                  <span>📍</span> {t.contact.location}
                </h3>
                <p className="text-lg text-gray-700 p-4 bg-gray-50 rounded-lg">
                  {t.contact.address}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#2a347c]">
                  {t.contact.social}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-[#2a347c] text-white p-4 rounded-full hover:bg-[#1a2552] transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="bg-[#2a347c] text-white p-4 rounded-full hover:bg-[#1a2552] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="bg-[#2a347c] text-white p-4 rounded-full hover:bg-[#1a2552] transition-colors"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-[#2a347c] mb-8">
                {language === "en" ? "Send us a Message" : "أرسل لنا رسالة"}
              </h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Success/Error Notification */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    <p className="font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {language === "en" ? "Name" : "الاسم"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#2a347c] focus:outline-none transition-colors"
                    placeholder={language === "en" ? "Your Name" : "اسمك"}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {language === "en" ? "Phone" : "الهاتف"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#2a347c] focus:outline-none transition-colors"
                    placeholder={language === "en" ? "Your Phone" : "هاتفك"}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {language === "en" ? "Email" : "البريد الإلكتروني"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#2a347c] focus:outline-none transition-colors"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {language === "en" ? "Message" : "الرسالة"}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#2a347c] focus:outline-none transition-colors"
                    placeholder={language === "en" ? "Your Message" : "رسالتك"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#2a347c] text-white px-8 py-4 rounded-full hover:bg-[#1a2552] transition-colors font-semibold text-lg ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting
                    ? language === "en"
                      ? "Sending..."
                      : "جاري الإرسال..."
                    : language === "en"
                    ? "Send Message"
                    : "إرسال الرسالة"}
                </button>
              </form>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="mt-16 bg-gradient-to-br from-[#e4d8a7] to-[#d4c897] p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-[#2a347c] mb-4">
              {t.contact.subscribe}
            </h3>
            <p className="text-gray-700 mb-6">
              {language === "en"
                ? "Stay updated with our latest services and offers"
                : "ابق على اطلاع بآخر خدماتنا وعروضنا"}
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                className="flex-1 px-6 py-4 rounded-full text-[#2a347c] focus:outline-none focus:ring-2 focus:ring-[#2a347c]"
              />
              <button
                type="submit"
                className="bg-[#2a347c] text-white px-8 py-4 rounded-full hover:bg-[#1a2552] transition-colors font-semibold"
              >
                {language === "en" ? "Subscribe" : "اشترك"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
