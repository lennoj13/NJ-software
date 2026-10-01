import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, RefreshCw } from 'lucide-react';

export default function LegalModal({ isOpen, initialTab = 'terms', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-3xl max-h-[85vh] rounded-2xl glass-surface bg-[#0f1117] border border-white/10 flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-neutral-300" />
            <h3 className="text-sm font-semibold text-white tracking-tight">
              Políticas Legales & Condiciones de Suscripción • NJ Software
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="px-5 pt-3 pb-2 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-white text-black font-semibold'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Términos del Servicio
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-white text-black font-semibold'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Política de Privacidad
          </button>

          <button
            onClick={() => setActiveTab('refund')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'refund'
                ? 'bg-white text-black font-semibold'
                : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reembolsos y Cancelación (14 días)
          </button>
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
          
          {/* TAB: TERMS */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white">1. Información del Desarrollador y Aceptación</h4>
                <p className="text-neutral-400 mt-1">
                  NJ Software es un proyecto de desarrollo de software independiente operado por Jonnel Anchundia (<span className="font-mono text-neutral-300">jonnelanchundia@gmail.com</span>), con presencia pública en GitHub (<span className="font-mono text-neutral-300">@lennoj13</span>). Al adquirir una suscripción o pase de software, aceptas los presentes Términos de Servicio.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">2. Objeto del Servicio y Licencia</h4>
                <p className="text-neutral-400 mt-1">
                  La suscripción NJ All-Access otorga una licencia no exclusiva, personal e intransferible para acceder, descargar y utilizar los dotfiles y configuraciones para Linux (KDE Plasma), aplicaciones Android (APKs de NJ Car Launcher) y utilidades de sistema, así como las actualizaciones publicadas durante el periodo de suscripción activa.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">3. Facturación y Renovación</h4>
                <p className="text-neutral-400 mt-1">
                  Las suscripciones se renuevan periódicamente según el ciclo elegido (mensual o anual) para cubrir el mantenimiento continuo y la creación de nuevas herramientas. No existen cargos ocultos ni tarifas adicionales por actualizaciones de versión.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">4. Cancelación Simple</h4>
                <p className="text-neutral-400 mt-1">
                  El usuario puede cancelar la suscripción en cualquier momento con 1 clic mediante el enlace incluido en su recibo de correo electrónico o escribiendo a <span className="font-mono text-neutral-300">jonnelanchundia@gmail.com</span>. El acceso se mantiene hasta la fecha final del ciclo ya pagado.
                </p>
              </div>
            </div>
          )}

          {/* TAB: PRIVACY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white">1. Filosofía Local-First</h4>
                <p className="text-neutral-400 mt-1">
                  En NJ Software priorizamos la privacidad. Nuestras herramientas y dotfiles se ejecutan localmente en tu máquina o dispositivo sin rastreo de actividad, sin telemetría invasiva y sin comercialización de datos.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">2. Datos de Contacto</h4>
                <p className="text-neutral-400 mt-1">
                  Únicamente solicitamos tu dirección de correo electrónico con el propósito de enviarte tus claves de licencia, enlaces de descarga directa y notificaciones sobre nuevas versiones.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">3. Seguridad en las Transacciones</h4>
                <p className="text-neutral-400 mt-1">
                  Los pagos se procesan con cifrado de grado bancario bajo el protocolo SSL de 256 bits. Nunca almacenamos información de tarjetas de crédito en nuestros servidores.
                </p>
              </div>
            </div>
          )}

          {/* TAB: REFUND */}
          {activeTab === 'refund' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Garantía Total de Devolución de 14 Días
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Si tras probar las aplicaciones o configuraciones en tu entorno consideras que no se adaptan a lo que necesitas, puedes solicitar el reembolso íntegro durante los primeros 14 días posteriores a tu compra.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">1. Solicitud de Reembolso</h4>
                <p className="text-neutral-400 mt-1">
                  Envía un correo electrónico a:
                </p>
                <div className="mt-2 p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-neutral-200">
                  Para: jonnelanchundia@gmail.com<br />
                  Asunto: Solicitud de Reembolso - NJ Software
                </div>
                <p className="text-neutral-400 mt-2">
                  Indica el correo utilizado en tu registro y procesaremos la devolución en un plazo máximo de 24 a 48 horas hábiles.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] flex items-center justify-between bg-black/40">
          <div className="text-[11px] font-mono text-neutral-500">
            NJ Software • Jonnel Anchundia (@lennoj13)
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white text-black font-mono text-xs font-semibold hover:bg-neutral-200 transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
