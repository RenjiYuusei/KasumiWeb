/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'kasumi': {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        }
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite',
        'success-pulse': 'successPulse 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))' },
          '50%': { filter: 'brightness(1.1) drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        successPulse: {
          '0%, 100%': { boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 4px 24px rgba(34, 197, 94, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
