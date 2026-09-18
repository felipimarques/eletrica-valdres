/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F2ED",
        graphite: "#23211E",
        smoke: "#6E6A61",
        line: "#DDD8CC",
        signal: "#C8102E",
      },
      fontFamily: {
        cond: ['"Barlow Condensed"', "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
