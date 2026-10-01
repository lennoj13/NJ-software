import React, { useState, useEffect } from 'react';
import { 
  Github, 
  GitBranch, 
  GitCommit, 
  Star, 
  RefreshCw, 
  ExternalLink, 
  Search, 
  Filter, 
  Clock, 
  Code, 
  Layers, 
  Terminal, 
  Smartphone, 
  Globe, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const FALLBACK_REPOS = [
  {
    name: 'nj-dock',
    description: 'Extensión de navegador con barra dock flotante, gestión de marcadores y pestañas activas sin interrumpir la navegación.',
    language: 'JavaScript',
    pushed_at: '2026-09-15T06:29:47Z',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/lennoj13/nj-dock',
    category: 'extension'
  },
  {
    name: 'NJ-car-launcher',
    description: 'Sistema de interfaz táctil para pantallas de coche y tablets Android con arquitectura modular, reproducción en segundo plano y dock adaptable.',
    language: 'Flutter / Dart',
    pushed_at: '2026-10-01T13:52:00Z',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/lennoj13',
    category: 'android'
  },
  {
    name: 'plasma-dots',
    description: 'Dotfiles y configuraciones de alta precisión para KDE Plasma 6 y Wayland con scripts de autoinstalación limpia y optimización de kwin.',
    language: 'Shell',
    pushed_at: '2026-10-01T14:30:00Z',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/lennoj13',
    category: 'linux'
  },
  {
    name: 'fud-ai',
    description: 'Free & open-source AI calorie & workout tracker for iOS and Android. Privacy-first, local-first, bring your own key.',
    language: 'Kotlin',
    pushed_at: '2026-09-21T05:38:28Z',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/lennoj13/fud-ai',
    category: 'android'
  },
  {
    name: 'swot',
    description: 'Identify email addresses or domain names that belong to colleges or universities. Academic verification module.',
    language: 'Kotlin',
    pushed_at: '2026-08-30T04:04:14Z',
    stargazers_count: 0,
    forks_count: 0,
    html_url: 'https://github.com/lennoj13/swot',
    category: 'tools'
  }
];

// Helper to calculate relative time in Spanish
function timeAgo(dateString) {
  if (!dateString) return 'reciente';
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'hace un momento';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `hace ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `hace ${hours} h`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `hace ${days} d`;
  const months = Math.floor(days / 30);
  if (months < 12) return `hace ${months} m`;
  return `hace ${Math.floor(months / 12)} a`;
}

// Map repository to category
function detectCategory(repo) {
  const name = (repo.name || '').toLowerCase();
  const desc = (repo.description || '').toLowerCase();
  const lang = (repo.language || '').toLowerCase();

  if (name.includes('dock') || name.includes('extension') || desc.includes('extension') || desc.includes('chrome')) {
    return 'extension';
  }
  if (name.includes('plasma') || name.includes('dot') || name.includes('linux') || lang === 'shell') {
    return 'linux';
  }
  if (name.includes('launcher') || name.includes('car') || lang === 'dart' || lang === 'kotlin') {
    return 'android';
  }
  return 'tools';
}

export default function ProjectsPage({ onBackToHome, onOpenCheckout }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [lastSyncTime, setLastSyncTime] = useState(null);

  // Fetch live repos from GitHub API
  const fetchGitHubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://api.github.com/users/lennoj13/repos?sort=pushed&per_page=100');
      if (!res.ok) throw new Error(`GitHub API HTTP ${res.status}`);
      const data = await res.json();
      
      if (Array.isArray(data)) {
        // Filter out irrelevant or temporary items if needed
        const enriched = data.map(r => ({
          ...r,
          category: detectCategory(r)
        }));

        // Ensure key local suite projects exist in the list even if not yet pushed to GitHub
        const hasCarLauncher = enriched.some(r => r.name.toLowerCase().includes('launcher'));
        const hasPlasmaDots = enriched.some(r => r.name.toLowerCase().includes('plasma'));

        let combined = [...enriched];
        if (!hasCarLauncher) {
          combined.unshift(FALLBACK_REPOS[1]); // NJ Car Launcher
        }
        if (!hasPlasmaDots) {
          combined.unshift(FALLBACK_REPOS[2]); // Plasma Dots
        }

        setRepos(combined);
        setLastSyncTime(new Date());
        localStorage.setItem('nj_github_cache', JSON.stringify({
          data: combined,
          time: new Date().toISOString()
        }));
      }
    } catch (err) {
      console.warn('Using cached or fallback GitHub data:', err);
      // Try local storage cache
      const cached = localStorage.getItem('nj_github_cache');
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setRepos(parsed.data);
          setLastSyncTime(new Date(parsed.time));
        } catch {
          setRepos(FALLBACK_REPOS);
        }
      } else {
        setRepos(FALLBACK_REPOS);
      }
      setError('Mostrando datos en caché');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchGitHubRepos();
  }, []);

  // Filter & Search logic
  const filteredRepos = repos.filter(repo => {
    const matchesFilter = selectedFilter === 'all' || repo.category === selectedFilter;
    const matchesSearch = 
      (repo.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.language || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#090a0f] text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Live Sync Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/[0.07]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <button 
                onClick={onBackToHome}
                className="hover:text-white transition-colors"
              >
                Inicio
              </button>
              <span>/</span>
              <span className="text-white">Proyectos & Repositorios</span>
            </div>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Directorio de Proyectos
            </h1>
            <p className="mt-1 text-sm text-neutral-400">
              Conexión directa con GitHub (@lennoj13). Se actualiza automáticamente con cada commit y nuevo lanzamiento.
            </p>
          </div>

          {/* GitHub Status & Refresh Button */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GitHub Live Sync</span>
              {lastSyncTime && (
                <span className="text-neutral-500 text-[10px]">
                  ({timeAgo(lastSyncTime)})
                </span>
              )}
            </div>

            <button
              onClick={fetchGitHubRepos}
              disabled={loading}
              className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/10 transition-colors disabled:opacity-50"
              title="Sincronizar ahora con GitHub"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs font-mono">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              Todos ({repos.length})
            </button>
            <button
              onClick={() => setSelectedFilter('extension')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'extension'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              Extensiones & Web
            </button>
            <button
              onClick={() => setSelectedFilter('linux')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'linux'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Linux & Dots
            </button>
            <button
              onClick={() => setSelectedFilter('android')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'android'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              Android & Móvil
            </button>
            <button
              onClick={() => setSelectedFilter('tools')}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                selectedFilter === 'tools'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Herramientas
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nombre o tecnología..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-black/60 border border-white/10 text-white placeholder-neutral-500 text-xs font-mono focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, idx) => {
            const isNjDock = repo.name.toLowerCase() === 'nj-dock';
            const isCarLauncher = repo.name.toLowerCase().includes('launcher');
            const isDots = repo.name.toLowerCase().includes('dots') || repo.name.toLowerCase().includes('plasma');

            return (
              <div
                key={repo.id || idx}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 glass-surface border ${
                  isNjDock || isCarLauncher || isDots
                    ? 'border-white/20 bg-[#12141c]'
                    : 'border-white/[0.07] bg-[#0c0d12]/70 hover:border-white/15'
                }`}
              >
                <div>
                  {/* Top line: Category and status badge */}
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="px-2 py-0.5 rounded bg-white/[0.05] text-neutral-400 border border-white/[0.06] uppercase text-[10px]">
                      {repo.category === 'extension' ? 'Extensión' : repo.category === 'linux' ? 'Linux' : repo.category === 'android' ? 'Android' : 'Herramienta'}
                    </span>

                    {(isNjDock || isCarLauncher || isDots) && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                        All-Access Suite
                      </span>
                    )}
                  </div>

                  {/* Repo Title */}
                  <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                    <span>{repo.name}</span>
                    {isNjDock && (
                      <span className="text-[10px] font-mono font-normal px-1.5 py-0.2 rounded bg-white/10 text-neutral-300">
                        MV3
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs text-neutral-400 leading-relaxed min-h-[48px]">
                    {repo.description || 'Proyecto de software independiente desarrollado por @lennoj13.'}
                  </p>

                  {/* Tech specs row */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-400" />
                      <span className="text-neutral-300">{repo.language || 'Multi-stack'}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-500" />
                      <span>{timeAgo(repo.pushed_at)}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-neutral-300 hover:text-white border border-white/[0.08] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Ver en GitHub</span>
                  </a>

                  {(isNjDock || isCarLauncher || isDots) ? (
                    <button
                      onClick={onOpenCheckout}
                      className="py-2 px-3 rounded-lg bg-white text-black hover:bg-neutral-200 text-xs font-mono font-semibold transition-colors flex items-center gap-1"
                    >
                      <span>Obtener</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-neutral-400 hover:text-white border border-white/[0.08] transition-colors"
                      title="Explorar repositorio"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredRepos.length === 0 && !loading && (
          <div className="mt-16 text-center py-12 rounded-2xl glass-surface-subtle border border-white/[0.06]">
            <p className="text-sm text-neutral-400">No se encontraron proyectos con el término &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedFilter('all'); }}
              className="mt-3 px-4 py-1.5 rounded-lg bg-white/[0.06] text-xs font-mono text-white"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-surface border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white">
              ¿Quieres acceso a compilaciones directas de todos estos proyectos?
            </div>
            <div className="text-xs text-neutral-400 mt-1">
              Con el All-Access Pass recibes instaladores listos, soporte prioritario y acceso a repositorios privados de dots.
            </div>
          </div>

          <button
            onClick={onOpenCheckout}
            className="px-5 py-2.5 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Obtener Suscripción
          </button>
        </div>

      </div>
    </div>
  );
}
