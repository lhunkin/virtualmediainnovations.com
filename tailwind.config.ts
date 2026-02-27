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
        primary: {
          DEFAULT: "#00A6FF",
          50: "#e6f6ff",
          100: "#b3e3ff",
          200: "#80d0ff",
          300: "#4dbdff",
          400: "#1aaaff",
          500: "#00A6FF",
          600: "#0085cc",
          700: "#006499",
          800: "#004366",
          900: "#002133",
        },
        neon: {
          DEFAULT: "#00FF1A",
          50: "#e6fff0",
          100: "#b3ffc4",
          200: "#80ff99",
          300: "#4dff6e",
          400: "#1aff43",
          500: "#00FF1A",
          600: "#00cc15",
          700: "#009910",
          800: "#00660a",
          900: "#003305",
        },
        surface: {
          DEFAULT: "#0a0a0a",
          dark: "#000000",
          card: "#111111",
          elevated: "#1a1a1a",
        },
        background: "#000000",
        foreground: "#e2e8f0",
        muted: "#8a8a8a",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 166, 255, 0.3)",
        "glow-green": "0 0 20px rgba(0, 255, 26, 0.3)",
        "glow-yellow": "0 0 20px rgba(251, 255, 140, 0.3)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
