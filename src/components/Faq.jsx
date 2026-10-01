import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle, Mail } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 border-t border-white/[0.06] bg-[#090a0f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Respuestas Claras
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Preguntas Frecuentes & Condiciones
          </h2>
          <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
            Todo lo que necesitas saber sobre la suscripción, entregas de APKs, métodos de pago y políticas de cancelación.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl glass-surface-subtle border border-white/[0.07] overflow-hidden transition-colors hover:border-white/15"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-medium text-white tracking-tight">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help box */}
        <div className="mt-12 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
              <Mail className="w-4 h-4 text-neutral-300" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">¿Tienes dudas adicionales o necesitas compatibilidad personalizada?</div>
              <div className="text-xs text-neutral-500 font-mono">Contacto directo: jonnelanchundia@gmail.com</div>
            </div>
          </div>
          <a
            href="mailto:jonnelanchundia@gmail.com"
            className="px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white border border-white/10 transition-colors whitespace-nowrap"
          >
            Escribir al autor
          </a>
        </div>

      </div>
    </section>
  );
}
