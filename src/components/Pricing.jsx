import React, { useState } from 'react';
import { Check, Shield, Zap, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      id: 'monthly',
      name: 'All-Access Mensual',
      tagline: 'Flexibilidad total para probar e instalar inmediatamente.',
      price: billingCycle === 'monthly' ? '$9' : '$7',
      period: 'por mes',
      billingNote: billingCycle === 'monthly' 
        ? 'Facturado mensualmente ($9 USD/mes)' 
        : 'Facturado anualmente ($79 USD/año)',
      featured: false,
      badge: 'Flexibilidad Total',
      buttonText: 'Suscribirme por $9/mes',
      features: [
        'Acceso completo a todos los APKs compilados y firmados de NJ Car Launcher (v6.0+).',
        'Licencia Pro para la extensión web NJ ID & Portal Generator.',
        'Acceso a los scripts y algoritmos de mercado (Polymarket Scanner).',
        'Todas las actualizaciones de versión menor y mayor durante la suscripción.',
        'Soporte por correo electrónico en menos de 24 horas.',
        'Garantía de reembolso de 14 días sin preguntas.',
        'Cancelación con un solo clic en cualquier momento.'
      ]
    },
    {
      id: 'annual',
      name: 'All-Access Anual Pro',
      tagline: 'El pase preferido por desarrolladores y usuarios avanzados.',
      price: '$79',
      period: 'por año (~$6.58/mes)',
      billingNote: 'Facturado anualmente ($79 USD). Ahorras 27%.',
      featured: true,
      badge: 'Más Popular • Ahorra 27%',
      buttonText: 'Obtener Pase Anual por $79/año',
      features: [
        'Todo lo incluido en el Pase Mensual.',
        'Acceso anticipado (Beta tester) a compilaciones antes de su publicación.',
        'Rol de Suscriptor Pro en Discord privado con acceso directo al autor.',
        'Votación prioritaria en el roadmap de nuevas aplicaciones y características.',
        'Acceso garantizado a las 3 nuevas herramientas en el pipeline (Q4-Q1).',
        'Soporte técnico prioritario de integración con hardware de vehículos.',
        'Garantía de reembolso de 14 días y cancelación en 1 clic.'
      ]
    },
    {
      id: 'lifetime',
      name: 'Pase Fundador Vitalicio',
      tagline: 'Pago único. Acceso permanente a todo el software presente y futuro.',
      price: '$189',
      period: 'pago único de por vida',
      billingNote: 'Un solo pago. Sin suscripciones ni renovaciones nunca más.',
      featured: false,
      badge: 'Acceso Vitalicio',
      buttonText: 'Adquirir Licencia Vitalicia',
      features: [
        'Acceso permanente e ilimitado a todas las aplicaciones actuales.',
        'Acceso a todos los nuevos proyectos de software publicados en el futuro.',
        'Sin renovaciones ni cobros recurrentes de ningún tipo.',
        'Canal VIP en Discord con comunicación directa con Jonnel Anchundia.',
        'Mención como patrocinador fundador en los proyectos públicos de GitHub.',
        'Garantía de satisfacción completa de 14 días.'
      ]
    }
  ];

  return (
    <section id="precios" className="py-24 border-t border-white/[0.06] bg-[#090a0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Planes Transparentes & Facturación
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Un precio simple para todo el software presente y futuro.
          </h2>
          <p className="mt-3 text-neutral-400 text-base leading-relaxed">
            Sin paquetes fragmentados ni tarifas ocultas. Pagos seguros procesados globalmente mediante Dodo Payments.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Facturación Anual</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                -27%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.featured;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  isFeatured
                    ? 'glass-surface bg-[#14161f] border-2 border-white/30 shadow-2xl md:-translate-y-2'
                    : 'glass-surface-subtle bg-[#0e1015]/60 border border-white/[0.08] hover:border-white/15'
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${
                      isFeatured
                        ? 'bg-white text-black font-semibold border-white'
                        : 'bg-white/[0.04] text-neutral-400 border-white/[0.08]'
                    }`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan Name & Tagline */}
                  <h3 className="mt-4 text-xl font-semibold text-white tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 leading-relaxed min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      {plan.period}
                    </span>
                  </div>

                  <div className="mt-1 text-[11px] text-neutral-500 font-mono">
                    {plan.billingNote}
                  </div>

                  {/* Divider */}
                  <div className="my-6 border-t border-white/[0.07]" />

                  {/* Features List */}
                  <div className="text-xs font-mono uppercase text-neutral-500 tracking-wider mb-3">
                    Incluido en este pase:
                  </div>
                  <ul className="space-y-3 text-xs text-neutral-300">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/[0.07]">
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold font-mono tracking-tight transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-white text-black hover:bg-neutral-200 shadow-md'
                        : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10'
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="mt-3 text-center text-[10px] text-neutral-500 font-mono">
                    Pago seguro cifrado • Dodo Payments
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner (Crucial for Dodo Payments approval) */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl glass-surface p-6 border border-white/[0.08] flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-neutral-200" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">
              Garantía de Satisfacción Total de 14 Días
            </h4>
            <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
              Si el software no funciona en la pantalla de tu coche o no cubre tus necesidades, te devolvemos el 100% de tu dinero sin preguntas. Además, puedes cancelar tu suscripción con 1 clic en cualquier momento sin penalizaciones.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
