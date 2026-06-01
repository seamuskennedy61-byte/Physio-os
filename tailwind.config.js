/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0F172A",
          800: "#13203a",
          700: "#1B2A4A",
          600: "#243150",
        },
        amber: {
          accent: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        site: "1180px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0.35)" },
          "50%": { boxShadow: "0 0 24px 2px rgba(245,158,11,0.35)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
