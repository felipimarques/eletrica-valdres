/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        hazard: { orange: "#EA580C", deep: "#9A3412" },
        site: { light: "#FAFAF9", ink: "#1C1917", panel: "#F5F5F4" },
      },
      fontFamily: { sans: ['"IBM Plex Sans"', "sans-serif"] },
    },
  },
  plugins: [],
};
