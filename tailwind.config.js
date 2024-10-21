/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  safelist: [
    // FM Portfolio
    'hover:bg-indigo-700/20',
    'hover:border-indigo-700/70',
    // LinkedIn
    'hover:bg-blue-500/20',
    'hover:border-blue-500/50',
    // GitHub
    'hover:bg-stone-500/10',
    'hover:border-stone-500/50',
    // Dribbble
    'hover:bg-pink-500/10',
    'hover:border-pink-500/50',
    // Behance
    'hover:bg-blue-700/20',
    'hover:border-blue-700/70',

    // Tech-Commr
    'hover:bg-green-700/20',
    'hover:border-green-700/70',
  ],
  plugins: [],
};
