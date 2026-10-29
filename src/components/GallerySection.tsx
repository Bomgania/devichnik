'use client';

import React, { useState } from 'react';
import { PortfolioItem } from '@/types';
import { Sparkles, Eye, X, ArrowLeftRight } from 'lucide-react';

interface GallerySectionProps {
  portfolio: PortfolioItem[];
}

export default function GallerySection({ portfolio }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Усі');
  const [previewItem, setPreviewItem] = useState<PortfolioItem | null>(null);
  const [showBefore, setShowBefore] = useState<Record<string, boolean>>({});

  const categories = [
    'Усі',
    'Фарбування',
    'Манікюр',
    'Брови та Вії',
    'Стрижки та зачіски',
    'Догляд JOICO & BRAÉ',
  ];

  const filteredPortfolio = portfolio.filter((item) => {
    if (selectedCategory === 'Усі') return true;
    return item.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const toggleBeforeAfter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBefore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#B28854] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Портфоліо студії</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181716] tracking-tight">
            Галерея робіт & Перевтілень
          </h2>
          <p className="text-sm sm:text-base text-[#66625D] font-light leading-relaxed">
            Природні переливи блонду, ідеальна архітектура брів, доглянуті вії та стійкий манікюр.
            Перегляньте роботи майстрів нашого простору.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#181716] text-white shadow-md'
                    : 'bg-white/80 text-[#66625D] hover:bg-white hover:text-[#181716] border border-[#DDD3C5]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPortfolio.map((item) => {
            const isShowingBefore = showBefore[item.id] && item.beforeImageUrl;
            const currentImg = isShowingBefore ? item.beforeImageUrl! : item.imageUrl;

            return (
              <div
                key={item.id}
                onClick={() => setPreviewItem(item)}
                className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer transform hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#EAE3D9]">
                  <img
                    src={currentImg}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-[#181716] shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Before / After toggle badge if available */}
                  {item.beforeImageUrl && (
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={(e) => toggleBeforeAfter(item.id, e)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#B28854] text-white shadow-md hover:bg-[#8C6436] transition-colors"
                      >
                        <ArrowLeftRight className="w-3 h-3" />
                        <span>{isShowingBefore ? 'Показано: До' : 'Показано: Після'}</span>
                      </button>
                    </div>
                  )}

                  {/* Bottom details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-lg sm:text-xl font-medium leading-snug mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-[#FAF8F5]/80 line-clamp-2 font-light">
                        {item.description}
                      </p>
                    )}
                    {item.master && (
                      <p className="text-[11px] text-[#E7D7C1] mt-2 tracking-wider uppercase font-medium">
                        Майстер: {item.master.name}
                      </p>
                    )}
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="p-3 rounded-full bg-white/90 text-[#181716] shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Zoom Preview */}
        {previewItem && (
          <div
            onClick={() => setPreviewItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setPreviewItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-[#181716] hover:bg-white shadow-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img
                  src={previewItem.imageUrl}
                  alt={previewItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#FAF0ED] text-[#B28854] inline-block mb-3">
                    {previewItem.category}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#181716] mb-3">
                    {previewItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66625D] leading-relaxed mb-4">
                    {previewItem.description ||
                      'Професійне виконання з турботою про здоров’я волосся та природну красу.'}
                  </p>

                  {previewItem.master && (
                    <div className="pt-4 border-t border-[#EAE3D9]">
                      <span className="text-[11px] uppercase tracking-wider text-[#8C8680] block">
                        Автор роботи
                      </span>
                      <p className="font-serif text-base font-semibold text-[#181716]">
                        {previewItem.master.name}
                      </p>
                      <p className="text-xs text-[#66625D]">
                        {previewItem.master.specialization}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-6">
                  <a
                    href="#services"
                    onClick={() => setPreviewItem(null)}
                    className="w-full py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Записатися на цю процедуру</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
