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
    // FM Portfolio & FM DailyUI S2 & Rebyuwer
    'hover:bg-indigo-700/10',
    'hover:border-indigo-700/40',
    // LinkedIn
    'hover:bg-blue-500/10',
    'hover:border-blue-500/30',
    // profolios
    'hover:bg-stone-500/10',
    'hover:border-stone-500/30',
    // Dribbble
    'hover:bg-pink-500/10',
    'hover:border-pink-500/30',
    // Behance & Facebook
    'hover:bg-blue-700/10',
    'hover:border-blue-700/30',
    // Instagram
    'hover:bg-rose-500/10',
    'hover:border-rose-500/30',

    // GitHub & Tech-Commr & FM DailyUI S1
    'hover:bg-green-500/10',
    'hover:border-green-500/30',
    // fmUI & FM Gallery & Undecide
    'hover:bg-neutral-500/10',
    'hover:border-neutral-500/30',
    // quackOverflow, Codedex & freeCodeCamp
    'hover:bg-yellow-300/10',
    'hover:border-yellow-400/30',
    // pixelore
    'hover:bg-yellow-600/10',
    'hover:border-yellow-600/30',
    // Codedex
    'hover:bg-blue-500/10',
    'hover:border-blue-500/30',
    // Codepen
    'hover:bg-sky-500/10',
    'hover:border-sky-500/30',
  ],
  plugins: [],
};
