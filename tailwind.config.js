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
    // FM Portfolio & FM DailyUI S2
    'hover:bg-indigo-700/20',
    'hover:border-indigo-700/70',
    // LinkedIn
    'hover:bg-blue-500/20',
    'hover:border-blue-500/50',
    // profolios
    'hover:bg-stone-500/10',
    'hover:border-stone-500/50',
    // Dribbble
    'hover:bg-pink-500/10',
    'hover:border-pink-500/50',
    // Behance & Facebook
    'hover:bg-blue-700/20',
    'hover:border-blue-700/70',
    // Instagram
    'hover:bg-rose-500/10',
    'hover:border-rose-500/50',

    // GitHub & Tech-Commr & FM DailyUI S1
    'hover:bg-green-700/20',
    'hover:border-green-700/70',
    // fmUI & FM Gallery
    'hover:bg-neutral-500/10',
    'hover:border-neutral-500/50',
    // quackOverflow, Codedex & freeCodeCamp
    'hover:bg-yellow-300/10',
    'hover:border-yellow-400/50',
    // pixelore
    'hover:bg-yellow-600/10',
    'hover:border-yellow-600/50',
    // Codedex
    'hover:bg-blue-500/10',
    'hover:border-blue-500/50',
    // Codepen
    'hover:bg-sky-500/10',
    'hover:border-sky-500/50',
  ],
  plugins: [],
};
