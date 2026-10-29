'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Sparkles, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Послуги та прайс', href: '#services' },
    { label: 'Про студію', href: '#about' },
    { label: 'Майстри', href: '#masters' },
    { label: 'Портфоліо', href: '#gallery' },
    { label: 'Відгуки', href: '#reviews' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <>
      {/* Top Bar for contact info */}
      <div className="hidden lg:block bg-[#181716] text-[#FAF8F5]/80 text-xs py-2 px-6 tracking-wide border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#C49F70]" />
              <span>Петропавлівська Борщагівка, ЖК «Львівський», вул. Миру, 11-А</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-[#C49F70]" />
              <span>Щодня з 09:00 до 21:00</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:+380992078295"
              className="flex items-center space-x-2 text-[#FAF8F5] hover:text-[#C49F70] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C49F70]" />
              <span className="font-medium">+380 (99) 207-82-95</span>
            </a>
            <span className="text-[#C49F70]/60">|</span>
            <span className="flex items-center space-x-1.5 text-[#FAF8F5]/90">
              <Sparkles className="w-3.5 h-3.5 text-[#C49F70]" />
              <span>Кава, чай та затишна атмосфера</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm py-3.5 backdrop-blur-md'
            : 'bg-[#FAF8F5]/90 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.22em] text-[#181716] group-hover:text-[#B28854] transition-colors uppercase">
              Devichnik
            </span>
            <span className="text-[9px] uppercase tracking-[0.38em] text-[#8C8680] font-sans -mt-1 font-medium">
              Beauty Studio • ЖК Львівський
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-[#44413E] hover:text-[#B28854] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Онлайн-запис</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#181716] hover:bg-[#F5F1EB] transition-colors"
            aria-label="Перемикач меню"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-t border-[#EAE3D9] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif tracking-wider text-[#181716] hover:text-[#B28854] py-1 border-b border-[#F5F1EB]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <a
                href="tel:+380992078295"
                className="flex items-center space-x-2 text-sm text-[#44413E]"
              >
                <Phone className="w-4 h-4 text-[#B28854]" />
                <span>+380 (99) 207-82-95</span>
              </a>
              <div className="flex items-center space-x-2 text-xs text-[#8C8680]">
                <MapPin className="w-4 h-4 text-[#B28854]" />
                <span>Петропавлівська Борщагівка, вул. Миру, 11-А</span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full mt-2 py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Записатися онлайн</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
