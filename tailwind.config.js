module.exports = {
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-slower': 'pulse 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 16s linear infinite',
        'float-random': 'float-y 15s ease-in-out infinite',
        'pulse-random': 'pulse 4s ease-in-out infinite',
        'move-x': 'move-x 15s linear infinite',
        'move-x-reverse': 'move-x 15s linear infinite reverse',
        'move-y': 'move-y 15s linear infinite',
        'move-y-reverse': 'move-y 15s linear infinite reverse',
        'move-diagonal': 'move-diagonal 20s linear infinite',
        'move-diagonal-reverse': 'move-diagonal-reverse 25s linear infinite',
        'float-rotate': 'float-rotate 15s ease-in-out infinite',
        'float-rotate-reverse': 'float-rotate-reverse 18s ease-in-out infinite',
        'pulse-move': 'pulse-move 12s ease-in-out infinite',
        'pulse-move-reverse': 'pulse-move-reverse 14s ease-in-out infinite',
        'bounce-horizontal': 'bounce-horizontal 8s ease-in-out infinite',
        'bounce-horizontal-reverse': 'bounce-horizontal-reverse 9s ease-in-out infinite',
        'blob-spin': 'blob-bounce 25s ease-in-out infinite',
        'blob-spin-reverse': 'blob-bounce 30s ease-in-out infinite reverse',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float-particle': 'float-particle 15s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-reverse': {
          '100%': { transform: 'rotate(-360deg)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100px)' },
        },
        'move-x': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'move-y': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        'move-diagonal': {
          '0%': { transform: 'translate(-100%, -100%)' },
          '100%': { transform: 'translate(100vw, 100vh)' }
        },
        'move-diagonal-reverse': {
          '0%': { transform: 'translate(100%, 100%)' },
          '100%': { transform: 'translate(-100vw, -100vh)' }
        },
        'float-rotate': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-100px) rotate(180deg)' },
          '100%': { transform: 'translateY(0) rotate(360deg)' }
        },
        'float-rotate-reverse': {
          '0%': { transform: 'translateY(0) rotate(360deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'pulse-move': {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.2) translate(100px, 100px)' },
          '100%': { transform: 'scale(1) translate(0, 0)' }
        },
        'pulse-move-reverse': {
          '0%, 100%': { transform: 'scale(1) translate(0, 0)' },
          '50%': { transform: 'scale(1.1) translate(-50px, -50px)' },
        },
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(200px)' }
        },
        'bounce-horizontal-reverse': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50px)' },
        },
        'blob-bounce': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(50px, -50px) rotate(120deg)' },
          '66%': { transform: 'translate(-50px, 50px) rotate(240deg)' },
        },
        'glow': {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        'float-particle': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)' },
        },
      },
      utilities: {
        '.clip-path-triangle': {
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        },
        '.clip-path-hexagon': {
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
        }
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          foreground: 'white',
        },
        secondary: {
          DEFAULT: '#6366F1', // indigo-500
          foreground: 'white',
        },
        background: {
          DEFAULT: 'white',
          dark: '#1F2937', // gray-800
        },
        foreground: {
          DEFAULT: '#111827', // gray-900
          dark: '#F9FAFB', // gray-50
        }
      }
    },
  },
} 