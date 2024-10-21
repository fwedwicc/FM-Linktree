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
    'hover:border-blue-500/70',
    // GitHub
    'hover:bg-stone-500/20',
    'hover:border-stone-500/70',
    // Behance
    'hover:bg-blue-700/20',
    'hover:border-blue-700/70',
    // Dribbble
    'hover:bg-pink-500/20',
    'hover:border-pink-500/70',
  ],
  plugins: [],
};
