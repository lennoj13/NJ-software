import React, { useState } from 'react';
import { X, ShieldCheck, Check, Lock, ArrowRight, ExternalLink } from 'lucide-react';

export default function CheckoutModal({ isOpen, selectedPlan, onClose, onOpenLegal }) {
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const handleSimulateCheckout = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsProcessing(true);

    // Simulate redirection or link integration with Dodo Payments
    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-2xl glass-surface bg-[#10121a] border border-white/10 flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono text-neutral-300">
              Checkout Seguro • Dodo Payments
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {!checkoutComplete ? (
            <div>
              {/* Plan Summary Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-400 uppercase">
                    Plan Seleccionado
                  </div>
                  <div className="text-base font-semibold text-white mt-0.5">
                    {selectedPlan.name}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {selectedPlan.billingNote}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-mono font-semibold text-white">
                    {selectedPlan.price}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500">
                    {selectedPlan.period}
                  </div>
                </div>
              </div>

              {/* What is included */}
              <div className="mt-5 space-y-2 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Acceso inmediato a APKs de NJ Car Launcher (v6.0+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Licencia de extensión web y herramientas de simulación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Acceso a actualizaciones continuas y nuevo software</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Garantía de reembolso de 14 días y cancelación en 1 clic</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSimulateCheckout} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Tu Correo Electrónico (para entrega inmediata de APK y credenciales):
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white placeholder-neutral-600 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Conectando con Dodo Payments...
                    </span>
                  ) : (
                    <>
                      <span>Proceder al Pago Seguro ({selectedPlan.price})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Dodo Payments MoR Notice */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-center space-y-1">
                <div className="text-[11px] text-neutral-500 font-mono">
                  Facturación operada por <strong className="text-neutral-400">Dodo Payments</strong> como Merchant of Record.
                </div>
                <div className="text-[10px] text-neutral-600">
                  Al continuar aceptas nuestros{' '}
                  <button 
                    type="button" 
                    onClick={() => { onClose(); onOpenLegal('terms'); }}
                    className="underline hover:text-neutral-400"
                  >
                    Términos
                  </button>
                  {' '}y{' '}
                  <button 
                    type="button" 
                    onClick={() => { onClose(); onOpenLegal('refund'); }}
                    className="underline hover:text-neutral-400"
                  >
                    Política de Devolución
                  </button>.
                </div>
              </div>
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">
                  ¡Demostración de Checkout Completada!
                </h4>
                <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  En el entorno real, este botón redirige directamente a la pasarela cifrada de <strong className="text-white">Dodo Payments</strong> con tu ID de producto configurado.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-neutral-400 max-w-sm mx-auto">
                Correo destinatario: <span className="text-white">{email}</span><br />
                Plan: <span className="text-white">{selectedPlan.name}</span>
              </div>

              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono text-white transition-colors border border-white/10"
              >
                Volver a la página
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
