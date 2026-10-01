import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppsCatalog from './components/AppsCatalog';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('terms');
  
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenLegal = (tab = 'terms') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const handleScrollToPricing = () => {
    const el = document.getElementById('precios');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToApps = () => {
    const el = document.getElementById('apps');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-200 selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar 
        onOpenLegal={handleOpenLegal}
        onScrollToPricing={handleScrollToPricing}
      />

      {/* Main Sections */}
      <main>
        <Hero 
          onScrollToPricing={handleScrollToPricing}
          onScrollToApps={handleScrollToApps}
        />

        <AppsCatalog 
          onSelectAppForCheckout={handleScrollToPricing}
        />

        <Features />

        <Comparison />

        <Pricing 
          onSelectPlan={handleSelectPlan}
        />

        <Faq />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
      />

      {/* Modals */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        selectedPlan={selectedPlan}
        onClose={() => setCheckoutModalOpen(false)}
        onOpenLegal={handleOpenLegal}
      />
    </div>
  );
}
