'use client';

import React from 'react';
import { Master } from '@/types';
import { Star, Award, Calendar, Sparkles } from 'lucide-react';

interface MastersSectionProps {
  masters: Master[];
  onSelectMaster: (master: Master) => void;
}

export default function MastersSection({ masters, onSelectMaster }: MastersSectionProps) {
  return (
    <section id="masters" className="py-20 lg:py-28 bg-[#F5F1EB]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF0ED] text-[#B28854] text-xs uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Команда студії Devichnik</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#181716] tracking-tight">
            Наші майстри та стилісти
          </h2>
          <p className="text-sm sm:text-base text-[#66625D] font-light leading-relaxed">
            Досвідчені фахівці з багаторічною практикою, сертифіковані експерти колористики,
            бровістики та нігтьового сервісу.
          </p>
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {masters.map((master) => (
            <div
              key={master.id}
              className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#DDD3C5]">
                  <img
                    src={master.photo}
                    alt={master.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/90 backdrop-blur-md text-[#181716] shadow-sm">
                      <Award className="w-3 h-3 text-[#B28854]" />
                      <span>{master.experience}</span>
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-lg text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{master.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-white/70">({master.reviewCount})</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-xl font-medium text-[#181716] mb-1 group-hover:text-[#B28854] transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#B28854] font-semibold mb-2">
                    {master.specialization}
                  </p>
                  <p className="text-xs text-[#66625D] line-clamp-3 leading-relaxed">
                    {master.bio}
                  </p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => onSelectMaster(master)}
                  className="w-full py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-[#181716] bg-[#FAF8F5] hover:bg-[#181716] hover:text-white border border-[#DDD3C5] transition-all duration-300 shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Записатися</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
