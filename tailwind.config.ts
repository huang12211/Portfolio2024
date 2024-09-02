import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'pale-teal': '#62c4be',
        'bright-teal': '#02a69b',
        'pale-coral': '#fa9898',
        'bright-coral': '#f57171',
        'dark-coral': '#ff5757',
        'pale-blue': '#71bff0',
        'bright-blue': '#279ce6',
        'dark-blue': '#027bc7',
        'pale-purple': '#d7bfff',
        'bright-purple': '#ab80f2',
        'dark-purple': '#803cf0',
      },
      height: {
        13: '3.25rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
