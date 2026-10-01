import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Cpu, Terminal, Smartphone, Sparkles } from 'lucide-react';

export default function Hero({ onScrollToPricing, onScrollToApps }) {
  const [activeTab, setActiveTab] = useState(0);

  const previewScreens = [
    {
      id: 'linux',
      type: 'code',
      label: 'Linux & KDE Plasma Dots',
      tag: 'Configuraciones de Sistema',
      title: 'Entornos de alta productividad para KDE Plasma',
      caption: 'Dotfiles reproducibles, scripts de instalación automática y personalización limpia de paneles y atajos.'
    },
    {
      id: 'car-home',
      type: 'image',
      label: 'NJ Car Launcher (Android)',
      tag: 'Android OS / Tablet UI',
      image: '/assets/screenshots/launcher-home.png',
      title: 'Sistema de interfaz táctil para vehículos',
      caption: 'Escritorio con reloj digital, reproductor de música en segundo plano y accesos directos.'
    },
    {
      id: 'car-music',
      type: 'image',
      label: 'Reproductor de Medios',
      tag: 'Motor de Audio Local',
      image: '/assets/screenshots/launcher-music.png',
      title: 'Gestor multimedia sin bloatware',
      caption: 'Control de audio continuo con soporte de carpetas locales y listas favoritas.'
    }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle top spotlight (monochrome neutral) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-white/[0.025] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Release Pill Badge */}
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-neutral-300">
              NJ Software Suite • Linux Dots, Android Apps & Herramientas
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.14]">
            Software independiente construido con precisión.
            <span className="block mt-2 text-neutral-400 font-normal">
              Un único pase de suscripción para todo mi ecosistema.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Acceso unificado a dotfiles y personalización para <span className="text-neutral-200">Linux (KDE Plasma)</span>, 
            aplicaciones para <span className="text-neutral-200">Android</span>, utilidades de sistema y cada nuevo proyecto 
            que publique en desarrollo activo. Sin intermediarios, sin anuncios y con entregas directas a tu correo.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={onScrollToPricing}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/40 group font-sans"
            >
              <span>Obtener suscripción All-Access</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={onScrollToApps}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white/[0.04] text-neutral-300 font-medium text-sm hover:bg-white/[0.08] hover:text-white transition-all flex items-center justify-center gap-2 border border-white/[0.08] font-sans"
            >
              <Cpu className="w-4 h-4 text-neutral-400" />
              <span>Ver software y proyectos</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] max-w-2xl mx-auto flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-neutral-400" />
              <span>Descargas y claves enviadas a tu correo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Garantía de reembolso de 14 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
              <span>Cancela en cualquier momento con 1 clic</span>
            </div>
          </div>
        </div>

        {/* Real Product Showcase Container */}
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
                  nj-ecosystem-suite
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Actualización Continua
                </span>
              </div>

              {/* Selector Tabs */}
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
            <div className="relative rounded-xl overflow-hidden bg-black/60 border border-white/[0.06] aspect-[16/9] sm:aspect-[16/10] max-h-[500px] flex items-center justify-center">
              {previewScreens[activeTab].type === 'image' ? (
                <img
                  src={previewScreens[activeTab].image}
                  alt={previewScreens[activeTab].label}
                  className="w-full h-full object-cover object-center transition-opacity duration-300"
                />
              ) : (
                /* Linux & KDE Plasma Terminal / Dots showcase */
                <div className="w-full h-full bg-[#0a0c10] p-6 sm:p-8 flex flex-col justify-between font-mono text-xs sm:text-sm text-neutral-300">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-neutral-500 text-xs">
                      <span>jonnel@archbox: ~/.config/plasma-workspace</span>
                      <span>KDE Plasma 6 / Wayland</span>
                    </div>

                    <div className="mt-6 space-y-2.5 text-neutral-400">
                      <p><span className="text-emerald-400">➜</span> <span className="text-white">nj-dots</span> --install --profile=minimal-workstation</p>
                      <p className="text-neutral-500">[INFO] Aplicando esquemas de color neutrales y geometría de paneles...</p>
                      <p className="text-neutral-500">[INFO] Sincronizando atajos de teclado y reglas de ventanas kwin...</p>
                      <p className="text-neutral-500">[INFO] Configurando widgets QML de bajo consumo de memoria...</p>
                      <p><span className="text-emerald-400">✔</span> <span className="text-white">Entorno configurado con éxito. Compositor recargado en 14ms.</span></p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white font-medium">NJ Linux Dots & Plasma Suite</div>
                      <div className="text-[11px] text-neutral-500">Dotfiles curados, scripts y configuraciones reproducibles.</div>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/[0.08]">
                      Linux / KDE
                    </span>
                  </div>
                </div>
              )}

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
                    Obtener Acceso
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
