/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        lightRedBg: "hsla(0, 100%, 67%,.1)",
        orangeYellow: "hsl(39, 100%, 56%)",
        orangeYellowBg: "hsla(39, 100%, 56%,.1)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealBg: "hsl(166, 100%, 37%,.1)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueBg: "hsl(234, 85%, 45%,.1)",
        lightSlateBlue: "hsl(252, 100%, 67%)", //(background)
        lightRoyalBlue: "hsl(241, 81%, 54%)", //(background)
        violetBlue: "hsla(256, 72%, 46%, 1)", // (circle)
        persianBlue: "hsla(241, 72%, 46%, 0)", // (circle)
        white: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        satisfy: ["Hanken Grotesk", "sans-serif"], // medium-500 bold-700 extra_bold-800
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}
