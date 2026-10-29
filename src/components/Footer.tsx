'use client';

import React from 'react';
import { MapPin, Phone, Clock, Mail, Send, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer id="contacts" className="bg-[#181716] text-[#FAF8F5] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-3xl font-light tracking-[0.25em] text-white uppercase block">
                Devichnik
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C49F70] font-sans font-medium">
                Beauty Studio • ЖК Львівський
              </span>
            </div>

            <p className="text-sm text-[#ABA49E] font-light max-w-sm leading-relaxed">
              Затишний б'юті-простір у Петропавлівській Борщагівці.
              Складне фарбування волосся Airtouch, відновлення JOICO K-PAK, естетичний манікюр,
              ламінування брів та нарощування вій.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/devichnik_beauty_studio/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#B28854] text-[#FAF8F5] flex items-center justify-center transition-colors"
                aria-label="Instagram @devichnik_beauty_studio"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://n824636.alteg.io/company/774294/personal/select-master"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full text-xs font-medium bg-white/10 hover:bg-[#B28854] text-white transition-colors flex items-center space-x-1.5"
              >
                <span>Altegio запис</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#B28854] hover:bg-[#C49F70] text-white transition-colors cursor-pointer"
              >
                Записатися
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C49F70] font-semibold">
              Розділи сайту
            </h4>
            <ul className="space-y-2.5 text-sm text-[#ABA49E] font-light">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Послуги та прайс
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Про студію та концепцію
                </a>
              </li>
              <li>
                <a href="#masters" className="hover:text-white transition-colors">
                  Наші майстри
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Галерея робіт
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Відгуки клієнтів
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#C49F70] font-semibold">
              Контакти & Локація
            </h4>
            <ul className="space-y-3 text-sm text-[#ABA49E] font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C49F70] shrink-0 mt-0.5" />
                <span>Петропавлівська Борщагівка, ЖК «Львівський», вул. Миру, 11-А</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#C49F70] shrink-0" />
                <a href="tel:+380992078295" className="hover:text-white transition-colors font-medium">
                  +380 (99) 207-82-95
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#C49F70] shrink-0" />
                <span>Щодня з 09:00 до 21:00</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#C49F70] shrink-0" />
                <span>Instagram: @devichnik_beauty_studio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8680] font-light">
          <p>© {new Date().getFullYear()} Devichnik Beauty Studio. Усі права захищено.</p>
          <p className="flex items-center space-x-1 mt-3 sm:mt-0">
            <span>Створено з турботою про красу</span>
            <Heart className="w-3.5 h-3.5 text-[#B28854] fill-[#B28854]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
