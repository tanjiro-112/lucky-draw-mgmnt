/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6D28D9',
        'primary-focus': '#5B21B6',
        'primary-content': '#FFFFFF',

        'secondary': '#10B981',
        'secondary-focus': '#059669',
        'secondary-content': '#FFFFFF',

        'accent': '#EC4899',
        'accent-focus': '#DB2777',
        'accent-content': '#FFFFFF',

        'neutral': '#374151',
        'neutral-focus': '#1F2937',
        'neutral-content': '#FFFFFF',

        'base-100': '#FFFFFF',
        'base-200': '#F9FAFB',
        'base-300': '#F3F4F6',
        'base-content': '#1F2937',

        'info': '#3ABFF8',
        'success': '#36D399',
        'warning': '#FBBD23',
        'error': '#F87272',

        '--rounded-box': '1rem',
        '--rounded-btn': '0.5rem',
        '--rounded-badge': '1.9rem',
        '--animation-btn': '0.25s',
        '--animation-input': '0.2s',
        '--btn-text-case': 'uppercase',
        '--btn-focus-scale': '0.95',
        '--border-btn': '1px',
        '--tab-border': '1px',
        '--tab-radius': '0.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'lifted': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'intense': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in-up': 'slideInUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
}
