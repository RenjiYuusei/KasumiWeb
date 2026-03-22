import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kasumi: {
          bg: '#0a0014',
          surface: '#150025',
          border: '#2d004d',
          primary: '#8b5cf6',
          'primary-light': '#a78bfa',
          accent: '#00d9ff',
          'accent-dark': '#00b3d9',
          success: '#10b981',
          text: '#e0e0e0',
          'text-muted': '#888888',
        },
      },
      backgroundImage: {
        'gradient-kasumi': 'linear-gradient(135deg, #8b5cf6 0%, #00d9ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #150025 0%, #0a0014 100%)',
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        shimmer: 'shimmer 2s ease-in-out infinite',
        successPulse: 'successPulse 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(139, 92, 246, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        successPulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
    },
  },
  plugins: [],
}
export default config
