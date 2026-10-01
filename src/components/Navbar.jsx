import React, { useState } from 'react';
import { Layers, ShieldCheck, Github, ExternalLink, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenLegal, onScrollToPricing }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav bg-[#090a0f]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden p-1 group-hover:border-white/20 transition-colors">
            <img 
              src="/assets/nj_brand.png" 
              alt="NJ Software Logo" 
              className="w-full h-full object-contain filter brightness-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <span style={{ display: 'none' }} className="text-xs font-mono font-bold text-white">NJ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white flex items-center gap-2">
              NJ Software
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.06] text-neutral-400 border border-white/[0.06]">
                Suite
              </span>
            </span>
            <span className="text-[11px] text-neutral-500 font-mono">by @lennoj13</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a href="#apps" className="hover:text-white transition-colors">Catálogo de Software</a>
          <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#comparativa" className="hover:text-white transition-colors">Comparativa</a>
          <a href="#precios" className="hover:text-white transition-colors">Suscripción</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        {/* Right CTA & Social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/lennoj13"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors border border-transparent hover:border-white/10"
            title="Ver perfil de GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            onClick={onScrollToPricing}
            className="text-xs font-medium px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors tracking-tight font-sans shadow-sm"
          >
            Obtener All-Access Pass
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d12] border-b border-white/10 px-4 py-4 flex flex-col gap-3 text-sm text-neutral-300">
          <a 
            href="#apps" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-white"
          >
            Catálogo de Software
          </a>
          <a 
            href="#beneficios" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-white"
          >
            Beneficios
          </a>
          <a 
            href="#comparativa" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-white"
          >
            Comparativa
          </a>
          <a 
            href="#precios" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-white"
          >
            Suscripción
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-white"
          >
            Preguntas Frecuentes
          </a>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://github.com/lennoj13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" /> GitHub @lennoj13
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToPricing();
              }}
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white text-black"
            >
              All-Access Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
