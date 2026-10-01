export const SOFTWARE_SUITE = [
  {
    id: 'linux-dots',
    name: 'NJ Plasma Dots & Linux Suite',
    category: 'Entorno de Escritorio & Personalización Linux',
    tagline: 'Configuraciones de precisión, scripts de instalación y dotfiles optimizados para KDE Plasma y distribuciones Linux.',
    version: 'v2.1 Stable Build',
    platform: 'Linux (KDE Plasma 5 / 6, Wayland & X11)',
    status: 'Desarrollo Activo & Mantenimiento',
    icon: 'terminal',
    description: 'Colección cuidada de dotfiles y personalización avanzada para usuarios de Linux que buscan un entorno de trabajo limpio, productivo y sin distracciones. Incluye configuraciones de paneles, atajos eficientes, esquemas de color neutrales, scripts de arranque y optimizaciones de compositor sin comprometer el rendimiento del hardware.',
    features: [
      'Scripts de autoinstalación reproducibles para configurar tu entorno en segundos.',
      'Ajustes milimétricos de tipografía, paddings y temas limpios para KDE Plasma.',
      'Configuraciones de terminal, multiplexor y shells optimizadas para baja latencia.',
      'Gestión modular de configuraciones separadas por componentes y dependencias mínimas.',
      'Compatibilidad probada tanto en sesiones modernas Wayland como X11.'
    ],
    techSpecs: [
      { label: 'Entorno Base', value: 'KDE Plasma 6 / 5.27 LTS' },
      { label: 'Servidor Gráfico', value: 'Wayland nativo / X11' },
      { label: 'Instalador', value: 'Bash / Python automatizado' },
      { label: 'Filosofía', value: 'Minimalista & Alto Rendimiento' }
    ],
    subscriberPerks: [
      'Acceso al repositorio privado de dots con actualizaciones continuas ante nuevas versiones de Plasma.',
      'Scripts de despliegue en un solo comando para instalaciones limpias de Linux.',
      'Guías detalladas de configuración de atajos, paneles y optimización del compositor.',
      'Soporte directo para resolver dudas de compatibilidad en diferentes distribuciones.'
    ]
  },
  {
    id: 'car-launcher',
    name: 'NJ Car Launcher & Android OS Suite',
    category: 'Android Automotive & Tablet Interface',
    tagline: 'Sistema de interfaz optimizado para pantallas de vehículos y tablets Android con arquitectura modular.',
    version: 'v6.0 Release Ready',
    platform: 'Android 9.0+ (API 28-36)',
    status: 'Producción / Actualizaciones continuas',
    icon: 'car',
    description: 'Diseñado para transformar la experiencia de uso en pantallas de coche y tablets. Proporciona una interfaz táctil rápida, sin bloatware publicitario, con controles multimedia independientes en segundo plano, integración de navegación y dock personalizable.',
    primaryImage: '/assets/screenshots/launcher-home.png',
    gallery: [
      {
        url: '/assets/screenshots/launcher-home.png',
        title: 'Escritorio Principal',
        caption: 'Distribución táctil con reloj digital, reproductor minimizado y acceso directo a aplicaciones.'
      },
      {
        url: '/assets/screenshots/launcher-music.png',
        title: 'Centro Musical',
        caption: 'Reproductor local en segundo plano con soporte de carpetas, listas recientes y favoritas.'
      },
      {
        url: '/assets/screenshots/launcher-nav.png',
        title: 'Módulo de Navegación',
        caption: 'Integración nativa con Google Maps, Waze o selectores de apps compatibles con geo-intents.'
      },
      {
        url: '/assets/screenshots/launcher-widgets.png',
        title: 'Gestor Modular de Widgets',
        caption: 'Personalización de cápsulas, transparencia de barras y ubicación en 4 bordes.'
      }
    ],
    features: [
      'Multi-escritorio: Hasta 8 escritorios configurables con reordenación táctil mediante arrastre.',
      'Reproducción de audio en segundo plano independiente y navegación por carpetas locales.',
      'Modos Día, Noche, Sistema y Horario con adaptación automática de contraste para conducción.',
      'Cajón de aplicaciones con búsqueda rápida, gestión de favoritos y acceso a ajustes del vehículo.',
      'Dock flotante ubicable en los 4 bordes de pantalla para paneles panorámicos o formato estándar.'
    ],
    techSpecs: [
      { label: 'Stack Técnico', value: 'Flutter Stable + Android NDK' },
      { label: 'Formato de Entrega', value: 'APK firmado + Actualizaciones OTA' },
      { label: 'Arquitecturas', value: 'arm64-v8a, armeabi-v7a, x86_64' },
      { label: 'Consumo de RAM', value: '< 180MB en reposo' }
    ],
    subscriberPerks: [
      'Descarga directa de APKs optimizados y listos para instalar sin compilar.',
      'Acceso a versiones preliminares (beta) con funciones experimentales.',
      'Canal de sugerencias directas para soporte de nuevos modelos de pantalla.'
    ]
  },
  {
    id: 'system-tools',
    name: 'NJ System Utilities & Desktop Tools',
    category: 'Productividad & Utilidades de Sistema',
    tagline: 'Herramientas de escritorio y scripts ligeros para automatización de tareas y rendimiento.',
    version: 'v1.4 Core Edition',
    platform: 'Multiplataforma (Linux / Desktop)',
    status: 'Desarrollo Continuo',
    icon: 'cpu',
    description: 'Conjunto de utilidades de sistema diseñadas para resolver problemas puntuales de automatización, gestión local de archivos y productividad diaria sin sobrecargar el consumo de recursos de tu máquina.',
    features: [
      'Ejecución local autónoma sin telemetría ni conexión obligatoria a internet.',
      'Consumo mínimo de memoria y procesamiento instantáneo.',
      'Herramientas concebidas para integrarse directamente con flujos de trabajo en terminal y escritorio.',
      'Diseño austero y centrado en la utilidad inmediata.'
    ],
    techSpecs: [
      { label: 'Filosofía', value: 'Local-first, Zero-Telemetry' },
      { label: 'Dependencias', value: 'Nativas / Cero bloat' },
      { label: 'Licencia', value: 'Uso personal y profesional' },
      { label: 'Actualización', value: 'Entrega continua por suscripción' }
    ],
    subscriberPerks: [
      'Acceso inmediato a todas las herramientas actuales y a las que se publiquen en el futuro.',
      'Actualizaciones automáticas con parches de compatibilidad del sistema operativo.',
      'Prioridad en el buzón de soporte técnico directo con el autor.'
    ]
  }
];

export const UPCOMING_PIPELINE = [
  {
    title: 'Nuevos Plasmoides & Widgets QML para KDE Plasma 6',
    desc: 'Widgets nativos de escritorio para control multimedia, estadísticas de hardware y monitoreo ultraligero.',
    status: 'En desarrollo activo',
    badge: 'KDE Plasma 6'
  },
  {
    title: 'Autoinstalador Modular de Dots Linux',
    desc: 'Herramienta de terminal para respaldar, sincronizar y desplegar entornos completos en un solo comando.',
    status: 'Fase de pruebas',
    badge: 'Linux CLI'
  },
  {
    title: 'NJ Car Launcher: Módulo OBD2 & Telemetría',
    desc: 'Integración en tiempo real por Bluetooth para monitorizar parámetros del motor directamente en la interfaz.',
    status: 'Investigación técnica',
    badge: 'Android Native'
  }
];
