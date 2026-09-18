import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA",
        ink: "#212121",
        muted: "#616161",
        accent: {
          DEFAULT: "#D32F2F",
          dark: "#B71C1C",
        },
        secondary: "#F9A825",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)",
        lift: "0 10px 30px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
