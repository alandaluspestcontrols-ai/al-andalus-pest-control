"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { images, videos } from "../../public/assets";

export default function Gallery() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-[#e4d8a7] via-[#d9d0a0] to-[#d4c897] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#2a347c] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2a347c] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-[1250px] relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[#2a347c] font-semibold text-sm mb-4">
            {language === "en" ? "Gallery" : "المعرض"}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2a347c] mb-6 leading-tight">
            {language === "en" ? "Our Gallery" : "معرضنا"}
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Explore our work and see the quality of our pest control services"
              : "استكشف أعمالنا وشاهد جودة خدمات مكافحة حشرات لدينا"}
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-[1250px]">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("images")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "images"
                  ? "bg-[#2a347c] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {language === "en" ? "Images" : "الصور"} ({images.length})
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "videos"
                  ? "bg-[#2a347c] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {language === "en" ? "Videos" : "الفيديوهات"} ({videos.length})
            </button>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      {activeTab === "images" && (
        <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto max-w-[1250px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Videos Gallery */}
      {activeTab === "videos" && (
        <section className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto max-w-[1250px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="aspect-video relative bg-gray-900">
                    <video
                      src={video}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      onMouseEnter={(e) => {
                        e.currentTarget.play();
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-8 h-8 text-[#2a347c] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white font-semibold">
                      {language === "en"
                        ? `Video ${index + 1}`
                        : `فيديو ${index + 1}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full">
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[90vh] rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

