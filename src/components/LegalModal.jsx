import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, RefreshCw, Mail } from 'lucide-react';

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
              Políticas Legales & Cumplimiento Normativo • NJ Software
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
                <h4 className="text-base font-semibold text-white">1. Información del Titular y Aceptación</h4>
                <p className="text-neutral-400 mt-1">
                  NJ Software es un proyecto de desarrollo de software independiente operado por Jonnel Anchundia (<span className="font-mono text-neutral-300">jonnelanchundia@gmail.com</span>), con presencia pública de código en GitHub (<span className="font-mono text-neutral-300">@lennoj13</span>). Al adquirir una suscripción o pase de software en esta plataforma, aceptas vincularte de forma expresa por los presentes Términos de Servicio.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">2. Naturaleza del Servicio y Licencia</h4>
                <p className="text-neutral-400 mt-1">
                  La suscripción NJ All-Access otorga una licencia no exclusiva, personal e intransferible para descargar, instalar y utilizar las compilaciones de software (APKs de NJ Car Launcher, extensiones de navegador y scripts de automatización), así como acceder a las actualizaciones publicadas durante el periodo de suscripción activa. Queda estrictamente prohibida la reventa, redistribución comercial no autorizada o sublicenciamiento de los archivos APK firmados o claves de acceso.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">3. Facturación Recurrente y Procesamiento</h4>
                <p className="text-neutral-400 mt-1">
                  Los pagos, suscripciones y facturación son procesados de manera segura a través de <strong className="text-white">Dodo Payments</strong> en calidad de Comerciante Registrado (Merchant of Record). Las suscripciones se renuevan automáticamente al finalizar cada ciclo mensual o anual seleccionado por el cliente, a menos que se cancelen con antelación.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">4. Cancelación del Servicio</h4>
                <p className="text-neutral-400 mt-1">
                  El suscriptor puede cancelar la renovación automática en cualquier momento desde el enlace de autoservicio provisto por Dodo Payments en cada recibo por correo electrónico, o mediante solicitud directa a <span className="font-mono text-neutral-300">jonnelanchundia@gmail.com</span>. El acceso se mantiene hasta el último día del ciclo ya abonado.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">5. Limitación de Responsabilidad</h4>
                <p className="text-neutral-400 mt-1">
                  El software se entrega bajo el principio de &quot;tal cual&quot; (as-is). NJ Software no se responsabiliza por fallas provocadas por modificaciones de firmware en radios automotrices de terceros, alteraciones de hardware o incompatibilidad de hardware no estándar.
                </p>
              </div>
            </div>
          )}

          {/* TAB: PRIVACY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-white">1. Principio de Privacidad por Diseño</h4>
                <p className="text-neutral-400 mt-1">
                  En NJ Software valoramos la privacidad del usuario. Nuestras aplicaciones locales (como NJ Car Launcher y la extensión web) funcionan bajo arquitectura local-first o client-side; no implementan telemetría invasiva, rastreo publicitario ni recolección de hábitos de conducción.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">2. Datos Recopilados</h4>
                <p className="text-neutral-400 mt-1">
                  Únicamente recopilamos los datos estrictamente necesarios para la gestión del servicio:
                </p>
                <ul className="list-disc list-inside mt-2 text-neutral-400 space-y-1">
                  <li>Dirección de correo electrónico (para el envío de recibos, accesos a descargas y actualizaciones).</li>
                  <li>Estado de la suscripción (activo, cancelado, reembolsado).</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">3. Procesamiento de Pagos</h4>
                <p className="text-neutral-400 mt-1">
                  Toda la información bancaria y de tarjetas de crédito es gestionada directamente por <strong className="text-white">Dodo Payments</strong> bajo la normativa internacional de seguridad de datos PCI-DSS Nivel 1. NJ Software nunca tiene acceso a números de tarjeta completos ni códigos de seguridad.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">4. No Venta de Información</h4>
                <p className="text-neutral-400 mt-1">
                  Bajo ninguna circunstancia vendemos, alquilamos ni transferimos datos de nuestros usuarios a empresas de publicidad o intermediarios de datos (data brokers).
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">5. Ejercicio de Derechos de Protección de Datos</h4>
                <p className="text-neutral-400 mt-1">
                  Cualquier usuario puede solicitar el acceso, rectificación o eliminación total de sus datos de contacto enviando un correo a <span className="font-mono text-neutral-300">jonnelanchundia@gmail.com</span>.
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
                  Garantía de Devolución de 14 Días
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Queremos que compres con total tranquilidad. Si el software no es compatible con la resolución de tu pantalla o sistema, o simplemente no satisface tus expectativas, puedes solicitar un reembolso íntegro durante los primeros 14 días posteriores a tu compra.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">1. Cómo Solicitar un Reembolso</h4>
                <p className="text-neutral-400 mt-1">
                  Para tramitar tu devolución, únicamente debes enviar un correo electrónico a:
                </p>
                <div className="mt-2 p-3 rounded-lg bg-black/60 border border-white/[0.06] font-mono text-neutral-200">
                  Para: jonnelanchundia@gmail.com<br />
                  Asunto: Solicitud de Reembolso - NJ Software [ID de Pedido Dodo]
                </div>
                <p className="text-neutral-400 mt-2">
                  Incluye el correo utilizado en la compra o el número de factura que recibiste de Dodo Payments.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">2. Plazo de Procesamiento</h4>
                <p className="text-neutral-400 mt-1">
                  Las solicitudes de reembolso se aprueban en un plazo máximo de 24 a 48 horas hábiles. Una vez emitido el reembolso por Dodo Payments, los fondos suelen verse reflejados en tu extracto bancario en un plazo de 3 a 5 días hábiles, dependiendo de tu entidad financiera.
                </p>
              </div>

              <div>
                <h4 className="text-base font-semibold text-white">3. Política de Cancelación de Suscripciones</h4>
                <p className="text-neutral-400 mt-1">
                  Si deseas cancelar una suscripción recurrente mensual o anual para que no se renueve en el siguiente ciclo, puedes hacerlo con 1 clic a través del enlace de administración presente en todos los correos de Dodo Payments o avisándonos por correo. No se aplicará ninguna penalización ni recargo adicional.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/[0.08] flex items-center justify-between bg-black/40">
          <div className="text-[11px] font-mono text-neutral-500">
            Dodo Payments Merchant Compliance Ready
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
