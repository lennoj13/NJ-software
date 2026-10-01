import React from 'react';
import { Github, Mail, Shield } from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080b] py-16 text-xs text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-neutral-900 border border-white/10 flex items-center justify-center p-0.5">
                <img 
                  src="/assets/nj_logo.png" 
                  alt="NJ Software" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="text-sm font-semibold tracking-tight text-white">
                  NJ Software
                </span>
                <span className="block text-[11px] font-mono text-neutral-500">
                  Desarrollado por Jonnel Anchundia (@lennoj13)
                </span>
              </div>
            </div>

            <p className="text-neutral-400 max-w-md leading-relaxed text-xs">
              Ecosistema de software independiente: dotfiles y personalizaciones para Linux (KDE Plasma), aplicaciones Android y utilidades de sistema con entregas continuas bajo suscripción unificada.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/lennoj13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-neutral-300 font-mono text-xs transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/lennoj13</span>
              </a>

              <a
                href="mailto:jonnelanchundia@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] text-neutral-300 font-mono text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>jonnelanchundia@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Software Catálogo */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-300 mb-3 font-semibold">
              Software & Proyectos
            </div>
            <ul className="space-y-2 text-neutral-400 font-mono text-xs">
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  KDE Plasma Dots & Linux Suite
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  NJ Car Launcher (Android APK)
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Herramientas de Sistema Autónomas
                </a>
              </li>
              <li>
                <a href="#apps" className="hover:text-white transition-colors">
                  Próximos Plasmoides QML
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Legal */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-neutral-300 mb-3 font-semibold">
              Legal & Soporte
            </div>
            <ul className="space-y-2 text-neutral-400 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Términos del Servicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-white transition-colors text-left"
                >
                  Reembolsos y Cancelaciones (14 días)
                </button>
              </li>
              <li>
                <a
                  href="mailto:jonnelanchundia@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Contacto de Soporte (<span className="font-mono">&lt;24h</span>)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} NJ Software • Jonnel Anchundia. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2 text-neutral-400">
            <Shield className="w-3.5 h-3.5 text-neutral-500" />
            <span>Acceso y descargas inmediatas gestionadas por correo electrónico</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
