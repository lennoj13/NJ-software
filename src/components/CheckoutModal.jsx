import React, { useState } from 'react';
import { X, ShieldCheck, Check, Lock, ArrowRight, Mail, Send, Sparkles } from 'lucide-react';

export default function CheckoutModal({ isOpen, selectedPlan, onClose, onOpenLegal }) {
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setCheckoutComplete(true);
    }, 1000);
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
              Activación de Suscripción • NJ Software
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
              <div className="mt-5 space-y-2 text-xs text-neutral-300 font-sans">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Acceso inmediato a repositorios privados de dots para KDE Plasma</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Descargas directas de APKs de NJ Car Launcher (v6.0+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Actualizaciones continuas y soporte directo con el autor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Garantía de reembolso de 14 días y cancelación en 1 clic</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Tu Correo Electrónico (donde recibirás tus descargas y clave de acceso):
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

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5">
                    Método de Pago Preferido:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-white/10 border-white/30 text-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white'
                      }`}
                    >
                      Tarjeta
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('apple')}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        paymentMethod === 'apple'
                          ? 'bg-white/10 border-white/30 text-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white'
                      }`}
                    >
                      Apple Pay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('google')}
                      className={`p-2.5 rounded-lg border text-center transition-all ${
                        paymentMethod === 'google'
                          ? 'bg-white/10 border-white/30 text-white'
                          : 'bg-white/[0.02] border-white/[0.06] text-neutral-400 hover:text-white'
                      }`}
                    >
                      Google Pay
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 px-4 rounded-xl bg-white text-black hover:bg-neutral-200 font-mono text-xs font-bold tracking-tight transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border-2 border-black border-t-transparent animate-spin" />
                      Procesando solicitud de activación...
                    </span>
                  ) : (
                    <>
                      <span>Activar Suscripción ({selectedPlan.price})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Policy Notice */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-center space-y-1">
                <div className="text-[11px] text-neutral-500 font-mono">
                  Transacción protegida con cifrado SSL de 256 bits.
                </div>
                <div className="text-[10px] text-neutral-600">
                  Al suscribirte aceptas los{' '}
                  <button 
                    type="button" 
                    onClick={() => { onClose(); onOpenLegal('terms'); }}
                    className="underline hover:text-neutral-400"
                  >
                    Términos de Servicio
                  </button>
                  {' '}y la{' '}
                  <button 
                    type="button" 
                    onClick={() => { onClose(); onOpenLegal('refund'); }}
                    className="underline hover:text-neutral-400"
                  >
                    Garantía de Reembolso
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
                  ¡Información de acceso enviada con éxito!
                </h4>
                <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto leading-relaxed">
                  Hemos generado tu solicitud y enviado las instrucciones de activación, claves de acceso y enlaces de descarga a tu correo:
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-neutral-300 max-w-sm mx-auto text-left space-y-1">
                <div><span className="text-neutral-500">Destinatario:</span> <span className="text-emerald-400">{email}</span></div>
                <div><span className="text-neutral-500">Plan:</span> <span className="text-white">{selectedPlan.name} ({selectedPlan.price})</span></div>
                <div><span className="text-neutral-500">Estado:</span> <span className="text-neutral-300">Pendiente de confirmación</span></div>
              </div>

              <p className="text-[11px] text-neutral-500 max-w-xs mx-auto">
                Revisa tu bandeja de entrada o carpeta de spam. Ante cualquier duda puedes escribir directamente a <span className="text-neutral-400">jonnelanchundia@gmail.com</span>.
              </p>

              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="mt-4 px-5 py-2 rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-xs font-mono text-white transition-colors border border-white/10"
              >
                Cerrar ventana
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
