'use client';

import React, { useState } from 'react';
import { Service } from '@/types';
import { Clock, Sparkles, CheckCircle2, ChevronRight, Search } from 'lucide-react';

interface ServicesSectionProps {
  services: Service[];
  onSelectService: (service: Service) => void;
}

export default function ServicesSection({ services, onSelectService }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Усі');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Усі',
    'Фарбування',
    'Догляд JOICO & BRAÉ',
    'Стрижки та зачіски',
    'Манікюр',
    'Брови та Вії',
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      activeCategory === 'Усі' ||
      service.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (service.description &&
        service.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('uk-UA').format(price) + ' ₴';
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F1EB]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#B28854] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Прайс-лист & Ритуали краси</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181716] tracking-tight">
            Послуги Devichnik Beauty Studio
          </h2>
          <p className="text-sm sm:text-base text-[#66625D] font-light leading-relaxed">
            Працюємо виключно на сертифікованих оригінальних препаратах світового рівня:
            MATRIX, JOICO K-PAK та BRAÉ. Кожна процедура включає індивідуальну консультацію.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#181716] text-white shadow-md'
                    : 'bg-white/80 text-[#66625D] hover:bg-white hover:text-[#181716] border border-[#DDD3C5]/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8C8680] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук послуги..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/90 border border-[#DDD3C5]/70 text-xs text-[#181716] placeholder-[#8C8680] focus:outline-none focus:border-[#B28854] focus:ring-1 focus:ring-[#B28854] transition-all"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FAF0ED]">
                  {service.imageUrl ? (
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#8C8680]">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  )}

                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-[#44413E] shadow-sm">
                      {service.category}
                    </span>
                    {service.isPopular && (
                      <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold gold-gradient-badge shadow-sm">
                        Хіт запису
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E7D7C1]" />
                    <span>{service.duration} хв</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-[#181716] leading-snug mb-2 group-hover:text-[#B28854] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#66625D] line-clamp-3 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-[#EAE3D9]/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C8680] block">
                    Вартість
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-[#181716]">
                    {formatPrice(service.price)}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#181716] bg-[#FAF8F5] hover:bg-[#181716] hover:text-white border border-[#DDD3C5] transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <span>Обрати</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-[#8C8680]">За цим запитом послуг не знайдено</p>
            <button
              onClick={() => {
                setActiveCategory('Усі');
                setSearchQuery('');
              }}
              className="mt-4 text-xs uppercase tracking-widest text-[#B28854] hover:underline"
            >
              Скинути фільтри
            </button>
          </div>
        )}

        {/* Benefits bar below services */}
        <div className="mt-16 glass-card p-6 sm:p-8 rounded-3xl border border-[#DDD3C5]/60 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="w-6 h-6 text-[#B28854] shrink-0" />
            <div>
              <div className="font-serif font-medium text-[#181716] text-base">Прозорий прайс</div>
              <p className="text-xs text-[#66625D]">Фіксована ціна з урахуванням матеріалів та миття</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="w-6 h-6 text-[#B28854] shrink-0" />
            <div>
              <div className="font-serif font-medium text-[#181716] text-base">Преміальні бренди</div>
              <p className="text-xs text-[#66625D]">Оригінальні формули MATRIX, JOICO K-PAK, BRAÉ</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <CheckCircle2 className="w-6 h-6 text-[#B28854] shrink-0" />
            <div>
              <div className="font-serif font-medium text-[#181716] text-base">Стерильність 100%</div>
              <p className="text-xs text-[#66625D]">Медична обробка інструментів, крафт-пакет відкривається при вас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
