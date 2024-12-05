import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ach-blue': 'var(--ach-blue)',
        'ach-light-blue': 'var(--ach-light-blue)',
        'ach-dark': 'var(--ach-dark)',
        'ach-gray': 'var(--ach-gray)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            a: {
              color: 'var(--ach-blue)',
              '&:hover': {
                color: 'var(--ach-light-blue)',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;

export default config;
