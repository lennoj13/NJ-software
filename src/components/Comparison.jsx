import React from 'react';
import { Check } from 'lucide-react';

export default function Comparison() {
  const comparisonRows = [
    {
      feature: 'Acceso a Dotfiles & Personalización KDE Plasma',
      free: 'Configuración manual fragmentada sin scripts de despliegue',
      pro: 'Repositorio privado con scripts de autoinstalación y actualizaciones para Plasma 6',
      isProAdvantage: true
    },
    {
      feature: 'Compilaciones de NJ Car Launcher (Android)',
      free: 'Requiere clonar código y compilar manualmente con Flutter SDK y NDK',
      pro: 'Descarga directa de APKs optimizados y firmados listos para instalar',
      isProAdvantage: true
    },
    {
      feature: 'Mantenimiento continuo y parches',
      free: 'Sujeto a commits esporádicos sin garantía de soporte',
      pro: 'Actualizaciones prioritarias ante cambios del sistema operativo y librerías',
      isProAdvantage: true
    },
    {
      feature: 'Nuevos plasmoides, utilidades y herramientas futuras',
      free: 'No incluidos en acceso directo',
      pro: 'Acceso automático a todo el software que se publique bajo NJ Software',
      isProAdvantage: true
    },
    {
      feature: 'Entrega de archivos y claves',
      free: 'Descarga manual desde repositorio público',
      pro: 'Entrega directa instantánea por correo electrónico y portal de suscriptor',
      isProAdvantage: true
    },
    {
      feature: 'Canal de soporte y resolución de dudas',
      free: 'Sin tiempo de respuesta garantizado',
      pro: 'Soporte prioritario por correo (<24h) directo con el autor (@lennoj13)',
      isProAdvantage: true
    },
    {
      feature: 'Garantía de reembolso y cancelación',
      free: 'N/A',
      pro: '14 días de reembolso garantizado y cancelación con 1 clic en cualquier momento',
      isProAdvantage: true
    }
  ];

  return (
    <section id="comparativa" className="py-20 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Propuesta de Valor
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            ¿Por qué suscribirse al All-Access Pass?
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Ahorra horas de configuración manual. Obtén instaladores listos para producción, dotfiles pulidos y soporte continuo para todas tus plataformas.
          </p>
        </div>

        {/* Table Container */}
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
                    Repositorios Básicos
                  </th>
                  <th className="py-4 px-6 text-white font-mono text-xs uppercase tracking-wider w-3/10 bg-white/[0.03]">
                    <div className="flex items-center gap-1.5">
                      <span>NJ All-Access Pass</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Suscripción
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
