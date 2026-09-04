module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Archivo'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0d0c0b",
          900: "#141312",
          800: "#242220",
          600: "#57534e",
        },
        bone: {
          50: "#f7f4ef",
          100: "#efe9e0",
        },
        clay: {
          500: "#bf5b34",
          600: "#a84a29",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        reveal: {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        studio: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
