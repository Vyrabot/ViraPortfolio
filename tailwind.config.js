export default {
  content: ["./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "300px",
      md: "850px",
      lg: "990px",
      xl: "1200px",
    },
    extend: {
      colors: {
        Primery: "#1c1c22",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
        servicesBg: "#131317e7",
        success: "#28a745",
      },
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", "sans-serif"],
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "fill-ani": {
          "0%": { width: "0px" },
          "100%": { width: "100%", background: "#00ff99" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        "bounce-slow": "bounce-slow 2s infinite",
        "fill-ani": "fill-ani 1s",
      },
    },
  },
  plugins: [],
};
