'use client';

import React from 'react';
import { Calendar, ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake, Coffee } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28">
      {/* Subtle ambient gradient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E7D7C1]/40 via-[#F3DDD6]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-[400px] h-[400px] bg-[#FAF0ED]/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF0ED] border border-[#E8BFB3]/40 text-[#44413E] text-xs font-medium tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B28854]" />
              <span>Б’юті-простір у ЖК «Львівський» • Петропавлівська Борщагівка</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light text-[#181716] leading-[1.1] tracking-tight">
              Мистецтво догляду <br />
              <span className="italic font-normal text-[#B28854] font-serif">та бездоганний стиль</span>
            </h1>

            <p className="max-w-2xl text-base sm:text-lg text-[#66625D] font-light leading-relaxed mx-auto lg:mx-0">
              Devichnik Beauty Studio — ваш надійний партнер у світі краси. Спеціалізуємося
              на складних техніках фарбування Airtouch, відновленні волосся JOICO і BRAÉ,
              стійкому манікюрі, архітектурі брів та нарощуванні вій.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#E7D7C1]" />
                <span>Записатися онлайн</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-xs uppercase tracking-wider font-semibold text-[#181716] bg-white/80 hover:bg-white border border-[#DDD3C5] transition-all duration-300 hover:shadow-sm"
              >
                <span>Прайс-лист та послуги</span>
                <ArrowUpRight className="w-4 h-4 text-[#8C8680]" />
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EAE3D9]/80">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-[#FAF0ED] text-[#B28854]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-medium text-[#181716]">100% Якість</div>
                  <div className="text-xs text-[#8C8680]">JOICO K-PAK, BRAÉ, MATRIX</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-[#FAF0ED] text-[#B28854]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-medium text-[#181716]">4.9★ Рейтинг</div>
                  <div className="text-xs text-[#8C8680]">Справжні відгуки клієнтів в Altegio</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-[#FAF0ED] text-[#B28854]">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-serif text-lg font-medium text-[#181716]">Затишна атмосфера</div>
                  <div className="text-xs text-[#8C8680]">Ароматна кава, чай & релакс</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main aesthetic image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Інтер'єр Devichnik Beauty Studio"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#E7D7C1] font-medium block">
                    вул. Миру, 11-А
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-light">
                    Час, присвячений собі
                  </p>
                </div>
              </div>

              {/* Floating Glassmorphism Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-8 glass-card p-4 rounded-2xl shadow-xl max-w-[210px] hidden sm:block">
                <div className="flex items-center space-x-2 text-xs font-medium text-[#181716] mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Відкрито онлайн-запис</span>
                </div>
                <p className="text-[11px] text-[#66625D]">
                  Доступні вільні віконця на фарбування, догляд та манікюр
                </p>
              </div>

              {/* Floating Glassmorphism Badge 2 */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-card p-4 rounded-2xl shadow-xl max-w-[220px]">
                <div className="flex items-center space-x-1 text-amber-500 text-sm mb-1">
                  {'★'.repeat(5)}
                </div>
                <p className="text-xs font-serif font-medium text-[#181716]">
                  «Улюблене місце відпочинку та краси»
                </p>
                <span className="text-[10px] text-[#8C8680] uppercase tracking-wider block mt-0.5">
                  ЖК Львівський
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
