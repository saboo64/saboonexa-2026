module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake infinite 1s linear",
        type: "type 2.7s ease-out .8s infinite alternate both",
        "type-second": "type-second 2.7s ease-out .8s infinite alternate both",
        cursor: "cursor .6s linear infinite alternate",
      },
      keyframes: {
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        type: {
          "0%": { width: "0ch" },
          "10%": { width: "2ch" },
          " 20%": { width: "4ch" },
          " 30%": { width: "6ch" },
          " 40%": { width: "8ch" },
          " 50%": { width: "10ch" },
          " 60%": { width: "12ch" },
          // ' 70%': { width: '14ch' },
          // ' 80%': { width: '14ch' },
          " 90%,100%": { width: "14ch" },
        },
        "type-second": {
          "0%": { width: "0ch" },
          "10%": { width: "2ch" },
          " 20%": { width: "4ch" },
          " 30%": { width: "6ch" },
          " 40%": { width: "8ch" },
          " 50%": { width: "10ch" },
          " 60%": { width: "12ch" },
          " 70%": { width: "14ch" },
          " 80%": { width: "16ch" },
          " 90%": { width: "18ch" },
          " 100%": { width: "19ch" },
        },
        cursor: {
          "0%": { opacity: "0" },
          " 30%": { opacity: "1" },
          " 60%": { opacity: "0" },
          " 90%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
