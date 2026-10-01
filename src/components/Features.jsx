import React from 'react';
import { PackageCheck, RefreshCw, Lock, MessageSquare, Terminal, Zap } from 'lucide-react';

export default function Features() {
  const benefits = [
    {
      icon: <PackageCheck className="w-5 h-5 text-neutral-200" />,
      title: 'Compilaciones de Producción Listas',
      desc: 'Descarga directamente archivos APK firmados listos para instalar en la pantalla de tu coche o tablet Android, sin requerir SDKs ni configuraciones complejas de Flutter.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-neutral-200" />,
      title: 'Mantenimiento Continuo de Versión',
      desc: 'Tanto los entornos Linux (KDE Plasma) como Android reciben actualizaciones periódicas de sistema. Tu suscripción cubre mantenimiento y parches continuos.'
    },
    {
      icon: <Lock className="w-5 h-5 text-neutral-200" />,
      title: 'Privacidad por Diseño (Zero-Tracking)',
      desc: 'Nuestras aplicaciones y configuraciones no insertan publicidad, no ejecutan telemetría invasiva ni venden datos a intermediarios publicitarios.'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-neutral-200" />,
      title: 'Canal Directo de Soporte',
      desc: 'Habla directamente con el desarrollador (Jonnel Anchundia) para resolver problemas de compatibilidad o sugerir nuevos plasmoides y características.'
    },
    {
      icon: <Zap className="w-5 h-5 text-neutral-200" />,
      title: 'Acceso Temprano a Todo lo Nuevo',
      desc: 'Cualquier software, plasmoide, dotfile o utilidad que desarrolle en el futuro queda automáticamente desbloqueada para los suscriptores activos.'
    },
    {
      icon: <Terminal className="w-5 h-5 text-neutral-200" />,
      title: 'Arquitectura Limpia & Código Auditable',
      desc: 'Proyectos basados en tecnologías nativas (C++/Qt, Flutter, Python, Shell), con código auditable en GitHub para máxima transparencia y confiabilidad.'
    }
  ];

  return (
    <section id="beneficios" className="py-24 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Ventajas del Suscriptor
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Diseñado para usuarios exigentes y entusiastas técnicos.
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Una relación directa entre el desarrollador y el usuario: software cuidado al detalle, sin intermediarios corporativos ni algoritmos publicitarios.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-surface-subtle border border-white/[0.07] hover:border-white/15 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
