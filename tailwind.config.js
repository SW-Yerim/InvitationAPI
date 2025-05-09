/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        adelio: ['"Adelio"', "cursive"],
        Apple: ['"Apple"', "cursive"],
        font1: ['"font1"', "cursive"],
        font2: ['"font2"', "cursive"],
        font3: ['"font3"', "cursive"],
        font4: ['"font4"', "cursive"],
        font5: ['"font5"', "cursive"],
      },
      colors: {
        quasi: {
          white: "#FFFFFF",
          light: "#EFEFEE",
          black: "#333333",
          gray: "#666666",
          ivory: "#E5DCCE",
          rose1: "#FFD2D2",
          rose2: "#FAB4B4",
          rose3: "#FF7878",
          blue1: "#BBDEFB",
          blue2: "#90CAF9",
          blue3: "#42A5F5",
          brown1: "#dfd3c3",
          brown2: "#B49884",
          brown3: "#746557",
        },
      },
    },
  },
  plugins: [],
};
