/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fight: {
          DEFAULT: "#FDF22B",
          50: "#FFFDE1",
          100: "#FEFCCD",
          200: "#FEFAA4",
          300: "#FEF77C",
          400: "#FDF553",
          500: "#FDF22B",
          600: "#EDE202",
          700: "#B6AD02",
          800: "#7E7801",
          900: "#474301",
        },
        harlequin: {
          DEFAULT: "#3CFF24",
          50: "#DFFFDC",
          100: "#CDFFC7",
          200: "#A9FF9E",
          300: "#85FF76",
          400: "#60FF4D",
          500: "#3CFF24",
          600: "#1AEB00",
          700: "#14B300",
          800: "#0D7B00",
          900: "#074300",
        },
      },
    },
  },
  plugins: [],
};
