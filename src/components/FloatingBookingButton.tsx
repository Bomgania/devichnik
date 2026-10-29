'use client';

import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';

interface FloatingBookingButtonProps {
  onOpenBooking: () => void;
}

export default function FloatingBookingButton({ onOpenBooking }: FloatingBookingButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onOpenBooking}
        className="group relative flex items-center space-x-3 px-6 py-3.5 rounded-full bg-[#181716] text-white shadow-2xl hover:bg-[#B28854] transition-all duration-300 transform hover:scale-105 cursor-pointer border border-white/20"
        aria-label="Онлайн-запис до студії Devichnik"
      >
        {/* Pulsing glow ring */}
        <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C49F70] to-[#E7D7C1] opacity-75 blur-sm group-hover:opacity-100 transition duration-300 animate-pulse -z-10" />

        <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
          <Calendar className="w-4 h-4 text-[#E7D7C1]" />
        </div>

        <div className="text-left">
          <span className="block text-xs uppercase tracking-widest font-semibold">
            Записатися
          </span>
          <span className="block text-[9px] text-[#E7D7C1] tracking-wider uppercase font-medium">
            Вільні віконця
          </span>
        </div>

        <Sparkles className="w-3.5 h-3.5 text-[#E7D7C1] ml-0.5 animate-bounce" />
      </button>
    </div>
  );
}
