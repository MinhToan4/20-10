module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Romantic, gentle palette
        cream: '#ddf0f1ff',
        'warm-gray': '#36454F',
        'dusty-rose': '#F8C8DC',
        'accent-rose': '#DDA0DD',
        'envelope-tan': '#D2B48C',
        'envelope-lav': '#E6E6FA',
        // New cute pink colors
        'pink-cute': {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        flapOpen: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(-160deg)' }
        },
        heartPulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' }
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'flap-open': 'flapOpen 700ms ease forwards',
        'heart-pulse': 'heartPulse 1400ms ease-in-out infinite',
        'fade-down': 'fadeDown 400ms ease forwards'
      }
    }
  },
  plugins: [],
};