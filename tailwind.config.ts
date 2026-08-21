/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //   colors: {
      //     blue: {
      //       500: "#8594D6",
      //       700: "#4B4ADB",
      //       800: "#3C3DBF",
      //     },
      //     gray: {
      //       100: "#f3f4f6",
      //       900: "#111827",
      //     },
      //     primary: "#1763F3",
      //     tertiary: "#083890",
      //     secondary: "#0C1B2A",
      //     text1: "#ffff",
      //     text2: "#91B3F6",
      //     text3: "#4F73B8",
      //     gra: {
      //       100: "#1767FF",
      //       200: "#1B4DAC",
      //     },
      //     cardbg: "#12263A",
      //     neutral: "#262626",
      //     "neutral-content": "#f5f5f5",
      //     "base-100": "#ffffff",
      //     "base-300": "#d4d4d4",
      //     "base-content": "#262626",
      //   },
      //   borderRadius: {
      //     selector: "0.5rem",
      //   },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],
        PeydaThin: ["PEYDA-THIN", "cursive"],
        PeydaRegular: ["PEYDA-REGULAR", "cursive"],
        PeydaMedium: ["PEYDA-MEDIUM", "cursive"],
        PeydaBold: ["PEYDA-BOLD", "cursive"],
        PeydaBlack: ["PEYDA-BLACK", "cursive"],
      },
      animation: {
        "reveal-up": "revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal-in": "revealIn 0.6s ease-out forwards",
        "reveal-scale":
          "revealScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        revealIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        revealScale: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
