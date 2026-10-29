'use client';

import React, { useState } from 'react';
import { Master, Service, Review, PortfolioItem } from '@/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import MastersSection from '@/components/MastersSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutStudio from '@/components/AboutStudio';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingBookingButton from '@/components/FloatingBookingButton';

interface StudioClientPageProps {
  initialMasters: Master[];
  initialServices: Service[];
  initialReviews: Review[];
  initialPortfolio: PortfolioItem[];
}

export default function StudioClientPage({
  initialMasters,
  initialServices,
  initialReviews,
  initialPortfolio,
}: StudioClientPageProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedMasterId, setSelectedMasterId] = useState<string | undefined>();

  const handleOpenBooking = () => {
    setSelectedServiceId(undefined);
    setSelectedMasterId(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedServiceId(service.id);
    setSelectedMasterId(undefined);
    setIsBookingOpen(true);
  };

  const handleSelectMaster = (master: Master) => {
    setSelectedMasterId(master.id);
    setSelectedServiceId(undefined);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services & Prices Section */}
        <ServicesSection
          services={initialServices}
          onSelectService={handleSelectService}
        />

        {/* 3. About & Studio Atmosphere */}
        <AboutStudio />

        {/* 4. Portfolio / Gallery Section */}
        <GallerySection portfolio={initialPortfolio} />

        {/* 5. Masters Section */}
        <MastersSection
          masters={initialMasters}
          onSelectMaster={handleSelectMaster}
        />

        {/* 6. Reviews Section */}
        <ReviewsSection reviews={initialReviews} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Button */}
      <FloatingBookingButton onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        masters={initialMasters}
        services={initialServices}
        initialServiceId={selectedServiceId}
        initialMasterId={selectedMasterId}
      />
    </div>
  );
}
