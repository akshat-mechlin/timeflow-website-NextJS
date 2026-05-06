/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        flow: {
          blue: '#4A69FF',
          purple: '#9D44FF',
          bg: '#1a2035',
          surface: '#252d4a',
          card: '#313a5c',
          border: '#4c5a85',
          muted: '#b4c0d9',
        },
      },
      backgroundImage: {
        'flow-gradient': 'linear-gradient(135deg, #4A69FF 0%, #9D44FF 100%)',
        'flow-gradient-soft':
          'linear-gradient(135deg, rgba(74,105,255,0.32) 0%, rgba(157,68,255,0.26) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'features-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'features-float': 'features-float 5.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
