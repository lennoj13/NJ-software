import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap, Sparkles, Terminal, Download, Cpu, Play } from 'lucide-react';

export default function Hero({ onScrollToPricing, onScrollToApps }) {
  const [activeTab, setActiveTab] = useState(0);

  const previewScreens = [
    {
      id: 'desktop',
      label: 'Inicio & Widgets',
      tag: '1024x600 Tablet UI',
      image: '/assets/screenshots/launcher-home.png',
      caption: 'Escritorio con reloj digital, reproductor minimizado y acceso directo a aplicaciones.'
    },
    {
      id: 'music',
      label: 'Reproductor Local',
      tag: 'Motor de Audio',
      image: '/assets/screenshots/launcher-music.png',
      caption: 'Reproducción continua en segundo plano, soporte de carpetas y listas de reproducción.'
    },
    {
      id: 'nav',
      label: 'Muelle de Navegación',
      tag: 'Integración Geo-Intent',
      image: '/assets/screenshots/launcher-nav.png',
      caption: 'Selector rápido de destino con vinculación directa a Google Maps, Waze o apps offline.'
    },
    {
      id: 'layout',
      label: 'Gestor de Escritorios',
      tag: 'Multi-Página',
      image: '/assets/screenshots/launcher-widgets.png',
      caption: 'Editor táctil para crear hasta 8 páginas con reordenamiento arrastrable.'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle top spotlight (pure monochrome white/slate, no neon blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-white/[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Release Pill Badge */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-neutral-300">
              NJ Software Suite • Actualizaciones Q4 2026 Disponibles
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.12]">
            Software independiente construido con rigor.
            <span className="block mt-2 text-neutral-400 font-normal">
              Un único pase de suscripción para todo el ecosistema.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Acceso ilimitado a <span className="text-neutral-200">NJ Car Launcher</span> para Android, 
            extensiones web de productividad, escáneres algorítmicos y cada nueva herramienta publicada. 
            Sin anuncios, sin telemetría invasiva y con soporte directo del autor.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onScrollToPricing}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/40 group"
            >
              <span>Comenzar suscripción All-Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToApps}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/[0.04] text-neutral-300 font-medium text-sm hover:bg-white/[0.08] hover:text-white transition-all flex items-center justify-center gap-2 border border-white/[0.08]"
            >
              <Cpu className="w-4 h-4 text-neutral-400" />
              <span>Explorar catálogo de aplicaciones</span>
            </button>
          </div>

          {/* Dodo Payments & Trust Badges */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-neutral-400" />
              <span>Procesado por Dodo Payments (MoR)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Reembolso total en 14 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Cancela en 1 clic cuando quieras</span>
            </div>
          </div>
        </div>

        {/* Real Product Showcase Container - Clean Glass Panel with actual App Screenshots */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-2xl glass-surface p-2 sm:p-3 border border-white/[0.08] shadow-2xl">
            
            {/* Window Topbar */}
            <div className="px-3 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-xs font-mono text-neutral-400 ml-2">
                  nj-launcher-v6.0-release.apk
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Compilación Activa
                </span>
              </div>

              {/* Screen Selector Tabs */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                {previewScreens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all whitespace-nowrap ${
                      activeTab === idx
                        ? 'bg-white/10 text-white border border-white/15'
                        : 'text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {screen.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Display Viewport */}
            <div className="relative rounded-xl overflow-hidden bg-black/60 border border-white/[0.06] aspect-[16/9] sm:aspect-[16/10] max-h-[520px] flex items-center justify-center">
              <img
                src={previewScreens[activeTab].image}
                alt={previewScreens[activeTab].label}
                className="w-full h-full object-cover object-center transition-opacity duration-300"
                loading="eager"
              />

              {/* Overlay Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {previewScreens[activeTab].tag}
                  </div>
                  <div className="text-sm font-medium text-white mt-0.5">
                    {previewScreens[activeTab].caption}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-neutral-400 hidden md:inline">
                    Incluido en suscripción
                  </span>
                  <button
                    onClick={onScrollToPricing}
                    className="text-xs font-mono px-3 py-1.5 rounded bg-white text-black hover:bg-neutral-200 transition-colors font-semibold"
                  >
                    Descargar APK
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
