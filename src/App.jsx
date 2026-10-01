import React, { useState, useEffect } from 'react';
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
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'projects'
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState('terms');
  
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    id: 'annual',
    name: 'All-Access Anual Pro',
    price: '$79',
    period: 'por año',
    billingNote: 'Facturado anualmente ($79 USD). Ahorras 27%.'
  });

  // Handle Hash routing for projects page
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#proyectos') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'projects') {
      window.location.hash = '#proyectos';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (tab = 'terms') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setCheckoutModalOpen(true);
  };

  const handleOpenDefaultCheckout = () => {
    setSelectedPlan({
      id: 'annual',
      name: 'All-Access Anual Pro',
      price: '$79',
      period: 'por año',
      billingNote: 'Facturado anualmente ($79 USD). Ahorras 27%.'
    });
    setCheckoutModalOpen(true);
  };

  const handleScrollToPricing = () => {
    if (currentView !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('precios');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('precios');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToApps = () => {
    if (currentView !== 'home') {
      handleNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('apps');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('apps');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-neutral-200 selection:bg-white selection:text-black">
      {/* Navigation */}
      <Navbar 
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenLegal={handleOpenLegal}
        onScrollToPricing={handleScrollToPricing}
      />

      {/* Main Content */}
      <main>
        {currentView === 'home' ? (
          <>
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
          </>
        ) : (
          <ProjectsPage 
            onBackToHome={() => handleNavigate('home')}
            onOpenCheckout={handleOpenDefaultCheckout}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={handleOpenLegal}
        onNavigateToProjects={() => handleNavigate('projects')}
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
