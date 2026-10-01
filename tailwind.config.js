/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090a0c',
        surface: {
          DEFAULT: '#111215',
          subtle: '#16181d',
          hover: '#1c1f26',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          strong: 'rgba(255, 255, 255, 0.14)',
          focus: 'rgba(255, 255, 255, 0.3)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        md: '12px',
        lg: '20px',
      }
    },
  },
  plugins: [],
}
