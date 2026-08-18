/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0B1F4B',
          secondary: '#155EEF',
          accent: '#1688FF',
          bg: '#FFFFFF',
          'bg-subtle': '#F5F9FF',
          border: '#DCE6F5',
          'body-text': '#475569',
          navy: '#0B1F4B',
          blue: '#155EEF',
          'blue-electric': '#1688FF',
          'blue-light': '#3B82F6',
          'blue-ice': '#F5F9FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(11, 31, 75, 0.04), 0 1px 2px rgba(11, 31, 75, 0.02)',
        'card': '0 4px 20px -2px rgba(11, 31, 75, 0.05), 0 2px 6px -1px rgba(11, 31, 75, 0.02)',
        'card-hover': '0 16px 32px -8px rgba(21, 94, 239, 0.12), 0 4px 12px -2px rgba(11, 31, 75, 0.04)',
        'glow': '0 4px 14px 0 rgba(21, 94, 239, 0.25)',
        'glow-lg': '0 8px 24px 0 rgba(21, 94, 239, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
