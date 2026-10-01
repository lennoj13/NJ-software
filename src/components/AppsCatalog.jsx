import React, { useState } from 'react';
import { SOFTWARE_SUITE, UPCOMING_PIPELINE } from '../data/software';
import { 
  Car, 
  Globe, 
  Terminal, 
  ExternalLink, 
  Check, 
  Download, 
  ArrowUpRight, 
  Cpu, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

export default function AppsCatalog({ onSelectAppForCheckout }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState({});

  const getIcon = (type) => {
    switch (type) {
      case 'car':
        return <Car className="w-5 h-5 text-neutral-200" />;
      case 'browser':
        return <Globe className="w-5 h-5 text-neutral-200" />;
      case 'bot':
        return <Terminal className="w-5 h-5 text-neutral-200" />;
      default:
        return <Layers className="w-5 h-5 text-neutral-200" />;
    }
  };

  return (
    <section id="apps" className="py-24 relative border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Ecosistema de Software Activo
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Herramientas terminadas, mantenidas y en evolución.
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Cada producto se compila de forma independiente, resuelve un problema técnico real y 
            recibe actualizaciones de mantenimiento continuo para suscriptores.
          </p>
        </div>

        {/* Products Grid / Cards */}
        <div className="mt-14 space-y-16">
          {SOFTWARE_SUITE.map((app) => (
            <div
              key={app.id}
              className="rounded-2xl glass-surface border border-white/[0.08] p-6 sm:p-8 relative overflow-hidden transition-all duration-200 hover:border-white/[0.14]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Details & Specs (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Header info */}
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
                        {getIcon(app.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                          {app.name}
                        </h3>
                        <div className="text-xs font-mono text-neutral-400">
                          {app.category}
                        </div>
                      </div>

                      <div className="ml-auto flex items-center gap-2">
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-neutral-300">
                          {app.version}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-500 border border-white/[0.05]">
                          {app.platform}
                        </span>
                      </div>
                    </div>

                    {/* Tagline & Description */}
                    <p className="mt-5 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                      {app.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="mt-6">
                      <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-3">
                        Capacidades Principales
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                        {app.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Specs Grid */}
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-5 border-t border-white/[0.06]">
                      {app.techSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-lg">
                          <div className="text-[10px] font-mono text-neutral-500 uppercase">
                            {spec.label}
                          </div>
                          <div className="text-xs font-mono text-neutral-200 mt-1 font-medium truncate" title={spec.value}>
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subscriber Perks Banner */}
                  <div className="mt-7 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
                      <span>Beneficios para suscriptores All-Access</span>
                    </div>
                    <ul className="space-y-1 text-xs text-neutral-400">
                      {app.subscriberPerks.map((perk, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Live link if available */}
                  {app.demoUrl && (
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={app.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors underline underline-offset-4"
                      >
                        Visitar demostración en vivo de NJ ID Generator
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                </div>

                {/* Right Column: Visual Media or Code Terminal (5 cols) */}
                <div className="lg:col-span-5 flex flex-col h-full">
                  {app.gallery ? (
                    <div className="space-y-3">
                      {/* Main selected image */}
                      <div className="rounded-xl overflow-hidden bg-black border border-white/[0.08] aspect-[16/10] relative group">
                        <img
                          src={app.gallery[activeGalleryIndex[app.id] || 0].url}
                          alt={app.gallery[activeGalleryIndex[app.id] || 0].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                          <div className="text-xs font-mono text-white">
                            {app.gallery[activeGalleryIndex[app.id] || 0].title}: {app.gallery[activeGalleryIndex[app.id] || 0].caption}
                          </div>
                        </div>
                      </div>

                      {/* Thumbnails */}
                      <div className="grid grid-cols-4 gap-2">
                        {app.gallery.map((thumb, tIdx) => (
                          <button
                            key={tIdx}
                            onClick={() => setActiveGalleryIndex({ ...activeGalleryIndex, [app.id]: tIdx })}
                            className={`rounded-lg overflow-hidden border aspect-[16/10] transition-all ${
                              (activeGalleryIndex[app.id] || 0) === tIdx
                                ? 'border-white/60 opacity-100 ring-1 ring-white/30'
                                : 'border-white/10 opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={thumb.url} alt={thumb.title} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : app.id === 'market-bots' ? (
                    /* Interactive Code / Scanner Visualizer for Polymarket Bot */
                    <div className="rounded-xl bg-[#0c0d12] border border-white/[0.08] p-4 font-mono text-xs text-neutral-300 flex flex-col justify-between h-full min-h-[300px]">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-neutral-500 text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-neutral-700" />
                            <span>bot_polymarket.py — Scanner Mode</span>
                          </div>
                          <span>Python 3.11</span>
                        </div>
                        <div className="mt-4 space-y-2 text-neutral-400 leading-relaxed font-mono">
                          <p><span className="text-neutral-500">01</span> <span className="text-neutral-200">from</span> src.scanner <span className="text-neutral-200">import</span> PolymarketBookScanner</p>
                          <p><span className="text-neutral-500">02</span> scanner = PolymarketBookScanner(min_roi=0.035)</p>
                          <p><span className="text-neutral-500">03</span> </p>
                          <p><span className="text-neutral-500">04</span> <span className="text-neutral-500"># Validando libro binario con taker fees dinámicas</span></p>
                          <p><span className="text-neutral-500">05</span> opp = scanner.evaluate_spread(market_id=&quot;0x8a91...&quot;)</p>
                          <p><span className="text-neutral-500">06</span> <span className="text-neutral-200">if</span> opp.has_depth and opp.net_margin &gt; 0.04:</p>
                          <p><span className="text-neutral-500">07</span> &nbsp;&nbsp;&nbsp;&nbsp;logger.info(&quot;[SIGNAL FOUND] ROI: 4.82%&quot;)</p>
                        </div>
                      </div>

                      <div className="mt-6 p-3 rounded-lg bg-black/60 border border-white/[0.06] text-[11px]">
                        <div className="text-emerald-400 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Ejecución Paper Trading Activa
                        </div>
                        <div className="text-neutral-500 mt-1">
                          Registro de señales en SQLite local sin exposición de claves privadas.
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Web / Browser preview */
                    <div className="rounded-xl bg-[#0c0d12] border border-white/[0.08] p-5 flex flex-col justify-center items-center text-center h-full min-h-[280px]">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3">
                        <Globe className="w-6 h-6 text-neutral-300" />
                      </div>
                      <div className="text-sm font-semibold text-white">Extensión Chrome Manifest V3</div>
                      <div className="text-xs text-neutral-400 max-w-xs mt-1">
                        Utilidades de simulación y portal académico ejecutadas íntegramente en tu navegador sin rastreadores.
                      </div>
                      <a
                        href="https://nj-id-generator.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-mono text-neutral-200 flex items-center gap-1.5 transition-colors"
                      >
                        Abrir Demo en Vivo <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Future Pipeline / Continuous Development (Critical for Dodo Payments recurring model justification) */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              Desarrollo continuo y próximos lanzamientos incluidos
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Tu suscripción All-Access no solo cubre el software actual; financia y te da acceso inmediato 
              a cada nueva herramienta en el momento en que se publica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {UPCOMING_PIPELINE.map((pipe, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-neutral-400">{pipe.badge}</span>
                  <span className="text-neutral-500">{pipe.status}</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {pipe.title}
                </div>
                <div className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {pipe.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
