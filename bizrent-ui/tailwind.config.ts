import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bizrent-navy": "#1E3A8A",
        "bizrent-blue": "#1D4ED8",
        "bizrent-emerald": "#10B981",
        "bizrent-forest": "#065F46",
        "bizrent-amber": "#F59E0B",
        "bizrent-red": "#DC2626",
        "bizrent-orange": "#EA580C",
        "bizrent-slate": "#0F172A",
        "bizrent-light": "#F8FAFC",
        "bizrent-indigo": "#6366F1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover":
          "0 4px 12px 0 rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
