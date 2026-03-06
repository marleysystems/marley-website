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
        background: "#FAF8F4",
        surface: "#F2ECE3",
        "surface-raised": "#EAE4D8",
        "text-primary": "#1C1814",
        "text-secondary": "#5C5650",
        "text-muted": "#9C958A",
        accent: "#B85D2A",
        "accent-hover": "#CA6A35",
        "accent-subtle": "#C4B5A0",
        trust: "#4A7A4E",
        border: "#DDD8CF",
        "border-subtle": "#EAE5DE",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-warm": "radial-gradient(ellipse at top, #F2ECE3 0%, #FAF8F4 60%)",
        "gradient-hero": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(184,93,42,0.07) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "scroll-x": "scrollX 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
