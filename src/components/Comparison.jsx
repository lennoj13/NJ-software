import React from 'react';
import { Check, X, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function Comparison() {
  const comparisonRows = [
    {
      feature: 'Formato de entrega',
      free: 'Código fuente sin compilar (requiere Flutter, Dart, NDK, Python)',
      pro: 'APKs firmados listos para instalar, extensiones empaquetadas e instaladores directos',
      isProAdvantage: true
    },
    {
      feature: 'Acceso a NJ Car Launcher v6.0+',
      free: 'Requiere clonar repositorio y compilar manualmente en Android Studio',
      pro: 'Descarga directa de APK de producción optimizado para arquitecturas ARM y x86',
      isProAdvantage: true
    },
    {
      feature: 'Actualizaciones de compatibilidad',
      free: 'Sujeto a commits esporádicos en GitHub público',
      pro: 'Actualizaciones continuas prioritarias ante cambios de Android y navegadores',
      isProAdvantage: true
    },
    {
      feature: 'Extensión Web Pro (ID & Portal Generator)',
      free: 'Versión web básica con marcas de agua o dependencias locales',
      pro: 'Suite Pro completa, plantillas premium desbloqueadas y exportación por lotes',
      isProAdvantage: true
    },
    {
      feature: 'Scripts analíticos & Polymarket Bot',
      free: 'Ejecución manual básica sin presets',
      pro: 'Presets optimizados de latencia, esquemas SQLite y soporte de configuración',
      isProAdvantage: true
    },
    {
      feature: 'Nuevas aplicaciones y herramientas futuras',
      free: 'No garantizadas ni integradas',
      pro: 'Acceso total inmediato a cada nuevo software publicado bajo NJ Software',
      isProAdvantage: true
    },
    {
      feature: 'Soporte técnico y canal directo',
      free: 'Issues públicos sin tiempo de respuesta garantizado',
      pro: 'Soporte prioritario por correo (<24h) y canal privado de Discord con el autor',
      isProAdvantage: true
    },
    {
      feature: 'Garantía de reembolso y cancelación',
      free: 'N/A (Sin soporte comercial)',
      pro: '14 días de reembolso total garantizado con procesamiento seguro de Dodo Payments',
      isProAdvantage: true
    }
  ];

  return (
    <section id="comparativa" className="py-20 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Propuesta de Valor Comercial
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            ¿Por qué suscribirse en lugar de usar repositorios en crudo?
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Mantenemos el espíritu abierto del software, pero ofrecemos compilaciones de producción listas para el usuario final, soporte riguroso y mantenimiento técnico activo a nuestros suscriptores.
          </p>
        </div>

        {/* Table Container with clean monochrome borders */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl glass-surface overflow-hidden border border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                  <th className="py-4 px-6 text-neutral-400 font-mono text-xs uppercase tracking-wider w-2/5">
                    Característica / Servicio
                  </th>
                  <th className="py-4 px-6 text-neutral-500 font-mono text-xs uppercase tracking-wider w-3/10">
                    GitHub Libre (Código Base)
                  </th>
                  <th className="py-4 px-6 text-white font-mono text-xs uppercase tracking-wider w-3/10 bg-white/[0.03]">
                    <div className="flex items-center gap-1.5">
                      <span>NJ All-Access Pass</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Recomendado
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.05]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-medium text-neutral-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-neutral-400 text-xs font-mono">
                      <div className="flex items-start gap-2">
                        <span className="text-neutral-600 mt-0.5">•</span>
                        <span>{row.free}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-200 text-xs bg-white/[0.015]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="font-normal">{row.pro}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
