'use client';

import React, { useState } from 'react';
import { Review } from '@/types';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <section id="reviews" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FAF0ED]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#B28854] text-xs uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Справжні враження клієнтів</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181716] tracking-tight">
              Відгуки про Devichnik Beauty Studio
            </h2>
            <p className="text-sm sm:text-base text-[#66625D] font-light">
              Чесні відгуки з відкритої системи онлайн-запису Altegio від мешканок ЖК «Львівський»
              та гостей студії.
            </p>
          </div>

          {/* Carousel controls */}
          <div className="flex items-center space-x-3 mt-6 md:mt-0">
            <button
              onClick={prevReview}
              className="p-3 rounded-full border border-[#DDD3C5] bg-white hover:bg-[#181716] hover:text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Попередній відгук"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full border border-[#DDD3C5] bg-white hover:bg-[#181716] hover:text-white transition-colors cursor-pointer shadow-sm"
              aria-label="Наступний відгук"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Big Review Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 mb-12 relative border border-[#DDD3C5]/70 shadow-lg">
          <Quote className="w-16 h-16 text-[#E7D7C1] absolute top-6 right-8 opacity-40 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-1 text-amber-500">
                {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#181716] italic leading-relaxed">
                «{reviews[currentIndex].text}»
              </p>

              <div className="flex items-center space-x-4 pt-2">
                {reviews[currentIndex].avatar ? (
                  <img
                    src={reviews[currentIndex].avatar!}
                    alt={reviews[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#B28854]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#EAE3D9] flex items-center justify-center font-serif text-lg font-bold text-[#44413E]">
                    {reviews[currentIndex].author[0]}
                  </div>
                )}
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#181716]">
                    {reviews[currentIndex].author}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-[#8C8680]">
                    <span>{reviews[currentIndex].date}</span>
                    {reviews[currentIndex].service && (
                      <>
                        <span>•</span>
                        <span className="text-[#B28854] font-medium">
                          {reviews[currentIndex].service}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro rating summary */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-[#EAE3D9] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right">
                <span className="font-serif text-5xl font-light text-[#181716]">4.9★</span>
                <span className="text-sm text-[#8C8680] block mt-1">Рейтинг за відгуками в Altegio</span>
                <div className="flex items-center justify-center lg:justify-end space-x-1 text-amber-400 mt-2">
                  {'★'.repeat(5)}
                </div>
                <span className="text-xs text-[#66625D] mt-2 block">
                  Понад 150 реальних візитів
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Small reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="glass-card p-6 rounded-2xl border border-[#DDD3C5]/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-500 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#44413E] leading-relaxed line-clamp-4 italic mb-4">
                  «{review.text}»
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-[#EAE3D9]/60">
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="text-xs font-serif font-medium text-[#181716]">
                    {review.author}
                  </div>
                  <div className="text-[10px] text-[#8C8680]">{review.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
