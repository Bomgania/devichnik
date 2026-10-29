'use client';

import React from 'react';
import { Sparkles, Heart, Coffee, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function AboutStudio() {
  const brandPillars = [
    {
      title: 'Індивідуальний підхід',
      desc: 'Детальна консультація та оцінка стану волосся, шкіри чи нігтів перед кожною процедурою.',
      icon: Heart,
    },
    {
      title: 'Преміальні бренди',
      desc: 'Працюємо на сертифікованих препаратах MATRIX, JOICO K-PAK та лінійках BRAÉ.',
      icon: ShieldCheck,
    },
    {
      title: 'Сервіс та затишок',
      desc: 'Ароматна свіжа кава, вишуканий чай, приємна музика та щира турбота про кожного гостя.',
      icon: Coffee,
    },
    {
      title: 'Зручна локація',
      desc: 'Знаходимося у самому серці ЖК «Львівський» (вул. Миру, 11-А) зі зручним паркінгом.',
      icon: MapPin,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Images collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
                    alt="Інтер'єр Devichnik Beauty Studio"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="glass-card p-6 rounded-2xl border border-[#DDD3C5]">
                  <span className="font-serif text-3xl font-light text-[#181716] block">ЖК Львівський</span>
                  <span className="text-xs text-[#66625D]">вул. Миру, 11-А, Петропавлівська Борщагівка</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="glass-card p-6 rounded-2xl border border-[#DDD3C5]">
                  <span className="font-serif text-3xl font-light text-[#B28854] block">4.9★</span>
                  <span className="text-xs text-[#66625D]">Висока оцінка задоволених клієнтів в Altegio</span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80"
                    alt="Догляд за волоссям у Devichnik"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#B28854] text-xs uppercase tracking-widest font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Концепція Devichnik Beauty Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181716] leading-tight">
              Простір, створений для вашого відпочинку та краси
            </h2>

            <p className="text-base text-[#66625D] font-light leading-relaxed">
              Devichnik Beauty Studio — це не просто салон, а місце, де можна зупинити
              щоденну метушню та насолодитися якісним доглядом. Ми об'єднали талановитих
              майстрів своєї справи, якісні безпечні матеріали та атмосферу щирої жіночої дружби.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {brandPillars.map((pillar, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF0ED] text-[#B28854] flex items-center justify-center">
                    <pillar.icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base font-medium text-[#181716]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#66625D] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
