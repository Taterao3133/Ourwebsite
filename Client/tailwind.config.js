/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
    fontFamily: {
      'roboto-serif': ['"Roboto Serif"', 'serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    fontWeight: {
      'light': 400,
        'medium': 500,
        'bold': 700,
    },
    gridTemplateColumns: {
      '100': 'repeat(100, minmax(0, 1fr))',
    },
    keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-2px)' },
        '50%': { transform: 'translateX(2px)' },
        '75%': { transform: 'translateX(-2px)' },
      },
        
      moveCar: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(100vw)' },
      },
      smoke: {
        '0%': { opacity: '0', transform: 'translateX(0) translateY(0) scale(0.5)' },
        '30%': { opacity: '0.6', transform: 'translateX(-10px) translateY(-5px) scale(0.7)' },
        '60%': { opacity: '0.4', transform: 'translateX(-20px) translateY(-10px) scale(0.9)' },
        '100%': { opacity: '0', transform: 'translateX(-30px) translateY(-15px) scale(1)' },
      },
    },
    animation1: {
      shake: 'shake 0.5s ease-in-out',
      smoke: 'smoke 2s infinite ease-out',
    },
    animation: {
      shake: 'shake 0.5s ease-in-out',
      'text-travel': 'text-travel 5s linear infinite',
      'moveCar': 'moveCar 15s infinite ease-in-out',
      'smoke': 'smoke 2s infinite ease-out',
      'spin-slow': 'spin 10s linear infinite',
    },
    },
  },
  plugins: [],
}

