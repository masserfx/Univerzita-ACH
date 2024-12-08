/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ach-blue': '#004C97',
        'ach-light-blue': '#0066CC',
        'ach-dark': '#1A1A1A',
        'ach-gray': '#F5F5F5',
        'ach-light': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            a: {
              color: '#004C97',
              '&:hover': {
                color: '#0066CC',
              },
            },
            h1: {
              color: '#1A1A1A',
            },
            h2: {
              color: '#1A1A1A',
            },
            h3: {
              color: '#1A1A1A',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

