export const SOFTWARE_SUITE = [
  {
    id: 'car-launcher',
    name: 'NJ Car Launcher',
    category: 'Android Automotive & Tablet OS',
    tagline: 'Sistema de inicio optimizado para pantallas de vehículos y tablets Android con arquitectura modular.',
    version: 'v6.0 Release Ready',
    platform: 'Android 9.0+ (API 28-36)',
    status: 'Producción / Actualizaciones continuas',
    icon: 'car',
    description: 'Diseñado específicamente para sustituir la interfaz genérica de radios y pantallas de coche chinas o tablets dedicadas. Ofrece fluidez inmediata sin bloatware publicitario, navegación fluida y control multimedia físico y táctil.',
    primaryImage: '/assets/screenshots/launcher-home.png',
    gallery: [
      {
        url: '/assets/screenshots/launcher-home.png',
        title: 'Escritorio Principal',
        caption: 'Distribución táctil con reloj analógico/digital, widget multimedia y barra dock integrada.'
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
      'Multi-escritorio: Hasta 8 escritorios configurables con reordenación mediante arrastre.',
      'Reproducción de audio en segundo plano independiente y gestión por carpetas de música.',
      'Modos Día, Noche, Sistema y Horario configurable con adaptación automática de contraste.',
      'Cajón de aplicaciones con búsqueda instantánea, favoritos y acceso a ajustes del vehículo.',
      'Dock flotante ubicable en los 4 márgenes de pantalla para adaptación a pantallas panorámicas o cuadradas.'
    ],
    techSpecs: [
      { label: 'Stack Técnico', value: 'Flutter Stable + Native Android (NDK)' },
      { label: 'Formato de Entrega', value: 'APK firmado + Actualizaciones OTA' },
      { label: 'Resoluciones', value: '1024x600, 1280x720, 1920x1080+' },
      { label: 'Consumo de RAM', value: '< 180MB en reposo' }
    ],
    subscriberPerks: [
      'Descarga directa de APKs optimizados para cada arquitectura (armeabi-v7a, arm64-v8a, x86_64).',
      'Acceso a versiones preliminares (beta) con funciones experimentales de radio y OBD2.',
      'Canal de soporte prioritario para compatibilidad con radios específicas.'
    ]
  },
  {
    id: 'id-generator',
    name: 'NJ Generator & Browser Suite',
    category: 'Herramientas Web & Extensión de Productividad',
    tagline: 'Suite de simulación, diseño de credenciales y utilidades de automatización para navegador.',
    version: 'v2.4 Pro Build',
    platform: 'Web / Chrome Extension (Manifest V3)',
    status: 'Producción Activa',
    icon: 'browser',
    description: 'Herramienta de precisión para desarrolladores y diseñadores que requieren maquetar portales académicos, credenciales simuladas y documentos con tipografía y estética institucional exacta.',
    primaryImage: '/assets/screenshots/launcher-home.png', // Fallback or custom preview card
    demoUrl: 'https://nj-id-generator.vercel.app/',
    features: [
      'Motor de plantillas institucionales con ajuste milimétrico de tipografías y logos oficiales.',
      'Procesamiento 100% en el lado del cliente (Client-Side Only) sin almacenamiento en servidores externos.',
      'Exportación en ultra alta resolución (PNG & SVG) lista para presentaciones e interfaces interactivas.',
      'Modo extensión para inyección rápida y generación de datos de prueba durante flujos de desarrollo.'
    ],
    techSpecs: [
      { label: 'Stack Técnico', value: 'React 19 + Vite + Lucide' },
      { label: 'Arquitectura', value: 'Manifest V3 (Extensión) + SPA' },
      { label: 'Privacidad', value: 'Zero-knowledge, 100% local' },
      { label: 'Despliegue', value: 'Vercel Edge Network' }
    ],
    subscriberPerks: [
      'Paquete Pro de la extensión empaquetada lista para instalar en Chrome / Brave / Edge.',
      'Desbloqueo de plantillas avanzadas y exportación por lotes sin límites.',
      'Actualizaciones automáticas de compatibilidad con las nuevas políticas de Google Chrome.'
    ]
  },
  {
    id: 'market-bots',
    name: 'NJ Market Intelligence Bot',
    category: 'Algoritmos & Automatización Financiera',
    tagline: 'Escáner algorítmico en Python para detección de oportunidades complementarias en mercados binarios.',
    version: 'v1.8 Core Engine',
    platform: 'Python 3.11+ / Docker',
    status: 'Desarrollo Continuo',
    icon: 'bot',
    description: 'Motor de escaneo analítico que recorre en tiempo real la profundidad real de los libros de órdenes en Polymarket. Evalúa spreads, comisiones taker dinámicas y márgenes de seguridad para deslizamiento en modo de simulación y alertas.',
    features: [
      'Análisis bidireccional de resultados en simultáneo con modelado dinámico de comisiones.',
      'Cálculo estricto de margen de seguridad para slippage antes de validar cualquier señal.',
      'Almacenamiento estructurado en SQLite con histórico de precios y profundidad de liquidez.',
      'Sistema de alertas en tiempo real con disparadores configurables por umbral de ROI y volumen.'
    ],
    techSpecs: [
      { label: 'Lenguaje', value: 'Python 3.11 con Tipado Estricto' },
      { label: 'Base de Datos', value: 'SQLite / WAL mode' },
      { label: 'Modo Operativo', value: 'Paper Trading / Signal Scanner' },
      { label: 'Integración', value: 'APIs públicas Polymarket' }
    ],
    subscriberPerks: [
      'Acceso a scripts actualizados continuamente ante cualquier cambio en las APIs de Polymarket.',
      'Archivos de configuración con presets optimizados para baja latencia.',
      'Guía paso a paso de despliegue en VPS o servidores locales.'
    ]
  }
];

export const UPCOMING_PIPELINE = [
  {
    title: 'NJ Video Transcoder & Downloader',
    desc: 'Utilidad ligera multiplataforma para extracción y conversión local de contenido multimedia.',
    status: 'En desarrollo (Q4)',
    badge: 'Desktop App'
  },
  {
    title: 'NJ Car OBD2 Diagnostic Layer',
    desc: 'Capa de telemetría por Bluetooth en tiempo real directamente integrada dentro de NJ Car Launcher.',
    status: 'Investigación (Q1)',
    badge: 'Hardware Sync'
  },
  {
    title: 'NJ Automation Suite',
    desc: 'Conjunto de scripts de productividad y automatización de tareas repetitivas en Linux y web.',
    status: 'Planeado',
    badge: 'CLI Tools'
  }
];
